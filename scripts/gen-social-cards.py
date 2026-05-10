#!/usr/bin/env python3
"""Generate social card PNGs (1200x628) for all playbooks.

Run: python3 scripts/gen-social-cards.py
Outputs: assets/visuals/<pb_id>/social.png
"""
import asyncio, os, textwrap
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).parent.parent
VISUALS = ROOT / "assets" / "visuals"

# Palette
PAPER   = "#F5F0E8"
INK     = "#1C1917"
INK2    = "#57534E"
SEP     = "#D6CFC4"
SIENNA  = "#92400E"
SAGE    = "#4A5E4A"
SLATE   = "#475569"
DANGER  = "#991B1B"

CARDS = [
    {
        "id": "pb_sales-enablement",
        "tag": "Sales enablement",
        "quote": "The rep shouldn't need to search for the right asset.\nThe system should surface it.",
        "sub": "Six functions that turn scattered assets into a working enablement system.",
        "accent": SAGE,
    },
    {
        "id": "pb_messaging-matrix",
        "tag": "Messaging matrix",
        "quote": "The best headline is never obvious\nbefore you see the alternatives.",
        "sub": "A 20-step system from champion to homepage.",
        "accent": SIENNA,
    },
    {
        "id": "pb_narrative-compose",
        "tag": "Narrative compose",
        "quote": "The strategic narrative starts with\na shift in the world. Not your product.",
        "sub": "Eight steps from raw evidence to a canonical narrative file.",
        "accent": SIENNA,
    },
    {
        "id": "pb_competitive-analysis",
        "tag": "Competitive analysis",
        "quote": "CRM codes tell you who.\nProspect interviews tell you why.",
        "sub": "Ten steps from landscape audit to distribution cadence.",
        "accent": DANGER,
    },
    {
        "id": "pb_launch-plan",
        "tag": "Launch plan",
        "quote": "The most common failure mode is treating\nevery launch as T0.",
        "sub": "A four-tier model that matches resources to actual impact.",
        "accent": SLATE,
    },
    {
        "id": "pb_copywriting-mastery",
        "tag": "Copywriting mastery",
        "quote": "Copy cannot create desire.\nIt can only channel desire that already exists.",
        "sub": "From awareness level to proof stack to Ogilvy's ten rules.",
        "accent": SIENNA,
    },
    {
        "id": "pb_lp-cro-rubric",
        "tag": "LP CRO rubric",
        "quote": "If the hero scores 1 on any dimension, block.\nRegardless of the weighted score.",
        "sub": "Seven sections, weighted. Ship or block.",
        "accent": SLATE,
    },
    {
        "id": "pb_mental-models-operating-system",
        "tag": "Mental models OS",
        "quote": "System 2 is too lazy to override System 1\nby willpower alone. The fix is process.",
        "sub": "Five routines from Kahneman and Munger into an operating system.",
        "accent": SLATE,
    },
    {
        "id": "pb_measurement-framework",
        "tag": "Measurement framework",
        "quote": "Reports should arrive before the meetings\nwhere decisions get made.",
        "sub": "A metric constellation sized to your team's data maturity.",
        "accent": SLATE,
    },
    {
        "id": "pb_campaign-strategy",
        "tag": "Campaign strategy",
        "quote": "Run webinars for customers first.\nRepurpose for prospects four weeks later.",
        "sub": "Channel planning, webinar engine, and lifecycle in one system.",
        "accent": SAGE,
    },
    {
        "id": "pb_design-thinking-for-content",
        "tag": "Design thinking",
        "quote": "80% of readers scan.\nDesign for scanners before you design for readers.",
        "sub": "Eight principles for treating every content piece as a design problem.",
        "accent": SLATE,
    },
    {
        "id": "pb_converting-copy-playbook",
        "tag": "Converting copy",
        "quote": "Spend 20% of your writing time on the headline.\nIt carries 80% of the persuasive weight.",
        "sub": "Three passes. Five operators. One copywriting routine.",
        "accent": SIENNA,
    },
    {
        "id": "pb_help-documentation",
        "tag": "Help documentation",
        "quote": "Positioning convinces prospects to buy.\nHelp docs determine whether they succeed.",
        "sub": "A 15-step system from taxonomy design to KCS feedback loops.",
        "accent": SAGE,
    },
    {
        "id": "pb_design-principles",
        "tag": "Design principles",
        "quote": "Design in grayscale first.\nAdd color only after hierarchy works without it.",
        "sub": "Five levers for non-designers producing marketing assets.",
        "accent": SLATE,
    },
    {
        "id": "pb_aeo-relevance-engineering",
        "tag": "AEO relevance engineering",
        "quote": "LLMs cite passages, not pages.\nThe unit of citation is the passage.",
        "sub": "Five steps, five artifacts. Ship AI-ready, not just human-ready.",
        "accent": SLATE,
    },
    {
        "id": "pb_pseo-framework",
        "tag": "pSEO framework",
        "quote": "Human-in-the-loop is the differentiator.\nNot scale.",
        "sub": "The build loop that survived the March 2024 Helpful Content update.",
        "accent": SLATE,
    },
    {
        "id": "pb_llm-wiki",
        "tag": "LLM wiki",
        "quote": "AI agents lose context between sessions.\nA wiki is the fix.",
        "sub": "Four operations: INGEST, QUERY, LINT, INDEX.",
        "accent": SIENNA,
    },
    {
        "id": "pb_synthetic-audience-test",
        "tag": "Synthetic audience test",
        "quote": "If clarity scores below 3, stop.\nThe buyer never reaches the other dimensions.",
        "sub": "A 7-dimension pre-flight test before any live calibration.",
        "accent": SAGE,
    },
    {
        "id": "pb_claim-verify-gate",
        "tag": "Claim verify gate",
        "quote": "A citation is not a verified claim.\nThe cite must contain the value.",
        "sub": "Gate 6 and Gate 7: the substrate-fidelity defense.",
        "accent": DANGER,
    },
    {
        "id": "pb_humanizer",
        "tag": "Humanizer",
        "quote": '"It\'s not X, it\'s Y."\nThe most common AI tell in the wild.',
        "sub": "Eleven detection rule packs. Three-layer rewrite process.",
        "accent": SIENNA,
    },
    {
        "id": "pb_writing-craft",
        "tag": "Writing craft",
        "quote": "If the reader cannot picture it,\nthey will not remember it.",
        "sub": "Three tests for every sentence. Applied to every customer-facing format.",
        "accent": SIENNA,
    },
    {
        "id": "pb_pmm-coaching-framework",
        "tag": "PMM coaching",
        "quote": "5 is average, not bad.\nReserve 8 and above for strong work.",
        "sub": "29 dimensions. Five categories. The Focus-3 system.",
        "accent": SLATE,
    },
]


def card_html(tag: str, quote: str, sub: str, accent: str) -> str:
    # Split quote on explicit newlines for line control
    lines = quote.split("\n")
    line_els = "".join(
        f'<div class="ql">{l}</div>' for l in lines
    )
    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Newsreader:ital,wght@1,700&family=Space+Mono&display=swap" rel="stylesheet">
<style>
* {{ margin:0; padding:0; box-sizing:border-box; }}
body {{ width:1200px; height:628px; background:{PAPER}; overflow:hidden; }}
.card {{
  width:1200px; height:628px;
  background:{PAPER};
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:52px 72px 36px 84px;
}}
.accent {{
  position:absolute;
  left:0; top:0; bottom:0;
  width:6px;
  background:{accent};
}}
.tag {{
  font-family:'Space Mono', monospace;
  font-size:11px;
  font-weight:400;
  letter-spacing:0.13em;
  text-transform:uppercase;
  color:{accent};
  margin-bottom:28px;
}}
.quote {{
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-bottom:8px;
}}
.ql {{
  font-family:'Newsreader', Georgia, serif;
  font-size:52px;
  font-weight:700;
  font-style:italic;
  color:{INK};
  line-height:1.18;
  -webkit-font-smoothing:antialiased;
}}
.sub {{
  font-family:'Inter', system-ui, sans-serif;
  font-size:17px;
  font-weight:400;
  color:{INK2};
  line-height:1.5;
  max-width:780px;
  margin-top:24px;
}}
.footer {{
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-top:1px solid {SEP};
  padding-top:14px;
  font-family:'Space Mono', monospace;
  font-size:10px;
  color:{INK2};
  letter-spacing:0.05em;
}}
</style>
</head>
<body>
<div class="card">
  <div class="accent"></div>
  <div class="tag">{tag}</div>
  <div class="quote">
    {line_els}
    <div class="sub">{sub}</div>
  </div>
  <div class="footer">
    <span>abcodex</span>
    <span>abcodex.iamkesava.com</span>
  </div>
</div>
</body>
</html>"""


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        ctx = await browser.new_context(viewport={"width": 1200, "height": 628})
        page = await ctx.new_page()

        done = 0
        for card in CARDS:
            out_dir = VISUALS / card["id"]
            out_dir.mkdir(parents=True, exist_ok=True)
            out_path = out_dir / "social.png"

            html = card_html(card["tag"], card["quote"], card["sub"], card["accent"])
            await page.set_content(html, wait_until="networkidle")
            await page.screenshot(path=str(out_path), clip={"x": 0, "y": 0, "width": 1200, "height": 628})
            done += 1
            print(f"  [{done}/{len(CARDS)}] {card['id']}")

        await browser.close()
    print(f"\ngen-social-cards: wrote {done} social.png files")


if __name__ == "__main__":
    asyncio.run(main())

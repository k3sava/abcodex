---
id: ins_hitzig-domain-expertise-coding-parity
operator: Zoe Hitzig
operator_role: Research Scientist, Anthropic
co_operators: []
source_url: https://www.anthropic.com/research/claude-code-expertise
source_type: research
source_title: "How different types of people use Claude Code"
source_date: 2026-06-16
captured_date: 2026-07-01
domain: [ai-native, engineering, future-of-work]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 5, transferability: 5, source: 4 }
tier: A
related: [ins_mollick-agent-era-favors-experts, ins_johnston-holtz-agentic-skills-diffusion]
raw_ref: ""
---

# Domain expertise, not coding proficiency, predicts AI coding agent success across every occupation

## Claim
Every major occupation achieves within 7 percentage points of software engineers' verified success rate when using an AI coding agent. Domain expertise in the task at hand predicts success and output volume more strongly than coding background.

## Mechanism
Successful use of a coding agent requires three capabilities: knowing what to build (task specification), recognizing correct output (quality evaluation), and directing recovery when the output is wrong (error correction). These are expertise skills specific to the domain of the task, not coding skills. A lawyer who understands contract law can specify a contract-review coding task with the same precision as an engineer who understands software architecture. Both can evaluate whether the result is correct. Coding proficiency adds nothing when the agent generates the code autonomously.

## Conditions
Holds when: the task can be specified in natural language and the output is evaluable by someone with domain knowledge.
Fails when: the task involves deep programming concepts the user cannot evaluate (debugging a GPU kernel, optimizing a memory allocator), or when the user lacks the domain knowledge to verify correctness of the generated output.

## Evidence
Hitzig, Massenkoff, Lyubich, Zhang, Heller, and McCrory at Anthropic analyzed approximately 400,000 Claude Code sessions from roughly 235,000 users between October 2025 and April 2026. Key findings:

- Novice sessions achieved verified success 15% of the time. Expert sessions achieved 28-33%.
- The biggest gain is between novice and intermediate, not between intermediate and expert.
- Every major occupation in the dataset lands within 7 percentage points of software engineers in verified success rates for code-producing sessions.
- Expert prompts trigger 12 agent actions and 3,200 words of output. Novice prompts trigger 5 actions and 600 words.
- Expert sessions see abandoned-session rates drop from 19% (novice) to 5-7%.

The research concludes: "domain expertise, and not coding proficiency, amplifies effective use of the tool."

## Signals
- Non-developer team members succeed at coding tasks at nearly the same rate as developers when using the same agentic tool.
- The team members who produce the highest-quality agent output are often the deepest domain experts, not the most technically fluent.
- Training investments focused on "how to prompt" produce smaller gains than investments in the underlying domain knowledge itself.

## Counter-evidence
The study examines Claude Code specifically. Tools with less natural-language-oriented interfaces may still advantage coders more. The cross-occupational parity applies to code-producing sessions; deep debugging or architecture review sessions may show larger skill gaps. The novice-expert gap itself (15% to 28-33%) is still substantial, meaning expertise matters significantly. The study covers one six-month window and one model family; generalization to other tools and models requires additional evidence.

## Cross-references
- `ins_mollick-agent-era-favors-experts`: Mollick's synthesis of this research and its implication for who benefits from the chatbot-to-agent shift.
- `ins_johnston-holtz-agentic-skills-diffusion`: complementary evidence from OpenAI's workforce deployment that skills-sharing drives cross-functional agent adoption.

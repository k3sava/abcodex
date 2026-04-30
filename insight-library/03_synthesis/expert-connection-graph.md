# Expert Connection Graph (Discovery Engine)

## Purpose
Use existing experts and insight themes to discover the next high-signal experts in autonomous batches.

## Theme -> experts mapping
- Messaging rigor -> Peep Laja, Anthony Pierri, April Dunford, Andy Raskin
- Category POV -> Christopher Lochhead, April Dunford, Dave Gerhardt
- Zero-click/AEO -> Kevin Indig, Rand Fishkin, Amanda Natividad, Aleyda Solis
- Demand architecture -> Chris Walker, Gaetano DiNardi, Elena Verna
- Enablement systems -> Devin Reed, Mary Shea, Megan Bowen
- ABM and account orchestration -> Sangram Vajre, Trish Bertuzzi
- PLG handoff systems -> Kyle Poyar, Mark Stachowiak
- Async operating design -> Liam Martin, Shreyas Doshi

## Discovery rule
For each active theme:
1. Keep top 3 current experts by source quality score.
2. Add 2 adjacent experts from podcasts/newsletters/interviews.
3. Require at least one measurable workflow pattern per new expert.
4. Promote only if insight has claim + mechanism + measurable signals + OS mapping.

## Batch cadence
- Batch size: 10 experts
- Loop: ingest -> score -> connect -> discover next 10
- Stop condition: manual user stop or domain saturation threshold

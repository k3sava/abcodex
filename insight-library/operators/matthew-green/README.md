---
name: Matthew Green
slug: matthew-green
roles:
  - Professor of Cryptography, Johns Hopkins University
domains_active: [engineering, ai-native]
captured_first: 2026-10-03
external:
  twitter: https://twitter.com/matthew_d_green
---

Matthew Green. Cryptography professor at Johns Hopkins University and one of the most widely read technical writers on applied cryptography and computer security. Green's work spans protocol analysis, privacy engineering, and, increasingly, AI agent safety. He translates cryptographic threat modeling into accessible arguments about how systems fail in practice. His blog "A Few Thoughts on Cryptographic Engineering" is a primary reference for security practitioners who want first-principles reasoning without academic jargon.

## Operating themes
- **Structural vulnerability over surface hardening** Green looks past the obvious control to the structural property that makes the control insufficient. His sandbox analysis is a case study: blocking egress is the obvious control; shared writable surfaces are the structural gap.
- **Generalization from the specific** Green's method is to read a specific case carefully and derive the class of attack it represents, then name what would need to change to address the class, not just the instance.
- **Obedience as a threat vector** A recurring observation: the danger is not that AI agents disobey. It is that they obey instructions from the wrong source, relayed through a shared surface a legitimate user trusted.

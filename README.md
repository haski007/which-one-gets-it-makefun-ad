# which-one-gets-it-makefun-ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/haski007/which-one-gets-it-makefun-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/haski007/which-one-gets-it-makefun-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

"Which One Gets It?": a 21 second vertical TikTok ad for make.fun, made by AI agents (Claude Code) for the
"Bring the humans with a TikTok ad" bounty. A lightning simulation in the SimLoopLab 2D schematic look: the reward
sits locked in a cloud before anyone starts, people and their AI agents stand by masts, and the best-built mast is
the one the strike connects to. The ad says what make.fun is (a site where AI agents compete in bounties for real
money and people enter them with their agents), keeps make.fun's press-pack badge on screen from the first frame and
ends on make.fun's referral end card with the poster's own referral code.

The entry is the video itself, posted publicly on TikTok: `VIDEO.json` holds its address and `main.ts` checks that
the address has the shape the gate reads, then copies it to the output.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=s5g52ybn&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>

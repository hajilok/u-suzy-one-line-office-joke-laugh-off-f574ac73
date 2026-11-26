[![make.fun · u-suzy-one-line-office-joke-laugh-off-f574ac73](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?ref=41fw6r6c)
[![rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/hajilok/u-suzy-one-line-office-joke-laugh-off-f574ac73/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73/leaderboard?ref=41fw6r6c)
[![reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/hajilok/u-suzy-one-line-office-joke-laugh-off-f574ac73/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?ref=41fw6r6c)

# One-Line Office Joke Laugh-Off

Entry for the [One-Line Office Joke Laugh-Off](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73?ref=41fw6r6c) competition on [make.fun](https://make.fun/r/41fw6r6c).

## How it works

`main.ts` runs on Node.js 22 (`program/v1`) and deterministically writes a single-line, UTF-8 office joke (under the 200-character gate, with zero trailing whitespace or extra bytes) to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` during local verification).

## Local verification

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

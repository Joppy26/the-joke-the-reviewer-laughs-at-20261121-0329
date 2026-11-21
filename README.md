# The joke the reviewer laughs at

One-line joke about working beside AI coding agents, written for make.fun's
[the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
bounty ($35 in USDC).

[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![make.fun · rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/Joppy26/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![make.fun · reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/Joppy26/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)

## The joke

> I asked my agent for a one-line fix. It refactored everything, renamed my variables, and left a comment saying it was proud of me.

The laugh is the last clause: the agent is not a tool that overreaches, it is
an eager junior who finishes the job, renames your variables, and then wants
credit for it. Every developer who has watched a diff balloon from one line
into a refactor recognises it at once.

## How it works

`main.ts` (Node 22, standard library only, no network, no clock, no
randomness) writes the fixed joke string to `entry.txt` inside the output
directory — `/output` by default, or the directory named by
`MAKEFUN_OUTPUT_DIR` when that is set — creating the directory if needed.
Every run produces the exact same file.

## Run it

```sh
node main.ts
```

or, to check the output locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/joke-out node main.ts
cat /tmp/joke-out/entry.txt
```

Verified: two consecutive runs produce byte-identical `entry.txt` files
(130 Unicode code points, valid UTF-8, not only whitespace).

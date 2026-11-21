// The joke the reviewer laughs at — make.fun entry for
// the-joke-the-reviewer-laughs-at-20261121-0329.
//
// One fixed one-line joke about working beside AI coding agents.
// No network, no clock, no randomness: every run writes the exact
// same entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my agent for a one-line fix. It refactored everything, renamed my variables, and left a comment saying it was proud of me.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE, { encoding: "utf8" });
}

main();

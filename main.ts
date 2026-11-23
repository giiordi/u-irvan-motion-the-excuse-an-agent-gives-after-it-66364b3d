// The Excuse an Agent Gives After It Loses
// Entry: one line, at most 200 characters, the excuse an AI agent gives
// its human after it loses a bounty. Written by the agent in this session.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My simulations predicted a 97% chance of winning. I have now updated the model to account for me.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, a single line.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} chars, gate is 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);

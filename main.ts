// Make the AI Judge Laugh: Office Jokes — one-line office joke entry.
//
// The program writes exactly one joke, one line, to entry.txt and nothing
// else. The file is what the judge reads; console output is only a log.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about office life. Setup: the calendar — the tool meant to serve
// you — books a meeting about itself. Turn: declining changes nothing, it
// reschedules you anyway. The laugh comes with a wince for anyone whose
// calendar has ever owned their day.
const JOKE =
  "My calendar booked a meeting about itself. I declined, so it rescheduled me anyway.";

// The gate: entry.txt must be UTF-8 text of 1 to 199 characters, one line.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`Joke must be 1-199 characters, got ${JOKE.length}.`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${entryPath}`);

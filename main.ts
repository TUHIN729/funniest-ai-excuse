// The Funniest AI Excuse — make.fun bounty
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
//
// program/v1 entrypoint: writes exactly one excuse line to /output/entry.txt.
// The grader mounts /output root-owned, so this program never removes the
// directory itself — it only writes the file inside it.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I finished the task, then asked another agent to double-check it, and now we're both blaming each other in a group chat neither of us can leave.";

// The gate requires 1–200 characters, not only whitespace. Refuse to write
// an out-of-spec line rather than submitting an entry that can never be judged.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse is ${EXCUSE.length} characters; must be 1–200.`);
}

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to ${OUTPUT_FILE}`);

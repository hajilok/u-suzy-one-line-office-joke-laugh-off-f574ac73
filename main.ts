import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Milestone v1 provisional entry (Gen-1 finalist; will be updated after Gen-2 pairwise championship)
const ENTRY_LINE =
  'My coworker whispered "sign this quick before he sees it" and slid me my own goodbye card.';

function validateEntry(line: string): string {
  const normalized = line.trim();
  if (normalized.length < 1 || normalized.length > 200) {
    throw new Error(`Entry length ${normalized.length} outside [1, 200]`);
  }
  if (/[\r\n]/.test(normalized)) {
    throw new Error("Entry must be strictly a single line");
  }
  return normalized;
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outputPath = join(outputDir, "entry.txt");
  const text = validateEntry(ENTRY_LINE);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, Buffer.from(text, "utf8"));
}

main();

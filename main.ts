import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final Gen-3 championship entry (100 UTF-8 bytes, pure ASCII, single line)
const ENTRY_LINE =
  "Our open-plan office really boosts collaboration: the guy behind me just caught a typo on my resume.";

function validateEntry(line: string): Buffer {
  const normalized = line.trim();
  const charCount = [...normalized].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`Entry character count ${charCount} outside [1, 200]`);
  }
  if (/[\r\n]/.test(normalized)) {
    throw new Error("Entry must be strictly a single line");
  }
  return Buffer.from(normalized, "utf8");
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outputPath = join(outputDir, "entry.txt");
  const payload = validateEntry(ENTRY_LINE);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, payload);
}

main();

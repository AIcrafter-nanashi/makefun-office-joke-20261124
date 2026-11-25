import fs from 'fs';
import path from 'path';

const joke = "Finance: no ticket, no refund. Me: the barrier kept it. Finance: then get that in writing.";

const outputDir = process.env.MAKEFUN_TEST_OUTPUT || '/output';
const outputPath = path.join(outputDir, 'entry.txt');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, joke, 'utf8');
console.log(`✓ Output written to ${outputPath}`);
console.log(`Length: ${joke.length} characters`);
console.log(`\nJoke: ${joke}`);

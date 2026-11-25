import * as fs from 'node:fs';
import * as path from 'node:path';

function main() {
  const srcUrl = new URL('./entry.txt', import.meta.url);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(outDir, { recursive: true });

  const targetPath = path.join(outDir, 'entry.txt');
  fs.copyFileSync(srcUrl, targetPath);
}

main();

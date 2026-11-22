// bring-the-humans-03 entry (Node 22, standard library only, no network). The entry is the TikTok video named in
// VIDEO.json: "Which One Gets It?", a 21 s 9:16 ad for make.fun drawn as a SimLoopLab 2D lightning simulation, with
// make.fun's press-pack badge from the first frame and its referral end card with the poster's own code at the end.
// This program only checks that VIDEO.json names a TikTok video the way the gate reads it, then copies it to /output.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate wants https://www.tiktok.com/@<handle>/video/<id> (also m.tiktok.com), id digits only: no short links, no photo posts.
const VIDEO_URL = /^https:\/\/(?:www\.|m\.)?tiktok\.com\/@[A-Za-z0-9._]+\/video\/\d+$/;

let url = '';
try {
  url = String(JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')).url ?? '').trim();
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (!VIDEO_URL.test(url)) {
  // A vm./vt. short link or tiktok.com/t/ link names no video until opened: say so instead of the generic message.
  const hint = /(?:^|\/\/)(?:vm|vt)\.tiktok\.com|tiktok\.com\/t\//.test(url)
    ? ' (a short link: open it in a browser and copy the https://www.tiktok.com/@<handle>/video/<id> address it lands on)'
    : '';
  console.error(`VIDEO.json url is not a TikTok video address: ${url}${hint}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
console.log(`entry video: ${url}`);

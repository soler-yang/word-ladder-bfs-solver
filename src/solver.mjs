import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const WORDS = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../data/enable2k-4letter.json'), 'utf8')
);
const WORD_SET = new Set(WORDS);

const BUCKETS = new Map();
for (const w of WORDS) {
  for (let i = 0; i < 4; i++) {
    const pattern = w.slice(0, i) + '*' + w.slice(i + 1);
    let list = BUCKETS.get(pattern);
    if (!list) { list = []; BUCKETS.set(pattern, list); }
    list.push(w);
  }
}

export function solveShortestLadder(startRaw, targetRaw) {
  const start = String(startRaw).trim().toLowerCase();
  const target = String(targetRaw).trim().toLowerCase();
  if (!WORD_SET.has(start) || !WORD_SET.has(target)) return null;
  if (start === target) return [start];
  const parent = new Map([[start, null]]);
  const queue = [start];
  for (let head = 0; head < queue.length; head++) {
    const cur = queue[head];
    for (let i = 0; i < 4; i++) {
      const neighbors = BUCKETS.get(cur.slice(0, i) + '*' + cur.slice(i + 1)) || [];
      for (const next of neighbors) {
        if (parent.has(next)) continue;
        parent.set(next, cur);
        if (next === target) {
          const path = [];
          for (let node = target; node !== null; node = parent.get(node)) path.push(node.toUpperCase());
          return path.reverse();
        }
        queue.push(next);
      }
    }
  }
  return null;
}

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const WORDS = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../data/enable2k-4letter.json'), 'utf8')
);
const WORD_SET = new Set(WORDS);

const BUCKETS = new Map();
for (const w of WORDS) {
  for (let i = 0; i < w.length; i++) {
    const pattern = w.slice(0, i) + '*' + w.slice(i + 1);
    let list = BUCKETS.get(pattern);
    if (!list) { list = []; BUCKETS.set(pattern, list); }
    list.push(w);
  }
}

function neighborsOf(word) {
  const out = [];
  for (let i = 0; i < word.length; i++) {
    const list = BUCKETS.get(word.slice(0, i) + '*' + word.slice(i + 1)) || [];
    for (const next of list) {
      if (next !== word) out.push(next);
    }
  }
  return out;
}

export function solveShortestLadder(startRaw, targetRaw) {
  const start = String(startRaw).trim().toLowerCase();
  const target = String(targetRaw).trim().toLowerCase();
  if (!WORD_SET.has(start) || !WORD_SET.has(target) || start.length !== target.length) return null;
  if (start === target) return [start.toUpperCase()];
  const parent = new Map([[start, null]]);
  const queue = [start];
  for (let head = 0; head < queue.length; head++) {
    const cur = queue[head];
    for (const next of neighborsOf(cur)) {
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
  return null;
}

export function solveExactStepLadder(startRaw, targetRaw, exactSteps) {
  const start = String(startRaw).trim().toLowerCase();
  const target = String(targetRaw).trim().toLowerCase();
  if (!WORD_SET.has(start) || !WORD_SET.has(target) || start.length !== target.length) return null;
  if (!Number.isInteger(exactSteps) || exactSteps < 1 || exactSteps > 8) return null;

  // Compute reverse BFS distance from target for pruning
  const distToTarget = new Map([[target, 0]]);
  const q = [target];
  for (let h = 0; h < q.length; h++) {
    const cur = q[h];
    const d = distToTarget.get(cur);
    if (d >= exactSteps) continue;
    for (const prev of neighborsOf(cur)) {
      if (!distToTarget.has(prev)) {
        distToTarget.set(prev, d + 1);
        q.push(prev);
      }
    }
  }
  if (!distToTarget.has(start) || distToTarget.get(start) > exactSteps) return null;

  const used = new Set([start]);
  const path = [start.toUpperCase()];
  let expansions = 0;

  function dfs(cur, remaining) {
    if (++expansions > 60000) return false;
    if (remaining === 0) return cur === target;
    const candidates = neighborsOf(cur).filter((next) => {
      if (used.has(next)) return false;
      const d = distToTarget.get(next);
      return d !== undefined && d <= remaining - 1;
    });
    candidates.sort((a, b) => distToTarget.get(a) - distToTarget.get(b));
    for (const next of candidates) {
      used.add(next);
      path.push(next.toUpperCase());
      if (dfs(next, remaining - 1)) return true;
      path.pop();
      used.delete(next);
    }
    return false;
  }

  return dfs(start, exactSteps) ? path : null;
}

export function traceBfsWavefront(startRaw, targetRaw) {
  const start = String(startRaw).trim().toLowerCase();
  const target = String(targetRaw).trim().toLowerCase();
  if (!WORD_SET.has(start) || !WORD_SET.has(target) || start.length !== target.length) return null;
  const depth = new Map([[start, 0]]);
  const layers = [[start.toUpperCase()]];
  const queue = [start];
  for (let h = 0; h < queue.length; h++) {
    const cur = queue[h];
    const d = depth.get(cur);
    if (cur === target) break;
    for (const next of neighborsOf(cur)) {
      if (depth.has(next)) continue;
      depth.set(next, d + 1);
      if (!layers[d + 1]) layers[d + 1] = [];
      layers[d + 1].push(next.toUpperCase());
      queue.push(next);
      if (next === target) {
        return { totalVisited: depth.size, layers };
      }
    }
  }
  return depth.has(target) ? { totalVisited: depth.size, layers } : null;
}

#!/usr/bin/env node
import { solveShortestLadder, WORDS } from '../src/solver.mjs';

const [start, target] = process.argv.slice(2);
if (!start || !target) {
  console.log(`Loaded ${WORDS.length} 4-letter ENABLE2K words. Usage: node bin/solve-ladder.mjs COLD WARM`);
  process.exit(0);
}
const route = solveShortestLadder(start, target);
if (!route) {
  console.error(`No valid 4-letter word ladder found between ${start.toUpperCase()} and ${target.toUpperCase()}.`);
  process.exit(1);
}
console.log(`Shortest path (${route.length - 1} moves): ${route.join(' -> ')}`);

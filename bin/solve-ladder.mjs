#!/usr/bin/env node
import { solveExactStepLadder, solveShortestLadder, traceBfsWavefront, WORDS } from '../src/solver.mjs';

const args = process.argv.slice(2);
const positional = [];
let exactSteps = null;
let showTrace = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--steps' && args[i + 1]) {
    exactSteps = Number.parseInt(args[++i], 10);
  } else if (args[i] === '--trace') {
    showTrace = true;
  } else if (!args[i].startsWith('-')) {
    positional.push(args[i]);
  }
}

const [start, target] = positional;
if (!start || !target) {
  console.log(
    `Loaded ${WORDS.length} 4-letter ENABLE2K words (52,068 3-7 letter words online at https://getwordladder.com/word-ladder-solver).\n` +
    `Usage: node bin/solve-ladder.mjs COLD WARM [--steps 5] [--trace]`
  );
  process.exit(0);
}

const route = exactSteps !== null
  ? solveExactStepLadder(start, target, exactSteps)
  : solveShortestLadder(start, target);

if (!route) {
  const modeLabel = exactSteps !== null ? `exact ${exactSteps}-move` : 'shortest';
  console.error(`No valid ${modeLabel} 4-letter word ladder found between ${start.toUpperCase()} and ${target.toUpperCase()}.`);
  process.exit(1);
}

const prefix = exactSteps !== null ? `Exact ${exactSteps}-move path` : `Shortest path (${route.length - 1} moves)`;
console.log(`${prefix}: ${route.join(' -> ')}`);

if (showTrace) {
  const trace = traceBfsWavefront(start, target);
  if (trace) {
    console.log(`BFS wavefront (${trace.totalVisited} visited nodes across ${trace.layers.length - 1} layers):`);
    trace.layers.forEach((layer, idx) => {
      const sample = layer.slice(0, 8).join(', ') + (layer.length > 8 ? `, +${layer.length - 8} more` : '');
      console.log(`  d=${idx} (${layer.length} node${layer.length === 1 ? '' : 's'}): ${sample}`);
    });
  }
}

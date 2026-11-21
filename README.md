# 4-Letter Word Ladder BFS Solver (ENABLE2K)

Zero-dependency JavaScript Breadth-First Search (BFS) shortest-path solver over **3,920 four-letter English words** from the public-domain ENABLE2K lexicon, using `O(L)` wildcard bucket indexing (`*OLD`, `C*LD`, `CO*D`, `COL*`).

Built alongside **[Word Ladder Game (getwordladder.com)](https://getwordladder.com/)**.

## Play & Explore Online

- **[Word Ladder Game — Daily & Unlimited 4-Letter Puzzles](https://getwordladder.com/)** — Free browser Word Ladder with familiar-word hints and zero move limits.
- **[Interactive 4-Letter Word Ladder Solver](https://getwordladder.com/word-ladder-solver)** — Compare true mathematical shortest routes against everyday-vocabulary routes side by side.
- **[Word Chain Game (Daily 10-Link & Endless Bot Duel)](https://getwordladder.com/word-chain)** — Link words from last letter to first letter in your browser.
- **[24 Classic Word Ladder Examples & Printable Worksheet](https://getwordladder.com/word-ladder-examples)** — Graded 3-step to 7-step Lewis Carroll *Doublets* with verified solutions.
- **[Word List & Graph Connectivity Analysis](https://getwordladder.com/word-list)** — Degree distribution, isolated four-letter words, and hub analysis.

## CLI & Library Usage

```bash
node bin/solve-ladder.mjs COLD WARM
# Shortest path (4 moves): COLD -> CORD -> CARD -> WARD -> WARM

node bin/solve-ladder.mjs SLOW FAST
# Shortest path (6 moves): SLOW -> FLOW -> FLAW -> FLAT -> FIAT -> FIST -> FAST
```

## License

Code released under the [MIT License](LICENSE). ENABLE2K word list by Alan Beale and Mendel Cooper is in the public domain.

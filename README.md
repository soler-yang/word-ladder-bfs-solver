# 4-Letter Word Ladder BFS Solver (ENABLE2K)

Zero-dependency JavaScript Breadth-First Search (BFS) shortest-path solver over **3,920 four-letter English words** from the public-domain ENABLE2K lexicon, using `O(L)` wildcard bucket indexing (`*OLD`, `C*LD`, `CO*D`, `COL*`).

Built alongside **[Word Ladder Game (getwordladder.com)](https://getwordladder.com/)**.

## Play, Solve & Print Online

- **[Word Ladder Game — Daily & Unlimited 4-Letter Puzzles](https://getwordladder.com/)** — Free browser Word Ladder with clickable 3D birch tiles, familiar-word hints, daily streaks, and spoiler-free sharing.
- **[Interactive 4-Letter Word Ladder Solver & Blind Custom Challenge Builder](https://getwordladder.com/word-ladder-solver)** — Compute both mathematical shortest routes and 698-word everyday routes, or launch a spoiler-free custom ladder challenge (`?start=HEAD&target=TAIL&play=1`).
- **[Word Chain Game (79,648-Word 4–8 Letter ENABLE2K Edition)](https://getwordladder.com/word-chain)** — Daily 10-Link (NY schedule) and Endless Bot Duel across 4–8 letter English words.
- **[CC0 Printable Classroom Doublets Worksheet Generator](https://getwordladder.com/doublets-word-ladder-worksheets)** — Generate graded 6-, 8-, or 12-puzzle Lewis Carroll *Doublets* PDF handouts with Page-2 teacher answer keys.
- **[Word-Graph Strategy Guides Library](https://getwordladder.com/guides)** — Verified graph analyses covering [4-Letter Words With X & Z](https://getwordladder.com/4-letter-words-with-x-and-z) (`22` `-X` words, `20` `-Z` words, unique `X-` word `XYST`), [4-Letter Words With J & Q](https://getwordladder.com/4-letter-words-with-j-and-q) (`QATS` / `QAID` / `QOPH`), [Word Chain Trap Examples](https://getwordladder.com/word-chain-examples), [24 Classic Word Ladder Examples](https://getwordladder.com/word-ladder-examples), and [Full Word List & 64 Isolated Aloof Words](https://getwordladder.com/word-list).

## Verified Graph Metrics (`3,920` 4-Letter ENABLE2K Nodes)

| Metric | Verified Value | Reference |
| --- | :---: | --- |
| Total accepted 4-letter nodes | `3,920` | [Word List & Acceptance Rules](https://getwordladder.com/word-list) |
| Everyday familiar hint pool | `698` | [How to Play Word Ladder](https://getwordladder.com/how-to-play) |
| Curated fixed puzzle catalog | `240` | [Word Ladder Game](https://getwordladder.com/) |
| Degree-0 isolated ("aloof") words | `64` | `AQUA`, `AWOL`, `EXAM`, `LYNX`, etc. |
| 4-letter words ending in `-X` / `-Z` | `22` / `20` | [4-Letter Words With X & Z](https://getwordladder.com/4-letter-words-with-x-and-z) |
| Companion 4–8 letter Word Chain lexicon | `79,648` | [enable2k-word-chain-graph](https://github.com/soler-yang/enable2k-word-chain-graph) |

## CLI & Library Usage

```bash
node bin/solve-ladder.mjs COLD WARM
# Shortest path (4 moves): COLD -> CORD -> CARD -> WARD -> WARM

node bin/solve-ladder.mjs HEAD TAIL
# Shortest path (4 moves): HEAD -> HEAL -> HEIL -> HAIL -> TAIL

node bin/solve-ladder.mjs SLOW FAST
# Shortest path (6 moves): SLOW -> FLOW -> FLAW -> FLAT -> FIAT -> FIST -> FAST
```

## License

Code released under the [MIT License](LICENSE). ENABLE2K word list by Alan Beale and Mendel Cooper is in the public domain.

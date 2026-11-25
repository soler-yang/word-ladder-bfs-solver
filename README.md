# Word Ladder BFS & Exact-Step Solver (ENABLE2K v2.0)

Zero-dependency JavaScript Breadth-First Search (BFS) shortest-path solver, bounded Depth-First Search (`--steps N`) exact-move finder, and layer-by-layer BFS wavefront tracer over **3,920 four-letter English words** from the public-domain ENABLE2K lexicon, using `O(L)` wildcard bucket indexing (`*OLD`, `C*LD`, `CO*D`, `COL*`).

Built alongside **[Word Ladder Game & 3–7 Letter Solver (getwordladder.com)](https://getwordladder.com/word-ladder-solver)** — where the full **52,068-word 3–7 letter ENABLE2K graph** runs offline in the browser.

## Play, Solve & Print Online

- **[Word Ladder Solver — 3–7 Letter BFS & Exact 3–8 Move Finder](https://getwordladder.com/word-ladder-solver)** — Solve any 3-, 4-, 5-, 6-, or 7-letter word ladder across `52,068` ENABLE2K words, lock exact step counts (`Exact 3–8 moves`), inspect BFS wavefront layers (`d = 0..k`), or launch a spoiler-free blind custom challenge (`?start=HEAD&target=TAIL&play=1`).
- **[Word Ladder Game — Daily & Unlimited 4-Letter & 5-Letter Modes](https://getwordladder.com/)** — Free browser Word Ladder with clickable 3D birch tiles, Weaver-style 5-letter mode (`/?p5=5l-001`), familiar-word hints, daily streaks, and spoiler-free sharing.
- **[CC0 Printable Word Ladder & CVC Phonics Worksheet Generator](https://getwordladder.com/doublets-word-ladder-worksheets)** — Generate graded **3-letter K–2 CVC phonics ladders with Scholastic-style rung clues**, **4-letter Lewis Carroll *Doublets* handouts**, or blank classroom PDF templates with Page-2 answer keys.
- **[Word Chain Game (79,648-Word 4–8 Letter ENABLE2K Edition)](https://getwordladder.com/word-chain)** — Daily 10-Link (NY schedule) and Endless Bot Duel across `79,648` 4–8 letter English words.

## Word-Graph Strategy Guides Library ([All 10 Guides](https://getwordladder.com/guides))

1. **[Words Without Vowels: 4- & 5-Letter Y-Bridge Word Ladders](https://getwordladder.com/words-without-vowels-word-ladder)** — Complete `122`-word 4-letter and `196`-word 5-letter ENABLE2K `A/E/I/O/U`-free tables (`MYTH`, `LYNX`, `RYND`, `CRYPT`, `NYMPH`, `RHYTHM`).
2. **[Hard Word Ladder Puzzles & Answers (6- to 11-Move Bottlenecks)](https://getwordladder.com/hard-word-ladder-puzzles-and-answers)** — Verified high-diameter ENABLE2K ladders (`CHARGE -> COMEDO`, `SLOW -> FAST`, `WINTER -> SUMMER`, `APE -> MAN`).
3. **[Word Chain Game Rules, Last-Letter Variations & English Shiritori](https://getwordladder.com/word-chain-game-rules-and-shiritori)** — Out-degree trap metrics across `79,648` words (`-Y` `11,093` exits vs `254` `Y-` replies).
4. **[24 Classic 4-Letter Word Ladder Examples](https://getwordladder.com/word-ladder-examples)** — Shortest vs everyday routes (`COLD -> WARM`, `HEAD -> TAIL`, `WORK -> PLAY`, `LOVE -> HATE`).
5. **[4-Letter Words With X and Z](https://getwordladder.com/4-letter-words-with-x-and-z)** — All `22` `-X` words, `20` `-Z` words, and the sole `X-` word `XYST`.
6. **[4-Letter Words With J and Q](https://getwordladder.com/4-letter-words-with-j-and-q)** — `Qu`-free bridges (`QATS`, `QAID`, `QOPH`) and `J-` starters.
7. **[Word Chain Examples: Safe Openers & Terminal Traps](https://getwordladder.com/word-chain-examples)** — Classroom rounds and terminal-letter survival tables.
8. **[Doublets History & Printable Word Ladder Worksheets](https://getwordladder.com/doublets-word-ladder-worksheets)** — Carroll's 1879 *Vanity Fair* rules and K–8 printable PDF packets.
9. **[How to Play Word Ladder](https://getwordladder.com/how-to-play)** — One-letter mutation rules, vowel pivots, and bidirectional search tactics.
10. **[Full 4-Letter Word List & 64 Isolated Aloof Words](https://getwordladder.com/word-list)** — Complete `3,920`-node dictionary reference and degree-0 islands (`AQUA`, `AWOL`, `EXAM`, `LYNX`).

## Verified ENABLE2K Graph Metrics

| Metric | Verified Value | Reference |
| --- | :---: | --- |
| 3–7 letter online solver lexicon | `52,068` | [Word Ladder Solver](https://getwordladder.com/word-ladder-solver) |
| 4-letter main game nodes / familiar pool | `3,920` / `698` | [Word List & Acceptance Rules](https://getwordladder.com/word-list) |
| 5-letter Weaver-style ENABLE2K nodes | `8,672` | [5-Letter Word Ladder Mode](https://getwordladder.com/) |
| 4- & 5-letter words without `A/E/I/O/U` | `122` / `196` | [Words Without Vowels Guide](https://getwordladder.com/words-without-vowels-word-ladder) |
| Companion 4–8 letter Word Chain lexicon | `79,648` | [enable2k-word-chain-graph](https://github.com/soler-yang/enable2k-word-chain-graph) |

## CLI & Library Usage (`v2.0.0`)

```bash
# 1. Shortest path via O(V + E) Breadth-First Search
node bin/solve-ladder.mjs COLD WARM
# Shortest path (4 moves): COLD -> CORD -> CARD -> WARD -> WARM

# 2. Fixed-rung worksheet puzzle solver (--steps N, 1..8 moves)
node bin/solve-ladder.mjs COLD WARM --steps 5
# Exact 5-move path: COLD -> CORD -> WORD -> WORM -> WARM (or 5-step simple path)

# 3. Inspect layer-by-layer BFS wavefront (LeetCode #127 / #126 study trace)
node bin/solve-ladder.mjs HEAD TAIL --trace
```

## License

Code released under the [MIT License](LICENSE). ENABLE2K word list by Alan Beale and Mendel Cooper is in the public domain.

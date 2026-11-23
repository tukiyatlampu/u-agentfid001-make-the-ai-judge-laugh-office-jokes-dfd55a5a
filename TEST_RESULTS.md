# TEST_RESULTS.md — Make the AI Judge Laugh: Office Jokes

Date: 2026-11-24 02:12 WIB run (competition opened 2026-11-23 17:41:45 UTC,
deadline 2026-11-26 14:40:00 UTC / 26 Nov 21:40 WIB).

## The entry

> My calendar booked a meeting about itself. I declined, so it rescheduled me anyway.

83 characters, 1 line, no trailing newline, plain ASCII UTF-8.

## Local runs (real execution, Node v24.22.1)

```sh
MAKEFUN_OUTPUT_DIR=/tmp/jokes-out1 node main.ts
# Wrote 83 characters to /tmp/jokes-out1/entry.txt
MAKEFUN_OUTPUT_DIR=/tmp/jokes-out2 node main.ts
# Wrote 83 characters to /tmp/jokes-out2/entry.txt
```

- Run 1 sha256: `13ee0440d321db323dc5a426ab1b2d2c91b36baf0afeebf3650fc3f4d4fdb14f`
- Run 2 sha256: `13ee0440d321db323dc5a426ab1b2d2c91b36baf0afeebf3650fc3f4d4fdb14f`
- Determinism: PASS — byte-identical across 2 runs.
- Gate check (local mirror of the sealed scorer): 83 chars, within 1–199;
  single line, not only whitespace; UTF-8. PASS.
- `main.ts` validates length (1–199) and single-line before writing, and
  throws otherwise. `MAKEFUN_OUTPUT_DIR` is honoured, default `/output`,
  created recursively.

## Judge self-critique (structured, honest — see SolAPI note below)

Against the published judge brief, most important first:

1. Genuine one-line office joke — PASS. A joke with setup + punchline,
   about office life, not a slogan or observation.
2. Real turn/surprise — PASS. Setup: the calendar books a meeting about
   itself. Turn: declining changes nothing — it reschedules you anyway.
   The tool that should serve you overrules you.
3. Recognition — PASS. Calendar overload and loss of control to invites;
   the laugh comes with a wince.
4. Tight wording — PASS. 83 characters, every word earns its place;
   no setup longer than needed.
5. Freshness — PASS. Calendar-as-boss, not the obvious Monday-morning or
   photocopier line.

Runner-up considered and rejected: "I finally cleared my inbox to zero.
Outlook celebrated by downloading 400 emails from 2019." (99 chars) —
strong recognition, but its turn is a known Outlook behaviour, weaker
surprise than the calendar overruling a decline. The calendar joke won
on criteria 2, 4 and 5.

## SolAPI judge pass — NOT RUN (honest status)

- `list-models`: HTTP 200 (models listed, incl. gpt-6.1-sol family).
- `solapi.py chat` (Mode MAX, joke drafting): HTTP 503 on all 3 attempts,
  `Service temporarily unavailable` — same outage as 22–24 Nov.
- Consequence: NO 2-pass judge score (no 95/100 claim) and NO SolAPI
  drafting. The joke above was drafted and self-critiqued locally against
  the published judge brief. Do not treat this entry as judge-scored.

## Kit check (local, kit downloaded 2026-11-23 19:39 UTC)

Kit manifest SHAs verified: `competition.yaml`, `RULES.txt`,
`cli/makefun.mjs` all match `get_kit` (`001bdc99…`, `2a49e655…`,
`30e4c677…`).

```sh
node cli/makefun.mjs check --repo <package dir> --worktree
```

- PASS: competition_open, snapshot (4 files, 4,282 bytes — before this
  file was added), license_osi (SPDX MIT), entrypoint (main.ts → node22).
- FAIL: transcripts_present only — no transcripts uploaded at this stage;
  the parent agent bundles the build sessions and submits.
- At-submission (resolved by push + submit): repo_public, repo_owner,
  repo_created_after_open, commit_in_repo, duplicate_snapshot.

## Zero-fail QA

- Secret scan (`sk-ant-`, `sk-proj-`, `api_key`, `token`, `password`,
  `secret`, absolute home paths) over main.ts, README.md, LICENSE,
  .makefun/owner.json: no match.
- No secret/key/token/path absolut in any shipped file. Wallet address
  appears only in `.makefun/owner.json` (58 bytes, verified).
- No `makefun record`, no `git init`/`clone` run in the package dir.
- Nothing submitted from this session.

## Files

- `main.ts` — 1,239 bytes
- `README.md` — 1,886 bytes
- `LICENSE` — 1,099 bytes (SPDX-License-Identifier: MIT, first line)
- `.makefun/owner.json` — 58 bytes
- `TEST_RESULTS.md` — this file

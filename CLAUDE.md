# Personal Portfolio Site — Project Instructions

Faisal's personal portfolio. Phase 2 of his 2026 career roadmap.

Full project documentation lives in the FaisalOS vault at
`D:\Knowledge\FaisalOS\FaisalOS\04 Projects\Personal Portfolio Site\`.
Read the handoff and design direction notes there before substantial work.

## Read first

1. `04 Projects/Personal Portfolio Site/Handoff 2026-08-01 - Portfolio Mockups.md`
2. `04 Projects/Personal Portfolio Site/Portfolio Design Direction.md`
3. `03 Career/Professional Claims and Boundaries.md` — mandatory before writing any copy about Faisal.

## Current state

`mockup-c-quiet.html` is the **approved** design and the reference implementation. A single self-contained file: fixed sidebar, nine JavaScript-switched views, caption that updates per view.

`mockup-a-casework.html` and `mockup-b-specsheet.html` are **superseded**. Keep them; do not develop them.

Nothing is under version control. Nothing is deployed.

## Stack — non-negotiable

- Plain HTML, CSS, and vanilla JavaScript.
- **No framework. No build step. No npm. No CDN. No bundler.**
- The only permitted addition is a **self-hosted** font file.
- Static output, deployable to GitHub Pages, Cloudflare Pages, or Netlify.

If a task seems to require a dependency, stop and ask rather than adding one.

## Design rules — settled, do not change

The layout is approved. Faisal will change theme, colour, typeface, copy, and imagery himself. **Do not "improve" the structure while doing so.**

**Never reintroduce:**

- Cards, rules, borders, shadows, or rounded containers around content
- Gradients, mesh gradients, blobs, glassmorphism, backdrop blur
- Bento grids
- Typing or terminal animations
- Emoji as section icons
- Broad fade-in-on-scroll

Their absence *is* the design. Removing every rule and border is what distinguished the approved direction from the two Faisal rejected.

**Layout constants:**

- Sidebar `15.5rem` fixed; main `margin-left: 15.5rem`
- Collapse at `60rem` — sidebar becomes static, nav horizontal, caption hidden
- Measure: 30ch for statements, 52ch for body prose

## Motion rules — settled

From the `emil-design-eng` skill.

| Interaction | Treatment |
|---|---|
| Nav hover | colour only, `120ms ease` |
| View change | `opacity` + `translateY(6px)`, `220ms cubic-bezier(0.23,1,0.32,1)` |
| Any entrance | never from `scale(0)`; start at `0.95` with opacity |
| Easing | `ease-out` for enter/exit. **Never `ease-in`.** |
| Duration | 300ms ceiling for any UI animation |
| Hover | must be inside `@media (hover:hover) and (pointer:fine)` |
| Reduced motion | all animation and transition disabled |

Animate `transform` and `opacity` only. Never `transition: all`.

## Accessibility floor

- WCAG 2.1 AA contrast: 4.5:1 body, 3:1 large text.
- `--muted #9A9A9A` on white is near the floor — **re-measure** after any palette change, do not assume.
- Semantic HTML. Keyboard navigable. Visible focus states.
- Works at 375px and 1440px.

## Content rules — these are positioning, not style

Read `03 Career/Professional Claims and Boundaries.md` first.

- **Confidentiality is absolute.** No client name, no ministry, no site detail, no topology, no camera credentials, no scale figure presented as deployed. The flagship project runs on a restricted operational deployment.
- **Do not inflate.** Roughly one year professional AI/data-science experience as of June 2026. Never present course learning as production experience.
- **Preserve deliberate honesty.** The 0.76–0.88 accuracy spread, the `applied` versus `labs` credential marking, and the "this is not a production system" line about the ticket classifier are all intentional. Do not smooth them out.
- **No invented metrics, dates, or outcomes.** Ever.

## Environment

- Windows, PowerShell, VS Code. Use Windows-compatible paths and commands.
- Open HTML files directly in a browser; no server needed.

## Git

Not yet initialised. When it is: inspect `git status` before editing, never run destructive operations, and do not commit or push unless asked.

## Definition of done

A task is complete when the outcome is delivered, no dependency was added, the motion and accessibility rules hold, the design rules were not violated, confidentiality is intact, and what was and was not verified is stated plainly.

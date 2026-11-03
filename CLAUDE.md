# Topoi — project brief

Brand: **Topoi** (τόποι, "places": in Aristotle's Rhetoric, the places a speaker goes to find an argument).
The brand name is one constant (`BRAND`) in `build.js`.

A public website that explains product marketing frameworks, one page per framework, each with an
animated diagram that builds the framework up step by step. Owner: Ilia Paraskevopoulos
(B2B product marketer, Basel; site will sit under his brand, iliaparaskevopoulos.com).

## Status
30 pages drawn across all 11 categories (see `content/` and `_catalog.js`). The home page has a
hero animation that draws a rotating set of frameworks (the `HERO` list in build.js) one after
another, using the same engine as the pages. Next: batches of 15 by category.

## Decisions so far
- **Animations are code, not video**: SVG drawn by `src/engine.js`. Light, sharp, readable by
  search engines, steppable (play / pause / back / next / click a step), and easy to edit.
- **Shapes are reusable**. Every framework's diagram is data in `content/<slug>.js` (`diagram.type`).
  Built renderers: `matrix` (2×2), `bell` (adoption curve + chasm), `chain` (ordered components),
  `funnel`, `vpc` (Value Proposition Canvas), `forces` (centre + four sides), `chart` (generic
  axes, curves, bands, markers, arrows: Kano, Van Westendorp, and later Hype Cycle, PLC, strategy
  canvas, Product Lifecycle), `house` (messaging house), `cycle` (flywheel), `pyramid` (split
  levels + side labels), `acronym` (letter checklist with status: MEDDIC, BANT, SPIN),
  `venn4` (four overlapping circles: PESO), `tree` (positioned boxes with elbow connectors: OST).
  `rings` (concentric, outermost first, notes aligned on the right: Golden Circle, Whole Product,
  TAM SAM SOM), `statement` (fill-in sentence: job stories, positioning statement), `tiers`
  (rising columns: Good-Better-Best, launch tiers); `cycle` now takes any number of segments.
  Planned: ladder, canvas grid (Business Model Canvas,
  Lean Canvas, Empathy Map), bow-tie, double diamond.
- **Category icons**: simple 24px line icons, one per category, defined in `ICONS` in build.js and
  referenced by `icon` in `_catalog.js`. Shown in the category list, category headings and page crumbs.
- **Step model**: every SVG group has `data-step="n"`. Groups up to the current step are shown;
  the current step's areas get the yellow highlighter fill. Step n in the diagram = `steps[n-1]`
  in the content file (title, general text, worked-example text).
- **General / Worked example toggle**: diagram labels and captions switch between generic wording
  and the example (`text` / `ex` in the diagram spec, `text` / `example` in steps).
- **Six fictional example companies** in `content/_cast.js`, so readers find an industry close to
  theirs: Arvena (life sciences, plant-based capsules), Lumora Diagnostics (rapid blood-test reader
  for GPs), Kontor (fintech, invoice financing for SMEs), Orto Foods (processed food, chilled ready
  meals), Halden Minerals (raw materials, high-purity silica sand), Nordhaus Home (retail, 35
  home-goods stores). Each page sets `company`; spread pages evenly across the cast. Always
  labelled fictional.
- **Page template** (same for every framework): intro (name, one-liner, origin), player,
  the question it answers, when to use it, when to skip it, how to run it, worked example,
  common mistakes, copyable template, sources, related frameworks, plus an "at a glance" sidebar.
- **Writing**: plain, direct, sentence case, no hype. Explanations are original wording; credit
  originators in `origin` and `sources`. Don't reproduce book text or copy proprietary artwork.
- **Build**: zero-dependency Node static generator (`node build.js` → `docs/`, which GitHub Pages serves). Could move to
  Astro later if we need MDX, search or a CMS; not needed yet.
- **Hosting**: GitHub Pages, live at https://iliaparaskevopoulos.github.io/topoi/. Source lives on
  `main` (with the built site in `docs/`); Pages serves the `gh-pages` branch, which holds only
  the built files. To publish a change: edit, run `node build.js`, commit and push `main`, then
  run `./publish.sh`, which pushes `docs/` to `gh-pages`. A custom domain can be added later in
  the repository's Pages settings.

## Design tokens (src/site.css)
Byzantine purple brand: purple pen for arrows, annotations, links, icons and filled controls;
mosaic gold as the highlighter for the step being explained; graph-paper "drawing sheet" for
diagrams. Paper #F2F0F4, sheet #FFFFFF, ink #1F1724 (aubergine black), graphite #62586A,
pen #702963 (Byzantine purple), pen-deep #4E1A44, tint #F1E8F0, core #E5D3E3, highlighter
#F3D27A, soft gold #FAEBC2. Type: Familjen Grotesk (UI, headings, diagrams), Literata (body
text). Avoid all-caps labels, generic card grids and decorative motion: the diagram animation
is the one memorable thing.

## How to add a framework
1. Copy a content file in `content/` with the closest shape and rename it to the new slug.
2. Fill every field, including `company`; keep diagram labels short (they must fit the shapes).
3. In `content/_catalog.js`, replace the framework's plain-text entry with `{ slug: '<slug>', was: '<old text>' }`.
   `was` lets other pages' `related` lists that still use the old name link to the new page.
   The build fails if a page is missing from the catalog or the catalog points at a missing page.
4. `node build.js`, then screenshot-check the page (Playwright is handy) in general and
   example mode, at desktop and 390px width. Check that nothing overlaps.
5. New shape? Add a renderer to `R` in `src/engine.js` that tags groups with `data-step`.

## Master list (original 12-category version; the live list is content/_catalog.js)
1. Customer and market understanding — JTBD, ODI/Job Map, Forces of Progress, Value Proposition
   Canvas, Empathy Map, 5 Rings of Buying Insight, ICP, buying committee mapping, Kano, journey map,
   VoC, win/loss, TAM/SAM/SOM, STP, laddering, Sean Ellis test, Superhuman PMF engine,
   PMF Pyramid, Smallest Viable Audience.
2. Strategy and competitive analysis — SWOT/TOWS, PESTLE, Five Forces, Generic Strategies, Ansoff,
   BCG, GE–McKinsey, Three Horizons, Blue Ocean + ERRC, Value Disciplines, 7 Powers, Playing to Win,
   Strategy Kernel, Wardley Mapping, Business Model Canvas / Lean Canvas, perceptual map,
   battlecard, CI cycle.
3. Positioning — Obviously Awesome, Moore positioning statement, Ries & Trout, Onlyness statement,
   Category Design, Whole Product, Kotler five product levels, Crossing the Chasm, Diffusion of
   Innovations.
4. Messaging and narrative — messaging house, message hierarchy, Strategic Narrative, Sales Pitch,
   StoryBrand SB7, Golden Circle, B2B Elements of Value, FAB, benefit ladder, value prop formula,
   Five Levels of Awareness, SUCCESs, AIDA/PAS/BAB/4Ps/Pain-Claim-Gain, Why now/change/us/pay.
5. Brand — CBBE pyramid, Brand Identity Prism, Brand Key, archetypes, brand architecture.
6. Pricing and packaging — Van Westendorp, Gabor-Granger, conjoint/MaxDiff, EVC, value-based
   pricing, Leaders/Fillers/Killers, Good-Better-Best, value metric, pricing models, price
   waterfall, decoy/anchoring.
7. Go-to-market and launch — GTM canvas, launch tiers, T-minus plan, beachhead / 24 steps,
   bowling alley, 4Ps/7Ps/4Cs/SAVE, GTM motions, ABM tiers, Bullseye, PLC, Hype Cycle,
   Pragmatic Framework, PR/FAQ, RACI/DACI.
8. Sales enablement — battlecards, MEDDIC/MEDDPICC, BANT/CHAMP/ANUM, SPIN, Challenger,
   Command of the Message, Solution/Sandler/Value selling, Gartner buying jobs,
   Feel-Felt-Found/LAER, content-to-stage mapping, Kirkpatrick.
9. Funnel, lifecycle and growth — AARRR, TOFU/MOFU/BOFU, See-Think-Do-Care, bow-tie, demand
   waterfall, flywheel, growth loops, Customer Value Journey, Consumer Decision Journey, Messy
   Middle, Hook Model, Fogg, North Star, HEART, NPS/CSAT/CES.
10. Brand vs. demand effectiveness — How Brands Grow, 95-5 rule, 60/40 (Binet & Field).
11. Content and channels — Hub-Hero-Hygiene, topic clusters, They Ask You Answer, PESO, COPE,
    Content Marketing Matrix, atomization.
12. Planning, prioritization and measurement — SOSTAC, RACE, OKRs/SMART, RICE/ICE, MoSCoW,
    Opportunity Solution Tree, Build-Measure-Learn, Double Diamond, Stage-Gate, attribution models.

## Next steps
- Ilia reviews the pilot (look, animation pace, copy, Arvena examples).
- Then: build the remaining renderers and fill categories in batches.
- Then: deploy to his own domain; consider adding search and category filters once there are 30+ pages.

# Topoi — project brief

Brand: **Topoi** (τόποι, "places": in Aristotle's Rhetoric, the places a speaker goes to find an argument).
The brand name is one constant (`BRAND`) in `build.js`.

A public website that explains product marketing frameworks, one page per framework, each with an
animated diagram that builds the framework up step by step. Owner: Ilia Paraskevopoulos
(B2B product marketer, Basel; site will sit under his brand, iliaparaskevopoulos.com).

## Status
Complete: 93 pages in 10 categories, every catalogue entry drawn. The home page hero animation
draws a rotating set of frameworks (the `HERO` list in build.js).

## Scope rule (decided by Ilia)
Practical product marketing tools: research, competitive analysis, positioning, messaging, brand,
pricing and packaging, launch and go-to-market, sales enablement, adoption and growth, and content.
Ilia asked to keep the Brand category (including Brand Archetypes) and the Content category.
Left out on purpose: the Golden Circle (psychology, not a practical tool), the Hook and Fogg
behaviour models, generic management and planning tools (OKRs, SMART, SOSTAC, RACE, RICE, MoSCoW),
product-development methods (Opportunity Solution Tree, Double Diamond, Stage-Gate) and pure
copywriting formulas (AIDA, PAS, Before-After-Bridge). Apply the same rule to new additions.

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
  `bowtie` (bow-tie model). `chain` takes up to 8 nodes (4 per row above 6).
  Possible later: ladder, canvas grid (Business Model Canvas,
  Lean Canvas, Empathy Map), bow-tie, double diamond.
- **Logo: Seal.** A plain Byzantine purple disc (#702963) with a gold Greek τ, the first letter of
  τόποι. No ring or dots (Ilia's call). Files in `src/brand/` (favicon.svg, favicon-32.png, apple-touch-icon.png,
  icon-512.png), copied to `docs/assets/` by the build and used as the tab icon and in the header.
- **Content files**: a file in `content/` may export one framework or an array of them
  (the new pages live in `batch-*.js` files by category).
- **Category icons**: simple 24px line icons, one per category, defined in `ICONS` in build.js and
  referenced by `icon` in `_catalog.js`. Shown in the category list, category headings and page crumbs.
- **Step model**: every SVG group has `data-step="n"`. Groups up to the current step are shown;
  the current step's areas get the yellow highlighter fill. Step n in the diagram = `steps[n-1]`
  in the content file (title, general text, worked-example text).
- **General / Worked example toggle**: diagram labels and captions switch between generic wording
  and the example (`text` / `ex` in the diagram spec, `text` / `example` in steps).
- **Six fictional example companies** in `content/_cast.js`, so readers find an industry close to
  theirs: Tessera (B2B SaaS, equipment-maintenance software for mid-size manufacturers; replaced
  Arvena, which is no longer used anywhere), Lumora Diagnostics (rapid blood-test reader
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
3. In `content/_catalog.js`, add `{ slug: '<slug>', was: '<old name>' }` to the right category.
   `was` lets other pages' `related` lists that still use the old name link to the new page.
   The build fails if a page is missing from the catalog or the catalog points at a missing page.
4. `node build.js`, then screenshot-check the page (Playwright is handy) in general and
   example mode, at desktop and 390px width. Check that nothing overlaps.
5. New shape? Add a renderer to `R` in `src/engine.js` that tags groups with `data-step`.

## Next steps
- Ilia reviews the full library.
- Possible: search and category filters, a custom domain, a full logo kit and mini brand guideline.

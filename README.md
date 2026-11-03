# Topoi

Product marketing frameworks, drawn one step at a time. Each framework has an animated diagram you can play, pause and step through, a worked B2B example from a fictional company, and a template you can copy.

Live site: https://iliaparaskevopoulos.github.io/topoi/

By [Ilia Paraskevopoulos](https://iliaparaskevopoulos.com).

## How it works

- `content/` holds one file per framework, plus `_catalog.js` (the full library map) and `_cast.js` (the fictional example companies).
- `src/engine.js` draws the diagrams and runs the step player; `src/site.css` is the design.
- `node build.js` writes the finished site to `docs/`, which GitHub Pages serves. No dependencies needed.

See `CLAUDE.md` for design decisions and how to add a framework.

#!/bin/sh
# Rebuild the site and publish docs/ to the gh-pages branch that GitHub Pages serves.
set -e
node build.js
git push origin "$(git subtree split --prefix docs HEAD)":refs/heads/gh-pages --force
echo "Published: https://iliaparaskevopoulos.github.io/topoi/"

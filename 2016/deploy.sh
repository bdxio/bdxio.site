#!/bin/bash

# Build the content of the website into dist-build folder
rm -rf dist
webpack --config webpack/webpack.build.js --NODE_ENV=production

# Cloning master branch (GH PAGES) into gh-pages folder
git clone -b master git@github.com:bdxio/bdxio.github.io.git gh-pages/
cd gh-pages

# Move dist-build into gh-pages/2016 folder (temporarly)
cp -fR ../dist/* 2016/

# Add new resources
git add 2016

if [ $(git ls-files --deleted | wc -l) -ne 0 ]; then git ls-files --deleted | sed -e 's/^/"/g' -e 's/$/"/g' | xargs git rm; fi;
git commit -m "Auto-deploy - dist - 2016"

# Pushing to master branch, which is sync-ed with www.bdx.io ... only if there are more than 10 files in current directory
if [ $(ls -al | wc -l) -ge 10 ]; then git push origin master; else echo "Avoiding any push since there is an empty dist/ dir"; fi;
cd ..

# Clean generated folders
rm -rf gh-pages
rm -rf dist


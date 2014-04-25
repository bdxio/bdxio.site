#!/bin/bash -x

# Ensuring npm & bower deps are installed
npm install
./node_modules/.bin/bower install

# Cleaning dist directory
rm -Rf dist/
mkdir dist

# Cloning master branch into dist directory
git clone -b master git@github.com:bdxio/bdxio.github.io.git dist/

# Removing every files in order to not keep removed files
# during commit coming later
cd dist/
git rm -r *
cd ..

# Generating dist/
grunt build

# Checking in dist/
cd dist
git add .
git commit -m "Auto-deploy"

# Pushing to master branch, which is sync-ed with www.bdx.io
git push origin master
cd ..

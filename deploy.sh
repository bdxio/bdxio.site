#!/bin/bash -x

# Ensuring npm & bower deps are installed
npm install
./node_modules/.bin/bower install

# Cleaning dist directory
rm -Rf dist/
mkdir dist

# Cloning master branch into dist directory
git clone -b master git@github.com:bdxio/bdxio.github.io.git dist/

# Generating dist/
./node_modules/.bin/grunt build

# Checking in dist/
cd dist
# Adding files, removing missing files (including files with spaces as well)
git add .
git rm $(git ls-files --deleted | sed -e 's/^/"/g' -e 's/$/"/g')
git commit -m "Auto-deploy"

# Pushing to master branch, which is sync-ed with www.bdx.io
git push origin master
cd ..

#!/bin/bash -x

npm install
./node_modules/.bin/bower install

rm -Rf dist/
mkdir dist
git clone -b master git@github.com:bdxio/bdxio.github.io.git dist/

grunt build

cd dist
git add .
git commit -m "Auto-deploy"
git push origin master
cd ..

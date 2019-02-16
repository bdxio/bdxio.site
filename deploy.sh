#!/bin/bash

#####################################################################
#
# This script is used to deploy the bdx.io website to GitHub Pages.
# Basically it :
#   - clones the bdxio.github.io repository in the dist folder
#   - removes everything in the dist folder not related to git
#   - build the website
#   - commit everything generated in the dist folder
#   - push the dist folder to the branch served by GitHub Pages
#
#####################################################################

GH_PAGES_BRANCH="master"

# Reset
RCol='\033[0m'       # Text Reset

# Regular Colors
Bla='\033[0;30m';
Red='\033[0;31m';
Gre='\033[0;32m';
Yel='\033[0;33m';
Blu='\033[0;34m';
Pur='\033[0;35m';
Cya='\033[0;36m';
Whi='\033[0;37m';

echo -e "${Yel}------------"
echo -e " DEPLOYING"
echo -e "------------ ${RCol}"

echo -e "* Prepare : ${Gre}(1/5)${RCol}"
rm -rf dist
# Clone GH_PAGES branch into dist folder
git clone -b ${GH_PAGES_BRANCH} git@github.com:bdxio/bdxio.github.io.git dist/
cd dist || exit 1
# Remove all non git related files
ls | grep -v -E ".git" | xargs rm -rf
cd ..

# Build app
echo -e "* Build : ${Gre}(2/5)${RCol}"
npm run build

# Add new resources
cd dist
git add .

echo -e "* Commit : ${Gre}(3/5)${RCol}"
git commit -m "Auto-deploy - dist - 2018"

echo -e "* Push to ${Yel}${ENV}${RCol}: ${Gre}(4/5)${RCol}"
# Pushing to GH_PAGES branch, which serves BDX I/O
git push origin ${GH_PAGES_BRANCH}
cd ..

# Clean generated folders
echo -e "* Clean : ${Gre}(5/5)${RCol}"
#rm -rf dist

echo
echo '----------------------------------------------------------'
echo -e "Deployed to : ${Cya}https://bdx.io${RCol}"
echo '----------------------------------------------------------'

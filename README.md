# BDX.io website

### Pre-requisites

You need `node`, `npm` to be installed on your machine. That's all.

### Installation

You need to install all dependencies `npm i`.

### Developing

`npm start` serves the app on [http://localhost:3000]

### Deploying website

** Make sure to have run `npm i` previously otherwise the build phase will fail and you'll end up deleting all the content from the master branch. **

First you need to be able to use GitHub using SSH.  
If this is not the case follow this guide to setup your GitHub SSH key : https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/

Then you just have to run the deploy script : `./deploy.sh`

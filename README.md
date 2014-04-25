BDX.io website
=======

### Pre-requisites

You need `node`, `npm`, `Ruby` and `compass` (`gem install compass`) to be installed on your machine. That's all.

### Developing

If not already done, create an alias in your `.bashrc` file with :
```
alias npm-exec='PATH=$(npm bin):$PATH'
```
This will allow to execute node modules installed in your local project repository.

Then, clone the repository, and don't forget to use the `dev` branch.

Once done, simply run `npm install && npm-exec bower install` only once, this will provision needed dependencies to make it
work.

Once done, you can start a webserver which will handle every assets by running `grunt serve`

### Deploying website

To deploy it to production, you have 2 options :
- The simplest one : simply merge your `dev` branch changes to the `prod` branch
  A Cloudbees jenkins job will watch for changes on the `prod` branch and build things for you then push it to `master`
  branch which is the 'production' minified site for www.bdx.io website.
  Sweet isn't it ? :-)
- The "manual" way : simply execute the `deploy.sh` script which will generate optimized minified website
  then push it to `master` branch which is the 'production' minified site for www.bdx.io website.

# BDX I/O Website

Project architecture is based on [angular-typescript-webpack](https://github.com/brechtbilliet/angular-typescript-webpack) project
Stack is based on Angular 1 + Typescript + Webpack build with Karma and wallaby tests support.
And this all with sourcemaps in production support!!

### Install

```sh
npm install
npm start
```

Then it will automatically open the app in your browser

To run tests

```sh
npm test
```

Coverage

```sh
open reports/coverage/index.html
```

Build
```sh
npm install
typings install
npm run build
```

### Deploy (requires write access to the repository)

```sh
./deploy.sh
```


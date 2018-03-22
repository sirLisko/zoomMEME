# ZoomMEME 👀

[![Codeship Status for sirLisko/zoomMEME](https://app.codeship.com/projects/f4b2de90-ca2c-0135-fb17-220ec81ae16b/status?branch=master)](https://app.codeship.com/projects/261756) [![codecov](https://codecov.io/gh/sirLisko/zoomMEME/branch/master/graph/badge.svg)](https://codecov.io/gh/sirLisko/zoomMEME)

> [https://zoomme.me](https://zoomme.me) - Super simple zoom meme generator.

![image](example.jpeg)

## Build

To install all the dependencies:

```bash
  $ yarn

  // or

  $ npm install
```

To re-build the solution:

```bash
  $ npm run build
```

## Under the hood

- compile the JS files using [webpack 3.x](https://webpack.github.io/) and [babel](https://babeljs.io)
- check the syntax of the JS, according to [StandardJS](http://standardjs.com/) (via [ESLint](http://eslint.org/))
- unit tests with [Jest](https://facebook.github.io/jest/)
- code coverage with [codecov](https://codecov.io)
- Continuous Integration via [Codeship](https://codeship.com)
- service workers, pre-cache and offline via [sw-toolbox](https://googlechrome.github.io/sw-toolbox/)

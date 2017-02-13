# Cities Searching Map

# Technologies
In this project I use:

* [React](https://github.com/facebook/react)
* [Material-ui] (http://www.material-ui.com/#/) Google Material Design for React
* [Leaflet] (http://leafletjs.com/) for building interactive map
* [Google Map API] (https://developers.google.com/maps/documentation/javascript/?hl=fr) for access Google Places API
* [Babel v6](http://babeljs.io/) to transpile ES6+
* [Webpack](http://webpack.github.io/) for bundling
* [Webpack-dev-server](https://github.com/webpack/webpack-dev-server) for serving
* [babel-preset-react-hmre](https://github.com/danmartinez101/babel-preset-react-hmre) (react-hot-reload for babel v6 - thanks to [react-transform-hmr](https://github.com/gaearon/react-transform-hmr))
* [Redux](https://github.com/reactjs/redux) for state management
* [Redux-Promise](https://github.com/pburtchaell/redux-promise-middleware)
* [Redux-Logger](https://github.com/evgenyrodionov/redux-logger) for logging Redux store
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) please watch [Dan Abramov about Time Travel at React-Europe](https://www.youtube.com/watch?v=xsSnOQynTHs)
* [style-loader](https://github.com/webpack/style-loader), [css-loader](https://github.com/webpack-contrib/css-loader)
* [styled-components](https://styled-components.com/) for writting actual CSS code to style your components, same author as [CSS-Modules](https://github.com/css-modules/css-modules)
* [Mocha](https://mochajs.org/) / [Chai](http://chaijs.com/) Test framework / Assertion Library
* [Enzyme](http://airbnb.io/enzyme/) Testing utilities for React from Airbnb, a wrapper of [React Addons Test Utils](https://facebook.github.io/react/docs/test-utils.html)
* [Jsdom](https://github.com/tmpvar/jsdom) A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.js
* [Eslint](http://eslint.org/) (with [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
* [Flow](https://flowtype.org/) for adding static typing to JavaScript

Some of the features above at the time of developement are experimental and so I don't separate DEV or PROD mode. Some implementation could be done in [Angular](https://angular.io/) and [d3](https://d3js.org/).

# Setup

####Install

It is preferable to have [Yarn](https://yarnpkg.com/fr/) installed.
To install the web app dependencies:

```shell
git clone https://github.com/trungutt/map-country.git
cd map-country
npm install
```

or 

```shell
yarn
```

####Run

Use 

```shell
npm run start
```

or 

```shell
yarn start
```

The project is on [http://localhost:8080/](http://localhost:8080/)

####Test

Use 

```shell
npm run test
```

or 

```shell
yarn test
```

####Eslint

Use

```shell
npm run lint
```

or 

```shell
yarn lint
```

####Typecheck

Use

```shell
npm run typecheck
```

or 

```shell
yarn typecheck
```

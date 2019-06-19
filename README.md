# @nuxtjs/package-discovery

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Package discovery automatically

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `@nuxtjs/package-discovery` dependency with `yarn` or `npm` to your project
2. Add `@nuxtjs/package-discovery` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/package-discovery',

    // With options
    ['@nuxtjs/package-discovery', { /* module options */ }]
  ]
}
```

## Configuration

### `exclude` (optional)

- Type: `array`
- Default: `[]`

The `exclude` parameter is an array to exclude packages to be discovered

### `filter` (optional)

- Type: `function`
- Default: `undefined`

If `filter` option is set as a function, all packages will be filtered through it

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Ricardo Gobbo de Souza <ricardogobbosouza@yahoo.com.br>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/package-discovery.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/package-discovery

[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/package-discovery/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/package-discovery

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/package-discovery.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/package-discovery

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/package-discovery.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/package-discovery

[david-dm-src]: https://david-dm.org/nuxt-community/package-discovery/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/nuxt-community/package-discovery

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

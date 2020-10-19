# gatsby-plugin-vwo

Plugin to add [VWO](https://vwo.com) to your Gatsby site

## Install

```sh
yarn add gatsby-plugin-vwo
```

## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-vwo`,
    options: {
      accountId: '...',
      async: false // Defaults to `true`
    },
  },
],
```

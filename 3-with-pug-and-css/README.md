## Single-file component example with Pug and Vue

This is our Vue web app using plain Vue single-file components, which are built
using webpack. In this folder, we add to our webpack config to have vue-loader
support logic for working with Pug and CSS, using loaders that get applied to
Vue files through `VueLoaderPlugin`.

To try this app, run `yarn build` to bundle the `.vue` single-file components
into `dist/main.js`, which the browser can read.

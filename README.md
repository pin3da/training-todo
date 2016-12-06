# training-todo

**Work in progress**

> Little web app to keep track of problems I want to solve
>
> You can add, edit, or archive problems with no cost (:

This app works 100% in the client side, it can work offline and all it needs
is access to the `localStorage` provided by your browser.

*warning: For this reason the data will not be preserved if you are using it in private mode or similar*


## Features (in progress)

- [x] Persistence via LocalStorate
- [ ] Offline
- [ ] Use markdown and LaTeX to render notes


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/user/blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/user/blog/src/pages/404.js"))),
  "component---src-pages-components-list-item-tsx": hot(preferDefault(require("/Users/user/blog/src/pages/components/listItem.tsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/user/blog/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/user/blog/src/pages/page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/user/blog/src/pages/using-typescript.tsx")))
}


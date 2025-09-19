---
id: overview
title: API Overview
slug: /api
---

## Setting up Eta

Eta is exported as a class, so you must instantiate it before using it:

```js
import { Eta } from "eta"
const eta = new Eta(options)
```

In Node ESM, resolve paths with `import.meta.dirname` (Node 20.11+):

```js
import path from "node:path"

const eta = new Eta({ views: path.join(import.meta.dirname, "templates") })
```

Note: `import.meta.dirname` requires Node 20.11+.

Passing in options is optional. You can find a list of all options [here](api/configuration). Most users will need to pass in the `views` option, which is the path to your templates directory.

```js
const eta = new Eta({ views: path.join(import.meta.dirname, "templates") })
```

Other common options include:

- `debug`: Enables pretty-printing of runtime errors. Defaults to `false`.
- `cache`: Whether to cache templates. Defaults to `false`.
- `autoEscape`: Whether to automatically escape HTML in templates. Defaults to `true`.

## Rendering Template Files

### Synchronously

To render a template, use the `render` method:

```js
const res = eta.render("templateName", { name: "Ben" })
```

The first argument is the name of the template, and the second argument is the data to pass to the template. The template name is relative to the `views` option passed in when instantiating Eta.

If you want to used named templates without resolving from the filesystem, name your templates with a leading `@`. Eta won't attempt to resolve those templates from the filesystem, and will instead look for them in the cache.
## Using Eta in the browser

Import the browser-friendly core build:

```html
<script type="module">
  import { Eta } from "eta/core"
  const eta = new Eta()
  document.body.innerHTML = eta.renderString("Hello <%= it.name %>", { name: "Ben" })
</script>
```

### Asynchronously

To render a template asynchronously, use the `renderAsync` method:

```js
const res = await eta.renderAsync("templateName", { name: "Ben" })
```

The `renderAsync` method returns a promise, so you must use `await` or `.then` to get the result.

## Rendering Strings

You can render a string as a template using the `renderString` method:

```js
const res = eta.renderString("Hello <%= it.name %>", { name: "Ben" })
```

Or render a string asynchronously using the `renderStringAsync` method:

```js
const res = eta.renderStringAsync("Hello <%= await it.someFunction() %>", {
  someFunction: () => Promise.resolve("Ben")
})
```

## Defining Templates Programmatically

To define a template programmatically, use `loadTemplate`:

```js
const headerPartial = `
  <header>
    <h1><%= it.title %></h1>
  </header>
`

eta.loadTemplate("@header", headerPartial)
```

If your template isn't a file in the views directory, you must name it with a leading `@` so that Eta knows not to resolve it from the filesystem.

The third argument to `loadTemplate` is an object of type `{async: boolean}` describing whether the template is async or not. By default, Eta will assume that the template is synchronous.

## Common Use Cases

### Custom Tags

You can change Eta's default tags by using the `tags` option:

```js
const eta = new Eta({ tags: ["{{", "}}"] })
```

### Auto-filtering Data

You can automatically filter all values by passing them through your own filter function:

```js
const eta = new Eta({
  autoFilter: true,
  filterFunction: (val) => {
    if (typeof val === "string") {
      return val.toUpperCase()
    }
    return val
  }
})
```

### Getting rid of `it`

By default, Eta will store all data in the `it` variable. You can customize the name of this variable by using the `varName` option:

```js
const eta = new Eta({ varName: "data" })

// "Hi <%= data.name %>"
```

If you want to get rid of `it` entirely, you can use the `useWith` option:

```js
const eta = new Eta({ useWith: true })
// "Hi <%= name %>"
```

This is generally considered to be bad practice, as it can lead to naming collisions / poor performance.

A better approach is to use the `functionHeader` configuration option:

```js
const eta = new Eta({
  functionHeader: "const name=it.name, age=it.age"
})
// "Hi <%= name %>, our records show you are <%= age %> years old"
```

or if you want behavior similar to `useWith` but with better performance (still has naming collisions), then you can do something like this:

```js
const eta = new Eta({
  functionHeader: "Object.entries({...it}||{}).forEach(([k,v])=>globalThis[k]=v)"
})
// "Hi <%= name %>"
```

### Customizing file handling

You can customize how Eta reads files by extending the Eta class and overriding the `readFile` and `resolvePath` methods:

```js
class CustomEta extends Eta {
  readFile = function (...) {...}

  resolvePath = function (...) {...}
}
```

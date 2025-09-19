---
id: async
title: Async Support
---

Basically, you can use `async` and `await` in your templates as long as you configure Eta to be in async mode. Remember: if you're in async mode and are working with partials, you need to `await include(...)`!

## Example

```js
function asyncFunc() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("HI FROM ASYNC")
    }, 20)
  })
}

let result = await Eta.render(
  "<%= it.name %>: <%= await it.asyncFunc() %>",
  { name: "Ada Lovelace", asyncFunc: asyncFunc },
  { async: true }
)
// 'Ada Lovelace: HI FROM ASYNC'
```

## Special Functions

There are also two functions, `renderAsync` and `renderFileAsync` which are the equivalents of their respective functions with builtin `async` support.

### Example

```js
function asyncFunc() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("HI FROM ASYNC")
    }, 20)
  })
}

let result = await Eta.renderAsync(
  "<%= it.name %>: <%= await it.asyncFunc() %>",
  { name: "Ada Lovelace", asyncFunc }
)
```
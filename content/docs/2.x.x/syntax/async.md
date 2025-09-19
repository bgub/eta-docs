---
id: async
title: Async Templates
---

Eta supports optional async support using the `async` and `await` keywords (to support ES5 and lower, use a plugin or transpiler).

## Basic Syntax

Essentially, you can use `await` just like in regular JavaScript.

## Example

```js
function asyncFunc() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('HI FROM ASYNC')
    }, 20)
  })
}

let result = await Eta.render(
  '<%= it.name %>: <%= await it.asyncFunc() %>',
  { name: 'Ada Lovelace', asyncFunc: asyncFunc },
  { async: true }
)
// 'Ada Lovelace: HI FROM ASYNC'
```

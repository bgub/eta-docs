---
id: rendering
title: Rendering
---

Rendering a template compiles a template and then calls it with the data you pass to it.

## Syntax

[TypeDoc doc page](https://eta-dev.github.io/eta/modules/_render_.html#render)

## Example

```js
var myTemplate = 'Hi, my name is <%= it.name %>'
Eta.render(myTemplate, { name: 'Johnny Appleseed' })

// Returns "Hi, my name is Johnny Appleseed"
```

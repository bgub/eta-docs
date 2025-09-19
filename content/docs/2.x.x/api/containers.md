---
id: containers
title: Containers
---

Templates are stored in a storage object (internally exposed as `Cacher`).

## Syntax

[TypeDoc doc page](https://eta-dev.github.io/dev/classes/_storage_.cacher.html)

## TL;DR

To get a cache item, call `[cache].get('name')`. To define a cache item, run `[cache].define('name', value)`. To load an entire cache object, run `[cache].load(cacheObj)`. To reset a cache, run `[cache].clear()`.

## Examples

```js
Eta.templates.define('my-partial', Eta.compile('This is a partial speaking'))

console.log(Eta.templates.get('my-partial'))

Eta.templates.clear()
```

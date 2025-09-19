---
id: templates-partials
title: Templates & Partials
---

Templates and partials are both stored in one object (exposed as `Eta.templates`).

## Loading templates / partials

If you just call `render` or `compile` with `name` or `filename` in options, Eta will load your template.

## Defining Partials

```js
Eta.templates.define("my-partial", Eta.compile("This is a partial speaking"))

Eta.render('... <%~ include("my-partial") %>', {})
// ... This is a partial speaking

// To call a partial w/ data:
Eta.templates.define("my-partial-2", Eta.compile("Name: <%= it.name %>"))
Eta.render(
  '... <%~ include("my-partial-2", {name: it.name}) %>',
  // The 2nd argument passed to `include` is the data. You could also pass `it` to forward all data
  { name: "Ben" }
)
// ... Name: Ben
```

---
id: helpers
title: Helpers
---

Eta provides several built-in helper functions available inside templates.

## output()

The `output()` function appends a string directly to the template output. This is useful inside loops or conditionals where you want to write output from JavaScript code:

```js
<% for (const item of it.items) {
  output("<li>" + item + "</li>")
} %>
```

## capture()

The `capture()` function executes a block of template code and returns its output as a string, instead of writing it to the template output. This is useful for storing rendered content in a variable:

```js
<% const greeting = capture(() => { %>
  <h1>Hello, <%= it.name %>!</h1>
<% }) %>

<%= greeting %>
<%= greeting %>
```

This renders the greeting twice. Without `capture()`, there's no way to reuse a rendered fragment within the same template.

## captureAsync()

The async version of `capture()`, for use with `renderAsync` or `renderStringAsync`:

```js
<% const data = await captureAsync(async () => { %>
  <%= await it.fetchData() %>
<% }) %>

<%~ data %>
```

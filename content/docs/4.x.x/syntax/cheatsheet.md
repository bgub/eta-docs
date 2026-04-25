---
id: cheatsheet
title: Cheatsheet
---

## Output (escaped)

```js
<%= it.name %>
```

## Output (raw HTML)

```js
<%~ it.htmlContent %>
```

## Execute JavaScript

```js
<% let x = 1 + 2 %>
```

## Comments

```js
<% /* this is a comment */ %>
```

## Conditionals

```js
<% if (it.show) { %>
  Visible!
<% } else { %>
  Hidden
<% } %>
```

## Looping over arrays

```js
<% it.users.forEach(function(user) { %>
  <%= user.first %> <%= user.last %>
<% }) %>
```

## Looping over objects

```js
<% Object.keys(it.obj).forEach(function(key) { %>
  <%= it.obj[key] %>
<% }) %>
```

## Partials

```js
<%~ include("./header") %>
<%~ include("./header", { title: "Home" }) %>
```

## Async partials

```js
<%~ await includeAsync("./header") %>
```

## Layout

```js
<% layout("./base") %>
<% layout("./base", { title: "Home" }) %>
```

## Blocks

```js
<% /* In child template: define a block */ %>
<% block("sidebar", () => { %>
  <nav>My sidebar</nav>
<% }) %>

<% /* In layout: render a block with optional fallback */ %>
<%~ block("sidebar", () => { %>
  <nav>Default sidebar</nav>
<% }) %>
```

## Capture

```js
<% const fragment = capture(() => { %>
  <p>Reusable content</p>
<% }) %>
<%= fragment %>
```

## Custom tags

```js
// Config: customTags: { "#": () => "", "*": (key, data) => data[key.trim()] }

<%# comment %>
<%* name %>
```

## Logging

```js
<% console.log("Debug: " + it.value) %>
```

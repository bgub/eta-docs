---
id: layouts-and-blocks
title: Layouts and Blocks
---

Eta has built-in support for layouts with named content blocks, giving you a powerful way to build page templates with overridable sections.

## Layouts

A template file can have one parent layout (though layouts themselves can have parents). To set the parent layout, call the `layout()` function:

```js
<% layout("./base") %>

<h1>My Page</h1>
<p>This content will be available as `it.body` in the layout.</p>
```

In the layout file (`base.eta`), render the child content with `it.body`:

```html
<!DOCTYPE html>
<html>
<head><title><%= it.title %></title></head>
<body>
  <%~ it.body %>
</body>
</html>
```

You can also pass extra data to the layout:

```js
<% layout("./base", { title: "My Page" }) %>
```

## Blocks

Blocks let you define named content sections that child templates can fill, and layouts can render. This is useful for things like page-specific scripts, styles, or sidebar content.

### Defining blocks in a child template

Use the `block()` helper to define a named block:

```js
<% layout("./base") %>

<% block("title", () => { %>
  My Page Title
<% }) %>

<% block("sidebar", () => { %>
  <nav>Page-specific sidebar</nav>
<% }) %>

<p>Main content goes in it.body as usual.</p>
```

### Rendering blocks in a layout

In the layout, call `block()` with just the name to render the block's content. You can provide a fallback by passing a function as the second argument:

```html
<!DOCTYPE html>
<html>
<head>
  <title><%~ block("title", () => { %>Default Title<% }) %></title>
</head>
<body>
  <aside>
    <%~ block("sidebar") %>
  </aside>
  <main>
    <%~ it.body %>
  </main>
</body>
</html>
```

If the child template defines a `"sidebar"` block, its content is rendered. If not, the block renders nothing (or the fallback content if one is provided).

### Async blocks

For blocks that need to await async operations, use `blockAsync()`:

```js
<% layout("./base") %>

<% blockAsync("data", async () => { %>
  <%= await fetchSomeData() %>
<% }) %>
```

In the layout, render with `blockAsync()`:

```js
<%~ await blockAsync("data") %>
```

### How blocks work

When a child template calls `block("name", fn)` and a layout is active, the block content is captured and stored. When the layout later calls `block("name")`, the stored content is returned.

This means:

- Blocks defined in the child are available to the parent layout
- If no layout is active, `block()` renders its content inline (useful for reusable components)
- Fallback content in the layout is only used when the child doesn't define that block

### Full example

**`views/page.eta`**:

```js
<% layout("./layout") %>

<% block("head", () => { %>
  <link rel="stylesheet" href="/page.css">
<% }) %>

<% block("scripts", () => { %>
  <script src="/page.js"></script>
<% }) %>

<h1><%= it.title %></h1>
<p><%= it.content %></p>
```

**`views/layout.eta`**:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <%~ block("head") %>
</head>
<body>
  <main><%~ it.body %></main>
  <%~ block("scripts", () => { %>
    <script src="/default.js"></script>
  <% }) %>
</body>
</html>
```

**Rendering**:

```js
const html = eta.render("./page", {
  title: "Hello",
  content: "Welcome to my site"
})
```

**Output**:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="/page.css">
</head>
<body>
  <main><h1>Hello</h1>
<p>Welcome to my site</p></main>
  <script src="/page.js"></script>
</body>
</html>
```

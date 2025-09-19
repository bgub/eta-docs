---
id: layouts
title: Layouts
description: Use layouts with Eta
---

Layouts are one of Eta's most convenient features -- along with partials, they allow you to separate your templates into clean and maintainable parts.

**TL;DR**

You can call
```js
<% layout(filepath) %>
```
Inside your template. This will render the `filepath` template with the current template body stored in `it.body`. Your layout file will automatically have access to `it`. `it` can be overriden by passing data overrides:
```js
<% layout(filepath, options) %>
```

**More advanced**

Eta defines a local function called `layout` which stores a filepath (or template name) and parameters in inner template variables. Before a template returns, it checks to see whether the filepath is defined. If so, it returns the result of the following:

```js
includeFile(
  filepath,
  Object.assign(it, { body: templateResult }, layoutParameters)
)
```

Alternatively, if `includeFile` is not defined, it will fall back to `include`:

```js
include(
  templateName,
  Object.assign(it, { body: templateResult }, layoutParameters)
)
```

## Examples

### Simple Layout

```js title="layout.eta"
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><%= it.title %></title>
  </head>
  <body>
    <%~ it.body %>
    <footer>Copyright SomeCo, Inc.</footer>
  </body>
</html>
```

```js title="index.eta"
<% layout('./layout') %>

<div id="content">
  <p><%= it.message %></p>
</div>
```

### Conditional Layouts

One of the advantages of our layout function is that we can modify the layout as many times as we want. Eta just cares what it is set to by the time a template finishes rendering.

```js title="index.eta"
<% if (user.type === 'admin') { %>
  <% layout('./admin') %>
<% } else { %>
  <% layout('./user') %>
<% } %>

This is the template content
```

Of course, since Eta supports multi-line tag content, we could rewrite that as:

```js title="index.eta"
<% if (user.type === "admin") {
  layout("./admin")
} else {
  layout("./user")
} %>

This is the template content
```

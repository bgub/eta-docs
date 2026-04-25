---
id: template-syntax
title: Template Syntax
---

Eta's syntax will be familiar if you've ever used EJS. You'll get the hang of it in no time!

## Basic Syntax

The data you pass in is available in the `it` variable.

**To output data**, use the `<%=` opening tag.

```js
Hi <%= it.name %>
```

By default, Eta will automatically XML-escape the data you output. **To allow raw HTML**, use the `<%~` opening tag.

```js
Hi <%~ it.contentContainingHTML %>
```

**To evaluate JavaScript**, use the `<%` opening tag.

```js
<% let myVar = 3 %>
```

**Comments** are just like regular JavaScript multiline comments!

```js
<% /* this is a comment */ %>
```

## Partials

Partials are templates rendered inside other templates.

**To render a partial**, use the `<%~` opening tag + the `include()` function.

```js
<%~ include("./path-to-partial") %>
<% /* we can also pass in data that will be merged with `it` and passed to the partial */ %>
<%~ include("./path-to-partial", { option: true }) %>
```

**To render an async partial**, use `includeAsync()`.

```js
<%~ await includeAsync("./path-to-partial") %>
```

### Name Resolution

If you're running Eta in Node.js or Deno, Eta will automatically try to resolve partials and layouts from the filesystem. Ex. `<%~ include("/header.eta") %>` will look for a file called `header.eta` in the `views` directory.

If you want to include a partial that doesn't exist on the filesystem (e.g. one defined programmatically), name it starting with `@`:

```js
<%~ include("@header") %>
```

## Whitespace Control

Opening delimiters can be followed with `-` or `_`, and closing delimiters can be prefixed with `-` or `_`.

`_` at the beginning of a tag will trim all whitespace before it, and `_` at the end of a tag will trim all whitespace after it.

`-` at the beginning of a tag will trim 1 newline before it, and `-` at the end of a tag will trim 1 newline after it.

```js
Hi
<%- = it.myname %>
<% /* The newline after "Hi" will be stripped */ %>
```

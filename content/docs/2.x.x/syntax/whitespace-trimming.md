---
id: whitespace-control
title: Whitespace Control
---

Eta allows you to control the whitespace before or after tags.

:::note

Eta borrows its whitespace control syntax from EJS

:::

## Basic Syntax

Opening delimiters can be followed with `-` or `_`, and closing delimiters can be prefixed with `-` or `_`

`_` at the beginning of a tag will trim all whitespace before it, and `_` at the end of a tag will trim all whitespace after it.

`-` at the beginning of a tag will trim 1 newline before it, and `-` at the end of a tag will trim 1 newline after it.

## Examples

```js
Hi
<%- = it.myname %>
```

By default, Eta removes the first newline character after each tag. This can be [configured](../api/configuration)

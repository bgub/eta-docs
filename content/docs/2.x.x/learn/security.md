---
id: security
title: Security
---

## Escaping

See the page on [HTML-Escaping](../syntax/auto-escaping) to learn how to guard against XSS attacks.

## Code Injection

:::caution


Since Eta compiles to pure JavaScript, you should **never** run untrusted templates on your server (unless you use a _really_ good sandboxed environment. Eta templates are like EJS, lodash.template, or doT templates: they compile down to straight JavaScript, and you should treat them just like you would untrusted JavaScript code).

:::


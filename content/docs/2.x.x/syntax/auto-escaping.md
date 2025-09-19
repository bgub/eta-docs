---
id: auto-escaping
title: Auto XML-Escaping
---

Auto-escaping is an important feature of Eta. When it's enabled, every reference without the `~` prefix will be HTML-escaped, to provide some protection against XSS.

:::warn

Eta has **not** been vetted for security, and autoEscaping is probably not completely foolproof. We use the same function as many other template engines, like Mustache and Handlebars, but there's still the possibility that there's some vulnerability.

:::

```js
Eta.configure({ autoEscape: true }) // Turns autoEscaping on
Eta.configure({ autoEscape: false }) // Turns autoEscaping off
// autoEscaping is on by default
```

## Disabling

To avoid escaping a specific reference, you can use the raw prefix:

_Examples_: `<%~ someval %>`

:::note

Auto-escaping can be helpful, but it also negatively impacts performance. For best results, XML-Escape data before you store it or attempt to render it in a template.

:::

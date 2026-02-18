---
id: security
title: Security
---

## Templates are code, not user input

Eta templates compile to JavaScript functions. Rendering a template is equivalent to executing JavaScript code. This means you should **never pass untrusted or user-controlled strings** as templates to `render()`, `renderString()`, or any other Eta method that accepts a template string.

```js
// DANGEROUS — equivalent to eval() on user input
const userInput = req.body.template
eta.renderString(userInput, data)

// SAFE — user data is passed through the data object
eta.renderString("Hello <%= it.name %>!", { name: req.body.name })
```

This is the standard security model for embedded JS template engines (EJS, lodash templates, doT, etc.) and template engines in other languages (Jinja2, ERB, Blade). Templates are authored by developers, not end users.

## Sandboxing

Eta does not sandbox template execution and this is not a goal of the project. If you need to render untrusted templates, use a logic-less template engine (like Mustache) or run templates in a sandboxed environment (like an isolated VM or Web Worker).
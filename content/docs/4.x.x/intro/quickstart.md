---
id: quickstart
title: Quickstart
slug: /
---

Install Eta

```bash
npm install eta
```

In the root of your project, create `templates/simple.eta`

```js
Hi <%= it.name %>!
```

Then, in your JS file:

```js
import { Eta } from "eta"
import path from "node:path"

const eta = new Eta({ views: path.join(import.meta.dirname, "templates") })

// Render a template
const res = eta.render("./simple", { name: "Ben" })
console.log(res) // Hi Ben!
```

Note: `import.meta.dirname` requires Node 20.11+.

Eta v4 is ESM-only. In browsers, import the core build:

```html
<script type="module">
  import { Eta } from "eta/core"
  const eta = new Eta()
  document.body.innerHTML = eta.renderString("Hi <%= it.name %>!", { name: "Ben" })
</script>
```

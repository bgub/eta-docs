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

const eta = new Eta({ views: path.join(__dirname, "templates") })

// Render a template

const res = eta.render("./simple", { name: "Ben" })
console.log(res) // Hi Ben!
```

---
id: fastify
title: Fastify
---

Fastify can use `eta-js` through `@fastify/view` plugin. 

```js
import fastify from "fastify"
import fastifyView from "@fastify/view"
import { Eta } from "eta"
import path from "node:path"
const eta = new Eta()
const server = fastify()

server.register(fastifyView, {
  engine: { eta },
  templates: path.join(import.meta.dirname, "my-views"),
})

server.get("/", (req, res) => {
  // home route
})

server.listen({ port: 8888 }).then(() => {
  console.log("Example app listening on port 8888")
})
```

Note: `import.meta.dirname` requires Node 20.11+.

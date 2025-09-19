---
id: fastify
title: Fastify
---

Fastify can use `eta-js` through `@fastify/view` plugin. 

```js
import fastify from "fastify";
import fastifyView from "@fastify/view";
import { Eta } from "eta";
import path from "path";

const eta = new Eta();

const server = fastify();

server.register(fastifyView, {
  engine: {
    eta,
  },
  templates: path.join(__dirname, "my-views"),
});

server.get("/", (req,res) => {
  // home route
});

server.ready().then(() => {
  server.listen({ port: 8888 }, async (err, address) => {
    console.log(`Example app listening on port 8888`)
  });
});
```

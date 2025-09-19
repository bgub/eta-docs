---
id: express
title: Express.js
---

Eta no longer supports the Express.js `app.engine()` function, but it's still completely possible to use with Express.js! Here's a quick example.

```js
import express from "express"
import path from "node:path"
import { Eta } from "eta"

const app = express()

const eta = new Eta({
  // Views directory path
  views: path.join(import.meta.dirname, "views"), // on Deno : `${Deno.cwd()}/views/`

  // Any other option...
  cache: true
})

app.get("/", (req, res) => {
  const renderedTemplate = eta.render("index", { title: "Hello", place: "there!" }) // create `index.eta` in the `views` folder
  res.status(200).send(renderedTemplate)
})

app.listen(3000, () => {
  console.log("Server listening on port 3000")
})
```

Note: `import.meta.dirname` requires Node 20.11+.

### Alternatively, define an Express app engine using ETA

Missing the good'old `res.render` to render computed templates ? Here is a quick walk around to achieve the same behaviour throughout the whole application.

Note : `app.engine("eta", eta.render)` is no longer supported on `v3.x.x` for Node.js and Deno


```js
import express from "express"
import path from "node:path"
import { Eta } from "eta"

// Create app
const app = express()

// Setup eta
const eta = new Eta({ views: path.join(import.meta.dirname, "views") })
app.engine("eta", buildEtaEngine())
app.set("view engine", "eta")

// Home route
app.get("/", (req, res) => {
  res.render("home", { message: "Hello world !" }) // create `home.eta` in the `views` folder
});

// Start server
app.listen(3000, () => {
  console.log("Server listening on port 3000")
});


function buildEtaEngine() {
  return (path, opts, callback) => {
    try {
      const fileContent = eta.readFile(path);
      const renderedTemplate = eta.renderString(fileContent, opts);
      callback(null, renderedTemplate);
    } catch (error) {
      callback(error);
    };
  };
}
```

Note: `import.meta.dirname` requires Node 20.11+.

---
id: express
title: Eta with Express.js
---

```js title="views/template.eta"
My favorite template engine is <%= it.favorite %> because it is: <%= it.reasons.join(', ') %>

<%~ includeFile('./footer', it) %>
```

```js title="views/footer.eta"
<footer>Signed: <%= it.name %> </footer>
```

:::danger
Never put objects on the `req` object straight in as the data, this can allow hackers to run XSS attacks. Always make sure you are destructuring the values on objects like `req.query` and `req.params`.
:::

```js title="index.js"
var express = require("express")
var app = express()
var eta = require("eta")

// Note: as of Eta version 2.0.0, you must configure the "cache" and "views" option separately for both Express and Eta. Eta will not use the values set in Express, in order to prevent vulnerabilities

app.engine("eta", eta.renderFile)
eta.configure({ views: "./views", cache: true })
app.set("views", "./views")
app.set("view cache", true)
app.set("view engine", "eta")

app.get("/", function (req, res) {
  res.render("template", {
    favorite: "Eta",
    name: "Ben",
    reasons: ["fast", "lightweight", "simple"]
  })
})

app.listen(8000, function () {
  console.log("listening to requests on port 8000")
})
```

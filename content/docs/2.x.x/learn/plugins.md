---
id: plugins
title: Plugins
description: Learn the basics of Eta plugins by creating a simple plugin
---

Here you'll learn how to create a plugin for Eta by creating a plugin that enables layout support.

_Note: this tutorial was created before Eta got [built-in layout support](./layouts). This plugin is no longer necessary if you want to use layouts, but we're leaving this tutorial up because it is a helpful example_

:::tip

Feel free to publish NPM/Deno packages based on this code! A good rule of thumb is to begin plugin packages with **eta\_plugin\_**. For example, you could create a plugin called **eta\_plugin\_layouts**.

:::

### Plugin Code

```js title="plugin-inheritance.js"
var layoutRegExp = /^@\s*layout\s*\(\s*"([^]*)"\)$/

module.exports = {
  processAST: function (buffer, env) {
    var firstItem = buffer[0]
    if (firstItem.t === "e") {
      var val = firstItem.val.trim()

      if (layoutRegExp.test(val)) {
        buffer.shift()
        var layoutMatch = layoutRegExp.exec(val)
        var filePath = layoutMatch[1]

        var useLayoutCode =
          "tR=" +
          (env.async ? "await " : "") +
          'E.includeFile("' +
          filePath +
          '",{content:tR})'
        buffer.push({ t: "e", val: useLayoutCode })
      }
    }
    return buffer
  }
}
```

### Server Code

```js title="index.js"
var express = require("express")
var app = express()
var Eta = require("eta")
var EtaInherit = require("./plugin-inheritance")

Eta.configure({
  plugins: [EtaInherit],
  cache: false
})

app.engine("eta", Eta.renderFile)
app.set("view engine", "eta")
app.set("views", "./views")

app.get("/", function (req, res) {
  res.render("index", {
    favorite: "Eta"
  })
})

app.listen(3000, function () {
  console.log("listening to requests on port 3000")
})
```

### Final Result

```js title="views/index.eta"
<% @layout("./layout") %>

<h2>This page was rendered with Eta</h2>

My favorite template engine is <%= it.favorite %>
```

```js title="views/footer.eta"
<b>This is the footer</b>
```

```js title="views/layout.eta"
<!DOCTYPE html>

<html>
  <head>
    <title>Page about Eta</title>
  </head>
  <body>
    <h1>Eta Rendered Page</h1>
    <div>
      <p>
        Here's the content:<br />
        ===========================================
      </p>
      <div style="background:green;">
        <%~it.content%>
      </div>
      <p>
        ===========================================
      </p>
    </div>
    <%~ includeFile('./footer') %>
  </body>
</html>
```

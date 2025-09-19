---
id: node
title: Eta with Node.js
---

```js title="views/template.eta"
My favorite food is <%= it.food %>

<%~ includeFile('./footer') %>
```

```js title="views/footer.eta"
<footer>This is a footer!</footer>
```

```js title="index.js"
var eta = require("eta")
var path = require("path")

// Set Eta's configuration
eta.configure({
  // This tells Eta to look for templates
  // In the /views directory
  views: path.join(__dirname, "views")
})

// Eta assumes the .eta extension if you don't specify an extension
// You could also write renderFile("template.eta"), renderFile(path.join(__dirname, "views/template.eta"),
// renderFile("/template"), etc.

await eta.renderFile("./template", { food: "cake" })
/*
My favorite food is cake
<footer>This is a footer!</footer>
*/
```

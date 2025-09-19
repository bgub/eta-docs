---
id: file-handling
title: File Handling
---

It is really easy to use Eta with Express. First, you must [install Eta](https://eta.js.org/docs/learn/install), then you must add an `app.engine()` line with the file extension (here, we use `.eta`) as the first parameter and the Eta module as the second parameter (`app.set('view engine', 'eta')`):

:::note
    
Eta works out-of-the-box with Express.js.


```js
app.engine("html", require("eta").renderFile)

// Or, if you want to use the .eta file extension

app.set("view engine", "eta")
```

:::


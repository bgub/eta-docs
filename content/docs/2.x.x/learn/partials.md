---
id: partials
title: Partials
---

There are two kinds of partials: _named partials_ and _file partials_.

:::tip

_By the way, you can overwrite the `include` and `includeFile` functions using `eta.configure`. They are just functions defined on the config object: `eta.config.include` and `eta.config.includeFile`_

:::

Named partials have to be defined ahead of time as template functions. They are included using `<%~ include(partialName, data) %>` and work in the browser, Node, and Deno.

```js
Eta.templates.define("mypartial", Eta.compile("PARTIAL SPEAKING"))

Eta.render('This is a partial: <%~ include("mypartial") %>', { name: "Person" })
```

File partials, on the other hand, do not need to be defined ahead of time. They are included using `<%~ includeFile(path, data) %>` and do not work in the browser. Eta looks in `config.views` for the templates you reference (_note: it's actually a little bit more complicated, check out [file-handling](./file-handling))_.

```js
Eta.configure({
  views: path.join(__dirname, views)
})

let template = "<%~ includeFile('./footer.eta', data) %>"

Eta.render(template, data)
```

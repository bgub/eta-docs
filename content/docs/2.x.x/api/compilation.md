---
id: compilation
title: Compilation
---

## `Eta.compile`

Compiles a string into a template function.
[TypeDoc doc page](https://eta-dev.github.io/eta/modules/_compile_.html#compile)

**Syntax**

```js
Eta.compile(str, config)
// returns a function that can be called with (data, config, [cb])
// note: config must be a valid configuration object
```

See the page on [config](./configuration)

**Example**

```js
var myTemplate = "Hi, my name is <%= it.name %>"
var compiled = Eta.compile(myTemplate)

// Returns a function:
// function anonymous(it,c,cb ) { var tR='';tR+='Hi, my name is ';tR+=E.e(it.name);if(cb){cb(null,tR)} return tR }

compiled({ name: "Johnny Appleseed" }, Eta.config)
//Returns "Hi, my name is Johnny Appleseed"
```

:::note
    
Many template engines offer you the option to <b>Compile</b> (which just renders your template) or <b>Precompile</b> (which turns your template into a function ahead of time). Eta precompiles automatically, but is still faster than other engines.


:::


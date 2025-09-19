---
id: plugin-hooks
title: Plugin Hooks
---

Plugin hooks allow plugins to modify the template during the various lifecycle events.

## `processAST(buffer, config)`

The `processAST` hook allows you to modify the AST.

```js
var layoutRegExp = /^@\s*layout\s*\(\s*"([^]*)"\)$/

module.exports = {
  processAST: function (buffer, config) {
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

## `processFnString(fnString, config)`

The `processFnString` hook allows you to modified the compiled function string which is used for prerendering.

```js
module.exports = {
    processFnString: function (fnString, config) {
        return `var add=(a,b)=>a+b;${fnString}`
    }
}
```
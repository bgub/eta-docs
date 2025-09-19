---
id: parsing
title: Parsing
---

:::note
    
You won't need to use or understand Parsing unless you're writing native helpers or plugins.

:::

## Syntax

[TypeDoc doc page](https://eta-dev.github.io/eta/modules/_parse_.html#parse)

## Examples

```js
var myTemplate = 'Hi, my name is <%= it.name %>'
var compiled = Eta.parse(myTemplate)
//Returns an Eta syntax tree (like an AST):

// ['Hi, my name is ', { t: 'i', val: 'it.name' }]

/*
val contains the content of the template object.
t can be:
 - 'i': interpolate
 - 'r': raw
 - 'e': evaluate/exec
*/

```

---
id: evaluate
title: Native Code (Evaluate)
---

An evaluate tag inserts its contents into the template function. By default, evaluate tags don't start with a prefix.

## Overview

Put valid JavaScript code between the tag delimiters.

## Comments

Comments are written inside evaluate tags.

_Example_:

```js
<% /* this is a comment */ %>
```

## Console.log

You can log to the console with evaluate syntax.

_Example_:

```js
<% console.log("Hi") %>
```

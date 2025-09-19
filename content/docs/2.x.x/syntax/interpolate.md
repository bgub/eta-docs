---
id: interpolate
title: Interpolate
---

An interpolation outputs data into the template.

## Basic Syntax

```js
<%= reference %>
```

## Overview

Put a reference between the opening and closing delimeters (by default `<%`and `%>`), followed by the interpolate prefix (`=` by default).

**The data you call a template with is stored in an object named `it` by default.**

Since Eta templates parse into JavaScript, you can write a reference using dot notation: `<p>User's last name: <%= it.user.lastName %>` or bracket notation: `<p>User's last name: <%= it.user['lastName'] %>`. You can also use ternary operators because of this: `<p>User's last name: <%= it.loggedIn ? it.user.lastName : "N/A" %></p>`.

:::note

You can output a raw value by putting `~` instead of `=` after the opening delimeters (ex. `<%~ unescaped %>`)

:::

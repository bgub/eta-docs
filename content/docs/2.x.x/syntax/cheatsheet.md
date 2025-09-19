---
id: cheatsheet
title: Cheatsheet
---

## Conditionals

```js
<% if (it.someval === "someothervalue") { %>
Display this!
<% } else { %>
They're not equal
<% } %>
```

## Looping over arrays

```js
<% users.forEach(function(user){ %>
  <%= user.first %> <%= user.last %>
<% }) %>
```

## Looping over objects

```js
<% Object.keys(someObject).forEach(function(prop) { %>
  <%= someObject[prop] %>
<% }) %>
```

## Logging to the console

```js
<% console.log("The value of it.num is: " + it.num) %>
```

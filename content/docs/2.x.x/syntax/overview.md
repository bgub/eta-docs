---
id: overview
title: Syntax Overview
slug: /syntax
---

## Definitions

A template tag has the structure: `DELIMITER [WSCONTROL] [PREFIX] CONTENT [WSCONTROL] DELIMITER`.

- By default the opening delimiter is `<%` and the closing is `%>`
- `WSCONTROL` stands for whitespace control. Optionally, immediately after the opening delimiter or before the closing delimiter, you can put a `-` or a `_`. [Read more](syntax/whitespace-control)
- The prefix of a tag lets Eta know its type. `<% = something %>`, has `=` as the prefix, which tells Eta it's an interpolate tag.

## Syntax Overview

The data you call a template with is stored in a variable called `it`, similarly to doT.js.

- To output a value into your template, use [interpolation tags](syntax/interpolate). Put the value you want to output between (by default) your opening and closing delimeters, prefixed by a `=`.
  - Example: `<%= it.value %>`
  - Example: `<%= 2 + 4 %>`
- To output an unescaped value into your template, use [raw interpolate tags](syntax/auto-escaping). Put the value you want to output between (by default) your opening and closing delimeters, prefixed by a `~`. _Note: Eta uses `~` instead of `-` (which EJS uses) so it can support left newline trimming._
  - Example: `<%~ it.value %>`
  - Example: `<%~ "<p>HTML</p>" %>`
- [Evaluation tags](syntax/evaluate) don't have a prefix (by default) and place the code inside them into the template function.
  - Example: **comments** are written using evaluation tags (`<% /*comment */ %>`)
  - Example: conditionals are written using evaluation tags:
    ```js
    <% if (num === 3) { %>
      Display this
    <% } else { %>
      Display this instead
    <% } %>
    ```
- [Whitespace trimming](syntax/whitespace-control) is the same as in EJS (but supports trimming left newlines). Follow the opening delimiter or precede the closing delimiter with `_` or `-`.

## Helpful Tips:

- `=` and `~` don't have to come immediately following your opening delimiter. For example, `<% = 2 + 4 %>` is still valid
- Eta's configuration is stored in the variable `E`. That's why, for partials, you write `<%~ E.include("mypartial") %>`

## Inspiration

Eta takes inspiration from EJS, doT.js, Mustache, Handlebars, Nunjucks, and many other great template engines. Significant chunks of its code are borrowed from [Squirrelly](https://squirrelly.js.org)

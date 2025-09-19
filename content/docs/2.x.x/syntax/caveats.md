---
id: caveats
title: Caveats
---

## Reserved variable names

_Don't use these variables in your templates_

- `it`
- `tR`
- `cb`
- `E`

## Parsing

- Using RegExp literals inside your templates has a high likelihood of making them fail. Please, put that logic in a helper or something. If you really must, use `new RegExp('a|b')` instead.

## Delimiters

- Your closing delimeter can't contain `'`, `"`, or `\`` (_probably: I haven't actually tried it_)

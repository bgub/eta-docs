---
id: configuration
title: Configuration
---

Similarly to many other libraries, Eta allows you to customize its behavior via options.

[TypeDoc doc page](https://eta-dev.github.io/eta/interfaces/_config_.etaconfig.html)

## List of options

| Option       | Description                                 |            Type            |      Default       | Required? |
| ------------ | :------------------------------------------ | :------------------------: | :----------------: | :-------: |
| `async`      | Whether to generate async templates         |         `boolean`          |      `false`       |    Yes    |
| `autoEscape` | Whether to automatically XML-escape         |         `boolean`          |                    |    Yes    |
| `autoTrim`   | Configure automatic whitespace trimming     |   [autoTrim](#autotrim)    |  `[false, "nl"]`   |    Yes    |
| `cache`      | Cache templates by `name` or `filename`     |         `boolean`          |                    |    Yes    |
| `e`          | XML-escaping function                       |         `Function`         |     `config.e`     |    Yes    |
| `filename`   | Absolute filepath of template (for caching) |          `string`          |    `undefined`     |    No     |
| `name`       | Template name (for caching)                 |          `string`          |    `undefined`     |    No     |
| `plugins`    | Plugins array                               |    [plugins](#plugins)     |  `config.plugins`  |    Yes    |
| `root`       | Base filepath. Defaults to `"\"` internally |          `string`          |    `undefined`     |    No     |
| `templates`  | Object containing templates                 | `Cacher<TemplateFunction>` | `config.templates` |    Yes    |
| `tags`       | Template delimiters                         |     `[string, string]`     |   `["<%", "%>"]`   |    Yes    |
| `useWith`    | Use `with(){}` to have data scope as global |         `boolean`          |    `undefined`     |    No     |
| `varName`    | Name of data object                         |          `string`          |       `"it"`       |    Yes    |
| `view cache` | Overrides `cache`                           |         `boolean`          |    `undefined`     |    No     |
| `views`      | Absolute filepath to views directory        |          `string`          |    `undefined`     |    No     |

### Delimiter Caveats

Delimeters must be RegExp-escaped.

### `autoTrim`

`autoTrim` controls whitespace trimming.

**Signature**

`"nl" | "slurp" | false | ["nl" | "slurp" | false, "nl" | "slurp" | false]`

**Options**

- `"nl"` trims a leading or trailing newline
- `"slurp"` trims all leading/trailing whitespace
- `true` is equivalent to `"slurp"`

When an array is passed, Eta uses the equivalent options on the left or right side of the string

### `plugins`

`plugins` is an array of objects, each with the following properties:

| Property          | Description                                       |    Type    |
| ----------------- | :------------------------------------------------ | :--------: |
| `processAST`      | Function that manipulates _Eta_ syntax tree       | `Function` |
| `processFnString` | Function that manipulates _Eta_ template function | `Function` |

## `config`

`Eta.config` returns Eta's base ("global") configuration. See above.

## `getConfig`

`getConfig` takes some config options and merges them with the default. It optionally takes a third parameter, which it merges with the default first.

High-level APIs like `render` and `compile` call `getConfig` internally, but you should call lower-level APIs (like `compileToString`) with a valid config object, which you can get from this function.

### Syntax

[TypeDoc doc page](https://eta-dev.github.io/eta/modules/_config_.html#getconfig)

### Example

```js
Eta.compileToString(myTemplate, Eta.getConfig({ tags: ["{{", "}}"] }))
```

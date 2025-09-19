---
id: configuration
title: Configuring Eta
description: Setting custom delimiters, controlling caching, etc.
---

You can configure Eta using the `configure()` command, which merges the options you pass in with the current configuration.

**Example**

```js
Eta.configure({
  cache: true // Make Eta cache templates
})
```

Eta's current configuration is stored in the `config` variable (which is aliased to `defaultConfig` for backwards compatibility)

```js
Eta.config.tags // ["<%", "%>"]
```

## Big list of configuration options

Here's the TypeScript interface describing Eta's config (taken from the source code)

```ts
interface EtaConfig {
  /** Whether or not to automatically XML-escape interpolations. Default true */
  autoEscape: boolean
  /** Configure automatic whitespace trimming. Default `[false, 'nl']` */
  autoTrim: trimConfig | [trimConfig, trimConfig]
  /** Compile to async function */
  async: boolean
  /** Whether or not to cache templates if `name` or `filename` is passed */
  cache: boolean
  /** XML-escaping function */
  e: (str: string) => string
  /** Parsing options. NOTE: "-" and "_" may not be used, since they are reserved for whitespace trimming. */
  parse: {
    /** Which prefix to use for evaluation. Default `""` */
    exec: string
    /** Which prefix to use for interpolation. Default `"="` */
    interpolate: string
    /** Which prefix to use for raw interpolation. Default `"~"` */
    raw: string
  }
  /** Array of plugins */
  plugins: Array<{
    processFnString?: Function
    processAST?: Function
    processTemplate?: Function
  }>
  /** Remove all safe-to-remove whitespace */
  rmWhitespace: boolean
  /** Delimiters: by default `['<%', '%>']` */
  tags: [string, string]
  /** Holds template cache */
  templates: Cacher<TemplateFunction>
  /** Name of the data object. Default `it` */
  varName: string
  /** Absolute path to template file */
  filename?: string
  /** Holds cache of resolved filepaths. Set to `false` to disable */
  filepathCache?: Record<string, string> | false
  /** A filter function applied to every interpolation or raw interpolation */
  filter?: Function
  /** Function to include templates by name */
  include?: Function
  /** Function to include templates by filepath */
  includeFile?: Function
  /** Name of template */
  name?: string
  /** Where should absolute paths begin? Default '/' */
  root?: string
  /** Make data available on the global object instead of varName */
  useWith?: boolean
  /** Whether or not to cache templates if `name` or `filename` is passed: duplicate of `cache` */
  "view cache"?: boolean
  /** Directory or directories that contain templates */
  views?: string | Array<string>
  /** The config object can also have other properties, potentially added by plugins */
  [index: string]: any
}
```

## Default configuration

```ts
var config: EtaConfig = {
  async: false,
  autoEscape: true,
  autoTrim: [false, "nl"],
  cache: false,
  e: XMLEscape, // function defined elsewhere
  include: includeHelper, // function defined elsewhere
  includeFile: includeFileHelper, // function defined elsewhere
  parse: {
    exec: "",
    interpolate: "=",
    raw: "~"
  },
  plugins: [],
  rmWhitespace: false,
  tags: ["<%", "%>"],
  templates: templates,
  useWith: false,
  varName: "it"
}
```

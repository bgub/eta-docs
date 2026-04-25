---
id: custom-tags
title: Custom Tags
---

Custom tags let you define your own tag prefixes with handler functions. This is useful for translation keys, comments, or any domain-specific template syntax.

## Configuration

Pass a `customTags` object when creating an Eta instance. Keys are tag prefixes, values are functions that receive the tag content (as a string) and the template data object:

```js
const eta = new Eta({
  customTags: {
    "#": () => "",  // comment tag
    "*": (key, data) => translations[data.lang][key.trim()],
  },
})
```

## Usage

Use your custom prefix after the opening delimiter, just like `=` or `~`:

```js
// Comment tag — outputs nothing
<%# This is a comment %>

// Translation tag — looks up a key
<p><%* greeting %></p>
```

## Example: translations

```js
const translations = {
  en: { greeting: "Hello!", farewell: "Goodbye!" },
  pl: { greeting: "Czesc!", farewell: "Do widzenia!" },
}

const eta = new Eta({
  customTags: {
    "*": (key, data) => translations[data.lang][key.trim()],
  },
})

eta.renderString("<p><%* greeting %></p>", { lang: "en" })
// => "<p>Hello!</p>"
```

## How it works

- Tag content is passed to the handler as a **static string**, not evaluated as JavaScript. `<%* greeting %>` passes `" greeting "` to the handler, not a variable lookup.
- The handler receives the full template data object as its second argument, so it can do its own lookups.
- The handler's return value is concatenated directly to the output — no auto-escaping is applied. Escape values yourself if needed.

## Restrictions

Custom tag prefixes cannot conflict with:

- Built-in prefixes (`=`, `~`, or the empty string)
- Whitespace trim markers (`-`, `_`)

Attempting to use a conflicting prefix will throw an error.

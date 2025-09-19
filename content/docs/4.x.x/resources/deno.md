---
id: deno
title: Deno
---

Eta works out of the box with Deno. Prefer importing from JSR:

```ts
import { Eta } from "jsr:@bgub/eta"
```

configured this way:
```ts
const viewpath = `${Deno.cwd()}/views/`
const eta = new Eta({ views: viewpath, cache: true })
```

and used like this:
```ts
res.send(eta.render('home',{title:"that's my title"}));
```

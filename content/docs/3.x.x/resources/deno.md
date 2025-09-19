---
id: deno
title: Deno
---

Eta should work out-of-the-box with Deno! You can import it from `deno.land/x`:

```ts
import { Eta } from "https://deno.land/x/eta@v3.0.3/src/index.ts"
```

configured this way:
```ts
let viewpath = Deno.cwd()+'/views/'
let eta = new Eta({ views: viewpath, cache: true })
```

and used like this:
```ts
res.send(eta.render('home',{title:"that's my title"}));
```

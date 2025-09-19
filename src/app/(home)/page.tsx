import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Image
            src="/icon.svg"
            alt="Eta Logo"
            width={64}
            height={64}
            className="h-16 w-16"
          />
          <h1 className="text-4xl font-bold sm:text-5xl">Eta</h1>
        </div>
        <p className="text-fd-muted-foreground text-balance">
          Lightweight, powerful, pluggable embedded JS template engine. Written
          in TypeScript – use it in Node, Deno, or the browser.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/docs"
          className={cn(buttonVariants({ color: "primary" }), "px-4 py-2")}
        >
          Get Started
        </Link>
        <Link
          href="/playground"
          className={cn(buttonVariants({ color: "outline" }), "px-4 py-2")}
        >
          Open Playground
        </Link>
      </div>

      {/* EJS Comparison and Code Examples Side by Side */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              A faster, more lightweight, and more configurable EJS alternative
            </h2>
            <p className="mb-4 text-fd-muted-foreground">Eta vs. EJS:</p>
            <ul className="space-y-2 text-sm">
              <li>
                • Eta{" "}
                <strong>
                  <a
                    href="https://deno.land/x/eta"
                    className="text-fd-primary hover:underline"
                  >
                    supports Deno
                  </a>
                </strong>
                , out-of-the-box
              </li>
              <li>
                • Eta supports <strong>layouts</strong> out of the box
              </li>
              <li>
                • Eta allows <strong>left whitespace control</strong> (with{" "}
                <code className="rounded bg-fd-muted px-1">-</code>
                ), something that doesn't work in EJS because EJS uses{" "}
                <code className="rounded bg-fd-muted px-1">-</code> on the left
                side to indicate that the value shouldn't be escaped. Instead,
                Eta uses <code className="rounded bg-fd-muted px-1">~</code> to
                output a raw value
              </li>
              <li>
                • Eta gives you{" "}
                <strong>more flexibility with delimeters</strong> -- you could
                set them to{" "}
                <code className="rounded bg-fd-muted px-1">{"{{"}</code> and{" "}
                <code className="rounded bg-fd-muted px-1">{"}}"}</code>, for
                example, while with EJS this isn't possible
              </li>
              <li>
                • Eta adds <strong>plugin support</strong>
              </li>
              <li>
                • Comments in Eta use{" "}
                <code className="rounded bg-fd-muted px-1">{"/* ... */"}</code>{" "}
                which allows multiline commenting and is more consistent
              </li>
              <li>
                • Eta doesn't break with delimiters inside strings and comments.{" "}
                <em>
                  Example:{" "}
                  <code className="rounded bg-fd-muted px-1">
                    {'<%= "%>" %>'}
                  </code>{" "}
                  works in Eta, while it breaks in EJS
                </em>
              </li>
              <li>
                • Eta exposes <strong>Typescript types</strong> and distributes
                a UMD build
              </li>
              <li>
                • Eta allows custom tag-type prefixes.{" "}
                <em>
                  Example: you could change{" "}
                  <code className="rounded bg-fd-muted px-1">{"<%="}</code> to{" "}
                  <code className="rounded bg-fd-muted px-1">{"<%*"}</code>
                </em>
              </li>
              <li>
                • Eta throws more informative errors.{" "}
                <em>
                  If you accidentally leave a tag, string, or multiline comment
                  unclosed, Eta will tell you where the problem is
                </em>
              </li>
            </ul>
          </div>
          <div>
            <Tabs
              items={["Example 1", "Example 2", "Partials", "Layouts"]}
              className="w-full"
            >
              <Tab value="Example 1">
                <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm">
                  <code>{`Users:

<ul>
<% it.users.forEach(function(user){ %>
  <li><%= user %></li>
<% }) %>
</ul>`}</code>
                </pre>
              </Tab>
              <Tab value="Example 2">
                <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm">
                  <code>{`<%= await getSomeValue() %>
    
<% /* Eta supports multiline comments,
which is really useful */ %>

<%= "<%" %>`}</code>
                </pre>
              </Tab>
              <Tab value="Partials">
                <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm">
                  <code>{`<%~ include("mypartial") %>

<%~ include('./navbar', { pages: [
  'home',
  'about',
  'users'
] }) %>`}</code>
                </pre>
              </Tab>
              <Tab value="Layouts">
                <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm">
                  <code>{`<% layout("layouts/basic") %>

<p>This will be rendered into a layout</p>`}</code>
                </pre>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}

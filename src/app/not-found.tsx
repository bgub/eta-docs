import { HomeLayout } from "fumadocs-ui/layouts/home";
import Link from "next/link";
import { baseOptions } from "@/lib/layout.shared";

export default function NotFound() {
  const { links, ...base } = baseOptions();
  return (
    <HomeLayout
      {...base}
      links={[
        {
          text: "Docs",
          url: "/docs",
        },
        ...(links || []),
      ]}
    >
      <main className="flex flex-1 flex-col items-center justify-center gap-3 py-16 text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-fd-muted-foreground max-w-prose">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/"
            className="rounded-md bg-fd-primary px-4 py-2 font-medium text-fd-primary-foreground hover:bg-fd-primary/80"
          >
            Go home
          </Link>
          <Link
            href="/docs"
            className="rounded-md border px-4 py-2 font-medium hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            View docs
          </Link>
        </div>
      </main>
    </HomeLayout>
  );
}

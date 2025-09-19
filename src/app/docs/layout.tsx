import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      tree={source.pageTree}
      {...base} // test
      nav={{ ...nav, mode: "top" }}
    >
      {children}
    </DocsLayout>
  );
}

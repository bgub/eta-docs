import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ExternalLinkIcon } from "lucide-react";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span className="text-2xl align-top leading-none -mt-2">η</span>
          <span>Eta</span>
        </>
      ),
    },
    githubUrl: "https://github.com/bgub/eta",
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: "Discord",
        url: "https://discord.gg/27gGncJYE2",
        icon: <ExternalLinkIcon />,
      },
      {
        text: "Playground",
        url: "/playground",
      },
    ],
  };
}

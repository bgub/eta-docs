import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // MDX passthroughs for LLM routes
        {
          source: "/docs/:path*.mdx",
          destination: "/llms.mdx/:path*",
        },
      ],
    };
  },
  async redirects() {
    return [
      // Root and version root redirects
      {
        source: "/docs",
        destination: "/docs/4.x.x/intro/quickstart",
        permanent: false,
      },
      {
        source: "/docs/2.x.x",
        destination: "/docs/2.x.x/overview",
        permanent: false,
      },
      {
        source: "/docs/3.x.x",
        destination: "/docs/3.x.x/intro/quickstart",
        permanent: false,
      },
      {
        source: "/docs/4.x.x",
        destination: "/docs/4.x.x/intro/quickstart",
        permanent: false,
      },

      // Default missing version to 4.x.x for all nested paths (e.g., /docs/api/...)
      // Exclude when the first segment is already a version like 2.x.x, 3.x.x, or 4.x.x
      {
        source: "/docs/:first((?!2\\.x\\.x|3\\.x\\.x|4\\.x\\.x).*)/:path*",
        destination: "/docs/4.x.x/:first/:path*",
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);

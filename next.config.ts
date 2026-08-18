import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://eri-hum.github.io/AS/,
// so the static export needs a matching basePath/assetPrefix.
const repoName = "AS";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;

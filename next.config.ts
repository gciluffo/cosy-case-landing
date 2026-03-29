import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Emit a static export into the `out/` directory.
  // This folder can be uploaded directly to an S3 bucket for CloudFront hosting.
  // Note: API routes (pages/api/*) are not supported with static export,
  // but the landing page does not use any.
  output: "export",
  // Emit trailing slashes so S3 can serve index.html for each path
  // without needing CloudFront functions to rewrite URLs.
  trailingSlash: true,
  // next/image's server-side optimizer is unavailable in a static export.
  // Images are still served at full quality directly from S3/CloudFront.
  images: { unoptimized: true },
};

export default nextConfig;

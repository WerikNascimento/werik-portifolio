import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion"],
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;

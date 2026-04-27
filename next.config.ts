import type { NextConfig } from "next";
import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state";

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
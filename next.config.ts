import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
  }, 
  typescript:{
    ignoreBuildErrors:true,
  },
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
};

export default nextConfig;

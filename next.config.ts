import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/74-86-8-100-49-53-13-16-18-17-19-23-77-66-55-44-99-9-33-22-94-11' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

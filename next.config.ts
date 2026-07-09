import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add remote photography domains here once real restaurant photos replace
    // the illustrated placeholders, e.g. { protocol: "https", hostname: "images.unsplash.com" }.
    remotePatterns: [],
  },
};

export default nextConfig;

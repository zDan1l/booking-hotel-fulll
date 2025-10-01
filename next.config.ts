import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "lh3.googleusercontent.com"
      
      }
    ]
  }
};

export default nextConfig;

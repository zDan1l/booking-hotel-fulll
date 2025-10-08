import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */

  async headers(){
    return [
      {
        source : "/api/payment/notification/:path*",
        headers : [
          {key : "Access-Control-Allow-Origin", value : "*"},
          {
            key : "Access-Control-Allow-Methods",
            value : "GET, POST"
          },
          {
            key : "Access-Control-Allow-Headers",
            value : "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
          }
        ] 
      }
    ]
  },
  
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "lh3.googleusercontent.com"
      },
      {
        protocol : "https",
        hostname : "rt8aeiizldxkrxs8.public.blob.vercel-storage.com"
      }
    ]
  }
};

export default nextConfig;

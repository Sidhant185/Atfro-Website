import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/founders", destination: "/#founders", permanent: false },
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/pricing", destination: "/#pricing", permanent: false },
    ];
  },
};

export default nextConfig;

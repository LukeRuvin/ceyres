/** @type {import("next").NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.uzmart.org",
        port: "",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "foodyman.s3.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "api.demand24.org",
      },
      {
        protocol: "https",
        hostname: "api.ceyres.com",
      },
    ],
  },
  
  
  
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Forwarded-For", value: "52.221.233.225" },
          { key: "X-Forwarded-Proto", value: "https" },
          { key: "CF-Connecting-IP", value: "52.221.233.225" },
        ],
      },
    ];
  },
  
};




module.exports = withBundleAnalyzer(nextConfig);

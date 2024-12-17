/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "leak-detection.phpv8.aait-d.com",
            port: "",
            pathname: "/storage/images/**",
          },
          {
            protocol: "https",
            hostname: "example.jpg",
            port: "",
            pathname: "/**",
          }
        ],
        domains:["phpv8.aait-d.com"]
      },
};

export default nextConfig;

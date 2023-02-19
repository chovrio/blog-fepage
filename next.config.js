/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // 开启实验性的app目录
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/avactor/**",
      },
      {
        protocol: "https",
        hostname: "blog-server.chovrio.club",
        port: "",
        pathname: "/avactor/**",
      },
    ],
  },
  async rewrites() {
    return [
      //接口请求 前缀带上/api-text/
      {
        source: "/api/:path*",
        destination: `http://127.0.0.1:8000/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "traxsmart.in" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "manufacturing-today.com" },
      { protocol: "https", hostname: "vaspinfotech.com" },
      { protocol: "https", hostname: "www.ventel.in" },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;

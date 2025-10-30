const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "traxsmart.in" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "manufacturing-today.com" },
      { protocol: "https", hostname: "vaspinfotech.com" },
      { protocol: "https", hostname: "www.ventel.in" },
      { protocol: "https", hostname: "loving-chicken-365a0ec42b.media.strapiapp.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "manuals.plus" },
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

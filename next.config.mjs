/** @type {import('next').NextConfig} */
const nextConfig = {
  cache: true,
  compress: true,
  images: {
    minimumCacheTTL: 60,
  },
};

export default nextConfig;

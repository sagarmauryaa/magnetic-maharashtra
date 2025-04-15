/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    minimumCacheTTL: 60,
  },
};

export default nextConfig;

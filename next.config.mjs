/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['rafalsprengel.com'],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
};

export default nextConfig;

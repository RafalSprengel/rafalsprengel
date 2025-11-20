import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['rafalsprengel.com'],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
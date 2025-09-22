export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'], // jeśli np. chcesz zablokować
      },
    ],
    sitemap: 'https://rafalsprengel.com/sitemap.xml',
  };
}

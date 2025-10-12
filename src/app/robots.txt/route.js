// app/robots.txt/route.js

export const dynamic = 'force-static';

export function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

Sitemap: https://rafalsprengel.com/sitemap.xml`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
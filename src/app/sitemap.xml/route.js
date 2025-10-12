// app/sitemap.xml/route.js

export const dynamic = 'force-static';

function generateSitemapXml(urls) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${url.url}</loc>
      <lastmod>${url.lastModified.toISOString()}</lastmod>
      <changefreq>${url.changeFrequency}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('')}
</urlset>`;
  return xml.trim();
}

export async function GET() {
  const baseUrl = 'https://rafalsprengel.com';
  const now = new Date();

  const urls = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const xmlContent = generateSitemapXml(urls);

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
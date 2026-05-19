import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Ścieżki do plików
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogArticlesPath = path.resolve(__dirname, 'src/data/blogArticles.js');
const publicDir = path.resolve(__dirname, 'public');
const sitemapPath = path.resolve(publicDir, 'sitemap.xml');
const robotsPath = path.resolve(publicDir, 'robots.txt');

// Podstawowy URL strony
const BASE_URL = 'https://life-ratownictwo.pl';

// Statyczne ścieżki
const staticRoutes = [
  '/',
  '/o-nas',
  '/blog',
  '/transport-medyczny',
  '/zabezpieczenia-medyczne',
  '/szkolenia-pierwsza-pomoc',
  '/transport-nfz',
  '/transport-prywatny',
  '/transport-miedzynarodowy',
  '/transport-miedzynarodowy?lang=de',
  '/uslugi-pielegniarskie'
];

async function generateSitemap() {
  console.log('Generating sitemap...');
  
  // Pobierz dynamiczne artykuły z bloga
  // Używamy dynamicznego importu, aby pobrać dane
  let blogSlugs = [];
  try {
    const module = await import(`file://${blogArticlesPath}`);
    if (module.blogArticles) {
      blogSlugs = module.blogArticles.map(article => `/blog/${article.slug}`);
    }
  } catch (error) {
    console.error('Błąd podczas ładowania artykułów:', error);
  }

  const allRoutes = [...staticRoutes, ...blogSlugs];

  // Generowanie zawartości XML
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/blog/') ? '0.7' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  // Zapisz sitemap.xml
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`Sitemap generated successfully at ${sitemapPath} with ${allRoutes.length} URLs.`);

  // Generowanie robots.txt
  const robotsContent = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync(robotsPath, robotsContent, 'utf8');
  console.log(`robots.txt generated successfully at ${robotsPath}.`);
}

generateSitemap();

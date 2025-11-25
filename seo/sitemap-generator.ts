import fs from 'fs';
import path from 'path';

// Configuration
const BASE_URL = 'https://www.rgpvnotes.in';
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'sitemap.xml');

// Example data source - replace with your actual data fetching logic
// You might import your `getCourseData` or similar functions here
const staticRoutes = [
    '/',
    '/dashboard',
    '/about',
    '/contact',
];

// Mock dynamic data for demonstration
const dynamicRoutes = [
    '/dashboard/btech/cse/sem7/machine-learning',
    '/dashboard/btech/cse/sem7/machine-learning/unit-1',
    '/dashboard/btech/cse/sem7/machine-learning/unit-2',
    // ... fetch all your slugs here
];

function generateSitemap() {
    const allRoutes = [...staticRoutes, ...dynamicRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
            .map((route) => {
                return `
    <url>
        <loc>${BASE_URL}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
        <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`;
            })
            .join('')}
</urlset>`;

    // Ensure public directory exists
    const publicDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, sitemap);
    console.log(`Sitemap generated at ${OUTPUT_FILE}`);
}

generateSitemap();

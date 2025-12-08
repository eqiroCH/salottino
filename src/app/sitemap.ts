import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://salottino.ch';
  const locales = ['de', 'it'];
  const routes = ['', '/spezialitaeten', '/geschenkkoerbe', '/apero-catering', '/ueber-uns', '/kontakt', '/news'];
  
  // Generate sitemap for all routes and locales
  const entries: MetadataRoute.Sitemap = [];
  
  routes.forEach(route => {
    locales.forEach(locale => {
        entries.push({
            url: `${baseUrl}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.8,
        });
    });
  });

  return entries;
}


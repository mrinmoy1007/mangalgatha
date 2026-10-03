import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { journalArticlesData } from '@/data/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://mangalgatha.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/stories',
    '/destinations',
    '/journal',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const servicePages = servicesData.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const journalPages = journalArticlesData.map((art) => ({
    url: `${baseUrl}/journal/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...journalPages];
}

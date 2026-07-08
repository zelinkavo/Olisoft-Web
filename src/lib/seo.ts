/**
 * SEO Utilities
 *
 * Helpers for generating meta tags, JSON-LD structured
 * data, and Open Graph metadata.
 */

export interface SEOProps {
  title: string;
  description: string;
  lang?: 'es' | 'en';
  canonicalURL?: string;
  ogImage?: string;
  type?: 'website' | 'article';
}

/**
 * Generate JSON-LD structured data for OliSoft APPs
 */
export function generateOrganizationJsonLd(lang: 'es' | 'en' = 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OliSoft APPs',
    description:
      lang === 'es'
        ? 'Creadores de aplicaciones móviles con ingeniería de precisión'
        : 'Creators of precision-engineered mobile applications',
    url: 'https://olisoft-apps.pages.dev',
    brand: {
      '@type': 'Brand',
      name: 'OliSoft',
    },
  };
}

/**
 * Generate JSON-LD structured data for the website
 */
export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OliSoft APPs',
    url: 'https://olisoft-apps.pages.dev',
    inLanguage: ['es', 'en'],
  };
}

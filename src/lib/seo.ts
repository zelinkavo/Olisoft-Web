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
export function generateOrganizationJsonLd(siteUrl: string | URL, lang: 'es' | 'en' = 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OliSoft APPs',
    description:
      lang === 'es'
        ? 'Creadores de aplicaciones móviles con ingeniería de precisión'
        : 'Creators of precision-engineered mobile applications',
    url: siteUrl,
    brand: {
      '@type': 'Brand',
      name: 'OliSoft',
    },
  };
}

/**
 * Generate JSON-LD structured data for the website
 */
export function generateWebsiteJsonLd(siteUrl: string | URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OliSoft APPs',
    url: siteUrl,
    inLanguage: ['es', 'en'],
  };
}

/**
 * Generate JSON-LD structured data for a Software Application
 */
export function generateSoftwareAppJsonLd(
  siteUrl: string | URL,
  name: string,
  description: string,
  iconUrl: string,
  googlePlayUrl: string,
) {
  const imageUrl = new URL(iconUrl, siteUrl).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: googlePlayUrl,
    image: imageUrl,
    operatingSystem: 'Android',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

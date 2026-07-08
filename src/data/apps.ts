export interface App {
  id: string;
  slug: string;
  name: string;
  tagline: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  icon: string;
  googlePlayUrl: string;
  technologies: string[];
  color: string;
}

export const apps: App[] = [
  {
    id: 'simple-crypto-alerts',
    slug: 'simple-crypto-alerts',
    name: 'Simple Crypto Alerts',
    tagline: {
      es: 'Monitoreo de criptomonedas y alertas push en tiempo real',
      en: 'Real-time crypto monitoring and push alerts',
    },
    description: {
      es: 'Configura umbrales de precio para cualquier criptomoneda y recibe notificaciones al instante. Sin registro, sin complicaciones.',
      en: 'Set price thresholds for any cryptocurrency and get notified instantly. No sign-up, no hassle.',
    },
    icon: '\u26A1',
    googlePlayUrl: '',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'CoinGecko API'],
    color: '#d4a24e',
  },
  {
    id: 'wallapro',
    slug: 'wallapro',
    name: 'WallaPro',
    tagline: {
      es: 'Sniper inteligente para Wallapop',
      en: 'Smart sniper for Wallapop',
    },
    description: {
      es: 'Escanea Wallapop en segundo plano, encuentra chollos antes que nadie y te notifica al instante.',
      en: 'Scan Wallapop in the background, find deals before anyone else, and get notified instantly.',
    },
    icon: '\uD83C\uDFAF',
    googlePlayUrl: '',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Kotlin', 'SQLite'],
    color: '#5bb8a6',
  },
];

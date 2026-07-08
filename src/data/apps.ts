export interface Feature {
  icon: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export interface FAQItem {
  question: {
    es: string;
    en: string;
  };
  answer: {
    es: string;
    en: string;
  };
}

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
  features?: {
    es: Feature[];
    en: Feature[];
  };
  faq?: {
    es: FAQItem[];
    en: FAQItem[];
  };
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
    features: {
      es: [
        {
          icon: '\uD83D\uDD0D',
          title: { es: 'Escáner automático', en: 'Auto Scanner' },
          description: {
            es: 'Escanea Wallapop en segundo plano con un servicio foreground nativo Android. Intervalos configurables de 60 min (free) a 5 min (Ultra), con jitter anti-detección.',
            en: 'Scan Wallapop in the background with a native Android foreground service. Configurable intervals from 60 min (free) to 5 min (Ultra), with anti-detection jitter.',
          },
        },
        {
          icon: '\u26A1',
          title: { es: 'Búsquedas inteligentes', en: 'Smart Searches' },
          description: {
            es: 'Palabras clave, categorías, precio, filtros de texto, ubicación manual e importación directa de URLs de Wallapop.',
            en: 'Keywords, categories, price range, text filters, manual location and direct Wallapop URL import.',
          },
        },
        {
          icon: '\uD83D\uDCF8',
          title: { es: 'Feed de capturas', en: 'Captures Feed' },
          description: {
            es: 'Todas las capturas del escáner en un feed único con búsqueda en tiempo real, filtros por alerta, favoritos y archivados.',
            en: 'All scanner captures in a single feed with real-time search, alert filters, favorites and archived items.',
          },
        },
        {
          icon: '\uD83D\uDCCA',
          title: { es: 'Watchlist de precios', en: 'Price Watchlist' },
          description: {
            es: 'Sigue artículos específicos y recibe notificación cuando bajen de precio. Monitorización automática en cada ciclo de escaneo.',
            en: 'Track specific items and get notified when prices drop. Automatic monitoring on every scan cycle.',
          },
        },
        {
          icon: '\uD83D\uDD14',
          title: { es: 'Notificaciones avanzadas', en: 'Advanced Notifications' },
          description: {
            es: '4 modos configurables: agrupar todo, separar, agrupar por búsqueda o silencioso. Rate limit anti-spam y sonidos personalizados.',
            en: '4 configurable modes: group all, separate, group by search or silent. Anti-spam rate limiting and custom sounds.',
          },
        },
        {
          icon: '\u2B50',
          title: { es: 'Sistema de puntos', en: 'Points System' },
          description: {
            es: 'Gana puntos viendo vídeos y desbloquea más búsquedas, capturas y watchlist. Gratis, sin límites ocultos.',
            en: 'Earn points watching videos and unlock more searches, captures and watchlist. Free, no hidden limits.',
          },
        },
        {
          icon: '\uD83D\uDC51',
          title: { es: 'Modo Ultra', en: 'Ultra Mode' },
          description: {
            es: 'Pago único: 20 búsquedas, 500 capturas, intervalos de 5 min, filtros de texto, notificaciones avanzadas y sin anuncios.',
            en: 'One-time payment: 20 searches, 500 captures, 5 min intervals, text filters, advanced notifications and no ads.',
          },
        },
        {
          icon: '\uD83D\uDEE1\uFE0F',
          title: { es: 'Anti-detección', en: 'Anti-Detection' },
          description: {
            es: 'User-Agent dinámico, jitter en delays, rate limiting natural y sin scraping web. Todo vía API oficial.',
            en: 'Dynamic User-Agent, delay jitter, natural rate limiting and no web scraping. All via official API.',
          },
        },
      ],
      en: [
        {
          icon: '\uD83D\uDD0D',
          title: { es: 'Escáner automático', en: 'Auto Scanner' },
          description: {
            es: 'Escanea Wallapop en segundo plano con un servicio foreground nativo Android. Intervalos configurables de 60 min (free) a 5 min (Ultra), con jitter anti-detección.',
            en: 'Scan Wallapop in the background with a native Android foreground service. Configurable intervals from 60 min (free) to 5 min (Ultra), with anti-detection jitter.',
          },
        },
        {
          icon: '\u26A1',
          title: { es: 'Búsquedas inteligentes', en: 'Smart Searches' },
          description: {
            es: 'Palabras clave, categorías, precio, filtros de texto, ubicación manual e importación directa de URLs de Wallapop.',
            en: 'Keywords, categories, price range, text filters, manual location and direct Wallapop URL import.',
          },
        },
        {
          icon: '\uD83D\uDCF8',
          title: { es: 'Feed de capturas', en: 'Captures Feed' },
          description: {
            es: 'Todas las capturas del escáner en un feed único con búsqueda en tiempo real, filtros por alerta, favoritos y archivados.',
            en: 'All scanner captures in a single feed with real-time search, alert filters, favorites and archived items.',
          },
        },
        {
          icon: '\uD83D\uDCCA',
          title: { es: 'Watchlist de precios', en: 'Price Watchlist' },
          description: {
            es: 'Sigue artículos específicos y recibe notificación cuando bajen de precio. Monitorización automática en cada ciclo de escaneo.',
            en: 'Track specific items and get notified when prices drop. Automatic monitoring on every scan cycle.',
          },
        },
        {
          icon: '\uD83D\uDD14',
          title: { es: 'Notificaciones avanzadas', en: 'Advanced Notifications' },
          description: {
            es: '4 modos configurables: agrupar todo, separar, agrupar por búsqueda o silencioso. Rate limit anti-spam y sonidos personalizados.',
            en: '4 configurable modes: group all, separate, group by search or silent. Anti-spam rate limiting and custom sounds.',
          },
        },
        {
          icon: '\u2B50',
          title: { es: 'Sistema de puntos', en: 'Points System' },
          description: {
            es: 'Gana puntos viendo vídeos y desbloquea más búsquedas, capturas y watchlist. Gratis, sin límites ocultos.',
            en: 'Earn points watching videos and unlock more searches, captures and watchlist. Free, no hidden limits.',
          },
        },
        {
          icon: '\uD83D\uDC51',
          title: { es: 'Modo Ultra', en: 'Ultra Mode' },
          description: {
            es: 'Pago único: 20 búsquedas, 500 capturas, intervalos de 5 min, filtros de texto, notificaciones avanzadas y sin anuncios.',
            en: 'One-time payment: 20 searches, 500 captures, 5 min intervals, text filters, advanced notifications and no ads.',
          },
        },
        {
          icon: '\uD83D\uDEE1\uFE0F',
          title: { es: 'Anti-detección', en: 'Anti-Detection' },
          description: {
            es: 'User-Agent dinámico, jitter en delays, rate limiting natural y sin scraping web. Todo vía API oficial.',
            en: 'Dynamic User-Agent, delay jitter, natural rate limiting and no web scraping. All via official API.',
          },
        },
      ],
    },
    faq: {
      es: [
        {
          question: { es: '¿Es gratis?', en: 'Is it free?' },
          answer: {
            es: 'Sí. WallaPro tiene un modo free con 2 búsquedas, 10 capturas y 2 watchlist. Puedes ganar puntos viendo vídeos para desbloquear más límites sin pagar.',
            en: 'Yes. WallaPro has a free mode with 2 searches, 10 captures and 2 watchlist. You can earn points watching videos to unlock more limits without paying.',
          },
        },
        {
          question: { es: '¿Necesito cuenta de Wallapop?', en: 'Do I need a Wallapop account?' },
          answer: {
            es: 'No. WallaPro funciona directamente contra la API pública de Wallapop. No necesitas registrarte ni iniciar sesión en Wallapop para usar la app.',
            en: 'No. WallaPro works directly against Wallapop\'s public API. You don\'t need to sign up or log in to Wallapop to use the app.',
          },
        },
        {
          question: { es: '¿Me pueden banear de Wallapop?', en: 'Can I get banned from Wallapop?' },
          answer: {
            es: 'WallaPro usa la API oficial de Wallapop con User-Agent dinámico, jitter anti-detección y rate limiting natural. No realiza scraping web y cumple con los patrones de tráfico de una app normal.',
            en: 'WallaPro uses Wallapop\'s official API with dynamic User-Agent, anti-detection jitter and natural rate limiting. It doesn\'t do web scraping and follows normal traffic patterns.',
          },
        },
        {
          question: { es: '¿Qué incluye el modo Ultra?', en: 'What does Ultra mode include?' },
          answer: {
            es: 'Pago único con límites desbloqueados: 20 búsquedas, 500 capturas, 15 watchlist, intervalos de hasta 5 minutos, filtros de texto, notificaciones avanzadas y sin anuncios.',
            en: 'One-time payment with unlocked limits: 20 searches, 500 captures, 15 watchlist, intervals down to 5 minutes, text filters, advanced notifications and no ads.',
          },
        },
        {
          question: { es: '¿Funciona en iOS?', en: 'Does it work on iOS?' },
          answer: {
            es: 'De momento WallaPro está disponible solo en Android. iOS y web están en la roadmap pero no hay fecha confirmada.',
            en: 'For now WallaPro is only available on Android. iOS and web are on the roadmap but there is no confirmed date.',
          },
        },
        {
          question: { es: '¿Cómo funciona el escaneo en segundo plano?', en: 'How does background scanning work?' },
          answer: {
            es: 'WallaPro usa un servicio foreground nativo Android (Kotlin + AlarmManager) que ejecuta búsquedas periódicas aunque la app esté cerrada. El intervalo es configurable entre 60 minutos (free) y 5 minutos (Ultra).',
            en: 'WallaPro uses a native Android foreground service (Kotlin + AlarmManager) that runs periodic searches even when the app is closed. The interval is configurable between 60 minutes (free) and 5 minutes (Ultra).',
          },
        },
        {
          question: { es: '¿Puedo configurar la ubicación?', en: 'Can I configure the location?' },
          answer: {
            es: 'Sí. Puedes usar tu ubicación actual o introducir coordenadas manuales para acotar las búsquedas a una zona concreta. Si no configuras nada, la app resuelve la ubicación por IP.',
            en: 'Yes. You can use your current location or enter manual coordinates to narrow searches to a specific area. If you don\'t configure anything, the app resolves location by IP.',
          },
        },
      ],
      en: [
        {
          question: { es: '¿Es gratis?', en: 'Is it free?' },
          answer: {
            es: 'Sí. WallaPro tiene un modo free con 2 búsquedas, 10 capturas y 2 watchlist. Puedes ganar puntos viendo vídeos para desbloquear más límites sin pagar.',
            en: 'Yes. WallaPro has a free mode with 2 searches, 10 captures and 2 watchlist. You can earn points watching videos to unlock more limits without paying.',
          },
        },
        {
          question: { es: '¿Necesito cuenta de Wallapop?', en: 'Do I need a Wallapop account?' },
          answer: {
            es: 'No. WallaPro funciona directamente contra la API pública de Wallapop. No necesitas registrarte ni iniciar sesión en Wallapop para usar la app.',
            en: 'No. WallaPro works directly against Wallapop\'s public API. You don\'t need to sign up or log in to Wallapop to use the app.',
          },
        },
        {
          question: { es: '¿Me pueden banear de Wallapop?', en: 'Can I get banned from Wallapop?' },
          answer: {
            es: 'WallaPro usa la API oficial de Wallapop con User-Agent dinámico, jitter anti-detección y rate limiting natural. No realiza scraping web y cumple con los patrones de tráfico de una app normal.',
            en: 'WallaPro uses Wallapop\'s official API with dynamic User-Agent, anti-detection jitter and natural rate limiting. It doesn\'t do web scraping and follows normal traffic patterns.',
          },
        },
        {
          question: { es: '¿Qué incluye el modo Ultra?', en: 'What does Ultra mode include?' },
          answer: {
            es: 'Pago único con límites desbloqueados: 20 búsquedas, 500 capturas, 15 watchlist, intervalos de hasta 5 minutos, filtros de texto, notificaciones avanzadas y sin anuncios.',
            en: 'One-time payment with unlocked limits: 20 searches, 500 captures, 15 watchlist, intervals down to 5 minutes, text filters, advanced notifications and no ads.',
          },
        },
        {
          question: { es: '¿Funciona en iOS?', en: 'Does it work on iOS?' },
          answer: {
            es: 'De momento WallaPro está disponible solo en Android. iOS y web están en la roadmap pero no hay fecha confirmada.',
            en: 'For now WallaPro is only available on Android. iOS and web are on the roadmap but there is no confirmed date.',
          },
        },
        {
          question: { es: '¿Cómo funciona el escaneo en segundo plano?', en: 'How does background scanning work?' },
          answer: {
            es: 'WallaPro usa un servicio foreground nativo Android (Kotlin + AlarmManager) que ejecuta búsquedas periódicas aunque la app esté cerrada. El intervalo es configurable entre 60 minutos (free) y 5 minutos (Ultra).',
            en: 'WallaPro uses a native Android foreground service (Kotlin + AlarmManager) that runs periodic searches even when the app is closed. The interval is configurable between 60 minutes (free) and 5 minutes (Ultra).',
          },
        },
        {
          question: { es: '¿Puedo configurar la ubicación?', en: 'Can I configure the location?' },
          answer: {
            es: 'Sí. Puedes usar tu ubicación actual o introducir coordenadas manuales para acotar las búsquedas a una zona concreta. Si no configuras nada, la app resuelve la ubicación por IP.',
            en: 'Yes. You can use your current location or enter manual coordinates to narrow searches to a specific area. If you don\'t configure anything, the app resolves location by IP.',
          },
        },
      ],
    },
  },
];

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
      es: 'Alertas de precio cripto y monitorización en tiempo real',
      en: 'Real-time crypto price alerts and monitoring',
    },
    description: {
      es: 'Configura alertas en segundos y deja que la app supervise el mercado por ti. Notificaciones precisas en tiempo real, incluso con la app cerrada.',
      en: 'Set alerts in seconds and let the app monitor the market for you. Accurate real-time notifications, even when the app is closed.',
    },
    icon: '\u26A1',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.simplecryptoalerts.app',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'CoinGecko API'],
    color: '#d4a24e',
    features: {
      es: [
        {
          icon: '\uD83D\uDD14',
          title: { es: 'Alertas inteligentes', en: 'Smart Alerts' },
          description: {
            es: 'Crea alertas por precio o porcentaje y recíbelas exactamente cuando se activan. Umbral fijo o cambio porcentual.',
            en: 'Create alerts by price or percentage and receive them exactly when they trigger. Fixed threshold or percentage change.',
          },
        },
        {
          icon: '\uD83C\uDF10',
          title: { es: 'Crypto Live Monitor', en: 'Crypto Live Monitor' },
          description: {
            es: 'Monitorización continua de precios en segundo plano para que tus alertas sean siempre fiables y estén actualizadas.',
            en: 'Continuous background price monitoring so your alerts are always reliable and up to date.',
          },
        },
        {
          icon: '\uD83D\uDD0A',
          title: { es: 'Super Sound Alert', en: 'Super Sound Alert' },
          description: {
            es: 'Avisos visuales acompañados de una alarma sonora clara y fácilmente reconocible. Modo Pro para alertas más intensas.',
            en: 'Visual notifications accompanied by a clear, easily recognizable sound alarm. Pro mode for more intense alerts.',
          },
        },
        {
          icon: '\u26A1',
          title: { es: 'Rápida y efectiva', en: 'Fast and Effective' },
          description: {
            es: 'Configura alertas en segundos con una interfaz clara e intuitiva, sin configuraciones confusas.',
            en: 'Set alerts in seconds with a clear, intuitive interface. No confusing settings.',
          },
        },
        {
          icon: '\uD83D\uDCCF',
          title: { es: 'Tipos de alerta versátiles', en: 'Versatile Alert Types' },
          description: {
            es: 'Umbral fijo (por encima/por debajo) o cambio porcentual (subida/bajada). Tú eliges cómo quieres ser notificado.',
            en: 'Fixed threshold (above/below) or percentage change (up/down). You choose how you want to be notified.',
          },
        },
        {
          icon: '\uD83D\uDEE0\uFE0F',
          title: { es: 'Gestión eficiente', en: 'Efficient Management' },
          description: {
            es: 'Pausa, edita, duplica o elimina alertas fácilmente desde un panel central.',
            en: 'Pause, edit, duplicate or delete alerts easily from a central panel.',
          },
        },
        {
          icon: '\uD83D\uDCCA',
          title: { es: 'Cobertura de mercado', en: 'Market Coverage' },
          description: {
            es: 'Sigue las 20 criptomonedas más populares, incluyendo Bitcoin, Ethereum y principales altcoins.',
            en: 'Track the 20 most popular cryptocurrencies, including Bitcoin, Ethereum and major altcoins.',
          },
        },
        {
          icon: '\u2B50',
          title: { es: 'Extras opcionales', en: 'Optional Extras' },
          description: {
            es: 'Marca tus criptos favoritas y usa el modo día/noche para una experiencia más cómoda.',
            en: 'Mark your favorite cryptos and use day/night mode for a more comfortable experience.',
          },
        },
      ],
      en: [
        {
          icon: '\uD83D\uDD14',
          title: { es: 'Alertas inteligentes', en: 'Smart Alerts' },
          description: {
            es: 'Crea alertas por precio o porcentaje y recíbelas exactamente cuando se activan. Umbral fijo o cambio porcentual.',
            en: 'Create alerts by price or percentage and receive them exactly when they trigger. Fixed threshold or percentage change.',
          },
        },
        {
          icon: '\uD83C\uDF10',
          title: { es: 'Crypto Live Monitor', en: 'Crypto Live Monitor' },
          description: {
            es: 'Monitorización continua de precios en segundo plano para que tus alertas sean siempre fiables y estén actualizadas.',
            en: 'Continuous background price monitoring so your alerts are always reliable and up to date.',
          },
        },
        {
          icon: '\uD83D\uDD0A',
          title: { es: 'Super Sound Alert', en: 'Super Sound Alert' },
          description: {
            es: 'Avisos visuales acompañados de una alarma sonora clara y fácilmente reconocible. Modo Pro para alertas más intensas.',
            en: 'Visual notifications accompanied by a clear, easily recognizable sound alarm. Pro mode for more intense alerts.',
          },
        },
        {
          icon: '\u26A1',
          title: { es: 'Rápida y efectiva', en: 'Fast and Effective' },
          description: {
            es: 'Configura alertas en segundos con una interfaz clara e intuitiva, sin configuraciones confusas.',
            en: 'Set alerts in seconds with a clear, intuitive interface. No confusing settings.',
          },
        },
        {
          icon: '\uD83D\uDCCF',
          title: { es: 'Tipos de alerta versátiles', en: 'Versatile Alert Types' },
          description: {
            es: 'Umbral fijo (por encima/por debajo) o cambio porcentual (subida/bajada). Tú eliges cómo quieres ser notificado.',
            en: 'Fixed threshold (above/below) or percentage change (up/down). You choose how you want to be notified.',
          },
        },
        {
          icon: '\uD83D\uDEE0\uFE0F',
          title: { es: 'Gestión eficiente', en: 'Efficient Management' },
          description: {
            es: 'Pausa, edita, duplica o elimina alertas fácilmente desde un panel central.',
            en: 'Pause, edit, duplicate or delete alerts easily from a central panel.',
          },
        },
        {
          icon: '\uD83D\uDCCA',
          title: { es: 'Cobertura de mercado', en: 'Market Coverage' },
          description: {
            es: 'Sigue las 20 criptomonedas más populares, incluyendo Bitcoin, Ethereum y principales altcoins.',
            en: 'Track the 20 most popular cryptocurrencies, including Bitcoin, Ethereum and major altcoins.',
          },
        },
        {
          icon: '\u2B50',
          title: { es: 'Extras opcionales', en: 'Optional Extras' },
          description: {
            es: 'Marca tus criptos favoritas y usa el modo día/noche para una experiencia más cómoda.',
            en: 'Mark your favorite cryptos and use day/night mode for a more comfortable experience.',
          },
        },
      ],
    },
    faq: {
      es: [
        {
          question: { es: '¿Es gratis?', en: 'Is it free?' },
          answer: {
            es: 'Sí. Simple Crypto Alerts tiene un plan gratuito con Crypto Live Monitor, notificaciones push, sonido estándar, favoritos y modo día/noche.',
            en: 'Yes. Simple Crypto Alerts has a free plan with Crypto Live Monitor, push notifications, standard sound, favorites and day/night mode.',
          },
        },
        {
          question: { es: '¿Qué incluye el modo Pro?', en: 'What does Pro mode include?' },
          answer: {
            es: 'Hasta 20 alertas activas, Crypto Live Monitor ULTRA en tiempo real, Super Sound Alert, prioridad de notificaciones y rendimiento optimizado.',
            en: 'Up to 20 active alerts, real-time ULTRA Crypto Live Monitor, Super Sound Alert, notification priority and optimized performance.',
          },
        },
        {
          question: { es: '¿Funciona con la app cerrada?', en: 'Does it work with the app closed?' },
          answer: {
            es: 'Sí. El Crypto Live Monitor ejecuta monitorización continua en segundo plano, incluso con la app cerrada, para que tus alertas siempre estén actualizadas.',
            en: 'Yes. The Crypto Live Monitor runs continuous background monitoring, even when the app is closed, so your alerts are always up to date.',
          },
        },
        {
          question: { es: '¿Qué criptomonedas puedo seguir?', en: 'Which cryptocurrencies can I track?' },
          answer: {
            es: 'Las 20 criptomonedas más populares del mercado, incluyendo Bitcoin (BTC), Ethereum (ETH) y las principales altcoins.',
            en: 'The 20 most popular cryptocurrencies on the market, including Bitcoin (BTC), Ethereum (ETH) and major altcoins.',
          },
        },
        {
          question: { es: '¿Necesito crear cuenta?', en: 'Do I need to create an account?' },
          answer: {
            es: 'No. Simple Crypto Alerts funciona sin registro. Descargas, configuras tus alertas y listo.',
            en: 'No. Simple Crypto Alerts works without registration. Download, set your alerts and you are done.',
          },
        },
        {
          question: { es: '¿Qué tipos de alerta hay?', en: 'What types of alerts are there?' },
          answer: {
            es: 'Dos tipos: umbral fijo (notificarte cuando el precio suba o baje de un valor concreto) y cambio porcentual (notificarte cuando el precio varíe un porcentaje determinado).',
            en: 'Two types: fixed threshold (notify you when the price goes above or below a specific value) and percentage change (notify you when the price changes by a determined percentage).',
          },
        },
      ],
      en: [
        {
          question: { es: '¿Es gratis?', en: 'Is it free?' },
          answer: {
            es: 'Sí. Simple Crypto Alerts tiene un plan gratuito con Crypto Live Monitor, notificaciones push, sonido estándar, favoritos y modo día/noche.',
            en: 'Yes. Simple Crypto Alerts has a free plan with Crypto Live Monitor, push notifications, standard sound, favorites and day/night mode.',
          },
        },
        {
          question: { es: '¿Qué incluye el modo Pro?', en: 'What does Pro mode include?' },
          answer: {
            es: 'Hasta 20 alertas activas, Crypto Live Monitor ULTRA en tiempo real, Super Sound Alert, prioridad de notificaciones y rendimiento optimizado.',
            en: 'Up to 20 active alerts, real-time ULTRA Crypto Live Monitor, Super Sound Alert, notification priority and optimized performance.',
          },
        },
        {
          question: { es: '¿Funciona con la app cerrada?', en: 'Does it work with the app closed?' },
          answer: {
            es: 'Sí. El Crypto Live Monitor ejecuta monitorización continua en segundo plano, incluso con la app cerrada, para que tus alertas siempre estén actualizadas.',
            en: 'Yes. The Crypto Live Monitor runs continuous background monitoring, even when the app is closed, so your alerts are always up to date.',
          },
        },
        {
          question: { es: '¿Qué criptomonedas puedo seguir?', en: 'Which cryptocurrencies can I track?' },
          answer: {
            es: 'Las 20 criptomonedas más populares del mercado, incluyendo Bitcoin (BTC), Ethereum (ETH) y las principales altcoins.',
            en: 'The 20 most popular cryptocurrencies on the market, including Bitcoin (BTC), Ethereum (ETH) and major altcoins.',
          },
        },
        {
          question: { es: '¿Necesito crear cuenta?', en: 'Do I need to create an account?' },
          answer: {
            es: 'No. Simple Crypto Alerts funciona sin registro. Descargas, configuras tus alertas y listo.',
            en: 'No. Simple Crypto Alerts works without registration. Download, set your alerts and you are done.',
          },
        },
        {
          question: { es: '¿Qué tipos de alerta hay?', en: 'What types of alerts are there?' },
          answer: {
            es: 'Dos tipos: umbral fijo (notificarte cuando el precio suba o baje de un valor concreto) y cambio porcentual (notificarte cuando el precio varíe un porcentaje determinado).',
            en: 'Two types: fixed threshold (notify you when the price goes above or below a specific value) and percentage change (notify you when the price changes by a determined percentage).',
          },
        },
      ],
    },
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

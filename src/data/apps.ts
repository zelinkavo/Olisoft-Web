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
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.wallapro.app',
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
            es: '<p>Sí. WallaPro tiene un plan <strong>Free</strong> completamente funcional con:</p><ul><li><strong>2 búsquedas inteligentes</strong> activas simultáneamente</li><li><strong>10 capturas</strong> en el feed</li><li><strong>2 watchlist</strong> de seguimiento de precios</li><li>Escaneo cada <strong>60 minutos</strong></li></ul><p>Además, puedes ganar puntos viendo vídeos para desbloquear límites extra sin pagar nada. Si necesitas más potencia, el modo <strong>Ultra</strong> es un pago único que elimina todas las restricciones.</p>',
            en: '<p>Yes. WallaPro has a fully functional <strong>Free</strong> plan with:</p><ul><li><strong>2 smart searches</strong> active simultaneously</li><li><strong>10 captures</strong> in the feed</li><li><strong>2 price watchlists</strong></li><li>Scanning every <strong>60 minutes</strong></li></ul><p>Plus, you can earn points by watching videos to unlock extra limits at no cost. If you need more power, the <strong>Ultra</strong> mode is a one-time purchase that removes all restrictions.</p>',
          },
        },
        {
          question: { es: '¿Qué incluye el modo Ultra?', en: 'What does Ultra mode include?' },
          answer: {
            es: '<p><strong>Ultra</strong> es un pago único (no suscripción) que desbloquea todos los límites:</p><ul><li><strong>20 búsquedas</strong> activas</li><li><strong>500 capturas</strong> en el feed</li><li><strong>15 watchlist</strong> de precios</li><li>Intervalos de escaneo de hasta <strong>5 minutos</strong></li><li><strong>Filtros de texto</strong> (palabras prohibidas y obligadas)</li><li><strong>Notificaciones avanzadas</strong> con sonidos personalizados</li><li><strong>Sin anuncios</strong></li></ul><p>Una vez comprado, es tuyo para siempre. No hay suscripciones ni pagos recurrentes.</p>',
            en: '<p><strong>Ultra</strong> is a one-time payment (not a subscription) that unlocks all limits:</p><ul><li><strong>20 searches</strong> active</li><li><strong>500 captures</strong> in the feed</li><li><strong>15 price watchlists</strong></li><li>Scan intervals down to <strong>5 minutes</strong></li><li><strong>Text filters</strong> (prohibited and required words)</li><li><strong>Advanced notifications</strong> with custom sounds</li><li><strong>No ads</strong></li></ul><p>Once purchased, it\'s yours forever. No subscriptions or recurring payments.</p>',
          },
        },
        {
          question: { es: '¿Necesito cuenta de Wallapop?', en: 'Do I need a Wallapop account?' },
          answer: {
            es: '<p>No. WallaPro funciona directamente contra la API pública de Wallapop. No necesitas registrarte ni iniciar sesión en Wallapop para usar la app.</p><p>Toda la configuración se almacena localmente en tu dispositivo. Tu privacidad está protegida: no se recogen datos personales ni credenciales.</p>',
            en: '<p>No. WallaPro works directly against Wallapop\'s public API. You don\'t need to sign up or log in to Wallapop to use the app.</p><p>All configuration is stored locally on your device. Your privacy is protected: no personal data or credentials are collected.</p>',
          },
        },
        {
          question: { es: '¿Cómo configuro una búsqueda inteligente?', en: 'How do I set up a smart search?' },
          answer: {
            es: '<p>Es muy sencillo. Desde la pantalla principal pulsa <strong>\"Nueva búsqueda\"</strong> y configura:</p><ul><li><strong>Palabras clave:</strong> lo que quieres encontrar (ej. \"iPhone 15\", \"Mesa comedor\")</li><li><strong>Categoría:</strong> elige entre las categorías de Wallapop (electrónica, motor, inmobiliaria, etc.)</li><li><strong>Precio mínimo y máximo:</strong> para acotar los resultados</li><li><strong>Ubicación:</strong> usa tu ubicación actual o introduce coordenadas manuales</li><li><strong>Filtros dinámicos:</strong> según la categoría aparecen filtros específicos (año, km, metros, etc.)</li><li><strong>Filtros de texto:</strong> palabras prohibidas y obligadas (solo Ultra)</li></ul><p>También puedes importar una URL de Wallapop directamente para crear la búsqueda automáticamente.</p>',
            en: '<p>It\'s very simple. From the main screen tap <strong>\"New search\"</strong> and configure:</p><ul><li><strong>Keywords:</strong> what you want to find (e.g. \"iPhone 15\", \"Dining table\")</li><li><strong>Category:</strong> choose from Wallapop categories (electronics, motor, real estate, etc.)</li><li><strong>Min and max price:</strong> to narrow results</li><li><strong>Location:</strong> use your current location or enter manual coordinates</li><li><strong>Dynamic filters:</strong> category-specific filters appear automatically (year, km, sqm, etc.)</li><li><strong>Text filters:</strong> prohibited and required words (Ultra only)</li></ul><p>You can also import a Wallapop URL directly to create the search automatically.</p>',
          },
        },
        {
          question: { es: '¿Cómo funciona la Watchlist de precios?', en: 'How does the Price Watchlist work?' },
          answer: {
            es: '<p>La <strong>Watchlist</strong> (o radar de precios) te permite seguir artículos específicos de Wallapop y recibir una notificación cuando bajen de precio.</p><p>Cómo funciona:</p><ul><li>Añade cualquier artículo desde el feed de capturas o desde Wallapop</li><li>WallaPro monitoriza automáticamente su precio en cada ciclo de escaneo</li><li>Si el precio baja, recibes una <strong>notificación inmediata</strong></li><li>El plan Free incluye <strong>2 watchlist</strong>, Ultra incluye <strong>15</strong></li></ul>',
            en: '<p>The <strong>Watchlist</strong> (price radar) lets you track specific Wallapop items and get notified when they drop in price.</p><p>How it works:</p><ul><li>Add any item from the captures feed or from Wallapop</li><li>WallaPro automatically monitors its price on every scan cycle</li><li>If the price drops, you get an <strong>immediate notification</strong></li><li>Free plan includes <strong>2 watchlists</strong>, Ultra includes <strong>15</strong></li></ul>',
          },
        },
        {
          question: { es: '¿Puedo importar URLs de Wallapop?', en: 'Can I import Wallapop URLs?' },
          answer: {
            es: '<p>Sí. Es uno de los métodos más rápidos para crear una búsqueda:</p><ol><li>Copia la URL de cualquier búsqueda o artículo de Wallapop</li><li>En WallaPro, pulsa <strong>\"Importar URL\"</strong></li><li>La app extrae automáticamente los filtros (palabras clave, categoría, precio, ubicación)</li></ol><p>Así configuras una búsqueda en segundos sin tener que rellenar nada manualmente.</p>',
            en: '<p>Yes. It\'s one of the fastest ways to create a search:</p><ol><li>Copy the URL of any Wallapop search or item</li><li>In WallaPro, tap <strong>\"Import URL\"</strong></li><li>The app automatically extracts filters (keywords, category, price, location)</li></ol><p>You can set up a search in seconds without filling anything manually.</p>',
          },
        },
        {
          question: { es: '¿Cómo funciona el escaneo en segundo plano?', en: 'How does background scanning work?' },
          answer: {
            es: '<p>WallaPro utiliza un <strong>servicio foreground nativo de Android</strong> (implementado en Kotlin con AlarmManager) que ejecuta las búsquedas periódicamente incluso con la app cerrada.</p><p>Características técnicas:</p><ul><li><strong>Intervalo Free:</strong> cada 60 minutos</li><li><strong>Intervalo Ultra:</strong> desde 5 minutos</li><li><strong>Jitter anti-detección:</strong> los intervalos varían ligeramente para parecer tráfico humano</li><li><strong>Barajado de alertas:</strong> las notificaciones se distribuyen para evitar picos</li><li>El servicio se muestra como una notificación persistente, lo que evita que Android lo detenga</li></ul>',
            en: '<p>WallaPro uses a <strong>native Android foreground service</strong> (implemented in Kotlin with AlarmManager) that runs searches periodically even when the app is closed.</p><p>Technical features:</p><ul><li><strong>Free interval:</strong> every 60 minutes</li><li><strong>Ultra interval:</strong> from 5 minutes</li><li><strong>Anti-detection jitter:</strong> intervals vary slightly to mimic human traffic</li><li><strong>Alert shuffling:</strong> notifications are distributed to avoid spikes</li><li>The service shows as a persistent notification, preventing Android from stopping it</li></ul>',
          },
        },
        {
          question: { es: '¿Cómo funciona el sistema de notificaciones?', en: 'How does the notification system work?' },
          answer: {
            es: '<p>WallaPro tiene <strong>4 modos de notificación</strong> configurables:</p><ul><li><strong>Agrupar todo:</strong> todas las capturas en una sola notificación periódica</li><li><strong>Separar:</strong> cada captura genera su propia notificación</li><li><strong>Agrupar por búsqueda:</strong> una notificación por cada búsqueda con resultados nuevos</li><li><strong>Silencioso:</strong> las capturas se guardan pero no se notifica</li></ul><p>El sistema incluye <strong>rate limit anti-spam</strong> para evitar saturaciones y, en modo Ultra, puedes elegir sonidos personalizados para cada tipo de alerta.</p>',
            en: '<p>WallaPro has <strong>4 configurable notification modes</strong>:</p><ul><li><strong>Group all:</strong> all captures in a single periodic notification</li><li><strong>Separate:</strong> each capture generates its own notification</li><li><strong>Group by search:</strong> one notification per search with new results</li><li><strong>Silent:</strong> captures are saved but no notifications are sent</li></ul><p>The system includes <strong>anti-spam rate limiting</strong> to prevent overload, and in Ultra mode you can choose custom sounds for each alert type.</p>',
          },
        },
        {
          question: { es: '¿Consume mucha batería?', en: 'Does it drain the battery?' },
          answer: {
            es: '<p>WallaPro está optimizado para minimizar el consumo de batería:</p><ul><li>Usa <strong>AlarmManager</strong> de Android, que programa tareas sin mantener la CPU activa continuamente</li><li>Las peticiones a la API se realizan en ráfagas cortas y eficientes</li><li>El intervalo de 60 minutos en Free apenas tiene impacto en la batería diaria</li><li>El servicio foreground tiene bajo overhead y Android lo gestiona eficientemente</li></ul><p>En términos reales, el impacto es similar al de cualquier app de notificaciones: negligible en uso normal.</p>',
            en: '<p>WallaPro is optimized to minimize battery consumption:</p><ul><li>Uses Android\'s <strong>AlarmManager</strong>, which schedules tasks without keeping the CPU constantly active</li><li>API requests are made in short, efficient bursts</li><li>The 60-minute Free interval has barely any impact on daily battery life</li><li>The foreground service has low overhead and Android manages it efficiently</li></ul><p>In real terms, the impact is similar to any notification app: negligible during normal use.</p>',
          },
        },
        {
          question: { es: '¿Puedo configurar la ubicación?', en: 'Can I configure the location?' },
          answer: {
            es: '<p>Sí. WallaPro te permite controlar la ubicación de tus búsquedas de varias formas:</p><ul><li><strong>Ubicación actual:</strong> usa el GPS de tu dispositivo para buscar cerca de ti</li><li><strong>Coordenadas manuales:</strong> introduce latitud y longitud para acotar a una zona concreta</li><li><strong>Por defecto:</strong> si no configuras nada, la app resuelve la ubicación aproximada por IP</li></ul><p>Esto es especialmente útil para búsquedas de segunda mano donde la cercanía importa: muebles, coches, inmuebles, etc.</p>',
            en: '<p>Yes. WallaPro lets you control the location of your searches in several ways:</p><ul><li><strong>Current location:</strong> uses your device\'s GPS to search near you</li><li><strong>Manual coordinates:</strong> enter latitude and longitude to target a specific area</li><li><strong>Default:</strong> if you don\'t configure anything, the app resolves approximate location by IP</li></ul><p>This is especially useful for second-hand searches where proximity matters: furniture, cars, real estate, etc.</p>',
          },
        },
        {
          question: { es: '¿Cómo consigo puntos gratis?', en: 'How do I earn free points?' },
          answer: {
            es: '<p>El <strong>sistema de puntos</strong> te permite desbloquear límites extra sin pagar:</p><ul><li>En la app hay un botón <strong>\"Gana puntos\"</strong> que muestra vídeos cortos</li><li>Por cada vídeo completado recibes puntos</li><li>Con los puntos puedes aumentar temporalmente tus límites de búsquedas, capturas y watchlist</li><li>Los puntos se consumen al desbloquear límites y puedes ganar más en cualquier momento</li></ul><p>Es una alternativa gratuita al modo Ultra para quienes prefieren no pagar pero necesitan más margen del que ofrece el plan Free base.</p>',
            en: '<p>The <strong>points system</strong> lets you unlock extra limits without paying:</p><ul><li>In the app there\'s a <strong>\"Earn points\"</strong> button that shows short videos</li><li>You earn points for each completed video</li><li>Points can be used to temporarily increase your search, capture and watchlist limits</li><li>Points are consumed when unlocking limits and you can earn more at any time</li></ul><p>It\'s a free alternative to Ultra mode for those who prefer not to pay but need more room than the base Free plan offers.</p>',
          },
        },
      ],
      en: [
        {
          question: { es: '¿Es gratis?', en: 'Is it free?' },
          answer: {
            es: '<p>Sí. WallaPro tiene un plan <strong>Free</strong> completamente funcional con:</p><ul><li><strong>2 búsquedas inteligentes</strong> activas simultáneamente</li><li><strong>10 capturas</strong> en el feed</li><li><strong>2 watchlist</strong> de seguimiento de precios</li><li>Escaneo cada <strong>60 minutos</strong></li></ul><p>Además, puedes ganar puntos viendo vídeos para desbloquear límites extra sin pagar nada. Si necesitas más potencia, el modo <strong>Ultra</strong> es un pago único que elimina todas las restricciones.</p>',
            en: '<p>Yes. WallaPro has a fully functional <strong>Free</strong> plan with:</p><ul><li><strong>2 smart searches</strong> active simultaneously</li><li><strong>10 captures</strong> in the feed</li><li><strong>2 price watchlists</strong></li><li>Scanning every <strong>60 minutes</strong></li></ul><p>Plus, you can earn points by watching videos to unlock extra limits at no cost. If you need more power, the <strong>Ultra</strong> mode is a one-time purchase that removes all restrictions.</p>',
          },
        },
        {
          question: { es: '¿Qué incluye el modo Ultra?', en: 'What does Ultra mode include?' },
          answer: {
            es: '<p><strong>Ultra</strong> es un pago único (no suscripción) que desbloquea todos los límites:</p><ul><li><strong>20 búsquedas</strong> activas</li><li><strong>500 capturas</strong> en el feed</li><li><strong>15 watchlist</strong> de precios</li><li>Intervalos de escaneo de hasta <strong>5 minutos</strong></li><li><strong>Filtros de texto</strong> (palabras prohibidas y obligadas)</li><li><strong>Notificaciones avanzadas</strong> con sonidos personalizados</li><li><strong>Sin anuncios</strong></li></ul><p>Una vez comprado, es tuyo para siempre. No hay suscripciones ni pagos recurrentes.</p>',
            en: '<p><strong>Ultra</strong> is a one-time payment (not a subscription) that unlocks all limits:</p><ul><li><strong>20 searches</strong> active</li><li><strong>500 captures</strong> in the feed</li><li><strong>15 price watchlists</strong></li><li>Scan intervals down to <strong>5 minutes</strong></li><li><strong>Text filters</strong> (prohibited and required words)</li><li><strong>Advanced notifications</strong> with custom sounds</li><li><strong>No ads</strong></li></ul><p>Once purchased, it\'s yours forever. No subscriptions or recurring payments.</p>',
          },
        },
        {
          question: { es: '¿Necesito cuenta de Wallapop?', en: 'Do I need a Wallapop account?' },
          answer: {
            es: '<p>No. WallaPro funciona directamente contra la API pública de Wallapop. No necesitas registrarte ni iniciar sesión en Wallapop para usar la app.</p><p>Toda la configuración se almacena localmente en tu dispositivo. Tu privacidad está protegida: no se recogen datos personales ni credenciales.</p>',
            en: '<p>No. WallaPro works directly against Wallapop\'s public API. You don\'t need to sign up or log in to Wallapop to use the app.</p><p>All configuration is stored locally on your device. Your privacy is protected: no personal data or credentials are collected.</p>',
          },
        },
        {
          question: { es: '¿Cómo configuro una búsqueda inteligente?', en: 'How do I set up a smart search?' },
          answer: {
            es: '<p>Es muy sencillo. Desde la pantalla principal pulsa <strong>\"Nueva búsqueda\"</strong> y configura:</p><ul><li><strong>Palabras clave:</strong> lo que quieres encontrar (ej. \"iPhone 15\", \"Mesa comedor\")</li><li><strong>Categoría:</strong> elige entre las categorías de Wallapop (electrónica, motor, inmobiliaria, etc.)</li><li><strong>Precio mínimo y máximo:</strong> para acotar los resultados</li><li><strong>Ubicación:</strong> usa tu ubicación actual o introduce coordenadas manuales</li><li><strong>Filtros dinámicos:</strong> según la categoría aparecen filtros específicos (año, km, metros, etc.)</li><li><strong>Filtros de texto:</strong> palabras prohibidas y obligadas (solo Ultra)</li></ul><p>También puedes importar una URL de Wallapop directamente para crear la búsqueda automáticamente.</p>',
            en: '<p>It\'s very simple. From the main screen tap <strong>\"New search\"</strong> and configure:</p><ul><li><strong>Keywords:</strong> what you want to find (e.g. \"iPhone 15\", \"Dining table\")</li><li><strong>Category:</strong> choose from Wallapop categories (electronics, motor, real estate, etc.)</li><li><strong>Min and max price:</strong> to narrow results</li><li><strong>Location:</strong> use your current location or enter manual coordinates</li><li><strong>Dynamic filters:</strong> category-specific filters appear automatically (year, km, sqm, etc.)</li><li><strong>Text filters:</strong> prohibited and required words (Ultra only)</li></ul><p>You can also import a Wallapop URL directly to create the search automatically.</p>',
          },
        },
        {
          question: { es: '¿Cómo funciona la Watchlist de precios?', en: 'How does the Price Watchlist work?' },
          answer: {
            es: '<p>La <strong>Watchlist</strong> (o radar de precios) te permite seguir artículos específicos de Wallapop y recibir una notificación cuando bajen de precio.</p><p>Cómo funciona:</p><ul><li>Añade cualquier artículo desde el feed de capturas o desde Wallapop</li><li>WallaPro monitoriza automáticamente su precio en cada ciclo de escaneo</li><li>Si el precio baja, recibes una <strong>notificación inmediata</strong></li><li>El plan Free incluye <strong>2 watchlist</strong>, Ultra incluye <strong>15</strong></li></ul>',
            en: '<p>The <strong>Watchlist</strong> (price radar) lets you track specific Wallapop items and get notified when they drop in price.</p><p>How it works:</p><ul><li>Add any item from the captures feed or from Wallapop</li><li>WallaPro automatically monitors its price on every scan cycle</li><li>If the price drops, you get an <strong>immediate notification</strong></li><li>Free plan includes <strong>2 watchlists</strong>, Ultra includes <strong>15</strong></li></ul>',
          },
        },
        {
          question: { es: '¿Puedo importar URLs de Wallapop?', en: 'Can I import Wallapop URLs?' },
          answer: {
            es: '<p>Sí. Es uno de los métodos más rápidos para crear una búsqueda:</p><ol><li>Copia la URL de cualquier búsqueda o artículo de Wallapop</li><li>En WallaPro, pulsa <strong>\"Importar URL\"</strong></li><li>La app extrae automáticamente los filtros (palabras clave, categoría, precio, ubicación)</li></ol><p>Así configuras una búsqueda en segundos sin tener que rellenar nada manualmente.</p>',
            en: '<p>Yes. It\'s one of the fastest ways to create a search:</p><ol><li>Copy the URL of any Wallapop search or item</li><li>In WallaPro, tap <strong>\"Import URL\"</strong></li><li>The app automatically extracts filters (keywords, category, price, location)</li></ol><p>You can set up a search in seconds without filling anything manually.</p>',
          },
        },
        {
          question: { es: '¿Cómo funciona el escaneo en segundo plano?', en: 'How does background scanning work?' },
          answer: {
            es: '<p>WallaPro utiliza un <strong>servicio foreground nativo de Android</strong> (implementado en Kotlin con AlarmManager) que ejecuta las búsquedas periódicamente incluso con la app cerrada.</p><p>Características técnicas:</p><ul><li><strong>Intervalo Free:</strong> cada 60 minutos</li><li><strong>Intervalo Ultra:</strong> desde 5 minutos</li><li><strong>Jitter anti-detección:</strong> los intervalos varían ligeramente para parecer tráfico humano</li><li><strong>Barajado de alertas:</strong> las notificaciones se distribuyen para evitar picos</li><li>El servicio se muestra como una notificación persistente, lo que evita que Android lo detenga</li></ul>',
            en: '<p>WallaPro uses a <strong>native Android foreground service</strong> (implemented in Kotlin with AlarmManager) that runs searches periodically even when the app is closed.</p><p>Technical features:</p><ul><li><strong>Free interval:</strong> every 60 minutes</li><li><strong>Ultra interval:</strong> from 5 minutes</li><li><strong>Anti-detection jitter:</strong> intervals vary slightly to mimic human traffic</li><li><strong>Alert shuffling:</strong> notifications are distributed to avoid spikes</li><li>The service shows as a persistent notification, preventing Android from stopping it</li></ul>',
          },
        },
        {
          question: { es: '¿Cómo funciona el sistema de notificaciones?', en: 'How does the notification system work?' },
          answer: {
            es: '<p>WallaPro tiene <strong>4 modos de notificación</strong> configurables:</p><ul><li><strong>Agrupar todo:</strong> todas las capturas en una sola notificación periódica</li><li><strong>Separar:</strong> cada captura genera su propia notificación</li><li><strong>Agrupar por búsqueda:</strong> una notificación por cada búsqueda con resultados nuevos</li><li><strong>Silencioso:</strong> las capturas se guardan pero no se notifica</li></ul><p>El sistema incluye <strong>rate limit anti-spam</strong> para evitar saturaciones y, en modo Ultra, puedes elegir sonidos personalizados para cada tipo de alerta.</p>',
            en: '<p>WallaPro has <strong>4 configurable notification modes</strong>:</p><ul><li><strong>Group all:</strong> all captures in a single periodic notification</li><li><strong>Separate:</strong> each capture generates its own notification</li><li><strong>Group by search:</strong> one notification per search with new results</li><li><strong>Silent:</strong> captures are saved but no notifications are sent</li></ul><p>The system includes <strong>anti-spam rate limiting</strong> to prevent overload, and in Ultra mode you can choose custom sounds for each alert type.</p>',
          },
        },
        {
          question: { es: '¿Consume mucha batería?', en: 'Does it drain the battery?' },
          answer: {
            es: '<p>WallaPro está optimizado para minimizar el consumo de batería:</p><ul><li>Usa <strong>AlarmManager</strong> de Android, que programa tareas sin mantener la CPU activa continuamente</li><li>Las peticiones a la API se realizan en ráfagas cortas y eficientes</li><li>El intervalo de 60 minutos en Free apenas tiene impacto en la batería diaria</li><li>El servicio foreground tiene bajo overhead y Android lo gestiona eficientemente</li></ul><p>En términos reales, el impacto es similar al de cualquier app de notificaciones: negligible en uso normal.</p>',
            en: '<p>WallaPro is optimized to minimize battery consumption:</p><ul><li>Uses Android\'s <strong>AlarmManager</strong>, which schedules tasks without keeping the CPU constantly active</li><li>API requests are made in short, efficient bursts</li><li>The 60-minute Free interval has barely any impact on daily battery life</li><li>The foreground service has low overhead and Android manages it efficiently</li></ul><p>In real terms, the impact is similar to any notification app: negligible during normal use.</p>',
          },
        },
        {
          question: { es: '¿Puedo configurar la ubicación?', en: 'Can I configure the location?' },
          answer: {
            es: '<p>Sí. WallaPro te permite controlar la ubicación de tus búsquedas de varias formas:</p><ul><li><strong>Ubicación actual:</strong> usa el GPS de tu dispositivo para buscar cerca de ti</li><li><strong>Coordenadas manuales:</strong> introduce latitud y longitud para acotar a una zona concreta</li><li><strong>Por defecto:</strong> si no configuras nada, la app resuelve la ubicación aproximada por IP</li></ul><p>Esto es especialmente útil para búsquedas de segunda mano donde la cercanía importa: muebles, coches, inmuebles, etc.</p>',
            en: '<p>Yes. WallaPro lets you control the location of your searches in several ways:</p><ul><li><strong>Current location:</strong> uses your device\'s GPS to search near you</li><li><strong>Manual coordinates:</strong> enter latitude and longitude to target a specific area</li><li><strong>Default:</strong> if you don\'t configure anything, the app resolves approximate location by IP</li></ul><p>This is especially useful for second-hand searches where proximity matters: furniture, cars, real estate, etc.</p>',
          },
        },
        {
          question: { es: '¿Cómo consigo puntos gratis?', en: 'How do I earn free points?' },
          answer: {
            es: '<p>El <strong>sistema de puntos</strong> te permite desbloquear límites extra sin pagar:</p><ul><li>En la app hay un botón <strong>\"Gana puntos\"</strong> que muestra vídeos cortos</li><li>Por cada vídeo completado recibes puntos</li><li>Con los puntos puedes aumentar temporalmente tus límites de búsquedas, capturas y watchlist</li><li>Los puntos se consumen al desbloquear límites y puedes ganar más en cualquier momento</li></ul><p>Es una alternativa gratuita al modo Ultra para quienes prefieren no pagar pero necesitan más margen del que ofrece el plan Free base.</p>',
            en: '<p>The <strong>points system</strong> lets you unlock extra limits without paying:</p><ul><li>In the app there\'s a <strong>\"Earn points\"</strong> button that shows short videos</li><li>You earn points for each completed video</li><li>Points can be used to temporarily increase your search, capture and watchlist limits</li><li>Points are consumed when unlocking limits and you can earn more at any time</li></ul><p>It\'s a free alternative to Ultra mode for those who prefer not to pay but need more room than the base Free plan offers.</p>',
          },
        },
      ],
    },
  },
];

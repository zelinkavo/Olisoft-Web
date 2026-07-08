WallaPro — Ficha completa para landing page
1. Elevator Pitch (tagline)
WallaPro es un sniper inteligente para Wallapop. Escanea en segundo plano, encuentra chollos antes que nadie y te notifica al instante. Consigue lo que quieres más rápido, más barato, sin mirar Wallapop cada 5 minutos.
2. Target / Problema que resuelve
- Usuarios que pierden horas refrescando Wallapop manualmente
- Cazadores de gangas que necesitan reaccionar antes que nadie a un precio bajo
- Coleccionistas, vendedores y aficionados a la electrónica, videojuegos, moda, muebles, coches, etc.
- Cualquiera que tenga una búsqueda específica y quiera ser notificado al aparecer
3. Arquitectura del producto
Aspecto	Descripción
Plataforma	Android (objetivo principal), iOS, Web
Stack	React Native (Expo SDK 54) + TypeScript 5.9 + Kotlin
Almacenamiento local	SQLite (items, watchlist, dedup) + AsyncStorage (config, puntos, ajustes)
API	Ingeniería inversa de la API v3 de Wallapop (sin scraping web)
Monetización	Freemium: free con anuncios + puntos + IAP Ultra (Google Play)
Precio internacionalización	Español e inglés completos
4. Features principales
🔍 Escáner automático (modo Live Monitor)
- Escanea en background usando un servicio foreground nativo Android (Kotlin + AlarmManager)
- Intervalos configurables: 60 min (free) / 45, 30, 15, 5 min (Ultra)
- Jitter anti-detección: variación aleatoria 0-25% ciclo a ciclo para no seguir patrones fijos
- Barajado de alertas: el orden de procesamiento se aleatoriza cada ciclo (Fisher-Yates) para evitar secuencias detectables
- Barajado de watchlist: mismo tratamiento anti-fingerprinting
⚡ Búsquedas inteligentes
- Palabras clave, categoría (árbol completo de 997 IDs), subcategoría, precio mínimo/máximo
- Filtros de texto (Ultra): palabras prohibidas (🚫) y palabras obligadas (⚠️) — aplicados DELANTE del límite de capturas para no desperdiciar slots
- Filtros dinámicos por categoría: coches (marca, modelo, año, km, combustible, cambio, etiqueta ecológica, etc.), motos, inmobiliaria
- Ubicación manual: coordenadas fijas para acotar búsquedas a una zona concreta
- Envío: filtrar solo artículos con envío disponible
- Estado: nuevo, como nuevo, buen estado, aceptable, para piezas
- Importar URL de búsqueda: pega una URL de Wallapop y la app extrae todos los parámetros automáticamente
📸 Feed de capturas
- Todas las capturas del escáner en un feed único con búsqueda y filtros
- Filtros por alerta (con contador de capturas activas), favoritos, archivados, y capturas huérfanas (alertas que ya no existen)
- Ordenación: más recientes, precio ascendente/descendente
- Barra de búsqueda en tiempo real (filtra por título/descripción, totalmente cliente)
- Gestión masiva: archivar/desarchivar/eliminar en lote desde FABs flotantes
- Vistas detalle con galería de imágenes, precio, condición, localización, vendedor
📊 Watchlist de precios (radar)
- Sigue artículos específicos añadidos manualmente o desde capturas
- Monitorización automática: la app consulta el precio actual en cada ciclo de escaneo
- Notificación al bajar de precio: te avisa cuando un artículo baja
- Filtrar por origen (scanner / manual), activos / pausados
- Ordenar por % de bajada, último chequeo, fecha de alta, precio
🔔 Sistema de notificaciones
- 4 modos configurables:
- Agrupar todo (default): una notificación por ciclo
- Separar (Ultra): una notificación individual por cada captura
- Agrupar búsquedas (Ultra): una notificación por búsqueda (título dinámico: ⚡ Nintendo · 3 capturas)
- Silencioso: captura en background sin molestar
- Notificaciones combinadas: cuando hay más de 4 capturas en un ciclo, se agrupan automáticamente en una sola
- Rate limit anti-spam: máximo 4 notificaciones individuales por tipo (capturas / drops) por ciclo
- Sonido extra (Ultra): 6 sonidos personalizados con retardo 2s para evitar solapamiento con el sonido del sistema
- Canales nativos: canales Android con prioridad DEFAULT (sin heads-up pop-up)
⭐ Sistema de puntos (gratuito)
- Los usuarios free ganan puntos viendo vídeos (Rewarded AdMob, máximo 5/día, cooldown 60s entre vídeos)
- Máximo 99 puntos acumulables
- Gastos en tienda:
- +3 búsquedas extra (hasta 5 total)
- +50 capturas extra (hasta 60 total)
- +3 watchlist extra (hasta 5 total)
- Desbloquear importación de URL por 1 hora
👑 Modo Ultra (IAP)
- Pago único vía Google Play (wallapro_ultra)
- Límites desbloqueados: 20 búsquedas, 500 capturas, 15 watchlist, 20 capturas/ciclo
- Intervalos cortos: 45, 30, 15, 5 minutos
- Filtros de texto: palabras prohibidas y obligadas
- Notificaciones avanzadas: modo "Separar" y "Agrupar búsquedas"
- Sonido extra: 6 sonidos configurables
- Sin anuncios: todas las pantallas libres de publicidad
- QA toggle (solo desarrollo): activar Ultra sin pago real para test interno
🛡️ Anti-detección / Privacidad
- User-Agent dinámico persistente: pool de 12 UAs Android reales (Samsung, Xiaomi, Google, OnePlus, Motorola, OPPO, Honor). Se asigna aleatoriamente en la primera instalación y es vitalicio. Validados contra la API real con status 200 + campos críticos correctos
- Jitter en delays: todos los delays entre llamadas API tienen variación aleatoria (+0-50%)
- Rate limiting natural: delays de 1500ms+ entre llamadas, 800ms+ entre páginas de paginación
- Sin scraping web: todo via API oficial (no detectable como bot)
- Coordenadas resueltas por IP: no se envían coordenadas fijas a menos que el usuario configure ubicación manual
🎨 Diseño y UX
- Tema oscuro táctico: fondo negro #131313, acento cyan neón #00FFC2
- Edge-to-edge: tab bar y headers translúcidos con efecto glassmorphism (BlurView en iOS, semi-opaco en Android)
- Tipografía: Geist (titulares), Inter (cuerpo), JetBrains Mono (datos)
- Animaciones sutiles: botón SCAN con radar animado, indicador de estado activo con pulso, indicador de nueva funcionalidad con flecha pulsante
- Internacionalización completa: Español (origen) e Inglés, con selector de idioma en Ajustes (Automático/Español/English). Tipado estricto con TypeScript
5. Límites detallados (tabla comparativa)
Recurso	Free base	+Bonus máx
Búsquedas activas	2	5
Capturas en feed	10	60
Watchlist (radar)	2	5
Capturas/ciclo	5-10	5-10
Intervalo escaneo	60 min	60 min
Filtros de texto	❌	❌
Notif. separadas	❌	❌
Sonido extra	❌	❌
Sin anuncios	❌	❌
6. Público objetivo / Mensajes clave
Perfil	Mensaje
Cazador de chollos	"Sé el primero. Siempre."
Comprador recurrente	"Olvídate de mirar Wallapop cada hora."
Coleccionista	"Encuentra piezas difíciles al precio justo."
Revendedor	"Stock ilimitado de oportunidades."
Usuario casual	"Gratis. Configura en 1 minuto."
7. Llamadas a la acción (CTAs)
- "Empieza a cazar chollos"
- "Descargar WallaPro"
- "Activar Ultra"
- "Probar gratis" (con límites free)
- "Ver plan Ultra"
8. Diferenciación vs competencia
Frente a...	WallaPro gana porque...
Alertas manuales Wallapop	Notificaciones ilimitadas, feed histórico, watchlist multi-artículo, filtros avanzados
Scrapers web genéricos	Sin riesgo de bloqueo (API oficial), anti-detección integrado, app nativa con notificaciones push
Apps de seguimiento de precios	Enfoque en nuevos anuncios (no solo bajadas), escaneo en segundo plano real con foreground service nativo
Búsquedas guardadas del navegador	Automatización total, sin abrir navegador, modo offline-capable
9. Stack tecnológico (para developers, sección opcional "Built with")
- React Native + Expo SDK 54 (RN 0.81.5)
- TypeScript 5.9 (strict mode, as any count: 1)
- Zustand 5.x (estado global)
- SQLite (expo-sqlite, WAL mode, 2 tablas, batch queries)
- Kotlin (módulo nativo foreground service con AlarmManager)
- react-native-iap 15.3.6 (OpenIAP monorepo/Meta)
- i18next + react-i18next + expo-localization
- react-native-google-mobile-ads (AdMob nativo, rewarded y native ads)
- react-native-reanimated ~4.1.1
- expo-notifications (canales, cabeceras combinadas, rate limiting)
- EAS Build (perfiles dev/preview/production con auto-increment)
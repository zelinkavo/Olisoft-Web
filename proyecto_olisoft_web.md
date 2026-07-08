# Plan de Migración: Portfolio → OliSoft APPs Landing

## Objetivo

Transformar el portfolio personal en una web corporativa para **OliSoft APPs** con estructura de landing + sub-landings por app.

---

## Decisiones tomadas

| Decisión | Valor |
|---|---|
| Marca | **OliSoft APPs** (en Google Play como "Olisoft") |
| Monograma | **OS** (similar al DO actual) |
| Paleta de colores | Mantener la actual: dorado (#d4a24e), azul acero (#7c95c4), teal (#5bb8a6) |
| Idiomas | Español e inglés (mantener i18n actual) |
| Google Play URLs | Pendiente — el usuario las pondrá después |

---

## Estructura final de rutas

```
olisoft.com/                     → Landing principal (marca OliSoft + tarjetas de apps)
olisoft.com/simple-crypto-alerts → Landing específica de Simple Crypto Alerts
olisoft.com/wallapro             → Landing específica de WallaPro
```

Cada sub-landing es independiente para SEO, tiene enlace al home y recomienda las otras apps al final.

---

## Archivos a crear (6)

| Archivo | Función |
|---|---|
| `src/data/apps.ts` | Datos de ambas apps (título, features, FAQ, Google Play URLs, etc.) |
| `src/layouts/AppLandingLayout.astro` | Layout compartido para sub-landings de apps |
| `src/pages/simple-crypto-alerts.astro` | Landing de Simple Crypto Alerts |
| `src/pages/wallapro.astro` | Landing de WallaPro |
| `src/components/AppHero.astro` | Hero reutilizable para sub-landings de apps |
| `src/components/FAQ.astro` | Acordeón de preguntas frecuentes |

## Archivos a modificar (5)

| Archivo | Cambio |
|---|---|
| `src/pages/index.astro` | **Rewrite completo** → Hero OliSoft + cards de proyectos + footer |
| `src/components/Navigation.astro` | Rebrand de "DAVID OLIVER"/"DO" a "OLISOFT"/"OS" |
| `src/components/Footer.astro` | Rebrand a OliSoft + enlaces a las apps |
| `src/layouts/BaseLayout.astro` | Actualizar SEO y metadatos para OliSoft APPs |
| `src/lib/seo.ts` | Actualizar JSON-LD con datos de OliSoft APPs |

## Archivos a eliminar (14)

| Archivo | Motivo |
|---|---|
| `src/pages/projects/svenson.astro` | Proyecto antiguo del portfolio personal |
| `src/pages/projects/svenson-reminders.astro` | Proyecto antiguo del portfolio personal |
| `src/pages/projects/crypto-alerts.astro` | Se reemplaza por la nueva landing en `/simple-crypto-alerts` |
| `src/pages/projects/infra.astro` | Proyecto antiguo del portfolio personal |
| `src/pages/projects/permanent.astro` | Proyecto antiguo del portfolio personal |
| `src/data/projects.ts` | Data antigua de proyectos personales |
| `src/data/experience.ts` | Data de experiencia laboral (ya no aplica) |
| `src/data/skills.ts` | Data de skills técnicas (ya no aplica) |
| `src/components/ExperienceTimeline.astro` | Componente de línea de tiempo laboral |
| `src/components/ProjectTimelineItem.astro` | Componente de timeline para proyectos |
| `src/components/interactive/SkillsRadar.tsx` | Visualización de skills (ya no aplica) |
| `src/components/interactive/SvensonFlowDiagram.tsx` | Diagrama React Flow específico de Svenson |
| `src/layouts/CaseStudyLayout.astro` | Layout de caso de estudio (se reemplaza por AppLandingLayout) |
| `src/layouts/BentoLayout.astro` | Layout de secciones apiladas (ya no se usa) |

---

## Secciones de cada página

### Index (Landing principal)
- **Hero**: Presentación de OliSoft APPs (marca, tagline "Apps that make a difference")
- **Proyectos**: Tarjetas clicables de cada app → enlace a su sub-landing
- **Footer**: Rebrand + enlaces

### Sub-landing de app — /simple-crypto-alerts
- **Hero**: Nombre, descripción, CTA "Descargar en Google Play"
- **Features**: Grid de funcionalidades destacadas
- **FAQ**: Acordeón de preguntas frecuentes
- **Otras apps**: Sección al final recomendando WallaPro
- **Footer**: Enlace al home + apps

### Sub-landing de app — /wallapro
- **Hero**: Nombre, tagline "Sniper inteligente para Wallapop", CTA "Descargar en Google Play"
- **Features**: Grid de funcionalidades (Escáner automático, Búsquedas inteligentes, Watchlist, Notificaciones, Ultra)
- **FAQ**: Acordeón de preguntas frecuentes
- **Otras apps**: Sección al final recomendando Simple Crypto Alerts
- **Footer**: Enlace al home + apps

---

## Contenido de WallaPro (desde ficha técnica)

### Tagline
> WallaPro es un sniper inteligente para Wallapop. Escanea en segundo plano, encuentra chollos antes que nadie y te notifica al instante.

### Problema que resuelve
- Usuarios que pierden horas refrescando Wallapop manualmente
- Cazadores de gangas que necesitan reaccionar antes que nadie a un precio bajo
- Coleccionistas, vendedores y aficionados
- Cualquiera con una búsqueda específica que quiera ser notificado al aparecer

### Features principales
1. **Escáner automático (Live Monitor)** — Escanea en background con foreground service nativo Android. Intervalos configurables (60 min free / 5 min Ultra). Jitter anti-detección y barajado de alertas
2. **Búsquedas inteligentes** — Palabras clave, categorías, precio, filtros de texto (prohibidas/obligadas), filtros dinámicos por categoría (coches, motos, inmobiliaria), ubicación manual, importar URL de Wallapop
3. **Feed de capturas** — Todas las capturas en un feed único con búsqueda, filtros por alerta/favoritos/archivados, gestión masiva, vista detalle con galería
4. **Watchlist de precios (radar)** — Sigue artículos específicos, monitorización automática de precio, notificación al bajar de precio
5. **Sistema de notificaciones** — 4 modos (agrupar todo, separar, agrupar búsquedas, silencioso), rate limit anti-spam, sonidos personalizados (Ultra)
6. **Sistema de puntos (free)** — Ver vídeos para ganar puntos y desbloquear límites extra
7. **Modo Ultra (IAP)** — Pago único: límites desbloqueados, intervalos cortos, filtros de texto, notificaciones avanzadas, sin anuncios, sonidos extra
8. **Anti-detección** — User-Agent dinámico persistente, jitter en delays, rate limiting natural, sin scraping web

### Público objetivo
| Perfil | Mensaje |
|---|---|
| Cazador de chollos | "Sé el primero. Siempre." |
| Comprador recurrente | "Olvídate de mirar Wallapop cada hora." |
| Coleccionista | "Encuentra piezas difíciles al precio justo." |
| Revendedor | "Stock ilimitado de oportunidades." |
| Usuario casual | "Gratis. Configura en 1 minuto." |

### Stack tecnológico
React Native + Expo SDK 54 · TypeScript 5.9 · Zustand · SQLite · Kotlin (foreground service) · i18next · AdMob · Reanimated · EAS Build

---

## Contenido de Simple Crypto Alerts (desde el portfolio existente)

### Tagline
App móvil para monitoreo de precios y alertas push en tiempo real de criptomonedas.

### Features principales
1. **Alertas de precio** — Configura umbrales para cualquier crypto. Notificación push cuando se crucen
2. **Monitoreo 24/7** — Background Fetch verifica precios incluso con la app cerrada
3. **Modo Pro** — Alertas ilimitadas, intervalos de 1 minuto, prioridad alta
4. **Uso anónimo** — Sin registro. Sin datos personales. Todo local en el dispositivo
5. **Data Polling** — Integración con CoinGecko API, caché inteligente y backoff exponencial
6. **Arquitectura de estado** — Zustand para gestión de estado local persistente

### Stack tecnológico
React Native · Expo · TypeScript · Zustand · EAS Build · CoinGecko API · Reanimated

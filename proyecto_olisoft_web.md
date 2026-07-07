# Plan de Migración: Portfolio → Olisoft APPs Landing

## Objetivo

Transformar el portfolio personal en una web corporativa para **Olisoft APPs** con estructura de landing + sub-landings por app.

---

## Estructura final de rutas

```
olisoft.com/                     → Landing principal (marca Olisoft + tarjetas de apps)
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
| `src/pages/index.astro` | **Rewrite completo** → Hero Olisoft + cards de proyectos + footer |
| `src/components/Navigation.astro` | Rebrand de "DAVID OLIVER" a "OLISOFT" |
| `src/components/Footer.astro` | Rebrand a Olisoft + enlaces a las apps |
| `src/layouts/BaseLayout.astro` | Actualizar SEO y metadatos para Olisoft |
| `src/lib/seo.ts` | Actualizar JSON-LD con datos de Olisoft APPs |

## Archivos a eliminar (13)

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
- **Hero**: Presentación de Olisoft APPs (marca, tagline)
- **Proyectos**: Tarjetas clicables de cada app → enlace a su sub-landing
- **Footer**: Rebrand + enlaces

### Sub-landing de app (ej. /simple-crypto-alerts)
- **Hero**: Nombre de la app, descripción, CTA a Google Play
- **Features**: Grid de funcionalidades destacadas
- **FAQ**: Acordeón de preguntas frecuentes
- **Otras apps**: Sección al final recomendando la(s) otra(s) app(s)
- **Footer**: Enlace al home + resto de apps

---

## Pendiente del usuario

1. **Descripción de WallaPro** — ¿qué hace? Features, FAQ, etc.
2. **URLs de Google Play** de Simple Crypto Alerts y WallaPro
3. **Paleta de colores** — ¿mantener dorado actual o cambiarla?
4. **Nombre de marca** — ¿"Olisoft APPs" o solo "Olisoft"? ¿Monograma?

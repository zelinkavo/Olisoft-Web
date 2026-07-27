export function getLocaleUrl(
  pathname: string,
  from: 'es' | 'en',
  to: 'es' | 'en',
): string {
  if (from === to) return pathname;
  if (to === 'es') return pathname.replace(/^\/en/, '') || '/';
  return `/en${pathname}`;
}

export function localizePath(path: string, lang: 'es' | 'en'): string {
  return lang === 'en' ? `/en${path}` : path;
}

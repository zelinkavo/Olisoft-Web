import { defineMiddleware } from 'astro/middleware';

declare global {
  namespace App {
    interface Locals {
      lang: 'es' | 'en';
    }
  }
}

export const onRequest = defineMiddleware((context, next) => {
  if (context.locals.lang) return next();

  const pathname = new URL(context.request.url).pathname;

  context.locals.lang = pathname.startsWith('/en/') || pathname === '/en' ? 'en' : 'es';

  if (context.locals.lang === 'en') {
    return context.rewrite(pathname === '/en' ? '/' : pathname.slice(3));
  }

  return next();
});

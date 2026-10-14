// Route segment config for every /projects/* page.
//
// Kept at the segment level (layout) instead of per page, because
// `export const revalidate` cannot be exported from a Client Component
// (`booking-system/page.js` and `webapp/page.js` are 'use client').
//
// NOTE: this value is currently inert — the locale is read from a cookie in
// src/app/i18n/request.js (cookies()), which forces every page to render
// dynamically (router shows them as "server-rendered on demand"). It will
// start working once the locale no longer comes from a dynamic API.
export const revalidate = 3600; // ISR: regenerate every 1 hour

export default function ProjectsLayout({ children }) {
  return children;
}

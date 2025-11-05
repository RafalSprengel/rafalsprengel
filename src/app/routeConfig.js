// List of routes that should be pre-rendered at build time
export const staticPaths = [
  '/',
  '/projects/restaurant',
  '/projects/Lesniczowka',
  '/projects/webapp'
];

// List of routes that should be server-side rendered
export const dynamicPaths = [
  // Add any paths that need dynamic data here
];

// Revalidation time for static pages (in seconds)
export const revalidateTime = 3600; // 1 hour
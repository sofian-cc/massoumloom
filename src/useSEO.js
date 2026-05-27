import { useEffect } from 'react';

const SITE = 'https://massoumloom.co.uk';

/**
 * Sets per-page SEO metadata: document.title, meta description,
 * Open Graph tags, canonical URL, and an optional JSON-LD script tag.
 *
 * Usage:
 *   useSEO({
 *     title: 'Heritage Collection — Massoum Loom',
 *     description: 'Traditional handwoven Afghan rugs...',
 *     path: '/heritage',              // optional, defaults to window.location.pathname
 *     jsonLd: { "@context": "...", } // optional structured data
 *   });
 */
export default function useSEO({ title, description, path, jsonLd } = {}) {
  useEffect(() => {
    if (!title) return;

    // Page title
    document.title = title;

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const url = SITE + (path || window.location.pathname);
    if (canonical) canonical.setAttribute('href', url);

    // Meta description
    const desc = document.querySelector('meta[name="description"]');
    if (desc && description) desc.setAttribute('content', description);

    // Open Graph
    const setMeta = (sel, val) => {
      const el = document.querySelector(sel);
      if (el && val) el.setAttribute('content', val);
    };
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    // Page-specific JSON-LD (product schema, FAQ schema, etc.)
    let ldEl = document.getElementById('ml-ld-page');
    if (jsonLd) {
      if (!ldEl) {
        ldEl = document.createElement('script');
        ldEl.id = 'ml-ld-page';
        ldEl.type = 'application/ld+json';
        document.head.appendChild(ldEl);
      }
      ldEl.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      document.getElementById('ml-ld-page')?.remove();
    };
  }, [title, description, path, jsonLd]);
}

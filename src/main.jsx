import React, { useState, useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const Home       = lazy(() => import('./pages/Home.jsx'));
const Collection = lazy(() => import('./pages/Collection.jsx'));
const Product    = lazy(() => import('./pages/Product.jsx'));
const About      = lazy(() => import('./pages/About.jsx'));
const Contact    = lazy(() => import('./pages/Contact.jsx'));
const SimplePage = lazy(() => import('./pages/SimplePage.jsx'));

/* ── Hash router ──────────────────────────────────────────────────── */
const SIMPLE_PAGES = new Set(['bespoke', 'sustainability', 'press', 'delivery', 'care-guide', 'returns']);

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (!raw || raw === 'home')  return { page: 'home',       slug: null };
  if (raw === 'collection')    return { page: 'collection', slug: 'all' };
  if (raw === 'heritage')      return { page: 'collection', slug: 'heritage' };
  if (raw === 'modern')        return { page: 'collection', slug: 'modern' };
  if (raw === 'about')         return { page: 'about',      slug: null };
  if (raw === 'contact')       return { page: 'contact',    slug: null };
  if (raw.startsWith('rug/'))  return { page: 'product',    slug: raw.slice(4) };
  if (SIMPLE_PAGES.has(raw))   return { page: 'simple',     slug: raw };
  return { page: 'home', slug: null };
}

function setHash(h) { window.location.hash = h; }

/* ── Nav ──────────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = React.useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [menuOpen]);

  const nav = (hash) => { setHash(hash); setMenuOpen(false); };

  const isActive = (hashes) => {
    const h = window.location.hash.replace(/^#\/?/, '');
    return (Array.isArray(hashes) ? hashes : [hashes]).some(hash =>
      h === hash || (hash === 'home' && (!h || h === 'home'))
    );
  };

  return (
    <header className={`ml-nav${scrolled ? ' ml-nav--scrolled' : ''}`} role="banner" ref={menuRef}>
      <div className="ml-nav__inner">
        <button className="ml-nav__logo" onClick={() => nav('home')} aria-label="Massoum Loom home">
          <img src="assets/logo-1776629483547.JPG" alt="Massoum Loom" className="ml-nav__logo-img" />
        </button>

        <nav className="ml-nav__links" aria-label="Main navigation">
          <button className={isActive(['collection','heritage','modern']) ? 'active' : ''} onClick={() => nav('collection')}>Collection</button>
          <button className={isActive('about') ? 'active' : ''} onClick={() => nav('about')}>About</button>
          <button className={isActive('contact') ? 'active' : ''} onClick={() => nav('contact')}>Contact</button>
        </nav>

        <button className="ml-nav__hamburger" onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="ml-nav__mobile">
          <button onClick={() => nav('collection')}>Collection</button>
          <button onClick={() => nav('about')}>About</button>
          <button onClick={() => nav('contact')}>Contact</button>
        </div>
      )}
    </header>
  );
}

/* ── Footer ───────────────────────────────────────────────────────── */
function Footer() {
  const nav = (hash) => { setHash(hash); window.scrollTo({ top: 0, behavior: 'instant' }); };

  return (
    <footer className="ml-footer">
      <div className="ml-footer__inner">

        {/* Brand */}
        <div className="ml-footer__brand">
          <img
            src="assets/logo-1776629483547.JPG"
            alt="Massoum Loom"
            style={{ height: '40px', width: 'auto', filter: 'invert(1)', marginBottom: '1.25rem', display: 'block', mixBlendMode: 'normal' }}
          />
          <p className="ml-footer__tagline">
            Handwoven rugs inspired by Central Asian<br />heritage. Made to order. Delivered worldwide.
          </p>
          <a href="https://www.instagram.com/massoumloom" className="ml-footer__instagram"
            target="_blank" rel="noopener noreferrer">
            @MASSOULOOM
          </a>
        </div>

        {/* Shop */}
        <div className="ml-footer__col">
          <p className="ml-footer__col-title">Shop</p>
          <button onClick={() => nav('collection')}>Collection</button>
          <button onClick={() => nav('heritage')}>Heritage</button>
          <button onClick={() => nav('modern')}>Modern</button>
          <button onClick={() => nav('bespoke')}>Bespoke</button>
        </div>

        {/* Company */}
        <div className="ml-footer__col">
          <p className="ml-footer__col-title">Company</p>
          <button onClick={() => nav('about')}>About</button>
          <button onClick={() => nav('sustainability')}>Sustainability</button>
          <button onClick={() => nav('press')}>Press</button>
        </div>

        {/* Help */}
        <div className="ml-footer__col">
          <p className="ml-footer__col-title">Help</p>
          <button onClick={() => nav('contact')}>Contact</button>
          <button onClick={() => nav('delivery')}>Delivery</button>
          <button onClick={() => nav('care-guide')}>Care guide</button>
          <button onClick={() => nav('returns')}>Returns</button>
        </div>

      </div>

      <div className="ml-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Massoum Loom Ltd. All rights reserved.</p>
        <p style={{ color: 'rgba(255,255,255,0.3)' }}>London NW10 6NF</p>
        <a href="https://www.carpetsclinic.co.uk" target="_blank" rel="noopener noreferrer" className="ml-footer__sister">
          Rug Cleaning &amp; Repair ↗
        </a>
      </div>
    </footer>
  );
}

/* ── Scroll to top ────────────────────────────────────────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 90,
        width: '44px', height: '44px', borderRadius: '50%',
        background: 'var(--ml-text)', color: '#fff',
        fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)', cursor: 'pointer', border: 'none',
      }}
    >↑</button>
  );
}

/* ── App ──────────────────────────────────────────────────────────── */
function App() {
  const [route, setRoute] = useState(parseHash());
  const [enquiry, setEnquiry] = useState(null);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const go = (hash) => { setHash(hash); window.scrollTo({ top: 0, behavior: 'instant' }); };

  return (
    <>
      <Nav />
      <main className="ml-main" id="MainContent" tabIndex={-1}>
        <Suspense fallback={<div className="ml-loading" aria-label="Loading" />}>
          {route.page === 'home' && (
            <Home
              onCollection={(slug) => go(slug)}
              onProduct={(handle) => go(`rug/${handle}`)}
              onAbout={() => go('about')}
            />
          )}
          {route.page === 'collection' && (
            <Collection
              initialCollection={route.slug}
              onProduct={(handle) => go(`rug/${handle}`)}
            />
          )}
          {route.page === 'product' && (
            <Product
              handle={route.slug}
              onCollection={(slug) => go(slug)}
              onContact={(product) => { setEnquiry(product); go('contact'); }}
              onBack={() => window.history.back()}
            />
          )}
          {route.page === 'about'   && <About onContact={() => go('contact')} />}
          {route.page === 'contact' && <Contact enquiry={enquiry} onClearEnquiry={() => setEnquiry(null)} />}
          {route.page === 'simple'  && <SimplePage page={route.slug} onContact={() => go('contact')} />}
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);

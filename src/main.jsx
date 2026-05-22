import React, { useState, useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const Home       = lazy(() => import('./pages/Home.jsx'));
const Collection = lazy(() => import('./pages/Collection.jsx'));
const Product    = lazy(() => import('./pages/Product.jsx'));
const About      = lazy(() => import('./pages/About.jsx'));
const Contact    = lazy(() => import('./pages/Contact.jsx'));

/* ── Hash router ──────────────────────────────────────────────────── */
function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (!raw || raw === 'home') return { page: 'home', slug: null };
  if (raw === 'heritage')     return { page: 'collection', slug: 'heritage' };
  if (raw === 'modern')       return { page: 'collection', slug: 'modern' };
  if (raw === 'about')        return { page: 'about', slug: null };
  if (raw === 'contact')      return { page: 'contact', slug: null };
  if (raw.startsWith('rug/')) return { page: 'product', slug: raw.slice(4) };
  return { page: 'home', slug: null };
}

function setHash(h) {
  window.location.hash = h;
}

const PAGE_TITLES = {
  home:       'Massoum Loom | Handwoven Afghan Rugs',
  collection: (slug) => `${slug === 'heritage' ? 'Heritage' : 'Modern'} Collection | Massoum Loom`,
  product:    (title) => `${title} | Massoum Loom`,
  about:      'About | Massoum Loom',
  contact:    'Contact | Massoum Loom',
};

/* ── Nav ──────────────────────────────────────────────────────────── */
function Nav({ route, go }) {
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
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [menuOpen]);

  const nav = (hash) => { setHash(hash); setMenuOpen(false); };

  const isActive = (hash) => {
    const h = window.location.hash.replace(/^#\/?/, '');
    return h === hash || (hash === 'home' && (!h || h === 'home'));
  };

  return (
    <header className={`ml-nav${scrolled ? ' ml-nav--scrolled' : ''}`} role="banner" ref={menuRef}>
      <div className="ml-nav__inner">
        <button className="ml-nav__logo" onClick={() => nav('home')} aria-label="Massoum Loom home">
          <img src="assets/MASSOUM LOOM LOGO.JPG" alt="Massoum Loom" className="ml-nav__logo-img" />
        </button>

        <nav className="ml-nav__links" aria-label="Main navigation">
          <button className={isActive('heritage') ? 'active' : ''} onClick={() => nav('heritage')}>Heritage</button>
          <button className={isActive('modern') ? 'active' : ''} onClick={() => nav('modern')}>Modern</button>
          <button className={isActive('about') ? 'active' : ''} onClick={() => nav('about')}>About</button>
        </nav>

        <button className="ml-nav__enquire" onClick={() => nav('contact')}>
          Enquire <span aria-hidden="true">→</span>
        </button>

        <button
          className="ml-nav__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="ml-nav__mobile">
          <button onClick={() => nav('heritage')}>Heritage</button>
          <button onClick={() => nav('modern')}>Modern</button>
          <button onClick={() => nav('about')}>About</button>
          <button onClick={() => nav('contact')}>Contact</button>
        </div>
      )}
    </header>
  );
}

/* ── Footer ───────────────────────────────────────────────────────── */
function Footer({ go }) {
  const nav = (hash) => { setHash(hash); window.scrollTo({ top: 0, behavior: 'instant' }); };
  return (
    <footer className="ml-footer">
      <div className="ml-footer__inner">
        <div className="ml-footer__brand">
          <img
            src="assets/MASSOUM LOOM LOGO.JPG"
            alt="Massoum Loom"
            style={{ height: '48px', width: 'auto', filter: 'invert(1)', marginBottom: '1rem', display: 'block' }}
          />
          <p className="ml-footer__tagline">
            Handwoven rugs from Afghanistan.<br />Made to order. Delivered worldwide.
          </p>
          <a
            href="https://www.instagram.com/massouloom"
            className="ml-footer__instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            @massouloom
          </a>
        </div>

        <div className="ml-footer__col">
          <p className="ml-footer__col-title">Collection</p>
          <button onClick={() => nav('heritage')}>Heritage</button>
          <button onClick={() => nav('modern')}>Modern</button>
        </div>

        <div className="ml-footer__col">
          <p className="ml-footer__col-title">Company</p>
          <button onClick={() => nav('about')}>About</button>
          <button onClick={() => nav('contact')}>Contact</button>
        </div>

        <div className="ml-footer__col">
          <p className="ml-footer__col-title">Visit</p>
          <p className="ml-footer__address">
            Unit B2, 1 Chandos Road<br />
            London, NW10 6NF
          </p>
          <a href="tel:02081917488" className="ml-footer__phone">020 8191 7488</a>
        </div>
      </div>

      <div className="ml-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Massoum Loom. All rights reserved.</p>
        <a
          href="https://www.carpetsclinic.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-footer__sister"
        >
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
        background: 'var(--ml-accent)', color: '#fff',
        fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
        cursor: 'pointer', border: 'none',
        transition: 'background 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--ml-bg-dark)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--ml-accent)'}
    >
      ↑
    </button>
  );
}

/* ── App ──────────────────────────────────────────────────────────── */
function App() {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    const onHashChange = () => {
      const r = parseHash();
      setRoute(r);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const go = (hash) => {
    setHash(hash);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <Nav route={route} go={go} />
      <main className="ml-main" id="MainContent" tabIndex={-1}>
        <Suspense fallback={<div className="ml-loading" aria-label="Loading" />}>
          {route.page === 'home' && (
            <Home
              onCollection={(slug) => go(slug)}
              onProduct={(handle) => go(`rug/${handle}`)}
            />
          )}
          {route.page === 'collection' && (
            <Collection
              collection={route.slug}
              onProduct={(handle) => go(`rug/${handle}`)}
            />
          )}
          {route.page === 'product' && (
            <Product
              handle={route.slug}
              onCollection={(slug) => go(slug)}
              onContact={() => go('contact')}
              onBack={() => window.history.back()}
            />
          )}
          {route.page === 'about' && <About onContact={() => go('contact')} />}
          {route.page === 'contact' && <Contact />}
        </Suspense>
      </main>
      <Footer go={go} />
      <ScrollToTop />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import portfolioData from '../data/portfolio';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const EFFECT_DISTANCE = 200;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(Math.max(scrollY / EFFECT_DISTANCE, 0), 1);

      if (headerRef.current) {
        const isDark = document.documentElement.classList.contains('dark');
        const bgAlpha = (progress * 0.8).toFixed(3);
        const blurAmount = (progress * 12).toFixed(2);
        const borderAlpha = (progress * 0.08).toFixed(3);

        const bgColor = isDark
          ? `rgba(10, 10, 10, ${bgAlpha})`
          : `rgba(255, 255, 255, ${bgAlpha})`;

        const borderColor = isDark
          ? `rgba(255, 255, 255, ${borderAlpha})`
          : `rgba(0, 0, 0, ${borderAlpha})`;

        headerRef.current.style.backgroundColor = bgColor;
        headerRef.current.style.backdropFilter = `blur(${blurAmount}px)`;
        headerRef.current.style.webkitBackdropFilter = `blur(${blurAmount}px)`;
        headerRef.current.style.borderBottomColor = borderColor;
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [darkMode, location.pathname]);

  const logoText = portfolioData.personal.firstName || portfolioData.personal.name;

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container-custom header-inner">
        {/* Brand Logo on the Far Left */}
        <Link to="/" className="brand-logo" aria-label="Go to Home">
          {logoText}
        </Link>

        {/* Right Group: Navigation links pushed to the right, followed by 48px Theme Toggle */}
        <div className="header-right-group">
          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-menu" aria-label="Main Navigation">
            {portfolioData.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `desktop-nav-item ${isActive ? 'desktop-nav-item-active' : ''}`
                }
                end={link.path === '/'}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Calibrated Theme Toggle Button */}
          <button
            type="button"
            className="theme-switch-btn"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="theme-icon-svg"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="theme-icon-svg"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'mobile-nav-drawer-open' : ''}`}>
        <div className="mobile-nav-list">
          {portfolioData.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'mobile-nav-item-active' : ''}`
              }
              end={link.path === '/'}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="mobile-backdrop-overlay"
          onClick={() => setIsOpen(false)}
          role="presentation"
        />
      )}
    </header>
  );
};

export default Navbar;

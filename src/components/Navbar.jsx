import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import portfolioData from '../data/portfolio';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoText = portfolioData.personal.firstName || portfolioData.personal.name;

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
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

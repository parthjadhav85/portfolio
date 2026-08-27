import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import portfolioData from '../data/portfolio';

const Footer = () => {
  const { personal, social, footer } = portfolioData;
  const logoText = personal.firstName || personal.name;

  return (
    <footer className="site-footer">
      <div className="container-custom footer-horizontal-content">
        {/* Left Side: Brand Name & Copyright Notice */}
        <div className="footer-left-block">
          <div className="footer-brand-title">{logoText}</div>
          <p className="footer-copyright-text">
            © {footer?.copyrightYear || new Date().getFullYear()} {personal.name}. {footer?.tagline || 'All rights reserved.'}
          </p>
        </div>

        {/* Right Side: Social Media Icons Aligned to the Right */}
        <div className="footer-right-icons">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-anchor"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <FiGithub size={20} />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-anchor"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          )}
          {social.email && (
            <a
              href={social.email.startsWith('mailto:') ? social.email : `mailto:${social.email}`}
              className="footer-icon-anchor"
              aria-label="Email Me"
              title="Email"
            >
              <FiMail size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

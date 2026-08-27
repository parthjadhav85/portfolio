import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const { personal, social } = portfolioData;

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const headerOffset = 70;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Decorative ambient background shapes */}
      <div className="hero-shapes" aria-hidden="true">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
      </div>

      <div className="container-custom hero-content">
        <ScrollReveal delay={1}>
          <p className="hero-greeting">Hi, my name is</p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <h1 className="hero-name">{personal.name}</h1>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <h2 className="hero-tagline">{personal.role || personal.tagline}</h2>
        </ScrollReveal>

        <ScrollReveal delay={4}>
          <p className="hero-description">{personal.bio}</p>
        </ScrollReveal>

        <ScrollReveal delay={5}>
          <div className="hero-buttons">
            <a
              href={personal.resumeUrl || '#'}
              className="btn-primary"
              target={personal.resumeUrl !== '#' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              download={personal.resumeUrl !== '#' ? true : undefined}
            >
              <FiDownload size={18} />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="btn-outline"
              onClick={handleContactClick}
            >
              <span>Get In Touch</span>
              <FiArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={6}>
          <div className="hero-social">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <FiTwitter />
              </a>
            )}
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <FiInstagram />
              </a>
            )}
            {social.email && (
              <a
                href={social.email.startsWith('mailto:') ? social.email : `mailto:${social.email}`}
                aria-label="Send Email"
              >
                <FiMail />
              </a>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;

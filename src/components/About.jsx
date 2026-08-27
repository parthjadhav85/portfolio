import { FiMapPin, FiMail, FiBookOpen, FiUser, FiCheckCircle } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    { label: 'Location', value: personal.location, icon: <FiMapPin /> },
    { label: 'Email', value: personal.email, icon: <FiMail /> },
    { label: 'Degree', value: personal.role, icon: <FiBookOpen /> },
    { label: 'Status', value: 'Open for Opportunities', icon: <FiCheckCircle /> },
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <p className="section-subtitle">01. About Me</p>
          <h2 className="section-title">Know Me More</h2>
        </ScrollReveal>

        <div className="about-content">
          <div className="about-text">
            <ScrollReveal delay={1}>
              <p>{personal.about || personal.bio}</p>
              {personal.about && personal.bio && (
                <p>{personal.bio}</p>
              )}
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="about-highlights">
                {highlights.map((item, index) => (
                  <div key={index} className="about-highlight-item">
                    <span className="about-highlight-icon">{item.icon}</span>
                    <span>
                      <strong>{item.label}:</strong> {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="about-image-container">
            <ScrollReveal delay={3}>
              {personal.profileImage ? (
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="about-image"
                />
              ) : (
                <div className="about-image-placeholder" aria-label="Profile picture placeholder">
                  <FiUser />
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { FiAward, FiCheckCircle } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const { education, certifications, achievements } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <p className="section-subtitle">05. Academic Background</p>
          <h2 className="section-title">Education</h2>
        </ScrollReveal>

        <div className="education-cards">
          {education && education.map((item, index) => (
            <ScrollReveal key={item.degree} delay={index + 1}>
              <div className="education-card">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{item.degree}</h3>
                    {item.institutionUrl && item.institutionUrl !== '#' ? (
                      <a
                        href={item.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-institution"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      <span className="education-institution">{item.institution}</span>
                    )}
                  </div>
                  <span className="education-duration">{item.duration}</span>
                </div>

                {item.grade && (
                  <p className="education-grade">{item.grade}</p>
                )}

                {item.description && (
                  <p className="education-description">{item.description}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications Section */}
        {certifications && certifications.length > 0 && (
          <div className="certifications-section">
            <ScrollReveal>
              <h3 className="subsection-title">Certifications</h3>
            </ScrollReveal>

            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert.title} delay={(index % 3) + 1}>
                  <a
                    href={cert.link || '#'}
                    target={cert.link && cert.link !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="cert-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <FiAward color="var(--accent)" size={20} />
                      <h4 className="cert-title">{cert.title}</h4>
                    </div>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {achievements && achievements.length > 0 && (
          <div className="achievements-section">
            <ScrollReveal>
              <h3 className="subsection-title">Achievements</h3>
            </ScrollReveal>

            <div className="achievements-list">
              {achievements.map((item, index) => (
                <ScrollReveal key={index} delay={(index % 4) + 1}>
                  <div className="achievement-item">
                    <FiCheckCircle className="achievement-icon" />
                    <span>{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;

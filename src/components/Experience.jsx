import portfolioData from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <p className="section-subtitle">04. Where I've Worked</p>
          <h2 className="section-title">Experience</h2>
        </ScrollReveal>

        <div className="timeline">
          {experience.map((item, index) => (
            <ScrollReveal key={`${item.role}-${item.company}`} delay={index + 1}>
              <div className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />

                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    {item.companyUrl && item.companyUrl !== '#' ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-company"
                      >
                        @{item.company}
                      </a>
                    ) : (
                      <span className="timeline-company">@{item.company}</span>
                    )}
                  </div>

                  <span className="timeline-duration">{item.duration}</span>
                </div>

                <ul className="timeline-description">
                  {Array.isArray(item.description) ? (
                    item.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))
                  ) : (
                    <li>{item.description}</li>
                  )}
                </ul>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="timeline-tech">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="timeline-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

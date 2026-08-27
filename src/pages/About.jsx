import { LuTrophy, LuHeadphones, LuGamepad2 } from 'react-icons/lu';
import portfolioData from '../data/portfolio';
import PageHeader from '../components/PageHeader';

const About = () => {
  const {
    personal,
    journey,
    education,
    experience,
    positionsOfResponsibility,
    spokenLanguages,
    beyondWork,
  } = portfolioData;

  return (
    <div className="page-wrapper-spacing">
      <div className="container-custom">
        <PageHeader
          title="About Me"
          subtitle="Get to know me better — my story, background, and journey"
        />

        {/* 1. Bio Section */}
        <section className="about-section-block">
          <div className="bio-card-container">
            {Array.isArray(personal.bio) ? (
              personal.bio.map((paragraph, index) => (
                <p key={index} className="bio-paragraph-text">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="bio-paragraph-text">{personal.bio}</p>
            )}
          </div>
        </section>

        {/* 2. Tech Journey Timeline */}
        {journey && journey.length > 0 && (
          <section className="about-section-block">
            <h2 className="section-title-mono">Tech Journey</h2>
            <div className="journey-cards-grid">
              {journey.map((item) => (
                <div key={item.year} className="journey-card-box">
                  <div className="journey-year-pill">{item.year}</div>
                  <div className="journey-card-body">
                    <div className="journey-tags-list">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="journey-tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="journey-desc-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Education */}
        {education && education.length > 0 && (
          <section className="about-section-block">
            <h2 className="section-title-mono">Education</h2>
            <div className="cards-stack-list">
              {education.map((item, index) => (
                <div key={index} className="about-detail-card">
                  <div className="about-card-header-flex">
                    <h3 className="about-card-main-title">{item.degree}</h3>
                    <span className="about-card-date-badge">{item.period}</span>
                  </div>
                  <p className="about-card-org-name">{item.institution}</p>
                  {item.details && Array.isArray(item.details) ? (
                    <ul className="about-card-bullet-list">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    item.details && <p className="about-card-plain-text">{item.details}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <section className="about-section-block">
            <h2 className="section-title-mono">Experience</h2>
            <div className="cards-stack-list">
              {experience.map((item, index) => (
                <div key={index} className="about-detail-card">
                  <div className="about-card-header-flex">
                    <h3 className="about-card-main-title">{item.title}</h3>
                    <span className="about-card-date-badge">{item.period}</span>
                  </div>
                  <p className="about-card-org-name">@{item.company}</p>
                  {item.description && (
                    <p className="about-card-plain-text">{item.description}</p>
                  )}
                  {item.details && Array.isArray(item.details) && (
                    <ul className="about-card-bullet-list">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  {item.technologies && (
                    <div className="journey-tags-list" style={{ marginTop: '0.75rem' }}>
                      {item.technologies.map((tech) => (
                        <span key={tech} className="journey-tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Positions of Responsibility */}
        {positionsOfResponsibility && positionsOfResponsibility.length > 0 && (
          <section className="about-section-block">
            <h2 className="section-title-mono">Positions of Responsibility</h2>
            <div className="about-2col-grid">
              {positionsOfResponsibility.map((item, index) => (
                <div key={index} className="about-detail-card">
                  <div className="about-card-header-flex">
                    <h3 className="about-card-main-title">{item.title}</h3>
                    <span className="about-card-date-badge">{item.period}</span>
                  </div>
                  <p className="about-card-org-name">{item.organization}</p>
                  <p className="about-card-plain-text">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Spoken Languages */}
        {spokenLanguages && spokenLanguages.length > 0 && (
          <section className="about-section-block">
            <h2 className="section-title-mono">Languages</h2>
            <div className="about-3col-grid">
              {spokenLanguages.map((lang, index) => (
                <div key={index} className="icon-badge-card">
                  <span className="badge-card-icon">{lang.flag}</span>
                  <h3 className="badge-card-title">{lang.name}</h3>
                  <p className="badge-card-subtitle">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Beyond Work */}
        {beyondWork && beyondWork.length > 0 && (
          <section className="about-section-block">
            <h2 className="section-title-mono">Beyond Work</h2>
            <div className="about-3col-grid">
              {beyondWork.map((hobby, index) => {
                const renderHobbyIcon = (name) => {
                  if (name === 'Sports') return <LuTrophy size={26} strokeWidth={1.75} />;
                  if (name === 'Music') return <LuHeadphones size={26} strokeWidth={1.75} />;
                  if (name === 'Gaming') return <LuGamepad2 size={26} strokeWidth={1.75} />;
                  return null;
                };

                return (
                  <div key={index} className="icon-badge-card">
                    <span className="badge-card-icon">
                      {renderHobbyIcon(hobby.name)}
                    </span>
                    <h3 className="badge-card-title">{hobby.name}</h3>
                    <p className="badge-card-subtitle">{hobby.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default About;

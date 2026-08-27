import { FiAward } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import PageHeader from '../components/PageHeader';

const Skills = () => {
  const { skillCategories, certificationsAndAchievements } = portfolioData;

  return (
    <div className="page-wrapper-spacing">
      <div className="container-custom">
        <PageHeader
          title="Skills & Certifications"
          subtitle="My technical expertise and professional achievements"
        />

        {/* Technical Skills Section */}
        <section className="skills-main-section">
          <h2 className="section-title-mono">Technical Skills</h2>

          <div className="skill-categories-stack">
            {skillCategories.map((group) => (
              <div key={group.title} className="skill-category-box">
                <h3 className="skill-category-name">{group.title}</h3>
                <div className="skill-tags-flex">
                  {group.skills.map((skillName) => (
                    <span key={skillName} className="skill-badge-tag">
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements Section */}
        {certificationsAndAchievements && certificationsAndAchievements.length > 0 && (
          <section className="certifications-section-container">
            <div className="cert-header-flex">
              <FiAward className="cert-icon-teal" size={24} />
              <h2 className="section-title-mono" style={{ margin: 0 }}>
                Certifications & Achievements
              </h2>
            </div>

            <div className="certifications-box-card">
              <ul className="cert-items-list">
                {certificationsAndAchievements.map((item, index) => (
                  <li key={index} className="cert-list-entry">
                    <span className="cert-dot-bullet" aria-hidden="true" />
                    <div className="cert-entry-content">
                      <h4 className="cert-entry-title">{item.title}</h4>
                      {(item.description || item.organization) && (
                        <p className="cert-entry-org">{item.description || item.organization}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Skills;

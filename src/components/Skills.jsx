import { FiCode, FiLayers, FiTool, FiCpu } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <FiCode />;
      case 'framework':
        return <FiLayers />;
      case 'tools':
        return <FiTool />;
      case 'other':
      default:
        return <FiCpu />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <p className="section-subtitle">02. My Capabilities</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </ScrollReveal>

        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index + 1}>
              <div className="skill-category">
                <div className="skill-category-header">
                  <span className="skill-category-icon">
                    {getCategoryIcon(category.icon)}
                  </span>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>

                <div className="skill-tags">
                  {category.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-tag"
                      style={{
                        backgroundColor: skill.color ? `${skill.color}18` : 'var(--accent-bg)',
                        color: skill.color || 'var(--text-primary)',
                        border: `1px solid ${skill.color ? `${skill.color}40` : 'var(--border-color)'}`,
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: skill.color || 'var(--accent)',
                          display: 'inline-block',
                          marginRight: '4px',
                        }}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

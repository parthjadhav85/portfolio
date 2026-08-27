import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { projects } = portfolioData;

  const filteredProjects = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <p className="section-subtitle">03. What I've Built</p>
          <h2 className="section-title">Projects</h2>
        </ScrollReveal>

        {/* Optional quick filter tabs */}
        <ScrollReveal delay={1}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <button
              type="button"
              className={filter === 'all' ? 'btn-primary' : 'btn-outline'}
              style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
              onClick={() => setFilter('all')}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              className={filter === 'featured' ? 'btn-primary' : 'btn-outline'}
              style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
              onClick={() => setFilter('featured')}
            >
              Featured ({projects.filter((p) => p.featured).length})
            </button>
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={(index % 3) + 1}>
              <div className="project-card">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <FiFolder />
                  </div>
                )}

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${project.title} source on GitHub`}
                        title="GitHub Repository"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${project.title} live demo`}
                        title="Live Preview"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

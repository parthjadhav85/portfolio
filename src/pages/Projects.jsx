import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import PageHeader from '../components/PageHeader';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div className="page-wrapper-spacing">
      <div className="container-custom">
        <PageHeader
          title="Projects"
          subtitle="A collection of projects I've worked on, showcasing my skills and interests"
        />

        {/* 2-Column Projects Grid matching Screenshot 5 */}
        <div className="projects-grid-2col">
          {projects.map((project) => (
            <div key={project.id || project.title} className="project-card-container">
              {/* Project Image Banner */}
              <div className="project-img-frame">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img-tag"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div
                  className="project-img-placeholder"
                  style={{ display: project.image ? 'none' : 'flex' }}
                >
                  <FiFolder size={54} />
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body-content">
                <div className="project-header-row">
                  <h3 className="project-card-title">{project.title}</h3>
                  {project.period && (
                    <span className="project-card-date">{project.period}</span>
                  )}
                </div>

                {/* Tech Badges / Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="project-tags-group">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-pill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="project-card-description">{project.description}</p>

                {/* Action Buttons: View GitHub & Live Demo */}
                <div className="project-action-buttons">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-action"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <span>View GitHub</span>
                      <FiGithub size={16} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-action"
                      aria-label={`Live Demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <FiExternalLink size={16} />
                    </a>
                  )}

                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-action"
                      aria-label={`View report for ${project.title}`}
                    >
                      <span>View Report</span>
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

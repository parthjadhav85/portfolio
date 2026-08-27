import { FiDownload, FiAward, FiGithub, FiLinkedin, FiUser } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import Typewriter from '../components/Typewriter';

const Home = () => {
  const { personal, social } = portfolioData;

  return (
    <div className="home-hero-section">
      <div className="container-custom">
        <div className="hero-flex-layout">
          {/* Left Column: Greeting, Name, Role, Tagline, and Action Buttons */}
          <div className="hero-text-column">
            <p className="hero-salutation">Hi, I'm</p>

            <h1 className="hero-main-title">{personal.name}</h1>

            <h2 className="hero-role-title">
              I am a{' '}
              <Typewriter
                words={personal.typewriterWords || ['Student', 'Developer', 'Gamer', 'Designer', 'Thinker']}
                className="hero-typewriter-text"
              />
            </h2>

            <p className="hero-description-text">{personal.tagline}</p>

            <div className="hero-actions-row">
              <a
                href={personal.resumeUrl || '#'}
                target={personal.resumeUrl && personal.resumeUrl !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="btn-outline-teal"
                aria-label="Download Resume"
              >
                <span>Resume</span>
                <FiDownload size={18} />
              </a>

              <a
                href={personal.achievementsDriveUrl || personal.resumeUrl || '#'}
                target={personal.achievementsDriveUrl ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="btn-outline-teal"
                aria-label="View Achievements"
              >
                <span>Achievements</span>
                <FiAward size={18} />
              </a>

              <div className="hero-social-group">
                {social.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    title="GitHub"
                    className="hero-social-btn"
                  >
                    <FiGithub size={22} />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <FiLinkedin size={22} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Circular Profile Avatar with Gradient Ring and 3 Floating Dots */}
          <div className="hero-avatar-column">
            <div className="avatar-wrapper">
              <div className="avatar-gradient-ring">
                <div className="avatar-inner-backdrop">
                  {personal.profileImage ? (
                    <img
                      src={personal.profileImage}
                      alt={personal.name}
                      className="avatar-image"
                    />
                  ) : (
                    <div className="avatar-placeholder-box" aria-label="Profile Avatar">
                      <FiUser size={110} />
                    </div>
                  )}
                </div>
              </div>

              {/* 3 Decorative Floating Dots matching reference screenshot */}
              <div className="floating-bubble bubble-top-right" aria-hidden="true" />
              <div className="floating-bubble bubble-mid-left" aria-hidden="true" />
              <div className="floating-bubble bubble-bottom-left" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

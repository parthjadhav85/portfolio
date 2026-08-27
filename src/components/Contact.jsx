import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiCheckCircle } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const { personal, social } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Interactive client-side feedback (ready to connect to EmailJS/Formspree/Backend API)
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <p className="section-subtitle">06. What's Next?</p>
          <h2 className="section-title">Get In Touch</h2>
        </ScrollReveal>

        <div className="contact-content">
          {/* Left Column: Contact Information */}
          <ScrollReveal delay={1}>
            <div>
              <h3 className="contact-heading">Let's talk about everything!</h3>
              <p className="contact-text">
                Whether you have an upcoming project, a question about my work,
                or just want to say hello, feel free to drop me a line. I'll get back to you as soon as possible!
              </p>

              <div className="contact-info-item">
                <FiMail className="contact-info-icon" />
                <div>
                  <p className="contact-info-label">Email</p>
                  <a
                    href={personal.email.startsWith('mailto:') ? personal.email : `mailto:${personal.email}`}
                    className="contact-info-text"
                    style={{ color: 'var(--accent)', textDecoration: 'none' }}
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              {personal.phone && (
                <div className="contact-info-item">
                  <FiPhone className="contact-info-icon" />
                  <div>
                    <p className="contact-info-label">Phone</p>
                    <a
                      href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`}
                      className="contact-info-text"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
              )}

              {personal.location && (
                <div className="contact-info-item">
                  <FiMapPin className="contact-info-icon" />
                  <div>
                    <p className="contact-info-label">Location</p>
                    <p className="contact-info-text">{personal.location}</p>
                  </div>
                </div>
              )}

              <div className="contact-social">
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
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal delay={2}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Project Inquiry / Hello"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Hi, I would like to talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <FiSend />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--accent-bg)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                  }}
                >
                  <FiCheckCircle size={18} />
                  <span>Thank you! Your message has been received.</span>
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

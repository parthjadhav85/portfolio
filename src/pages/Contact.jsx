import { useState } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiCode, FiTerminal, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const { contactChannels } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getChannelIcon = (iconName) => {
    switch (iconName) {
      case 'mail':
        return <FiMail size={22} className="channel-icon-svg" aria-hidden="true" />;
      case 'phone':
        return <FiPhone size={22} className="channel-icon-svg" aria-hidden="true" />;
      case 'github':
        return <FiGithub size={22} className="channel-icon-svg" aria-hidden="true" />;
      case 'linkedin':
        return <FiLinkedin size={22} className="channel-icon-svg" aria-hidden="true" />;
      case 'code':
        return <FiCode size={22} className="channel-icon-svg" aria-hidden="true" />;
      case 'terminal':
      default:
        return <FiTerminal size={22} className="channel-icon-svg" aria-hidden="true" />;
    }
  };

  const sanitizeInput = (text) => {
    if (typeof text !== 'string') return '';
    return text.trim();
  };

  const validateEmail = (email) => {
    // Safe standard RFC-5322 subset regex
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorMsg('');
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const subject = sanitizeInput(formData.subject);
    const message = sanitizeInput(formData.message);

    if (!name || !email || !message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (name.length > 100) {
      setErrorMsg('Name cannot exceed 100 characters.');
      return;
    }

    if (!validateEmail(email) || email.length > 150) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (subject.length > 200) {
      setErrorMsg('Subject cannot exceed 200 characters.');
      return;
    }

    if (message.length > 3000) {
      setErrorMsg('Message cannot exceed 3000 characters.');
      return;
    }

    setIsSending(true);

    // Client-side simulation of message submission (safe frontend behavior)
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 600);
  };

  // Safe external URL helper to prevent javascript: or unexpected pseudo-protocols
  const getSafeHref = (url) => {
    if (!url) return '#';
    const trimmed = url.trim();
    if (
      trimmed.startsWith('https://') ||
      trimmed.startsWith('http://') ||
      trimmed.startsWith('mailto:') ||
      trimmed.startsWith('tel:')
    ) {
      return trimmed;
    }
    return '#';
  };

  return (
    <div className="page-wrapper-spacing">
      <div className="container-custom">
        <PageHeader
          title="Contact Me"
          subtitle="Get in touch with me directly or through social platforms"
        />

        {/* Section 1: Get In Touch */}
        <section className="contact-section-block" aria-labelledby="contact-channels-heading">
          <h2 id="contact-channels-heading" className="section-title-mono">Get In Touch</h2>
          <p className="section-description-text">
            Feel free to contact me for any work or suggestions below. I'm always
            open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="contact-channels-grid">
            {contactChannels &&
              contactChannels.map((item, index) => {
                const safeHref = getSafeHref(item.link);
                const isExternal = safeHref.startsWith('http');
                return (
                  <a
                    key={index}
                    href={safeHref}
                    target={isExternal ? '_blank' : '_self'}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="contact-channel-card"
                    aria-label={`${item.type}: ${item.value}`}
                  >
                    <div className="channel-icon-box">
                      {getChannelIcon(item.icon)}
                    </div>
                    <div className="channel-info-box">
                      <span className="channel-value-text">{item.value}</span>
                      <span className="channel-type-label">{item.type}</span>
                    </div>
                  </a>
                );
              })}
          </div>
        </section>

        {/* Section 2: Send Me a Message Form */}
        <section className="contact-form-container-card" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="section-title-mono" style={{ marginBottom: '1.5rem' }}>
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="contact-message-form" noValidate>
            <div className="form-group-block">
              <label htmlFor="name" className="form-input-label">
                Name <span aria-hidden="true" style={{ color: 'var(--color-link)' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
                disabled={isSending}
                className="form-control-input"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div className="form-group-block">
              <label htmlFor="email" className="form-input-label">
                Email <span aria-hidden="true" style={{ color: 'var(--color-link)' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={150}
                required
                disabled={isSending}
                className="form-control-input"
                placeholder="Your email"
                autoComplete="email"
              />
            </div>

            <div className="form-group-block">
              <label htmlFor="subject" className="form-input-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                maxLength={200}
                disabled={isSending}
                className="form-control-input"
                placeholder="Subject"
              />
            </div>

            <div className="form-group-block">
              <label htmlFor="message" className="form-input-label">
                Message <span aria-hidden="true" style={{ color: 'var(--color-link)' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={3000}
                required
                disabled={isSending}
                rows={6}
                className="form-control-textarea"
                placeholder="Your message (max 3000 characters)"
              />
            </div>

            {errorMsg && (
              <div
                role="alert"
                aria-live="assertive"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--color-error-soft, #f7d4d6)',
                  color: 'var(--color-error, #ee0000)',
                  borderRadius: 'var(--radius-sm, 6px)',
                  fontSize: '0.875rem',
                }}
              >
                <FiAlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="btn-send-message-blue"
              aria-label="Send Contact Message"
            >
              <span>{isSending ? 'Sending...' : 'Send Message'}</span>
              <FiSend size={18} aria-hidden="true" />
            </button>

            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="contact-success-alert"
              >
                <FiCheckCircle size={20} aria-hidden="true" />
                <span>Thank you! Your message has been received successfully.</span>
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;

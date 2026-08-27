import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log defensively without exposing sensitive internal data in production
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: 'var(--color-canvas, #ffffff)',
            color: 'var(--color-ink, #171717)',
            fontFamily: 'var(--font-sans, system-ui, sans-serif)',
          }}
        >
          <div style={{ maxWidth: '480px' }}>
            <h1
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                letterSpacing: '-0.8px',
                marginBottom: '0.75rem',
              }}
            >
              Something went wrong.
            </h1>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-body, #4d4d4d)',
                marginBottom: '1.5rem',
                lineHeight: 1.5,
              }}
            >
              An unexpected error occurred. Please refresh the page or return home.
            </p>
            <button
              onClick={this.handleReset}
              style={{
                padding: '0.625rem 1.25rem',
                backgroundColor: 'var(--color-primary, #171717)',
                color: 'var(--color-on-primary, #ffffff)',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.9375rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

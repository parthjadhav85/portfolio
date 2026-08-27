import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, delay = 0, className = '', animation = 'fadeInUp' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const delayClass = delay ? `scroll-reveal-delay-${delay}` : '';
  const animClass = animation ? `scroll-reveal-${animation}` : '';

  return (
    <div
      ref={domRef}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''} ${delayClass} ${animClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

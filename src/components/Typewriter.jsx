import { useState, useEffect } from 'react';

const Typewriter = ({
  words = ['Student', 'Developer', 'Engineer', 'Creator'],
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseTime = 1800,
  className = '',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const fullWord = words[currentWordIndex % words.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullWord.substring(0, currentText.length + 1));

        if (currentText === fullWord) {
          // Pause when word is fully typed
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting backward
        setCurrentText(fullWord.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`typewriter-wrapper ${className}`}>
      <span className="typewriter-text">{currentText}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
};

export default Typewriter;

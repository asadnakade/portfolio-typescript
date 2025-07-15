import { useState, useEffect } from 'react';

export function useTypingAnimation(texts: string[], speed = 100, deleteSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return displayText;
}

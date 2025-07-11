// src/components/TextToSpeech.js
import React, { useEffect } from 'react';

const TextToSpeech = ({ text, auto = true }) => {
  useEffect(() => {
    if (auto && text) {
      if (!window.speechSynthesis) return;

      window.speechSynthesis.cancel(); // cancel previous speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, [text, auto]);

  const handleClick = () => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button className="speak-button" onClick={handleClick}>
      🔊 Speak Again
    </button>
  );
};

export default TextToSpeech;

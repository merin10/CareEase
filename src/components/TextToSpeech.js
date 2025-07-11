import { useEffect } from 'react';

const TextToSpeech = ({ text }) => {
  useEffect(() => {
    if ('speechSynthesis' in window && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // You can change to "ml-IN" for Malayalam
      speechSynthesis.speak(utterance);
    }
  }, [text]);

  return null; // No visible button
};

export default TextToSpeech;

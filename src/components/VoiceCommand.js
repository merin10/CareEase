import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceCommand = ({ onCommand }) => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Browser doesn't support speech recognition.");
      return;
    }

    if (transcript && transcript.toLowerCase().startsWith("add task")) {
      const task = transcript.slice(8).trim();
      if (task) {
        onCommand(task);
        resetTranscript();
      }
    }
  }, [transcript, browserSupportsSpeechRecognition, onCommand, resetTranscript]);

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start Listening</button>
      <p>{listening ? 'Listening...' : 'Click to start voice command'}</p>
    </div>
  );
};

export default VoiceCommand;

import React, { useState } from "react";

const VoiceCommand = ({ onCommand }) => {
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState("");

  const handleSpeech = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMessage("❌ Speech Recognition not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setMessage("🎤 Listening...");
    };

    recognition.onerror = (e) => {
      setMessage(`Error: ${e.error}`);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      console.log("🗣 Recognized speech:", text);
      setMessage(`✅ Heard: "${text}"`);

      // Extract task if starts with "add task"
      if (text.toLowerCase().startsWith("add task")) {
        const taskText = text.replace(/add task/i, "").trim();
        if (taskText) {
          console.log("📝 Adding task:", taskText);
          onCommand(taskText);
        } else {
          console.log("⚠️ No task content found.");
        }
      } else {
        console.log("❌ Didn't start with 'add task'");
      }
    };

    recognition.start();
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={handleSpeech} style={{ padding: "10px 20px" }}>
        🎤 {isListening ? "Listening..." : "Start Voice Input"}
      </button>
      <p>{message}</p>
    </div>
  );
};

export default VoiceCommand;

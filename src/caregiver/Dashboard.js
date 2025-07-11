import React, { useState } from "react";
import "./Dashboard.css";

function CaregiverDashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Take medicine", completed: false },
    { id: 2, text: "Walk 10 minutes", completed: true }
  ]);

  const [task, setTask] = useState("");
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTask("");
    speakText(`Task added: ${newTask.text}`);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const saveNote = () => {
    setSavedNote(note);
    speakText("Note saved successfully");
  };

  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const progress =
    tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  return (
    <div className="dashboard">
      <h2>Caregiver Dashboard (Sample Patient)</h2>
      <div className="dashboard-container">
        <div className="main-section">
          <h3>Patient Tasks</h3>

          <div className="task-entry">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add new task"
            />
            <button onClick={addTask}>Add</button>
          </div>

          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p>{progress}% tasks completed</p>
          </div>

          <ul className="task-list">
            {tasks.map((t) => (
              <li key={t.id}>
                {t.text}
                <button onClick={() => removeTask(t.id)}>Cut off</button>
              </li>
            ))}
          </ul>

          <div className="notes-section">
            <h4>Caregiver Notes</h4>
            <textarea
              rows="4"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write a note for this patient..."
            />
            <button onClick={saveNote}>Save Note</button>
            {savedNote && (
              <div className="saved-note">
                <p><strong>Saved Note:</strong> {savedNote}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaregiverDashboard;

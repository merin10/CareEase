// src/patient/Dashboard.js
import React, { useState } from 'react';
import '../patient/dashboard.css';
import VoiceCommand from '../components/VoiceCommand';

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [tasks, setTasks] = useState([
    { text: 'Brush Teeth', completed: true },
    { text: 'Eat Breakfast', completed: true },
    { text: 'Take Medicine', completed: false },
    { text: 'Walk', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  const moods = [
    { emoji: '😊', label: 'Happy', color: 'yellow' },
    { emoji: '😢', label: 'Sad', color: 'lightblue' },
    { emoji: '😡', label: 'Angry', color: 'lightcoral' },
    { emoji: '😴', label: 'Tired', color: 'plum' },
    { emoji: '😟', label: 'Worried', color: 'lightgray' },
    { emoji: '😁', label: 'Excited', color: 'lightgreen' },
    { emoji: '😐', label: 'Neutral', color: 'peachpuff' },
    { emoji: '🙂', label: 'Okay', color: 'lightpink' }
  ];

  const completedTasks = tasks.filter(task => task.completed);
  const progressPercentage = (completedTasks.length / tasks.length) * 100;

  const toggleTaskCompletion = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask.trim(), completed: false }]);
    setNewTask('');
  };

  const handleVoiceCommand = (taskText) => {
    setTasks(prev => [...prev, { text: taskText, completed: false }]);
  };

  return (
    <main className="main-container">
      <div className="dashboard">

        {/* Welcome */}
        <div className="welcome-banner">
          <h2>Hello! 👋</h2>
          <p>How are you feeling today?</p>
        </div>

        {/* Mood Selector */}
        <section className="section">
          <h3>My Mood Today 🌟</h3>
          <div className="mood-grid">
            {moods.map((mood, index) => (
              <div
                key={index}
                className={`mood-card ${selectedMood?.emoji === mood.emoji ? 'selected' : ''}`}
                style={{
                  backgroundColor: selectedMood?.emoji === mood.emoji ? mood.color : '#f9f9f9',
                  borderColor: selectedMood?.emoji === mood.emoji ? '#007bff' : '#ccc'
                }}
                onClick={() => setSelectedMood(mood)}
              >
                <div className="emoji">{mood.emoji}</div>
                <div>{mood.label}</div>
              </div>
            ))}
          </div>
          {selectedMood && (
            <div className="selected-mood-msg">
              I'm feeling {selectedMood.label} today! {selectedMood.emoji}
            </div>
          )}
        </section>

        {/* Voice Command */}
        <section className="section">
          <h3>🎤 Add Task by Voice</h3>
          <VoiceCommand onCommand={handleVoiceCommand} />
        </section>

        {/* Task Section */}
        <section className="section">
          <h3>Today's Progress 📋</h3>

          <ul className="task-list">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={task.completed ? 'completed' : ''}
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.text}
              </li>
            ))}
          </ul>

          <div className="add-task">
            <input
              type="text"
              value={newTask}
              placeholder="Add a new task..."
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
            />
            <button onClick={handleAddTask}>Add</button>
          </div>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="progress-text">
            {completedTasks.length} / {tasks.length} tasks completed! 🎉
          </p>
          <p className="progress-msg">
            {progressPercentage === 100
              ? 'Amazing job! All tasks done! 🌟'
              : "Keep going, you're doing great! 💪"}
          </p>
        </section>

        {/* Highlights */}
        <section className="section">
          <h3>Today's Highlights ✨</h3>
          <div className="highlight-card">🌅 <div><b>Good Morning!</b><p>Start your day with energy!</p></div></div>
          <div className="highlight-card">💊 <div><b>Medicine Reminder</b><p>Don’t forget your medicine!</p></div></div>
          <div className="highlight-card">🎨 <div><b>Activity Time</b><p>Fun activity today!</p></div></div>
        </section>

      </div>
    </main>
  );
};

export default Dashboard;
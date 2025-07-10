// src/components/SpeciallyAbledDashboard.js
import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import './SpeciallyAbledDashboard.css';

const SpeciallyAbledDashboard = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);
  const [userName] = useState('Alex');

  const moods = [
    { emoji: '😊', label: 'Happy', color: 'mood-yellow' },
    { emoji: '😢', label: 'Sad', color: 'mood-blue' },
    { emoji: '😡', label: 'Angry', color: 'mood-red' },
    { emoji: '😴', label: 'Tired', color: 'mood-purple' },
    { emoji: '😰', label: 'Worried', color: 'mood-gray' },
    { emoji: '🤗', label: 'Excited', color: 'mood-green' },
    { emoji: '🤒', label: 'Sick', color: 'mood-orange' },
    { emoji: '😌', label: 'Calm', color: 'mood-teal' }
  ];

  const dailyTasks = [
    { id: 1, task: 'Brush Teeth', emoji: '🦷', time: '8:00 AM', priority: 'high' },
    { id: 2, task: 'Take Medicine', emoji: '💊', time: '9:00 AM', priority: 'high' },
    { id: 3, task: 'Eat Breakfast', emoji: '🍳', time: '9:30 AM', priority: 'high' },
    { id: 4, task: 'Exercise/Walk', emoji: '🚶', time: '10:30 AM', priority: 'medium' },
    { id: 5, task: 'Play Games', emoji: '🎮', time: '2:00 PM', priority: 'low' },
    { id: 6, task: 'Read Book', emoji: '📚', time: '3:00 PM', priority: 'medium' },
    { id: 7, task: 'Listen to Music', emoji: '🎵', time: '4:00 PM', priority: 'low' },
    { id: 8, task: 'Eat Lunch', emoji: '🍽️', time: '12:30 PM', priority: 'high' },
    { id: 9, task: 'Art/Drawing', emoji: '🎨', time: '5:00 PM', priority: 'low' },
    { id: 10, task: 'Call Family', emoji: '📞', time: '6:00 PM', priority: 'medium' },
    { id: 11, task: 'Eat Dinner', emoji: '🍽️', time: '7:00 PM', priority: 'high' },
    { id: 12, task: 'Go to Bed', emoji: '🛏️', time: '9:00 PM', priority: 'high' }
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleTaskComplete = (taskId) => {
    setCompletedTasks(prev =>
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-default';
    }
  };

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  const completionPercentage = Math.round((completedTasks.length / dailyTasks.length) * 100);

  return (
    <div className="specially-abled-dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-content">
            <div className="user-avatar">
              <span className="avatar-emoji">👋</span>
            </div>
            <div className="user-info">
              <h1>Hello, {userName}!</h1>
              <p>{currentTime}</p>
            </div>
          </div>
          <div className="completion-rate">
            <div className="percentage">{completionPercentage}%</div>
            <div className="label">Tasks Complete</div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Daily Tasks Section */}
          <div className="tasks-section">
            <div className="tasks-card">
              <h2 className="section-title">
                <Star className="star-icon" size={28} />
                Today's Tasks
              </h2>
              
              {/* Progress Bar */}
              <div className="progress-section">
                <div className="progress-header">
                  <span>Progress</span>
                  <span>
                    {completedTasks.length} of {dailyTasks.length} completed
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="tasks-grid">
                {dailyTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`task-item ${getPriorityClass(task.priority)} ${
                      completedTasks.includes(task.id) ? 'completed' : ''
                    }`}
                  >
                    <div className="task-content">
                      <div className="task-emoji">{task.emoji}</div>
                      <div className="task-details">
                        <h3 className={completedTasks.includes(task.id) ? 'completed' : ''}>
                          {task.task}
                        </h3>
                        <p>{task.time}</p>
                      </div>
                      <button
                        onClick={() => handleTaskComplete(task.id)}
                        className={`complete-button ${
                          completedTasks.includes(task.id) ? 'completed' : ''
                        }`}
                      >
                        {completedTasks.includes(task.id) && <span>✓</span>}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How Are You Feeling Section */}
          <div className="mood-section">
            <div className="mood-card">
              <h2 className="section-title">
                <Heart className="heart-icon" size={28} />
                How are you feeling?
              </h2>
              <div className="mood-grid">
                {moods.map((mood, index) => (
                  <button
                    key={index}
                    onClick={() => handleMoodSelect(mood)}
                    className={`mood-button ${mood.color} ${
                      selectedMood.emoji === mood.emoji ? 'selected' : ''
                    }`}
                  >
                    <div className="mood-emoji">{mood.emoji}</div>
                    <div className="mood-label">{mood.label}</div>
                  </button>
                ))}
              </div>
              {selectedMood && (
                <div className="mood-selected">
                  <p>You're feeling {selectedMood.emoji} {selectedMood.label} today!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Achievement Section */}
        {completionPercentage === 100 && (
          <div className="achievement-banner">
            <div className="achievement-content">
              <div className="celebration-emoji">🎉</div>
              <h2>Congratulations!</h2>
              <p>You completed all your tasks today! Great job!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeciallyAbledDashboard;
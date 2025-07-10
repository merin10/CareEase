// src/components/TaskList.js
import React from 'react';
import './TaskList.css'; // We'll create this CSS file

const TaskList = ({ tasks, completedTasks, setCompletedTasks }) => {
  const handleTaskComplete = (taskId) => {
    setCompletedTasks((prev) =>
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  return (
    <div className="task-list-container">
      <div className="task-list-card">
        <h2 className="task-list-title">Today's Tasks</h2>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-header">
            <span className="progress-label">Progress</span>
            <span className="progress-count">
              {completedTasks.length} of {tasks.length} completed
            </span>
          </div>
        </div>

        <div className="tasks-container">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${
                completedTasks.includes(task.id) ? 'completed' : ''
              }`}
            >
              <div className="task-content">
                <div className="task-emoji-container">
                  <span className="task-emoji">{task.emoji}</span>
                </div>
                <div className="task-details">
                  <h3 className={`task-name ${
                    completedTasks.includes(task.id) ? 'completed' : ''
                  }`}>
                    {task.task}
                  </h3>
                  <p className="task-time">{task.time}</p>
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
  );
};

export default TaskList;
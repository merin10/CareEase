import React, { useState } from 'react';
import './Dashboard.css';

const Planner = () => {
  const [tasks, setTasks] = useState([
    { text: 'Wake up early', completed: false },
    { text: 'Plan meals', completed: false },
    { text: 'Take medicine', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask.trim(), completed: false }]);
    setNewTask('');
  };

  return (
    <main className="planner-container">
      <div className="planner-card">
        <h2>📝 Daily Planner</h2>
        <div className="task-input">
          <input
            type="text"
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              onClick={() => toggleCompletion(index)}
              className={task.completed ? 'completed' : ''}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Planner;
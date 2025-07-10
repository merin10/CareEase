// src/patient/Dashboard.js
import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const completedTasks = ['Brush Teeth', 'Eat Breakfast'];
  const dailyTasks = ['Brush Teeth', 'Eat Breakfast', 'Take Medicine', 'Walk'];

  const moods = [
    { emoji: '😊', label: 'Happy', color: 'bg-green-100 border-green-300' },
    { emoji: '😔', label: 'Sad', color: 'bg-blue-100 border-blue-300' },
    { emoji: '😡', label: 'Angry', color: 'bg-red-100 border-red-300' },
    { emoji: '😰', label: 'Anxious', color: 'bg-yellow-100 border-yellow-300' },
    { emoji: '😴', label: 'Tired', color: 'bg-purple-100 border-purple-300' },
    { emoji: '🤒', label: 'Sick', color: 'bg-orange-100 border-orange-300' }
  ];

  const progressPercentage = (completedTasks.length / dailyTasks.length) * 100;

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-8 space-y-8 overflow-y-auto">
        
        {/* Welcome */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6 rounded-3xl">
          <h2 className="text-3xl font-bold mb-2">Hello! 👋</h2>
          <p className="text-xl">How are you feeling today?</p>
        </div>

        {/* Mood Selector */}
        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">My Mood Today 🌟</h3>
          <div className="grid grid-cols-3 gap-4">
            {moods.map((mood, index) => (
              <div
                key={index}
                onClick={() => setSelectedMood(mood)}
                className={`p-6 border-2 rounded-2xl text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedMood?.emoji === mood.emoji
                    ? `${mood.color} ring-4 ring-blue-300 scale-105`
                    : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <div className="font-medium text-lg">{mood.label}</div>
              </div>
            ))}
          </div>
          {selectedMood && (
            <div className="mt-4 p-4 bg-blue-50 rounded-2xl text-center">
              <p className="text-lg font-medium text-blue-800">
                I'm feeling {selectedMood.label} today! {selectedMood.emoji}
              </p>
            </div>
          )}
        </div>

        {/* Progress */}
        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Today's Progress 📊</h3>
          <div className="bg-gray-200 rounded-full h-6 mb-4">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-6 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">
              {completedTasks.length} / {dailyTasks.length} tasks completed! 🎉
            </p>
            <p className="text-lg text-gray-600 mt-2">
              {progressPercentage === 100 ? "Amazing job! All tasks done! 🌟" : "Keep going, you're doing great! 💪"}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Quick Actions 🚀</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-2xl text-center border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">📋</div>
              <p className="font-bold text-lg">View Tasks</p>
            </div>
            <div className="bg-green-50 p-4 rounded-2xl text-center border-2 border-green-200 hover:border-green-400 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">📝</div>
              <p className="font-bold text-lg">Add Note</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-2xl text-center border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">📊</div>
              <p className="font-bold text-lg">Progress</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-2xl text-center border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-bold text-lg">Goals</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Today's Highlights ✨</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-2xl">
              <div className="text-2xl">🌅</div>
              <div>
                <p className="font-medium">Good Morning!</p>
                <p className="text-sm text-gray-600">Time to start your day with energy!</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-2xl">
              <div className="text-2xl">💊</div>
              <div>
                <p className="font-medium">Medicine Reminder</p>
                <p className="text-sm text-gray-600">Don't forget your morning medicine!</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-2xl">
              <div className="text-2xl">🎨</div>
              <div>
                <p className="font-medium">Activity Time</p>
                <p className="text-sm text-gray-600">Fun activity planned for today!</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;

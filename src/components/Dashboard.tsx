import React from 'react';
import { TrendingUp, BookOpen, Code, Trophy, Clock, CheckCircle, Star, Target, Play, Plus, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Dashboard: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      progress: 75,
      level: 'Beginner',
      icon: '🚀',
      lessons: 12,
      completed: 9
    },
    {
      id: 2,
      title: 'React Adventures',
      progress: 45,
      level: 'Intermediate',
      icon: '⚛️',
      lessons: 15,
      completed: 7
    },
    {
      id: 3,
      title: 'Python Playground',
      progress: 30,
      level: 'Beginner',
      icon: '🐍',
      lessons: 18,
      completed: 5
    },
    {
      id: 4,
      title: 'CSS Magic',
      progress: 90,
      level: 'Intermediate',
      icon: '🎨',
      lessons: 10,
      completed: 9
    }
  ];

  const handleContinueCourse = (courseId: number) => {
    setSelectedCourse(courseId);
    // Simulate course navigation
    setTimeout(() => {
      alert(`Starting ${courses.find(c => c.id === courseId)?.title}...`);
      setSelectedCourse(null);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'new-project':
        alert('Opening project creator...');
        break;
      case 'ai-helper':
        alert('Starting AI assistant...');
        break;
      case 'browse-templates':
        alert('Opening template library...');
        break;
    }
  };

  const achievements = [
    { name: 'First Code', icon: '🎯', unlocked: true },
    { name: 'Debug Master', icon: '🔧', unlocked: true },
    { name: 'Creative Coder', icon: '🎨', unlocked: true },
    { name: 'AI Assistant', icon: '🤖', unlocked: false },
    { name: 'Project Master', icon: '🏆', unlocked: false },
    { name: 'Code Warrior', icon: '⚔️', unlocked: false }
  ];

  const recentProjects = [
    { name: 'Portfolio Website', tech: 'React', status: 'Completed', date: '2 days ago' },
    { name: 'Calculator App', tech: 'JavaScript', status: 'In Progress', date: '1 day ago' },
    { name: 'Todo List', tech: 'Python', status: 'Completed', date: '1 week ago' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, Alex! 👋
        </h1>
        <p className="text-gray-600">Ready to continue your coding journey?</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Courses Active', value: '4', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
          { label: 'Projects Built', value: '12', icon: Code, color: 'from-purple-500 to-pink-500' },
          { label: 'Hours Coded', value: '48', icon: Clock, color: 'from-green-500 to-emerald-500' },
          { label: 'Achievements', value: '8', icon: Trophy, color: 'from-yellow-500 to-orange-500' }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Active Courses */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-purple-500" />
            Continue Learning
          </h2>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{course.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.level} • {course.lessons} lessons</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{course.completed}/{course.lessons} completed</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center justify-center space-x-2">
                    {selectedCourse === course.id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Continue Course</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
              Achievements
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg text-center transition-all ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200' 
                      : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <div className="text-xs font-medium text-gray-700">{achievement.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-blue-500" />
              Recent Projects
            </h3>
            <div className="space-y-3">
              {recentProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800 text-sm">{project.name}</div>
                    <div className="text-xs text-gray-500">{project.tech} • {project.date}</div>
                  </div>
                  <div className={`flex items-center space-x-1 ${
                    project.status === 'Completed' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {project.status === 'Completed' ? 
                      <CheckCircle className="w-4 h-4" /> : 
                      <Clock className="w-4 h-4" />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-green-500" />
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleQuickAction('new-project')}
                className="w-full py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors flex items-center justify-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Start New Project</span>
              </button>
              <button 
                onClick={() => handleQuickAction('ai-helper')}
                className="w-full py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask AI Helper</span>
              </button>
              <button 
                onClick={() => handleQuickAction('browse-templates')}
                className="w-full py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition-colors flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse Templates</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
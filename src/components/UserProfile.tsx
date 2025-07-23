import React, { useState } from 'react';
import { User, Settings, LogOut, BookOpen, Trophy, Clock, Edit } from 'lucide-react';

interface UserProfileProps {
  user: any;
  onLogout: () => void;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout, onClose }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      onLogout();
      setIsLoggingOut(false);
      onClose();
    }, 1000);
  };

  const stats = [
    { label: 'Courses Completed', value: '8', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Projects Built', value: '12', icon: Trophy, color: 'text-green-600' },
    { label: 'Hours Coded', value: '48', icon: Clock, color: 'text-purple-600' }
  ];

  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 text-lg">{user.name}</h3>
            <p className="text-gray-600 text-sm">{user.email || user.phone}</p>
            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full mt-1">
              Pro Student
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6 border-b border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Your Progress</h4>
        <div className="space-y-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <span className="font-semibold text-gray-800">{stat.value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-2">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <BookOpen className="w-4 h-4" />
          <span>My Courses</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Trophy className="w-4 h-4" />
          <span>Achievements</span>
        </button>
      </div>

      {/* Logout */}
      <div className="p-2 border-t border-gray-200">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
        >
          {isLoggingOut ? (
            <>
              <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Logging out...</span>
            </>
          ) : (
            <>
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
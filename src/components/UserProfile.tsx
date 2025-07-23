import React, { useState } from 'react';
import { User, Settings, LogOut, BookOpen, Trophy, Clock, Edit, Bell, Shield, Palette, Globe, HelpCircle } from 'lucide-react';

interface UserProfileProps {
  user: any;
  onLogout: () => void;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout, onClose }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      onLogout();
      setIsLoggingOut(false);
      onClose();
    }, 1000);
  };

  const handleMenuClick = (action: string) => {
    setActiveModal(action);
    // Simulate navigation or modal opening
    setTimeout(() => {
      switch (action) {
        case 'edit-profile':
          alert('Opening profile editor...');
          break;
        case 'settings':
          alert('Opening settings panel...');
          break;
        case 'my-courses':
          alert('Navigating to your courses...');
          break;
        case 'achievements':
          alert('Opening achievements gallery...');
          break;
        case 'notifications':
          alert('Opening notification settings...');
          break;
        case 'privacy':
          alert('Opening privacy settings...');
          break;
        case 'help':
          alert('Opening help center...');
          break;
      }
      setActiveModal(null);
    }, 1000);
  };

  const stats = [
    { label: 'Courses Completed', value: '8', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Projects Built', value: '12', icon: Trophy, color: 'text-green-600' },
    { label: 'Hours Coded', value: '48', icon: Clock, color: 'text-purple-600' }
  ];

  const achievements = [
    { name: 'First Code', icon: '🎯', unlocked: true, description: 'Completed your first coding lesson' },
    { name: 'Debug Master', icon: '🔧', unlocked: true, description: 'Fixed 10 bugs successfully' },
    { name: 'Creative Coder', icon: '🎨', unlocked: true, description: 'Used 5 creative templates' },
    { name: 'AI Assistant', icon: '🤖', unlocked: false, description: 'Asked 50 questions to AI' }
  ];

  const recentCourses = [
    { name: 'JavaScript Fundamentals', progress: 75, icon: '🚀' },
    { name: 'React Adventures', progress: 45, icon: '⚛️' },
    { name: 'CSS Magic', progress: 90, icon: '🎨' }
  ];

  return (
    <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
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
            <div className="flex items-center space-x-2 mt-1">
              <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                Pro Student
              </span>
              <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Level 5
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3 text-sm">Your Progress</h4>
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <Icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                <div className="font-bold text-gray-800 text-lg">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center">
          <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
          Recent Achievements
        </h4>
        <div className="space-y-2">
          {achievements.slice(0, 3).map((achievement, index) => (
            <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${
              achievement.unlocked ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50 opacity-60'
            }`}>
              <span className="text-lg">{achievement.icon}</span>
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">{achievement.name}</div>
                <div className="text-xs text-gray-600">{achievement.description}</div>
              </div>
              {achievement.unlocked && (
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Courses */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center">
          <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
          Continue Learning
        </h4>
        <div className="space-y-2">
          {recentCourses.map((course, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <span className="text-lg">{course.icon}</span>
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">{course.name}</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-xs text-gray-600 font-medium">{course.progress}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Menu Items */}
      <div className="p-2">
        <div className="space-y-1">
          <button 
            onClick={() => handleMenuClick('edit-profile')}
            disabled={activeModal === 'edit-profile'}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {activeModal === 'edit-profile' ? (
              <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Edit className="w-4 h-4" />
            )}
            <span className="font-medium">Edit Profile</span>
          </button>

          <button 
            onClick={() => handleMenuClick('my-courses')}
            disabled={activeModal === 'my-courses'}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {activeModal === 'my-courses' ? (
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <BookOpen className="w-4 h-4" />
            )}
            <span className="font-medium">My Courses</span>
            <span className="ml-auto bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">4</span>
          </button>

          <button 
            onClick={() => handleMenuClick('achievements')}
            disabled={activeModal === 'achievements'}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {activeModal === 'achievements' ? (
              <div className="w-4 h-4 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Trophy className="w-4 h-4" />
            )}
            <span className="font-medium">Achievements</span>
            <span className="ml-auto bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">8</span>
          </button>

          <button 
            onClick={() => handleMenuClick('settings')}
            disabled={activeModal === 'settings'}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          >
            {activeModal === 'settings' ? (
              <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Settings className="w-4 h-4" />
            )}
            <span className="font-medium">Settings</span>
          </button>
        </div>

        {/* Additional Options */}
        <div className="border-t border-gray-200 mt-2 pt-2">
          <div className="space-y-1">
            <button 
              onClick={() => handleMenuClick('notifications')}
              disabled={activeModal === 'notifications'}
              className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
              {activeModal === 'notifications' ? (
                <div className="w-3 h-3 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Bell className="w-3 h-3" />
              )}
              <span>Notifications</span>
            </button>

            <button 
              onClick={() => handleMenuClick('privacy')}
              disabled={activeModal === 'privacy'}
              className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
              {activeModal === 'privacy' ? (
                <div className="w-3 h-3 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Shield className="w-3 h-3" />
              )}
              <span>Privacy & Security</span>
            </button>

            <button 
              onClick={() => handleMenuClick('help')}
              disabled={activeModal === 'help'}
              className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
              {activeModal === 'help' ? (
                <div className="w-3 h-3 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <HelpCircle className="w-3 h-3" />
              )}
              <span>Help & Support</span>
            </button>
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="p-2 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 font-medium"
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
import React, { useState } from 'react';
import { User, Settings, LogOut, BookOpen, Trophy, Clock, Edit, Bell, Shield, Palette, Globe, HelpCircle } from 'lucide-react';

interface UserProfileProps {
  user: any;
  onLogout: () => void;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout, onClose }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [activeView, setActiveView] = useState<'main' | 'edit-profile' | 'settings' | 'courses' | 'achievements' | 'notifications' | 'privacy' | 'help'>('main');
  const [isLoading, setIsLoading] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user.name || '',
    email: user.email || '',
    bio: 'Passionate student learning to code with AI assistance!',
    location: 'United States',
    website: ''
  });

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      onLogout();
      setIsLoggingOut(false);
      onClose();
    }, 1000);
  };

  const handleViewChange = (view: typeof activeView) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveView(view);
      setIsLoading(false);
    }, 300);
  };

  const handleSaveProfile = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Update user data (in real app, this would be an API call)
      localStorage.setItem('codecraft_user', JSON.stringify({
        ...user,
        name: editForm.name,
        email: editForm.email
      }));
      setActiveView('main');
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
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

  const renderEditProfile = () => (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Edit Profile</h3>
        <button
          onClick={() => setActiveView('main')}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={editForm.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
          <textarea
            value={editForm.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={editForm.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
          <input
            type="url"
            value={editForm.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            placeholder="https://your-website.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex space-x-3 pt-4">
          <button
            onClick={handleSaveProfile}
            disabled={isLoading}
            className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            onClick={() => setActiveView('main')}
            className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
        <button
          onClick={() => setActiveView('main')}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <div className="font-medium text-gray-800">Dark Mode</div>
            <div className="text-sm text-gray-600">Switch to dark theme</div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <div className="font-medium text-gray-800">Email Notifications</div>
            <div className="text-sm text-gray-600">Receive course updates via email</div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <div className="font-medium text-gray-800">Auto-save Projects</div>
            <div className="text-sm text-gray-600">Automatically save your work</div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
        
        <div className="py-3">
          <div className="font-medium text-gray-800 mb-2">Language</div>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        
        <div className="py-3">
          <div className="font-medium text-gray-800 mb-2">Time Zone</div>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option>UTC-8 (Pacific Time)</option>
            <option>UTC-5 (Eastern Time)</option>
            <option>UTC+0 (GMT)</option>
            <option>UTC+1 (Central European Time)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">My Courses</h3>
        <button
          onClick={() => setActiveView('main')}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-4">
        {[
          { name: 'JavaScript Fundamentals', progress: 75, icon: '🚀', status: 'In Progress', lessons: '9/12' },
          { name: 'React Adventures', progress: 45, icon: '⚛️', status: 'In Progress', lessons: '7/15' },
          { name: 'CSS Magic', progress: 90, icon: '🎨', status: 'Almost Done', lessons: '9/10' },
          { name: 'Python Playground', progress: 30, icon: '🐍', status: 'Started', lessons: '5/18' }
        ].map((course, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <span className="text-xl">{course.icon}</span>
                <div>
                  <div className="font-medium text-gray-800">{course.name}</div>
                  <div className="text-sm text-gray-600">{course.status} • {course.lessons} lessons</div>
                </div>
              </div>
              <span className="text-sm font-medium text-purple-600">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
        
        <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 mt-4">
          Browse More Courses
        </button>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Achievements</h3>
        <button
          onClick={() => setActiveView('main')}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { name: 'First Code', icon: '🎯', unlocked: true, description: 'Completed your first coding lesson', date: '2 days ago' },
          { name: 'Debug Master', icon: '🔧', unlocked: true, description: 'Fixed 10 bugs successfully', date: '1 week ago' },
          { name: 'Creative Coder', icon: '🎨', unlocked: true, description: 'Used 5 creative templates', date: '3 days ago' },
          { name: 'AI Assistant', icon: '🤖', unlocked: false, description: 'Asked 50 questions to AI', date: 'Locked' },
          { name: 'Project Master', icon: '🏆', unlocked: false, description: 'Completed 10 projects', date: 'Locked' },
          { name: 'Code Warrior', icon: '⚔️', unlocked: false, description: 'Coded for 100 hours', date: 'Locked' }
        ].map((achievement, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg text-center transition-all ${
              achievement.unlocked 
                ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200' 
                : 'bg-gray-50 border-2 border-gray-200 opacity-50'
            }`}
          >
            <div className="text-3xl mb-2">{achievement.icon}</div>
            <div className="font-medium text-gray-800 text-sm mb-1">{achievement.name}</div>
            <div className="text-xs text-gray-600 mb-2">{achievement.description}</div>
            <div className={`text-xs ${achievement.unlocked ? 'text-green-600' : 'text-gray-500'}`}>
              {achievement.date}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
        <div className="text-center">
          <div className="font-semibold text-gray-800 mb-1">Achievement Progress</div>
          <div className="text-sm text-gray-600 mb-3">3 of 6 achievements unlocked</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (activeView !== 'main') {
    return (
      <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[80vh] overflow-y-auto">
        {activeView === 'edit-profile' && renderEditProfile()}
        {activeView === 'settings' && renderSettings()}
        {activeView === 'courses' && renderCourses()}
        {activeView === 'achievements' && renderAchievements()}
      </div>
    );
  }

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
            onClick={() => handleViewChange('edit-profile')}
            disabled={isLoading}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Edit className="w-4 h-4" />
            )}
            <span className="font-medium">Edit Profile</span>
          </button>

          <button 
            onClick={() => handleViewChange('courses')}
            disabled={isLoading}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <BookOpen className="w-4 h-4" />
            )}
            <span className="font-medium">My Courses</span>
            <span className="ml-auto bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">4</span>
          </button>

          <button 
            onClick={() => handleViewChange('achievements')}
            disabled={isLoading}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Trophy className="w-4 h-4" />
            )}
            <span className="font-medium">Achievements</span>
            <span className="ml-auto bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">8</span>
          </button>

          <button 
            onClick={() => handleViewChange('settings')}
            disabled={isLoading}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? (
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
              onClick={() => handleViewChange('notifications')}
              disabled={isLoading}
              className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-3 h-3 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Bell className="w-3 h-3" />
              )}
              <span>Notifications</span>
            </button>

            <button 
              onClick={() => handleViewChange('privacy')}
              disabled={isLoading}
              className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-3 h-3 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Shield className="w-3 h-3" />
              )}
              <span>Privacy & Security</span>
            </button>

            <button 
              onClick={() => handleViewChange('help')}
              disabled={isLoading}
              className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
              {isLoading ? (
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
import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ProjectWorkspace from './components/ProjectWorkspace';
import AIAssistant from './components/AIAssistant';
import CreativeLibrary from './components/CreativeLibrary';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { Lock, Code2 } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'dashboard' | 'projects' | 'ai' | 'creative'>('home');
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
    setIsLoading(true);
    const savedUser = localStorage.getItem('codecraft_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    localStorage.setItem('codecraft_user', JSON.stringify(userData));
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('codecraft_user');
    setActiveSection('home');
  };

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  // Show loading screen while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <div className="text-xl font-semibold text-gray-800 mb-2">CodeCraft Academy</div>
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // Show authentication screen if user is not logged in
  if (!user) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50">
              {/* Logo and Title */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  CodeCraft Academy
                </h1>
                <p className="text-gray-600">
                  Learn coding the fun way with AI assistance and creative tools
                </p>
              </div>

              {/* Authentication Required Message */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6 border border-purple-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Lock className="w-6 h-6 text-purple-600" />
                  <h2 className="text-lg font-semibold text-gray-800">Authentication Required</h2>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Please sign in or create an account to access CodeCraft Academy's learning platform, 
                  AI assistant, and creative tools.
                </p>
              </div>

              {/* Features Preview */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">What you'll get access to:</h3>
                <div className="space-y-3">
                  {[
                    { icon: '🚀', title: 'Interactive Coding Courses', desc: 'Learn with hands-on projects' },
                    { icon: '🤖', title: 'AI-Powered Assistant', desc: 'Get instant help and suggestions' },
                    { icon: '🎨', title: 'Creative Library', desc: 'Access templates and animations' },
                    { icon: '💻', title: 'Project Workspace', desc: 'Build and deploy your projects' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-xl">{feature.icon}</span>
                      <div>
                        <div className="font-medium text-gray-800 text-sm">{feature.title}</div>
                        <div className="text-xs text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Auth Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleAuthClick('signup')}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Create Free Account
                </button>
                <button
                  onClick={() => handleAuthClick('signin')}
                  className="w-full py-3 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Sign In to Existing Account
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-purple-600">10K+</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">24/7</div>
                    <div className="text-xs text-gray-600">AI Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Modal */}
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onModeChange={setAuthMode}
          onAuthSuccess={handleAuthSuccess}
        />
      </>
    );
  }
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'projects':
        return <ProjectWorkspace />;
      case 'ai':
        return <AIAssistant />;
      case 'creative':
        return <CreativeLibrary />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header 
        activeSection={activeSection} 
        onNavigate={setActiveSection}
        user={user}
        onAuthSuccess={handleAuthSuccess}
        onLogout={handleLogout}
      />
      <main className="pt-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
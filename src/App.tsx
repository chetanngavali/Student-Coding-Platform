import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ProjectWorkspace from './components/ProjectWorkspace';
import AIAssistant from './components/AIAssistant';
import CreativeLibrary from './components/CreativeLibrary';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'dashboard' | 'projects' | 'ai' | 'creative'>('home');
  const [user, setUser] = useState<any>(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('codecraft_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    localStorage.setItem('codecraft_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('codecraft_user');
    setActiveSection('home');
  };

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
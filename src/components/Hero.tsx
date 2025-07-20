import React from 'react';
import { Rocket, Star, Zap, Award, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: 'home' | 'dashboard' | 'projects' | 'ai' | 'creative') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Rocket,
      title: 'Launch Your Ideas',
      description: 'Build amazing projects with our guided tutorials',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'AI-Powered Learning',
      description: 'Get instant help and code suggestions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Creative Tools',
      description: 'Access themes, animations, and design assets',
      color: 'from-cyan-500 to-green-500'
    },
    {
      icon: Award,
      title: 'Earn Achievements',
      description: 'Unlock badges and showcase your progress',
      color: 'from-green-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-bounce">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-yellow-800" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Learn Coding
            </span>
            <br />
            <span className="text-gray-800">The Fun Way!</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students building amazing projects with AI assistance, 
            creative tools, and gamified learning experiences that make coding addictive! 🚀
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/50"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10K+', label: 'Students' },
            { number: '500+', label: 'Projects' },
            { number: '50+', label: 'Tutorials' },
            { number: '24/7', label: 'AI Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
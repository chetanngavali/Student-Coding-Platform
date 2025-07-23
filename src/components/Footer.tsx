import React from 'react';
import { Code2, Heart, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const handleSocialClick = (platform: string) => {
    const urls = {
      github: 'https://github.com/codecraft-academy',
      twitter: 'https://twitter.com/codecraft_edu',
      mail: 'mailto:hello@codecraft.academy'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  const handleLinkClick = (section: string) => {
    alert(`Navigating to ${section}...`);
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CodeCraft Academy
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering the next generation of developers with fun, interactive learning experiences and AI-powered tools.
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <button 
                onClick={() => handleSocialClick('github')}
                className="p-2 text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="p-2 text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleSocialClick('mail')}
                className="p-2 text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Learn</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => handleLinkClick('JavaScript Basics')} className="hover:text-purple-500 transition-colors">JavaScript Basics</button></li>
              <li><button onClick={() => handleLinkClick('React Fundamentals')} className="hover:text-purple-500 transition-colors">React Fundamentals</button></li>
              <li><button onClick={() => handleLinkClick('Python Adventures')} className="hover:text-purple-500 transition-colors">Python Adventures</button></li>
              <li><button onClick={() => handleLinkClick('CSS Magic')} className="hover:text-purple-500 transition-colors">CSS Magic</button></li>
              <li><button onClick={() => handleLinkClick('All Courses')} className="hover:text-purple-500 transition-colors">All Courses</button></li>
            </ul>
          </div>

          {/* Create */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Create</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => handleLinkClick('Project Builder')} className="hover:text-purple-500 transition-colors">Project Builder</button></li>
              <li><button onClick={() => handleLinkClick('AI Assistant')} className="hover:text-purple-500 transition-colors">AI Assistant</button></li>
              <li><button onClick={() => handleLinkClick('Creative Library')} className="hover:text-purple-500 transition-colors">Creative Library</button></li>
              <li><button onClick={() => handleLinkClick('Templates')} className="hover:text-purple-500 transition-colors">Templates</button></li>
              <li><button onClick={() => handleLinkClick('Showcase')} className="hover:text-purple-500 transition-colors">Showcase</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => handleLinkClick('Help Center')} className="hover:text-purple-500 transition-colors">Help Center</button></li>
              <li><button onClick={() => handleLinkClick('Community')} className="hover:text-purple-500 transition-colors">Community</button></li>
              <li><button onClick={() => handleLinkClick('Tutorials')} className="hover:text-purple-500 transition-colors">Tutorials</button></li>
              <li><button onClick={() => handleLinkClick('Contact Us')} className="hover:text-purple-500 transition-colors">Contact Us</button></li>
              <li><button onClick={() => handleLinkClick('Privacy Policy')} className="hover:text-purple-500 transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for aspiring developers
          </p>
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            © 2025 CodeCraft Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
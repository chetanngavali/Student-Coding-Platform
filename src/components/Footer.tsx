import React from 'react';
import { Code2, Heart, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
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
              <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors">
                <Github className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Learn</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-500 transition-colors">JavaScript Basics</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">React Fundamentals</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Python Adventures</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">CSS Magic</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">All Courses</a></li>
            </ul>
          </div>

          {/* Create */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Create</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-500 transition-colors">Project Builder</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">AI Assistant</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Creative Library</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Showcase</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a></li>
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
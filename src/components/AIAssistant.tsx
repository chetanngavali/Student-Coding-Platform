import React, { useState } from 'react';
import { Send, Bot, User, Lightbulb, Bug, Code, Sparkles, MessageCircle } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi there! I'm your AI coding assistant! 🤖 I can help you with debugging, code suggestions, explanations, and creative ideas. What would you like to work on today?",
      time: '2 min ago'
    },
    {
      type: 'user',
      content: "Can you help me create a simple calculator in JavaScript?",
      time: '1 min ago'
    },
    {
      type: 'ai',
      content: "Absolutely! I'd love to help you build a calculator. Let me create a simple yet functional calculator with HTML, CSS, and JavaScript. Here's what we'll include:\n\n• Basic arithmetic operations (+, -, ×, ÷)\n• Clear and equals functionality\n• Responsive design\n• Error handling\n\nWould you like me to start with the HTML structure?",
      time: 'just now'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const quickActions = [
    { icon: Bug, label: 'Debug Code', prompt: 'I have a bug in my code, can you help me fix it?' },
    { icon: Lightbulb, label: 'Get Ideas', prompt: 'Can you suggest some creative project ideas for a beginner?' },
    { icon: Code, label: 'Explain Code', prompt: 'Can you explain how this code works?' },
    { icon: Sparkles, label: 'Optimize', prompt: 'How can I make this code better and more efficient?' }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        type: 'user',
        content: newMessage,
        time: 'just now'
      }]);
      setNewMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'ai',
          content: "Great question! Let me help you with that. I'll provide a detailed explanation with code examples...",
          time: 'just now'
        }]);
      }, 1000);
    }
  };

  const handleQuickAction = (prompt: string) => {
    setNewMessage(prompt);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
          <Bot className="w-8 h-8 mr-3 text-purple-500" />
          AI Coding Assistant
        </h1>
        <p className="text-gray-600">Get instant help with coding, debugging, and creative ideas</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">CodeCraft AI</h3>
                  <p className="text-sm text-gray-600">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything about coding..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
              Quick Actions
            </h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.prompt)}
                    className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center space-x-3"
                  >
                    <Icon className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-gray-700">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AI Features */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">🤖 AI Features</h3>
            <div className="space-y-3">
              {[
                { feature: 'Code Generation', description: 'Write code from descriptions' },
                { feature: 'Bug Detection', description: 'Find and fix errors automatically' },
                { feature: 'Code Explanation', description: 'Understand complex code easily' },
                { feature: 'Best Practices', description: 'Learn industry standards' },
                { feature: 'Project Ideas', description: 'Get creative suggestions' }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <div className="font-medium text-gray-800 text-sm">{item.feature}</div>
                  <div className="text-xs text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Stats */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">📊 Today's Usage</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Questions Asked</span>
                <span className="font-semibold text-gray-800">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Code Generated</span>
                <span className="font-semibold text-gray-800">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Bugs Fixed</span>
                <span className="font-semibold text-gray-800">3</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-500 text-center">60% of daily limit used</p>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="font-semibold text-gray-800 mb-3">💡 Pro Tips</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Be specific in your questions</li>
              <li>• Share your code for better help</li>
              <li>• Ask follow-up questions</li>
              <li>• Try different approaches</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
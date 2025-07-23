import React, { useState } from 'react';
import { Play, Save, Share2, Settings, Eye, Code, Smartphone, Monitor, Tablet, Plus, FolderOpen, Download } from 'lucide-react';

const ProjectWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isRunning, setIsRunning] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const codeExamples = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Project</title>
</head>
<body>
    <div class="container">
        <h1 class="title">🚀 Welcome to My Project!</h1>
        <p class="description">This is an amazing project built with CodeCraft Academy!</p>
        <button class="btn" onclick="celebrate()">Click me!</button>
        <div id="output"></div>
    </div>
</body>
</html>`,
    css: `.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.title {
    font-size: 2.5rem;
    color: #8B5CF6;
    margin-bottom: 1rem;
    animation: bounce 2s infinite;
}

.description {
    font-size: 1.2rem;
    color: #6B7280;
    margin-bottom: 2rem;
}

.btn {
    background: linear-gradient(135deg, #8B5CF6, #3B82F6);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.2s;
}

.btn:hover {
    transform: scale(1.05);
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}`,
    js: `function celebrate() {
    const output = document.getElementById('output');
    const emojis = ['🎉', '🎊', '🚀', '✨', '🌟', '💫', '🎈', '🎆'];
    
    // Clear previous content
    output.innerHTML = '';
    
    // Create celebration effect
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = document.createElement('span');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'absolute';
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.fontSize = '2rem';
            emoji.style.animation = 'fall 3s linear forwards';
            
            output.style.position = 'relative';
            output.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 3000);
        }, i * 100);
    }
    
    // Add CSS for falling animation
    if (!document.getElementById('celebration-styles')) {
        const style = document.createElement('style');
        style.id = 'celebration-styles';
        style.textContent = \`
            @keyframes fall {
                to {
                    transform: translateY(200px) rotate(360deg);
                    opacity: 0;
                }
            }
        \`;
        document.head.appendChild(style);
    }
}`
  };

  const projects = [
    { name: 'Portfolio Website', tech: 'React', status: 'Active' },
    { name: 'Calculator App', tech: 'Vanilla JS', status: 'Draft' },
    { name: 'Todo List', tech: 'Python', status: 'Completed' },
    { name: 'Weather App', tech: 'React', status: 'Draft' }
  ];

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      alert('Project is now running in preview!');
    }, 2000);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Project saved successfully!');
    }, 1500);
  };

  const handleShare = () => {
    const shareUrl = `https://codecraft.academy/project/${Date.now()}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert(`Project link copied to clipboard: ${shareUrl}`);
    });
  };

  const handleNewProject = () => {
    const projectName = prompt('Enter project name:');
    if (projectName) {
      alert(`Creating new project: ${projectName}`);
    }
  };

  const handleApplySuggestion = (suggestion: string) => {
    alert(`Applying ${suggestion} suggestion...`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Project Workspace</h1>
          <p className="text-gray-600">Build amazing projects with our AI-powered editor</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            {isRunning ? (
              <div className="w-4 h-4 border-2 border-green-700 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Play className="w-4 h-4" />
            )}
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            {isSaving ? (
              <div className="w-4 h-4 border-2 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{isSaving ? 'Saving...' : 'Save'}</span>
          </button>
          <button 
            onClick={handleShare}
            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors flex items-center space-x-2"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Project List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">My Projects</h3>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedProject(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    selectedProject === index ? 'bg-purple-50 border-2 border-purple-200' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium text-gray-800 text-sm">{project.name}</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">{project.tech}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === 'Active' ? 'bg-green-100 text-green-700' :
                      project.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleNewProject}
              className="w-full mt-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Code Tabs */}
            <div className="flex items-center bg-gray-50 border-b border-gray-200">
              {(['html', 'css', 'js'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-purple-600 border-b-2 border-purple-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
              <div className="flex-1"></div>
              <div className="px-4 py-3">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeExamples[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Preview Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800 flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </h3>
              <div className="flex items-center space-x-1">
                {([
                  { mode: 'desktop', icon: Monitor },
                  { mode: 'tablet', icon: Tablet },
                  { mode: 'mobile', icon: Smartphone }
                ] as const).map(({ mode, icon: Icon }) => (
                  <button
                    key={mode}
                    onClick={() => setPreviewMode(mode)}
                    className={`p-2 rounded transition-colors ${
                      previewMode === mode ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Content */}
            <div className="p-4">
              <div className={`bg-white border rounded-lg overflow-hidden transition-all ${
                previewMode === 'mobile' ? 'max-w-sm mx-auto' :
                previewMode === 'tablet' ? 'max-w-md mx-auto' :
                'w-full'
              }`}>
                <div className="aspect-video bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h1 className="text-xl font-bold text-purple-600 mb-2">🚀 Welcome to My Project!</h1>
                    <p className="text-gray-600 text-sm mb-4">This is an amazing project built with CodeCraft Academy!</p>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-sm">
                      Click me!
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <button 
                  onClick={() => window.open('#', '_blank')}
                  className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                >
                  <Code className="w-4 h-4" />
                  <span>Open in New Tab</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Suggestions Panel */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
          <span className="mr-2">🤖</span>
          AI Suggestions
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Add Animation</h4>
            <p className="text-sm text-gray-600 mb-3">Make your button more interactive with hover effects</p>
            <button 
              onClick={() => handleApplySuggestion('animation')}
              className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition-colors"
            >
              Apply
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Improve Colors</h4>
            <p className="text-sm text-gray-600 mb-3">Use a more accessible color palette</p>
            <button 
              onClick={() => handleApplySuggestion('colors')}
              className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
            >
              Apply
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Add Responsiveness</h4>
            <p className="text-sm text-gray-600 mb-3">Make your design mobile-friendly</p>
            <button 
              onClick={() => handleApplySuggestion('responsiveness')}
              className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWorkspace;
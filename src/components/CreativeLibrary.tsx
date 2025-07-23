import React, { useState } from 'react';
import { Palette, Download, Heart, Star, Search, Filter, Grid, List, Upload, Eye, Copy } from 'lucide-react';

const CreativeLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedAssets, setLikedAssets] = useState<number[]>([]);

  const categories = [
    { id: 'all', label: 'All', count: 124 },
    { id: 'templates', label: 'Templates', count: 45 },
    { id: 'animations', label: 'Animations', count: 32 },
    { id: 'components', label: 'Components', count: 28 },
    { id: 'themes', label: 'Themes', count: 19 }
  ];

  const creativeAssets = [
    {
      id: 1,
      title: 'Gradient Button Pack',
      category: 'components',
      type: 'CSS',
      likes: 234,
      downloads: 1.2,
      preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tags: ['buttons', 'gradients', 'interactive']
    },
    {
      id: 2,
      title: 'Floating Animation',
      category: 'animations',
      type: 'CSS',
      likes: 189,
      downloads: 0.8,
      preview: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tags: ['float', 'keyframes', 'smooth']
    },
    {
      id: 3,
      title: 'Modern Dashboard',
      category: 'templates',
      type: 'React',
      likes: 456,
      downloads: 2.1,
      preview: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tags: ['dashboard', 'modern', 'responsive']
    },
    {
      id: 4,
      title: 'Dark Theme Pack',
      category: 'themes',
      type: 'CSS',
      likes: 324,
      downloads: 1.5,
      preview: 'linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)',
      tags: ['dark', 'professional', 'elegant']
    },
    {
      id: 5,
      title: 'Card Hover Effects',
      category: 'components',
      type: 'CSS',
      likes: 278,
      downloads: 1.0,
      preview: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tags: ['cards', 'hover', 'effects']
    },
    {
      id: 6,
      title: 'Loading Spinners',
      category: 'animations',
      type: 'CSS',
      likes: 156,
      downloads: 0.9,
      preview: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      tags: ['loading', 'spinners', 'animated']
    }
  ];

  const filteredAssets = creativeAssets.filter(asset => {
    const matchesCategory = activeCategory === 'all' || asset.category === activeCategory;
    const matchesSearch = asset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleLike = (assetId: number) => {
    setLikedAssets(prev => 
      prev.includes(assetId) 
        ? prev.filter(id => id !== assetId)
        : [...prev, assetId]
    );
  };

  const handleDownload = (asset: any) => {
    alert(`Downloading ${asset.title}...`);
    // Simulate download
    setTimeout(() => {
      alert(`${asset.title} downloaded successfully!`);
    }, 1000);
  };

  const handleUseAsset = (asset: any) => {
    alert(`Adding ${asset.title} to your project...`);
  };

  const handleUpload = () => {
    alert('Opening asset upload dialog...');
  };

  const handlePreview = (asset: any) => {
    alert(`Opening preview for ${asset.title}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
          <Palette className="w-8 h-8 mr-3 text-purple-500" />
          Creative Library
        </h1>
        <p className="text-gray-600">Discover amazing templates, animations, and components to supercharge your projects</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          {/* Categories */}
          <div className="flex items-center space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search creative assets..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="mb-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white">
                      <button 
                        onClick={() => handleLike(asset.id)}
                        className={`flex items-center space-x-1 hover:scale-110 transition-transform ${
                          likedAssets.includes(asset.id) ? 'text-red-500' : 'text-gray-600'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedAssets.includes(asset.id) ? 'fill-current' : ''}`} />
                      </button>
        <p className="mb-4 opacity-90">Check out these trending creative assets picked by our community</p>
        <div className="grid md:grid-cols-3 gap-4">
                    <button 
                      onClick={() => handleDownload(asset)}
                      className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                    >
            <div key={asset.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-full h-20 rounded-lg mb-3" style={{ background: asset.preview }}></div>
                    </button>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs opacity-75">{asset.type}</span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handlePreview(asset)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleUseAsset(asset)}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      Use
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assets Grid/List */}
      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 ${
              viewMode === 'list' ? 'flex items-center p-4' : 'overflow-hidden'
            }`}
          >
            {viewMode === 'grid' ? (
              <>
                {/* Preview */}
                <div className="h-48 p-4">
                  <div 
                    className="w-full h-full rounded-lg"
                    style={{ background: asset.preview }}
                  ></div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{asset.title}</h3>
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                      {asset.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {asset.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{asset.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{asset.downloads}k</span>
                      </div>
                    </div>
                    
                    <button className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:shadow-lg transition-all duration-200">
                      Use
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* List View */}
                <div className="w-16 h-16 rounded-lg mr-4" style={{ background: asset.preview }}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{asset.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>{asset.type}</span>
                        <div className="flex items-center space-x-1">
                          <button 
                            onClick={() => handleLike(asset.id)}
                            className={`flex items-center space-x-1 ${
                              likedAssets.includes(asset.id) ? 'text-red-500' : 'text-gray-600'
                            }`}
                          >
                            <Heart className={`w-3 h-3 ${likedAssets.includes(asset.id) ? 'fill-current' : ''}`} />
                          </button>
                          <span>{asset.likes}</span>
                        </div>
                        <button 
                          onClick={() => handleDownload(asset)}
                          className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                        >
                          <Download className="w-3 h-3" />
                          <span>{asset.downloads}k</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handlePreview(asset)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleUseAsset(asset)}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:shadow-lg transition-all duration-200"
                      >
                        Use
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Upload Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Share Your Creativity</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Created something amazing? Share it with the community and help other students learn and build incredible projects!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleUpload}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Upload Asset</span>
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-300 hover:border-purple-300 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeLibrary;
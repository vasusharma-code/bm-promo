import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Video, BookOpen, Filter, Mail } from 'lucide-react';

const FreeMaterials = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [emailSubscription, setEmailSubscription] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const materialCategories = [
    { id: 'all', label: 'All Materials' },
    { id: 'entrance-exam', label: 'Entrance Exam' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'marine-engineering', label: 'Marine Engineering' },
    { id: 'safety', label: 'Safety & STCW' },
    { id: 'regulations', label: 'Maritime Law' },
    { id: 'preparation-tips', label: 'Preparation Tips' }
  ];

  const studyMaterials = [
    {
      id: 1,
      title: 'DNS Entrance Exam - Complete Study Guide 2024',
      description: 'Comprehensive study material covering all topics for DNS entrance examination',
      type: 'pdf',
      category: 'entrance-exam',
      size: '15.2 MB',
      downloads: '12,450',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=300',
      featured: true
    },
    {
      id: 2,
      title: 'Navigation Basics - Chart Work Manual',
      description: 'Essential chart work techniques and navigation fundamentals',
      type: 'pdf',
      category: 'navigation',
      size: '8.7 MB',
      downloads: '9,230',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=300'
    },
    {
      id: 3,
      title: 'Marine Engine Room Operations Video Series',
      description: 'Complete video tutorial on engine room operations and maintenance',
      type: 'video',
      category: 'marine-engineering',
      size: '245 MB',
      downloads: '5,670',
      image: 'https://images.pexels.com/photos/688618/pexels-photo-688618.jpeg?w=300'
    },
    {
      id: 4,
      title: 'STCW Basic Safety Training Manual',
      description: 'Official STCW BST training material with practical exercises',
      type: 'pdf',
      category: 'safety',
      size: '12.3 MB',
      downloads: '8,900',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?w=300'
    },
    {
      id: 5,
      title: 'Maritime Law and Regulations Handbook',
      description: 'Complete guide to international maritime laws and SOLAS convention',
      type: 'pdf',
      category: 'regulations',
      size: '11.8 MB',
      downloads: '6,340',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=300'
    },
    {
      id: 6,
      title: 'Merchant Navy Interview Preparation Kit',
      description: 'Common interview questions and answers for merchant navy positions',
      type: 'pdf',
      category: 'preparation-tips',
      size: '4.2 MB',
      downloads: '15,230',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=300'
    },
    {
      id: 7,
      title: 'Ship Stability and Trim Calculations',
      description: 'Mathematical formulas and practical examples for ship stability',
      type: 'pdf',
      category: 'navigation',
      size: '9.1 MB',
      downloads: '4,560',
      image: 'https://images.pexels.com/photos/688618/pexels-photo-688618.jpeg?w=300'
    },
    {
      id: 8,
      title: 'Marine Engineering Workshop Practices',
      description: 'Hands-on workshop techniques and equipment operation guides',
      type: 'video',
      category: 'marine-engineering',
      size: '189 MB',
      downloads: '3,420',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?w=300'
    },
    {
      id: 9,
      title: 'Physical Fitness Guide for Seafarers',
      description: 'Comprehensive fitness program designed for maritime professionals',
      type: 'pdf',
      category: 'preparation-tips',
      size: '6.8 MB',
      downloads: '7,890',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=300'
    }
  ];

  const filteredMaterials = activeFilter === 'all' 
    ? studyMaterials 
    : studyMaterials.filter(material => material.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="h-5 w-5" />;
      case 'video': return <Video className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'pdf': return 'bg-red-100 text-red-600';
      case 'video': return 'bg-blue-100 text-blue-600';
      default: return 'bg-green-100 text-green-600';
    }
  };

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Free Study <span className="text-primary-400">Materials</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access our comprehensive collection of free maritime education resources
          </motion.p>
        </div>
      </section>

      {/* Material Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filter by Category</span>
            </h2>
            <div className="text-sm text-gray-600">
              {filteredMaterials.length} materials available
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {materialCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
                  activeFilter === category.id
                    ? 'bg-primary-400 text-black shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material, index) => (
              <motion.div
                key={material.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  material.featured ? 'ring-2 ring-primary-400' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {material.featured && (
                  <div className="bg-primary-400 text-black text-center py-2 text-sm font-medium">
                    ⭐ Featured Material
                  </div>
                )}
                
                <div className="relative h-48">
                  <img 
                    src={material.image} 
                    alt={material.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getTypeColor(material.type)}`}>
                      {getTypeIcon(material.type)}
                      <span>{material.type.toUpperCase()}</span>
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 line-clamp-2">
                    {material.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {material.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Size: {material.size}</span>
                    <span>{material.downloads} downloads</span>
                  </div>
                  
                  <button className="w-full bg-primary-400 text-black py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors flex items-center justify-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Download Free</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Mail className="h-16 w-16 text-primary-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Notified of New Materials
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Be the first to access our latest study materials and maritime resources
            </p>
            
            {subscribed ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-400 mb-2">Successfully Subscribed!</h3>
                <p className="text-green-300">You'll receive notifications about new materials via email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscription} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={emailSubscription}
                    onChange={(e) => setEmailSubscription(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Our Materials?</h2>
            <p className="text-xl text-black/80">Quality resources designed by maritime experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Study Materials', icon: '📚' },
              { number: '25+', label: 'Video Tutorials', icon: '🎥' },
              { number: '100k+', label: 'Total Downloads', icon: '⬇️' },
              { number: '98%', label: 'Success Rate', icon: '🎯' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-black/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeMaterials;
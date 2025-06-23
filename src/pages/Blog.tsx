import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const blogTags = [
    { id: 'all', label: 'All Articles' },
    { id: 'admission', label: 'Admission' },
    { id: 'preparation', label: 'Preparation' },
    { id: 'sponsorship', label: 'Sponsorship' },
    { id: 'career', label: 'Career' },
    { id: 'training', label: 'Training' },
    { id: 'life-at-sea', label: 'Life at Sea' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to Merchant Navy Admission 2024',
      excerpt: 'Everything you need to know about merchant navy admission process, eligibility criteria, and important dates for 2024.',
      author: 'Capt. Rajesh Kumar',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=500',
      tags: ['admission', 'preparation'],
      featured: true
    },
    {
      id: 2,
      title: 'How to Prepare for DNS Entrance Exam',
      excerpt: 'Comprehensive preparation strategy for DNS entrance exam with study materials, mock tests, and expert tips.',
      author: 'Chief Eng. Amit Sharma',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=500',
      tags: ['preparation', 'training']
    },
    {
      id: 3,
      title: 'Company Sponsorship vs Self-Sponsored: Which is Better?',
      excerpt: 'Detailed comparison between company sponsorship and self-sponsored routes in merchant navy education.',
      author: 'Capt. Priya Singh',
      date: '2024-01-10',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/688618/pexels-photo-688618.jpeg?w=500',
      tags: ['sponsorship', 'career']
    },
    {
      id: 4,
      title: 'Life Aboard a Merchant Vessel: A Day in the Life',
      excerpt: 'Real experiences from merchant navy officers sharing their daily routine and challenges at sea.',
      author: '2nd Officer John D\'souza',
      date: '2024-01-08',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?w=500',
      tags: ['life-at-sea', 'career']
    },
    {
      id: 5,
      title: 'STCW Certification: Your Gateway to International Waters',
      excerpt: 'Understanding STCW certification requirements, process, and its importance for merchant navy careers.',
      author: 'Capt. Maritime Expert',
      date: '2024-01-05',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=500',
      tags: ['training', 'career']
    },
    {
      id: 6,
      title: 'Top 10 Shipping Companies Hiring in 2024',
      excerpt: 'List of leading shipping companies actively recruiting merchant navy officers with application details.',
      author: 'HR Specialist Marine Sector',
      date: '2024-01-03',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=500',
      tags: ['career', 'sponsorship']
    }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(activeFilter));

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            Maritime <span className="text-primary-400">Insights</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest maritime industry news, career guidance, and expert insights
          </motion.p>
        </div>
      </section>

      {/* Blog Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {blogTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveFilter(tag.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
                  activeFilter === tag.id
                    ? 'bg-primary-400 text-black shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && activeFilter === 'all' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-black text-primary-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Read Full Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs"
                      >
                        <Tag className="inline h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Stay Updated with Maritime News
          </motion.h2>
          <motion.p 
            className="text-xl text-black/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Subscribe to our newsletter for the latest maritime industry insights and career tips
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button className="bg-black text-primary-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
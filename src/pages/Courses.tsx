import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');

  const courseCategories = [
    { id: 'all', label: 'All Courses' },
    { id: 'offline', label: 'Offline Courses' },
    { id: 'online', label: 'Online Courses' },
    { id: 'crash', label: 'Crash Courses' },
    { id: 'live', label: 'Live Classes' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Merchant Navy DNS Entrance Exam',
      type: 'offline',
      price: '₹25,000',
      originalPrice: '₹35,000',
      duration: '6 months',
      students: '1200+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=400',
      features: ['Physical Training', 'Medical Guidance', 'Interview Prep', 'Mock Tests']
    },
    {
      id: 2,
      title: 'Marine Engineering Foundation',
      type: 'online',
      price: '₹18,000',
      originalPrice: '₹25,000',
      duration: '4 months',
      students: '800+',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=400',
      features: ['Engine Room Basics', 'Safety Protocols', 'Technical Drawing', 'Certificates']
    },
    {
      id: 3,
      title: 'Navigation & Deck Operations',
      type: 'offline',
      price: '₹30,000',
      originalPrice: '₹40,000',
      duration: '8 months',
      students: '600+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/688618/pexels-photo-688618.jpeg?w=400',
      features: ['Chart Work', 'Radar Operations', 'Bridge Equipment', 'STCW Certification']
    },
    {
      id: 4,
      title: 'Maritime Law & Regulations',
      type: 'online',
      price: '₹12,000',
      originalPrice: '₹18,000',
      duration: '3 months',
      students: '450+',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?w=400',
      features: ['SOLAS Convention', 'Port State Control', 'Legal Framework', 'Case Studies']
    },
    {
      id: 5,
      title: 'Ship Security Officer (SSO)',
      type: 'crash',
      price: '₹8,000',
      originalPrice: '₹12,000',
      duration: '1 month',
      students: '300+',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=400',
      features: ['ISPS Code', 'Security Assessment', 'Risk Management', 'IMO Certification']
    },
    {
      id: 6,
      title: 'Advanced Ship Stability',
      type: 'live',
      price: '₹22,000',
      originalPrice: '₹30,000',
      duration: '5 months',
      students: '200+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=400',
      features: ['Stability Calculations', 'Load Planning', 'Cargo Operations', 'Software Training']
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.type === activeTab);

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
            Our <span className="text-primary-400">Courses</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive maritime education designed to launch your successful career at sea
          </motion.p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === category.id
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

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{course.title}</h3>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">{course.price}</span>
                      <span className="text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                  </div>

                  <button className="w-full bg-black text-primary-400 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Enroll Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need Help Choosing the Right Course?
          </motion.h2>
          <motion.p 
            className="text-xl text-black/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our maritime education experts are here to guide you
          </motion.p>
          <motion.button 
            className="bg-black text-primary-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Courses;
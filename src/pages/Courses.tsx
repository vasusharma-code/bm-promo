import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen, CheckCircle, User, Video, Award } from 'lucide-react';

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
      title: 'FREE IMU-CET Mock Tests',
      type: 'offline',
      price: 'Free',
      originalPrice: '',
      duration: 'Self-paced',
      students: '500+',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=400',
      features: ['Mock Tests', 'Instant Results', 'All India Ranking'],
      badge: 'green'
    },
    {
      id: 2,
      title: 'GP Rating Offline Course',
      type: 'offline',
      price: '₹15,000',
      originalPrice: '₹20,000',
      duration: '3 months',
      students: '200+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=400',
      features: ['Physical Training', 'Interview Prep', 'Medical Guidance'],
      badge: 'yellow'
    },
    {
      id: 3,
      title: 'SPONSORSHIP OFFLINE COURSE',
      type: 'offline',
      price: '₹18,000',
      originalPrice: '₹25,000',
      duration: '2 months',
      students: '150+',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/688618/pexels-photo-688618.jpeg?w=400',
      features: ['Company Sponsorship', 'Mock Interviews', 'Documentation'],
      badge: 'yellow'
    },
    {
      id: 4,
      title: 'DNS Preparation Course',
      type: 'offline',
      price: '₹12,000',
      originalPrice: '₹18,000',
      duration: '2 months',
      students: '300+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?w=400',
      features: ['IMU-CET', 'Interview Prep', 'Medical Guidance'],
      badge: 'purple'
    },
    {
      id: 5,
      title: 'Marine Engineering Course',
      type: 'offline',
      price: '₹16,000',
      originalPrice: '₹22,000',
      duration: '3 months',
      students: '120+',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=400',
      features: ['Workshop Training', 'Technical Drawing', 'Safety Protocols'],
      badge: 'blue'
    },
    {
      id: 6,
      title: 'STCW/Basic Safety Training',
      type: 'offline',
      price: '₹8,000',
      originalPrice: '₹12,000',
      duration: '1 month',
      students: '100+',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=400',
      features: ['Fire Fighting', 'First Aid', 'Personal Survival'],
      badge: 'red'
    }
  ];

  const badgeColors: Record<string, string> = {
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-400 text-black',
    purple: 'bg-purple-500 text-white',
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white'
  };

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.type === activeTab);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="pt-28 pb-2 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-1 text-white">BM Offline Academy</h1>
        <p className="text-white/80 text-sm mb-2">
          Personal Mentorship. Industry-oriented Training. 100% Placement Support.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-2 mt-4">
          <div className="text-center">
            <div className="text-yellow-400 text-2xl font-bold">500+</div>
            <div className="text-white/80 text-xs">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 text-2xl font-bold">15+</div>
            <div className="text-white/80 text-xs">Expert Faculty</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 text-2xl font-bold">95%</div>
            <div className="text-white/80 text-xs">Placement Rate</div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {courseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full font-semibold text-base shadow transition-all duration-200 ${
                activeTab === category.id
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-yellow-400 hover:text-black'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${badgeColors[course.badge]}`}>
                      {course.badge === 'green' && 'Free'}
                      {course.badge === 'yellow' && 'Offline'}
                      {course.badge === 'purple' && 'DNS'}
                      {course.badge === 'blue' && 'Engineering'}
                      {course.badge === 'red' && 'STCW'}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center bg-white/90 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-xs font-bold ml-1">{course.rating}</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-5">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{course.title}</h3>
                  <div className="flex items-center text-xs text-gray-600 mb-2 gap-4">
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{course.duration}</span>
                    <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.students}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {course.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto mb-3">
                    <div>
                      <span className={`text-xl font-bold ${course.price === 'Free' ? 'text-green-600' : 'text-yellow-500'}`}>{course.price}</span>
                      {course.originalPrice && <span className="text-gray-400 line-through ml-2">{course.originalPrice}</span>}
                    </div>
                  </div>
                  <button className="w-full bg-black text-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors flex items-center justify-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Enroll Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-black py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why Choose BM Offline Academy?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex-1 flex flex-col items-center">
              <User className="h-10 w-10 text-yellow-400 mb-2" />
              <div className="text-lg font-bold text-white mb-1">Expert Faculty</div>
              <div className="text-white/70 text-sm">Learn from experienced mariners and industry professionals.</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <Award className="h-10 w-10 text-yellow-400 mb-2" />
              <div className="text-lg font-bold text-white mb-1">Comprehensive Curriculum</div>
              <div className="text-white/70 text-sm">Industry-aligned courses with practical training and certification.</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-yellow-400 mb-2" />
              <div className="text-lg font-bold text-white mb-1">Placement Support</div>
              <div className="text-white/70 text-sm">100% placement assistance with top shipping companies.</div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Courses;
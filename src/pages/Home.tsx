import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Play, Users, Award, TrendingUp } from 'lucide-react';
import compass from '../../assets/compass.png';

const Home = () => {
  // Compass wheel rotation state
  const compassRotation = useMotionValue(0);
  const backgroundX = useTransform(compassRotation, [-180, 180], ['100%', '-100%']);
  
  // YouTube Shorts state
  const [centerIndex, setCenterIndex] = useState(2);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Animated Statistics Component
  const AnimatedStat = ({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const timer = setInterval(() => {
              setCount(prev => {
                const increment = Math.ceil(value / 50);
                if (prev + increment >= value) {
                  clearInterval(timer);
                  return value;
                }
                return prev + increment;
              });
            }, 40);
            return () => clearInterval(timer);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
      <div ref={ref} className="text-center">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400 mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-white text-xs md:text-sm lg:text-base font-medium">{label}</div>
      </div>
    );
  };

  // YouTube Shorts Data
  const youtubeShorts = [
    { 
      id: 1, 
      title: 'Success Story - Abhijit', 
      thumbnail: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=300&h=400&fit=crop', 
      views: '2.1M',
      description: 'If He Can Clear A Sponsorship With Pre...'
    },
    { 
      id: 2, 
      title: 'HIMAT Training', 
      thumbnail: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=300&h=400&fit=crop', 
      views: '890K',
      description: 'How BM Changed His Life After He Failed In...'
    },
    { 
      id: 3, 
      title: 'Officer Journey - Aayush', 
      thumbnail: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?w=300&h=400&fit=crop', 
      views: '1.5M',
      description: 'He Didn\'t Even Know Merchant Navy Existed...'
    },
    { 
      id: 4, 
      title: 'Field Knowledge Tips', 
      thumbnail: 'https://images.pexels.com/photos/688618/pexels-photo-688618.jpeg?w=300&h=400&fit=crop', 
      views: '670K',
      description: 'From ZERO Field Knowledge To TOP 8...'
    },
    { 
      id: 5, 
      title: 'FLEET Experience', 
      thumbnail: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?w=300&h=400&fit=crop', 
      views: '1.2M',
      description: 'He Nearly Missed FLEET Sponsorship But...'
    },
  ];

  // Handle compass wheel drag
  const handleCompassDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const deltaX = info.delta.x;
    const currentRotation = compassRotation.get();
    const newRotation = currentRotation + (deltaX * 0.5);
    compassRotation.set(Math.max(-180, Math.min(180, newRotation)));
  };

  // Handle YouTube Shorts scroll to determine center card
  const handleShortsScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cardWidth = 280; // Width of each card including margin
    const newCenterIndex = Math.round(containerCenter / cardWidth);
    
    if (newCenterIndex !== centerIndex && newCenterIndex >= 0 && newCenterIndex < youtubeShorts.length) {
      setCenterIndex(newCenterIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleShortsScroll);
      return () => container.removeEventListener('scroll', handleShortsScroll);
    }
  }, [centerIndex]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Compass-Controlled Panoramic Banner - Half Page Height */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-black pt-16">
        {/* Panoramic Background Image */}
        <motion.div 
          className="absolute inset-0 w-[200%] h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?w=2000)',
            x: backgroundX
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto mb-4">
            <motion.h1 
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Your Gateway to the
              <span className="text-primary-400 block">Merchant Navy</span>
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-white/90 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Navigate your career with India's premier maritime education platform
            </motion.p>
          </div>
          {/* <p className="text-white/70 text-xs md:text-sm mt-2">Drag the compass to explore</p> */}
        </div>

        {/* Overlapping Compass Wheel - Responsive and Centered */}
        <motion.div
          className="absolute left-1/2 z-20 flex justify-center items-center"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDrag={handleCompassDrag}
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 0.95 }}
          dragElastic={0}
          style={{
            rotate: compassRotation,
            bottom: 'calc(-20vw / 2 + 2.5rem)', // Move up by increasing the value (was 2rem)
            left: '43%',
            transform: 'translateX(-50%)'
          }}
        >
          <div className="w-[18vw] h-[18vw] min-w-[100px] min-h-[100px] max-w-[220px] max-h-[220px] flex items-center justify-center relative select-none">
            <img
              src={compass}
              alt="Compass"
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>
        </motion.div>
      </section>

      {/* Statistics Section - Fixed Position */}
      <section className="py-12 md:py-16 lg:py-20 bg-black relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-700/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedStat value={5} label="Years of Experience" suffix="+" />
            <AnimatedStat value={3000} label="Students Trained" suffix="+" />
            <AnimatedStat value={2500} label="Students Selected" suffix="+" />
            <AnimatedStat value={100000} label="Merchant Navy Aspirants Community" suffix="+" />
          </motion.div>
        </div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Stories of Officers of{' '}
            <span className="text-primary-400">Budding Mariners</span>
          </motion.h2>
          <p className="text-center text-white/70 mb-8 md:mb-12">Success stories from our maritime community</p>

          {/* Horizontal Scrollable YouTube Shorts */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 md:space-x-6 pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {youtubeShorts.map((video, index) => (
              <motion.div
                key={video.id}
                className={`flex-shrink-0 w-56 md:w-64 h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 snap-center ${
                  index === centerIndex 
                    ? 'shadow-2xl ring-4 ring-primary-400 scale-105' 
                    : 'grayscale hover:grayscale-75 scale-95'
                }`}
                onClick={() => {
                  setCenterIndex(index);
                  // Scroll to center the clicked card
                  if (scrollContainerRef.current) {
                    const cardWidth = window.innerWidth < 768 ? 240 : 280;
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth - scrollContainerRef.current.clientWidth / 2 + cardWidth / 2,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <div className="relative h-full bg-gray-900">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary-400/90 rounded-full p-3 md:p-4 hover:bg-primary-400 transition-colors">
                      <Play className="h-6 w-6 md:h-8 md:w-8 text-black fill-current" />
                    </div>
                  </div>
                  
                  {/* Video info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <h3 className="text-white font-bold text-base md:text-lg mb-1 line-clamp-1">{video.title}</h3>
                    <p className="text-white/80 text-xs md:text-sm mb-2 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-400 text-xs md:text-sm font-medium">{video.views} views</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white/60 text-xs">SHORTS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {youtubeShorts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCenterIndex(index);
                  if (scrollContainerRef.current) {
                    const cardWidth = window.innerWidth < 768 ? 240 : 280;
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth - scrollContainerRef.current.clientWidth / 2 + cardWidth / 2,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === centerIndex ? 'bg-primary-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Maritime Journey?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-black/80 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of successful maritime professionals who started their journey with us
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-black text-primary-400 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-navy-800 transition-colors">
              Explore Courses
            </button>
            <button className="border-2 border-black text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-black hover:text-primary-400 transition-colors">
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Ship } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Ojas Lalla',
      title: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?w=300',
      bio: 'Former Chief Engineer with 15+ years of maritime experience. Sailed across 40+ countries and multiple vessel types. Passionate about nurturing the next generation of maritime professionals.',
      achievements: ['Master Mariner License', 'Maritime Safety Expert', 'STCW Instructor']
    },
    {
      name: 'Shahnawaz',
      title: 'Co-Founder & Head of Operations',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?w=300',
      bio: 'Navigation Officer turned educator with deep expertise in maritime regulations and training methodologies. Dedicated to making maritime education accessible and effective.',
      achievements: ['Navigation Specialist', 'Training Development Expert', 'Maritime Consultant']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary-400">Us</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Budding Mariners was born from a vision to bridge the gap between maritime education 
                and industry requirements. We are committed to nurturing maritime professionals who 
                are not just technically competent but also industry-ready.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">5+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">3000+</div>
                  <div className="text-white/80">Success Stories</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg" 
                alt="Maritime education"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary-400/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Founded in 2019, Budding Mariners emerged from the shared vision of maritime veterans 
              who recognized the need for comprehensive, industry-aligned education in the merchant navy sector. 
              Our founders, with their combined experience of over 25 years at sea, understood the challenges 
              faced by aspiring maritime professionals.
            </p>
            <p>
              What started as a small training center has now grown into India's premier maritime education 
              platform, serving over 3,000 students across the country. We've successfully placed more than 
              2,500 students in leading shipping companies worldwide, building a community of over 100,000 
              maritime aspirants.
            </p>
            <p>
              Our approach combines traditional maritime wisdom with modern training methodologies, ensuring 
              our students are not just academically prepared but also practically equipped for the challenges 
              of life at sea.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-primary-400 p-8 rounded-2xl text-black"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Target className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-black/80 leading-relaxed">
                To provide world-class maritime education and training that empowers individuals 
                to build successful careers in the merchant navy while maintaining the highest 
                standards of safety, professionalism, and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              className="bg-black p-8 rounded-2xl text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Eye className="h-12 w-12 mb-6 text-primary-400" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the leading maritime education institution globally, recognized for excellence 
                in training, innovation in teaching methodologies, and our contribution to developing 
                skilled maritime professionals who shape the future of the shipping industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About the <span className="text-primary-400">Founders</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-16">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-primary-400/10 rounded-2xl"></div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary-400 text-xl mb-6">{founder.title}</p>
                  <p className="text-white/90 mb-6 leading-relaxed">{founder.bio}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-400 mb-3">Key Achievements:</h4>
                    {founder.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-primary-400" />
                        <span className="text-white/80">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from curriculum design to student support.'
              },
              {
                icon: Target,
                title: 'Integrity',
                description: 'We maintain the highest ethical standards and transparency in all our operations.'
              },
              {
                icon: Award,
                title: 'Innovation',
                description: 'We continuously innovate our teaching methods to stay ahead of industry requirements.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-black p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-10 w-10 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-black/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
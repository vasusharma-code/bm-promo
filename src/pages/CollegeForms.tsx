import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Ship, FileText, CheckCircle } from 'lucide-react';

const CollegeForms = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    age: '',
    state: ''
  });

  const [sponsorshipForm, setSponsorshipForm] = useState({
    name: '',
    email: '',
    phone: '',
    companies: [] as string[]
  });

  const [submitted, setSubmitted] = useState<'application' | 'sponsorship' | null>(null);

  const availableCourses = [
    { id: 'dns', name: 'Diploma in Nautical Science (DNS)', duration: '3 years', fee: '₹3,50,000' },
    { id: 'dme', name: 'Diploma in Marine Engineering (DME)', duration: '3 years', fee: '₹3,75,000' },
    { id: 'gp-rating', name: 'GP Rating Course', duration: '6 months', fee: '₹1,25,000' },
    { id: 'eou-course', name: 'Engine Officer Course', duration: '12 months', fee: '₹2,50,000' },
    { id: 'deck-rating', name: 'Deck Rating Course', duration: '6 months', fee: '₹1,15,000' },
    { id: 'cook-course', name: 'Ship Cook Course', duration: '4 months', fee: '₹85,000' }
  ];

  const sponsorshipCompanies = [
    'Maersk Line',
    'MSC Mediterranean Shipping',
    'Anglo Eastern',
    'Bernhard Schulte Shipmanagement',
    'Fleet Management',
    'Synergy Group',
    'Wilhelmsen Ship Management',
    'Thome Group'
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted('application');
  };

  const handleSponsorshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted('sponsorship');
  };

  const handleCompanyToggle = (company: string) => {
    setSponsorshipForm(prev => ({
      ...prev,
      companies: prev.companies.includes(company)
        ? prev.companies.filter(c => c !== company)
        : [...prev.companies, company]
    }));
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
            Applications & <span className="text-primary-400">Admissions</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start your maritime career journey by applying for our courses or company sponsorship programs
          </motion.p>
        </div>
      </section>

      {/* Available Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Available Courses
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {availableCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-400 p-3 rounded-lg inline-block mb-4">
                  <GraduationCap className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Duration:</span> {course.duration}</p>
                  <p><span className="font-medium">Fee:</span> {course.fee}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Forms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Course Application Form */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary-400 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Course Application</h3>
              </div>
              
              {submitted === 'application' ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
                  <p className="text-gray-600">We'll contact you within 24 hours to discuss your application.</p>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Course *</label>
                    <select
                      value={applicationForm.course}
                      onChange={(e) => setApplicationForm({...applicationForm, course: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    >
                      <option value="">Select a course</option>
                      {availableCourses.map(course => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Education Level *</label>
                      <select
                        value={applicationForm.education}
                        onChange={(e) => setApplicationForm({...applicationForm, education: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        required
                      >
                        <option value="">Select education</option>
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="diploma">Diploma</option>
                        <option value="graduate">Graduate</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                      <input
                        type="number"
                        min="17"
                        max="25"
                        value={applicationForm.age}
                        onChange={(e) => setApplicationForm({...applicationForm, age: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <input
                      type="text"
                      value={applicationForm.state}
                      onChange={(e) => setApplicationForm({...applicationForm, state: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-400 text-black py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </motion.div>

            {/* Company Sponsorship Form */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-black p-3 rounded-lg">
                  <Ship className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Company Sponsorship</h3>
              </div>
              
              {submitted === 'sponsorship' ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sponsorship Request Submitted!</h4>
                  <p className="text-gray-600">We'll help you connect with your preferred shipping companies.</p>
                </div>
              ) : (
                <form onSubmit={handleSponsorshipSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={sponsorshipForm.name}
                      onChange={(e) => setSponsorshipForm({...sponsorshipForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={sponsorshipForm.email}
                        onChange={(e) => setSponsorshipForm({...sponsorshipForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={sponsorshipForm.phone}
                        onChange={(e) => setSponsorshipForm({...sponsorshipForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Companies (Select multiple) *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {sponsorshipCompanies.map(company => (
                        <label key={company} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={sponsorshipForm.companies.includes(company)}
                            onChange={() => handleCompanyToggle(company)}
                            className="rounded border-gray-300 text-primary-400 focus:ring-primary-400"
                          />
                          <span className="text-sm text-gray-700">{company}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-primary-400 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                    disabled={sponsorshipForm.companies.length === 0}
                  >
                    Request Sponsorship
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose Budding Mariners?</h2>
            <p className="text-xl text-black/80">Benefits of applying through our platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Guidance',
                description: 'Personalized counseling from maritime industry experts',
                icon: '🧭'
              },
              {
                title: 'Company Connections',
                description: 'Direct connections with leading shipping companies',
                icon: '🚢'
              },
              {
                title: 'Career Support',
                description: 'Lifetime career support and placement assistance',
                icon: '⚓'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-black/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeForms;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Shield, CreditCard, GraduationCap, CheckCircle, XCircle } from 'lucide-react';

const Calculators = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string | null>(null);
  const [eligibilityForm, setEligibilityForm] = useState({
    age: '',
    education: '',
    eyesight: '',
    height: '',
    weight: '',
    medicalHistory: ''
  });
  const [eligibilityResult, setEligibilityResult] = useState<'eligible' | 'not-eligible' | null>(null);

  const calculators = [
    {
      id: 'eligibility',
      title: 'Eligibility Calculator',
      description: 'Check your eligibility for merchant navy courses',
      icon: Calculator,
      color: 'bg-blue-500'
    },
    {
      id: 'safety',
      title: 'Safety Calculator',
      description: 'Calculate safety scores and compliance metrics',
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      id: 'emi',
      title: 'EMI Calculator',
      description: 'Calculate course fees and payment options',
      icon: CreditCard,
      color: 'bg-purple-500'
    },
    {
      id: 'cgpa',
      title: 'CGPA Converter',
      description: 'Convert grades to maritime education standards',
      icon: GraduationCap,
      color: 'bg-orange-500'
    }
  ];

  const handleEligibilitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple eligibility logic
    const age = parseInt(eligibilityForm.age);
    const isEligible = 
      age >= 17 && age <= 25 &&
      eligibilityForm.education !== '' &&
      eligibilityForm.eyesight === 'good' &&
      eligibilityForm.medicalHistory === 'none';
    
    setEligibilityResult(isEligible ? 'eligible' : 'not-eligible');
  };

  const renderEligibilityCalculator = () => (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Merchant Navy Eligibility Calculator</h3>
      
      <form onSubmit={handleEligibilitySubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input
              type="number"
              min="16"
              max="30"
              value={eligibilityForm.age}
              onChange={(e) => setEligibilityForm({...eligibilityForm, age: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Enter your age"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
            <select
              value={eligibilityForm.education}
              onChange={(e) => setEligibilityForm({...eligibilityForm, education: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              required
            >
              <option value="">Select education level</option>
              <option value="10th">10th Pass</option>
              <option value="12th">12th Pass</option>
              <option value="diploma">Diploma</option>
              <option value="graduate">Graduate</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Eyesight</label>
            <select
              value={eligibilityForm.eyesight}
              onChange={(e) => setEligibilityForm({...eligibilityForm, eyesight: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              required
            >
              <option value="">Select eyesight condition</option>
              <option value="good">Normal Vision (6/6)</option>
              <option value="corrected">Corrected Vision</option>
              <option value="poor">Poor Vision</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
            <input
              type="number"
              min="150"
              max="200"
              value={eligibilityForm.height}
              onChange={(e) => setEligibilityForm({...eligibilityForm, height: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Enter height in cm"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              min="40"
              max="120"
              value={eligibilityForm.weight}
              onChange={(e) => setEligibilityForm({...eligibilityForm, weight: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Enter weight in kg"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Medical History</label>
            <select
              value={eligibilityForm.medicalHistory}
              onChange={(e) => setEligibilityForm({...eligibilityForm, medicalHistory: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              required
            >
              <option value="">Select medical condition</option>
              <option value="none">No major medical issues</option>
              <option value="minor">Minor medical issues</option>
              <option value="major">Major medical issues</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary-400 text-black py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
        >
          Check Eligibility
        </button>
      </form>
      
      {eligibilityResult && (
        <motion.div
          className={`mt-6 p-6 rounded-lg ${
            eligibilityResult === 'eligible' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            {eligibilityResult === 'eligible' ? (
              <CheckCircle className="h-8 w-8 text-green-500" />
            ) : (
              <XCircle className="h-8 w-8 text-red-500" />
            )}
            <div>
              <h4 className={`text-lg font-semibold ${
                eligibilityResult === 'eligible' ? 'text-green-800' : 'text-red-800'
              }`}>
                {eligibilityResult === 'eligible' ? 'Congratulations! You are eligible' : 'Not eligible at this time'}
              </h4>
              <p className={`${
                eligibilityResult === 'eligible' ? 'text-green-600' : 'text-red-600'
              }`}>
                {eligibilityResult === 'eligible' 
                  ? 'You meet the basic eligibility criteria for merchant navy courses.' 
                  : 'Please review the requirements and consult with our counselors.'}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );

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
            Maritime <span className="text-primary-400">Calculators</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Use our specialized calculators to assess your eligibility and plan your maritime career
          </motion.p>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedCalculator ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {calculators.map((calc, index) => (
                <motion.div
                  key={calc.id}
                  className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCalculator(calc.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`${calc.color} p-4 rounded-xl mb-4 inline-block`}>
                    <calc.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{calc.title}</h3>
                  <p className="text-gray-600">{calc.description}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => {
                  setSelectedCalculator(null);
                  setEligibilityResult(null);
                  setEligibilityForm({
                    age: '',
                    education: '',
                    eyesight: '',
                    height: '',
                    weight: '',
                    medicalHistory: ''
                  });
                }}
                className="mb-6 text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2"
              >
                ← Back to Calculators
              </button>
              
              {selectedCalculator === 'eligibility' && renderEligibilityCalculator()}
              
              {selectedCalculator !== 'eligibility' && (
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {calculators.find(c => c.id === selectedCalculator)?.title}
                  </h3>
                  <p className="text-gray-600 mb-6">This calculator is coming soon!</p>
                  <div className="bg-gray-100 p-12 rounded-lg">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
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
            Get Expert Guidance
          </motion.h2>
          <motion.p 
            className="text-xl text-black/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Need personalized advice for your maritime career? Our experts are here to help
          </motion.p>
          <motion.button 
            className="bg-black text-primary-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Schedule Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Calculators;
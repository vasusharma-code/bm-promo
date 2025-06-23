import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-400 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-black p-2 rounded-full">
                <Anchor className="h-6 w-6 text-primary-400" />
              </div>
              <span className="font-bold text-xl">Budding Mariners</span>
            </div>
            <p className="text-black/80 mb-4">
              Your gateway to the Merchant Navy. We provide comprehensive training and guidance 
              to help you achieve your maritime career dreams.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-black/70 hover:text-black cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-black/70 hover:text-black cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-black/70 hover:text-black cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-black/70 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-black/80 hover:text-black transition-colors">Courses</Link></li>
              <li><Link to="/about" className="text-black/80 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/calculators" className="text-black/80 hover:text-black transition-colors">Calculators</Link></li>
              <li><Link to="/blog" className="text-black/80 hover:text-black transition-colors">Blog</Link></li>
              <li><Link to="/college-forms" className="text-black/80 hover:text-black transition-colors">Apply Now</Link></li>
              <li><Link to="/free-materials" className="text-black/80 hover:text-black transition-colors">Free Materials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact & Legal</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-black/80">info@buddingmariners.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-black/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-black/80">Mumbai, Maharashtra, India</span>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="text-black/80 hover:text-black cursor-pointer transition-colors">Privacy Policy</div>
              <div className="text-black/80 hover:text-black cursor-pointer transition-colors">Terms of Service</div>
              <div className="text-black/80 hover:text-black cursor-pointer transition-colors">Refund Policy</div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/20 mt-8 pt-8 text-center">
          <p className="text-black/80">
            © 2024 Budding Mariners. All rights reserved. | Empowering Maritime Careers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
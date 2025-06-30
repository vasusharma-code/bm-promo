import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from 'lucide-react';
import logo from '../../assets/yellow on orange logomark.png';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand/Intro */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="bg-black p-2 rounded-full flex items-center justify-center">
                <img src={logo} alt="BM Logo" className="h-8 w-8 object-contain" />
              </div>
              <span className="font-bold text-lg">BUDDING MARINERS</span>
            </div>
            <div className="text-sm text-black/90 mb-4">
              Leading academy for aspiring merchant navy professionals with over 5+ years of experience and 3000+ successful students.
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <div className="font-bold mb-2">Quick Links</div>
            <ul className="space-y-1 text-sm">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/blog" className="hover:underline">Blogs</Link></li>
              <li><Link to="/calculators" className="hover:underline">Calculators</Link></li>
              <li><Link to="/free-materials" className="hover:underline">Free Materials</Link></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <div className="font-bold mb-2">Services</div>
            <ul className="space-y-1 text-sm">
              <li>Online Courses</li>
              <li>Offline Batches</li>
              <li>Test Series</li>
              <li>Consultation</li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <div className="font-bold mb-2">Legal</div>
            <ul className="space-y-1 text-sm">
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Refund policy</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-black/30" />
        <div className="text-center text-xs text-black/80 pb-2">
          © 2025 Budding Mariners. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
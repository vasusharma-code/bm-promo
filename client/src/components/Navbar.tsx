import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Blog', path: '/blog' },
    // { name: 'Apply', path: '/college-forms' },
    { name: 'Free Materials', path: '/free-materials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-gradient-to-b from-[#18181b] to-black border-b border-yellow-400 shadow-none`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Desktop Only */}
        <div className="hidden md:flex justify-between items-center h-10 border-b border-yellow-400">
          <div className="flex items-center gap-8 text-yellow-400 text-xs font-semibold h-full">
            <span className="hover:underline cursor-pointer">All Courses <span className="ml-1">&#9662;</span></span>
            <span className="hover:underline cursor-pointer">BM Offline Academy</span>
            {/* <span className="hover:underline cursor-pointer">Online Courses</span> */}
            {/* <span className="hover:underline cursor-pointer">Test Series</span> */}
            <span className="hover:underline cursor-pointer">BM Store</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 text-xs font-semibold">Admissions Open For Online/Offline Batches</span>
            <button className="bg-yellow-400 text-black font-bold px-3 py-1 rounded hover:bg-yellow-300 text-xs">JOIN NOW</button>
          </div>
        </div>
        {/* Top Bar - Mobile Only */}
        <div className="flex md:hidden items-center border-b border-yellow-400 h-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center gap-4 text-yellow-400 text-xs font-semibold px-1">
            <span className="hover:underline cursor-pointer">All Courses <span className="ml-1">&#9662;</span></span>
            <span className="hover:underline cursor-pointer">BM Offline Academy</span>
            {/* <span className="hover:underline cursor-pointer">Online Courses</span>
            <span className="hover:underline cursor-pointer">Test Series</span> */}
            <span className="hover:underline cursor-pointer">BM Store</span>
            <span className="text-yellow-400 text-xs font-semibold">Admissions Open For Online/Offline Batches</span>
            <button className="bg-yellow-400 text-black font-bold px-3 py-1 rounded hover:bg-yellow-300 text-xs ml-2">JOIN NOW</button>
          </div>
        </div>
        {/* Main Bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-black border border-yellow-400 p-2 rounded-full">
              <Anchor className="h-6 w-6 text-yellow-400" />
            </div>
            <span className="text-yellow-400 font-bold text-xl tracking-wide">BUDDING MARINERS</span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-yellow-400 hover:text-white transition-colors duration-200 font-semibold text-sm tracking-wide ${
                  location.pathname === link.path ? 'underline underline-offset-4' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <button className="ml-4 bg-yellow-400 text-black font-bold px-5 py-1.5 rounded hover:bg-yellow-300 text-sm">Login</button> */}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-yellow-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-yellow-400 hover:text-white transition-colors duration-200 font-semibold text-base ${
                    location.pathname === link.path ? 'underline underline-offset-4' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full mt-2 bg-yellow-400 text-black font-bold px-5 py-2 rounded hover:bg-yellow-300 text-base">Login</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
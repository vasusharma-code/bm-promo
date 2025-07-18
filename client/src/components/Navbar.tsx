import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../../assets/yellow on orange logomark.png';

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

  // Marquee content for the top bar
  const marqueeContent = "Admissions Open For Online/Offline Batches";

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'BM Store', external: true, url: 'https://storebybm.com/' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Blog', path: '/blog' },
    { name: 'Free Materials', path: '/free-materials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-gradient-to-b from-[#18181b] to-black border-b border-white shadow-none`}>
      {/* Remove max-w-7xl and horizontal padding for full width */}
      <div>
        {/* Top Bar - Desktop Only */}
        <div className="hidden md:flex items-center h-10 border-b border-white relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full overflow-hidden">
              <div className="animate-marquee whitespace-nowrap flex items-center">
                {Array(10).fill(0).map((_, i) => (
                  <React.Fragment key={i}>
                    <a
                      href="https://forms.gle/eYhht7QngobRYATJ8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-white font-bold text-base mx-8"
                    >
                      {marqueeContent}
                    </a>
                    <span className="text-yellow-400 mx-8">✦</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Top Bar - Mobile Only */}
        <div className="flex md:hidden items-center border-b border-white h-10 overflow-hidden whitespace-nowrap relative">
          <div className="w-full overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {Array(10).fill(0).map((_, i) => (
                <React.Fragment key={i}>
                  <a
                    href="https://forms.gle/eYhht7QngobRYATJ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-white font-bold text-sm mx-4"
                  >
                    {marqueeContent}
                  </a>
                  <span className="text-yellow-400 mx-4">✦</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        {/* Main Bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-black p-2 rounded-full flex items-center justify-center">
              <img src={logo} alt="BM Logo" className="h-12 w-12 object" />
            </div>
            <span className="text-yellow-400 font-bold text-xl tracking-wide">BUDDING MARINERS</span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white hover:text-yellow-400 transition-colors duration-200 font-semibold text-sm tracking-wide`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-white hover:text-yellow-400 transition-colors duration-200 font-semibold text-sm tracking-wide ${
                    location.pathname === link.path ? 'underline underline-offset-4 text-yellow-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
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
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-yellow-400 hover:text-white transition-colors duration-200 font-semibold text-base"
                  >
                    {link.name}
                  </a>
                ) : (
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
                )
              )}
              {/* <a
                href="https://forms.gle/eYhht7QngobRYATJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-yellow-400 hover:text-white transition-colors duration-200 font-semibold text-base"
              >
                Admissions Open For Online/Offline Batches
              </a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
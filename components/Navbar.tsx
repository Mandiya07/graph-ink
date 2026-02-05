
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Hexagon size={32} className="text-amber-500 fill-amber-500/10 transition-transform group-hover:rotate-180 duration-700" />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black">G</span>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Graph-ink</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                location.pathname === link.path ? 'text-amber-500 underline underline-offset-8' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/about#contact" 
            className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold hover:text-amber-500"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/about#contact" 
            onClick={() => setIsOpen(false)}
            className="bg-amber-500 text-black px-10 py-4 rounded-full text-xl font-bold"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

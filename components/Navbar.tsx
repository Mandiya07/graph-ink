
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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
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
              className={`text-sm font-medium transition-all hover:text-amber-500 relative py-1 ${
                location.pathname === link.path ? 'text-amber-500' : 'text-gray-400'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full animate-in slide-in-from-left duration-300"></span>
              )}
            </Link>
          ))}
          <Link 
            to="/about#contact" 
            className="bg-amber-500 hover:bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-amber-500/10"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-110'
        }`}
      >
        <button 
          className="absolute top-6 right-6 p-4 text-white hover:text-amber-500 transition-colors" 
          onClick={() => setIsOpen(false)}
        >
          <X size={40} />
        </button>
        
        <div className="flex flex-col items-center space-y-6">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-4xl font-black uppercase tracking-tighter transition-all hover:text-amber-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${location.pathname === link.path ? 'text-amber-500' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          to="/about#contact" 
          onClick={() => setIsOpen(false)}
          className={`bg-amber-500 text-black px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest transform transition-all delay-300 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

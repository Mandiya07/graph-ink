
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Youtube, Hexagon, ArrowUpRight, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6 group">
            <Hexagon size={28} className="text-amber-500 group-hover:rotate-45 transition-transform" />
            <span className="text-xl font-black uppercase tracking-tighter">Graph-ink</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Premium 3D animation and VFX studio pushing the boundaries of digital storytelling and immersive visuals.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-amber-500">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Marketplace</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-amber-500">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
            <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Job Portal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-amber-500">Newsletter</h4>
          <p className="text-xs text-gray-500 mb-4">Get the latest 3D assets and industry news delivered to your inbox.</p>
          
          {subscribed ? (
            <div className="flex items-center space-x-2 text-amber-500 font-bold text-sm fade-in py-3">
              <CheckCircle size={18} />
              <span>Subscribed Successfully!</span>
            </div>
          ) : (
            <form className="relative" onSubmit={handleSubscribe}>
              <input 
                required
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-all"
              />
              <button type="submit" className="absolute right-1 top-1 bottom-1 bg-amber-500 text-black rounded-full px-4 group hover:bg-white transition-colors">
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
        <p>© 2024 Graph-ink Studios. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

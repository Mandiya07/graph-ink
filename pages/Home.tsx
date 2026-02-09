
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Award, Zap, Camera } from 'lucide-react';
import { SERVICES, WORKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background with Zoom Effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black">
          <img 
            src="https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[20s] ease-linear scale-110 animate-[zoom_20s_infinite_alternate]"
            alt="Cinematic Background"
          />
          <style>
            {`
              @keyframes zoom {
                from { transform: scale(1); }
                to { transform: scale(1.15); }
              }
              .text-stroke {
                -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                color: transparent;
              }
            `}
          </style>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] uppercase tracking-[0.2em] font-black mb-8 animate-bounce">
            <Zap size={12} />
            <span>Award Winning Studio</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Visualizing the <br /> 
            <span className="text-amber-500 border-t border-b py-2 block md:inline border-white/20 px-4 mt-4 md:mt-0 italic">
              Impossible
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-medium mb-12">
            Graph-ink is a creative force in 3D animation, VFX, and motion storytelling. We transform abstract concepts into cinematic reality for global brands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/gallery" 
              className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-amber-500 transition-all transform hover:scale-105 shadow-xl hover:shadow-amber-500/20"
            >
              View Showreel
            </Link>
            <Link 
              to="/community" 
              className="w-full sm:w-auto border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest transition-all"
            >
              Join Community
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden md:block">
          <div className="w-[1px] h-16 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                Beyond the <br /> Third Dimension
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                At Graph-ink, we don't just animate; we breathe life into pixels. Our studio combines technical precision with artistic soul to deliver visuals that resonate and inspire. Whether it's a high-stakes commercial or a cinematic masterpiece, we push the limits of what's possible in 3D.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-3xl font-black text-amber-500">120+</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Projects Done</p>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-amber-500">15+</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Awards Won</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center space-x-2 text-amber-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group">
                <span>Learn our story</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-2xl blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop" 
                loading="lazy"
                className="relative rounded-2xl shadow-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Studio at work"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl">
                <p className="text-white italic text-sm font-medium">"Graph-ink transformed our brand vision into a breathtaking cinematic journey."</p>
                <p className="text-amber-500 text-xs font-bold mt-2 uppercase">— Creative Director, Global Brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-32 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-4">What we do</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Our Core Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-black/40 border border-white/5 p-8 rounded-2xl hover:border-amber-500/50 transition-all hover:shadow-2xl hover:shadow-amber-500/5">
                <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center rounded-xl mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all transform group-hover:-translate-y-1">
                   <Play size={24} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4">{service.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-amber-500 flex items-center space-x-1">
                  <span>Explore Service</span>
                  <ArrowRight size={10} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-4">Latest Works</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter">Featured Gallery</h3>
          </div>
          <Link to="/gallery" className="flex items-center space-x-2 text-sm font-bold border-b border-amber-500 pb-1 text-amber-500 hover:text-white hover:border-white transition-all group">
            <span>View All Projects</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {WORKS.slice(0, 3).map((work) => (
            <div key={work.id} className="group relative aspect-video rounded-2xl overflow-hidden bg-neutral-800">
              <img 
                src={work.imageUrl} 
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110" 
                alt={work.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                <span className="text-amber-500 text-[10px] uppercase font-black tracking-widest mb-1">{work.category}</span>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-4">{work.title}</h4>
                <button className="flex items-center space-x-2 text-xs font-bold bg-white text-black self-start px-4 py-2 rounded-full transform hover:scale-105 transition-all">
                  <Play size={12} fill="black" />
                  <span>Watch Cinematic</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 h-full">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border border-black/20"></div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-black text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Ready to Build <br /> Your Vision?
          </h2>
          <p className="text-black/70 text-lg font-bold mb-12">
            Let's collaborate on your next big 3D animation or VFX project. We are currently accepting new commissions for 2024.
          </p>
          <Link 
            to="/about#contact" 
            className="inline-block bg-black text-white px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:scale-110 transition-transform shadow-2xl hover:bg-white hover:text-black"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

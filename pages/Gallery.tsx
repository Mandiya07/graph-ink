
import React, { useState, useEffect } from 'react';
import { Play, Filter, Maximize2, X } from 'lucide-react';
import { WORKS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'animation' | 'vfx' | 'ads' | 'visualization'>('all');
  const [selectedWork, setSelectedWork] = useState<typeof WORKS[0] | null>(null);

  const filteredWorks = filter === 'all' ? WORKS : WORKS.filter(w => w.category === filter);

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'animation', name: 'Animation' },
    { id: 'vfx', name: 'VFX' },
    { id: 'ads', name: 'Advertising' },
    { id: 'visualization', name: 'Arch-Vis' },
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedWork(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Showcase</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                  filter === cat.id 
                    ? 'bg-amber-500 text-black border-amber-500' 
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/40'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredWorks.map((work) => (
            <div 
              key={work.id} 
              className="group relative bg-neutral-900 rounded-2xl overflow-hidden aspect-square cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <img 
                src={work.imageUrl} 
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                alt={work.title} 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center">
                 <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Play size={24} fill="currentColor" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] text-amber-500 font-black uppercase tracking-widest block mb-1">{work.category}</span>
                <h3 className="text-xl font-black uppercase tracking-tight">{work.title}</h3>
                <p className="text-xs text-gray-500 mt-2 font-bold">{work.client}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="py-20 border-t border-white/10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="mb-6 flex justify-center text-amber-500">
                   {[...Array(5)].map((_, i) => <span key={i} className="px-0.5">★</span>)}
                </div>
                <p className="text-gray-400 italic mb-6">"Graph-ink's attention to detail in character motion is unparalleled. They didn't just meet our brief; they redefined it."</p>
                <p className="text-xs font-black uppercase tracking-widest">— James T., Lead Producer</p>
              </div>
              <div className="text-center">
                <div className="mb-6 flex justify-center text-amber-500">
                   {[...Array(5)].map((_, i) => <span key={i} className="px-0.5">★</span>)}
                </div>
                <p className="text-gray-400 italic mb-6">"Their VFX work for our short film was cinema-grade. Seamless integration and spectacular lighting effects."</p>
                <p className="text-xs font-black uppercase tracking-widest">— Sarah L., Film Director</p>
              </div>
              <div className="text-center">
                <div className="mb-6 flex justify-center text-amber-500">
                   {[...Array(5)].map((_, i) => <span key={i} className="px-0.5">★</span>)}
                </div>
                <p className="text-gray-400 italic mb-6">"The 3D architectural render they provided helped us secure our biggest contract this year. Incredible work!"</p>
                <p className="text-xs font-black uppercase tracking-widest">— Marco R., Arch-Firm Founder</p>
              </div>
           </div>
        </div>
      </div>

      {selectedWork && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <div 
            className="max-w-6xl w-full relative animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white font-black hover:text-amber-500 transition-all flex items-center space-x-2 uppercase text-xs tracking-widest"
              onClick={() => setSelectedWork(null)}
            >
              <span>Close</span>
              <X size={18} />
            </button>
            <div className="aspect-video bg-neutral-900 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.1)] border border-white/10 relative">
              <div className="w-full h-full flex items-center justify-center">
                <Play size={80} className="text-amber-500 animate-pulse" />
                <p className="absolute text-sm font-bold text-gray-500 uppercase tracking-widest mt-32">Streaming Visual Sample...</p>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-start">
               <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">{selectedWork.title}</h2>
                  <p className="text-gray-400 font-medium">Category: <span className="text-amber-500 uppercase">{selectedWork.category}</span></p>
               </div>
               <div className="text-right">
                  <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-2">Client</p>
                  <p className="text-2xl font-black">{selectedWork.client}</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

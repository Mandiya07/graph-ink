
import React from 'react';
import { Play, Film, Box, Users, ArrowRight, Monitor, Layers } from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: Record<string, React.ElementType> = {
  Play,
  Film,
  Box,
  Users,
  Monitor,
  Layers
};

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-32">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10">Our<br />Capabilities</h1>
          <p className="text-xl text-gray-400 font-medium leading-relaxed">
            From initial concept art to final frame rendering, we provide end-to-end 3D solutions. Our workflow is designed for quality, scalability, and absolute creative expression.
          </p>
        </div>

        <div className="space-y-40">
          {SERVICES.map((service, idx) => {
            const IconComponent = IconMap[service.icon] || Play;
            return (
              <div key={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 md:gap-24`}>
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-2 bg-amber-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                    <img 
                      src={service.imageUrl} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      alt={service.title} 
                    />
                    <div className="absolute top-6 left-6 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-amber-500">
                      <IconComponent size={24} />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-4 block">Service {idx + 1}</span>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">{service.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">
                    {service.description} At Graph-ink, we utilize cutting-edge tools like Unreal Engine, Blender, and Houdini to ensure that every frame is a masterpiece. Our focus on lighting, texture, and motion ensures a level of immersion that competitors simply can't match.
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center space-x-3 text-sm font-bold text-white/60">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span>4K Cinema Quality Output</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm font-bold text-white/60">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span>Industry Standard Workflows</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm font-bold text-white/60">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span>Rapid Prototyping & Revisions</span>
                    </div>
                  </div>
                  <button className="bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-all shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-1">
                    Request Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

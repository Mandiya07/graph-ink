
import React, { useState } from 'react';
import { Users, Briefcase, Zap, Globe, MessageSquare, Heart, CheckCircle } from 'lucide-react';

const Community: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10">The Hub for<br />3D Talent</h1>
            <p className="text-xl text-gray-400 font-medium mb-10">
              Join a global network of 5,000+ artists, animators, and designers. Collaborate, find jobs, and grow your career.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-amber-500 text-black px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-lg hover:shadow-amber-500/20">
                Join Membership
              </button>
              <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white/10 transition-all">
                Browse Showcase
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-neutral-900 aspect-square rounded-3xl overflow-hidden group">
               <img src="https://picsum.photos/seed/comm1/400/400" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Artist 1" />
            </div>
            <div className="bg-neutral-900 aspect-square rounded-3xl overflow-hidden mt-12 group">
               <img src="https://picsum.photos/seed/comm2/400/400" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Artist 2" />
            </div>
            <div className="bg-neutral-900 aspect-square rounded-3xl overflow-hidden -mt-12 group">
               <img src="https://picsum.photos/seed/comm3/400/400" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Artist 3" />
            </div>
            <div className="bg-neutral-900 aspect-square rounded-3xl overflow-hidden group">
               <img src="https://picsum.photos/seed/comm4/400/400" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Artist 4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
           <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all group">
              <div className="mb-6 text-amber-500 transform group-hover:scale-110 transition-transform"><Briefcase size={32} /></div>
              <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Job Board</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Exclusive access to freelance and studio job postings from top agencies.</p>
           </div>
           <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all group">
              <div className="mb-6 text-amber-500 transform group-hover:scale-110 transition-transform"><Zap size={32} /></div>
              <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Collabs</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Connect with other artists for collaborative projects and portfolio builders.</p>
           </div>
           <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all group">
              <div className="mb-6 text-amber-500 transform group-hover:scale-110 transition-transform"><Globe size={32} /></div>
              <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Industry Links</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Regular updates on industry events, competitions, and global conferences.</p>
           </div>
           <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all group">
              <div className="mb-6 text-amber-500 transform group-hover:scale-110 transition-transform"><MessageSquare size={32} /></div>
              <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Private Forum</h4>
              <p className="text-gray-500 text-sm leading-relaxed">A safe space for technical help, critique, and career advice from veterans.</p>
           </div>
        </div>

        <div className="max-w-4xl mx-auto bg-amber-500 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
           <div className="relative z-10 text-center">
              {submitted ? (
                <div className="fade-in py-12">
                   <CheckCircle size={64} className="mx-auto text-black mb-6" />
                   <h2 className="text-black text-4xl font-black uppercase tracking-tighter mb-4">You're on the list!</h2>
                   <p className="text-black/70 font-bold">Check your inbox for a welcome package soon.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Become a Member</h2>
                  <p className="text-black/70 font-bold mb-12">Get instant access to assets, courses, and the community network.</p>
                  <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
                    <input 
                      required
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-8 py-4 rounded-full bg-black/10 border border-black/20 placeholder:text-black/40 text-black font-bold focus:outline-none focus:bg-white/20 transition-all"
                    />
                    <button type="submit" className="bg-black text-white px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all transform active:scale-95">
                        Register Now
                    </button>
                  </form>
                  <p className="mt-8 text-[10px] text-black/50 font-black uppercase tracking-widest">No credit card required to start free tier</p>
                </>
              )}
           </div>
           <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Users size={400} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

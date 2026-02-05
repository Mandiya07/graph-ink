
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-32">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
            Visionaries in <br /> <span className="text-amber-500">Motion</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            Graph-ink was founded on the belief that storytelling shouldn't be limited by physical reality. We are a team of artists, technical directors, and dreamers dedicated to the craft of 3D animation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div className="bg-white/5 p-12 rounded-3xl border border-white/5 hover:border-amber-500/20 transition-colors">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-6">Our Vision</h2>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Empowering Creatives Globally</h3>
            <p className="text-gray-400 leading-relaxed">
              Our long-term goal is to bridge the gap between imagination and digital execution. We aim to become the premier hub for creative empowerment, providing the tools, education, and inspiration needed to redefine modern digital media.
            </p>
          </div>
          <div className="bg-white/5 p-12 rounded-3xl border border-white/5 hover:border-amber-500/20 transition-colors">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-6">Our Mission</h2>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Cinematic Solutions & Education</h3>
            <p className="text-gray-400 leading-relaxed">
              We strive to deliver high-quality, cinematic-grade animation and VFX solutions for brands and filmmakers. Simultaneously, we are committed to nurturing the next generation of 3D talent through our specialized courses and community hub.
            </p>
          </div>
        </div>

        <div className="mb-32">
           <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            loading="lazy"
            className="w-full h-[500px] object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 mb-12 shadow-2xl"
            alt="Studio Space"
           />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h4 className="text-4xl font-black text-white mb-2">2018</h4>
                <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">Year Founded</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">50+</h4>
                <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">Global Partners</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">80M+</h4>
                <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">Viewers Reached</p>
              </div>
           </div>
        </div>

        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-20 bg-neutral-900 rounded-[3rem] overflow-hidden p-8 md:p-20 border border-white/5 scroll-mt-32">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-6">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Start Your Next <br /> Chapter With Us</h3>
            <p className="text-gray-400 mb-12">
              Have a project idea or just want to chat about 3D? We’d love to hear from you. Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-amber-500 shadow-inner">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Email Us</p>
                  <p className="font-bold">hello@graph-ink.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-amber-500 shadow-inner">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Call Us</p>
                  <p className="font-bold">+1 (555) 000-GRAPH</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-amber-500 shadow-inner">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Studio</p>
                  <p className="font-bold">Digital Avenue, Neo City, CA</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-amber-500 transition-all hover:text-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-amber-500 transition-all hover:text-black">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-amber-500 transition-all hover:text-black">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <form 
              className={`bg-black/50 p-8 md:p-12 rounded-3xl border border-white/5 transition-opacity duration-300 ${formStatus === 'success' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-[10px] uppercase font-black text-gray-500 block mb-2 px-1">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-black text-gray-500 block mb-2 px-1">Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label className="text-[10px] uppercase font-black text-gray-500 block mb-2 px-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-all appearance-none cursor-pointer">
                  <option>New Project Commission</option>
                  <option>Education Inquiry</option>
                  <option>Career Opportunity</option>
                  <option>Just saying hi!</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="text-[10px] uppercase font-black text-gray-500 block mb-2 px-1">Message</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className="w-full bg-amber-500 text-black font-black uppercase text-sm tracking-widest py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-white transition-all transform active:scale-95 disabled:opacity-50"
              >
                <span>{formStatus === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <Send size={16} />
              </button>
            </form>

            {formStatus === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center fade-in bg-black/20 rounded-3xl text-center p-12">
                 <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6 mx-auto">
                    <CheckCircle size={40} />
                 </div>
                 <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Message Received</h3>
                 <p className="text-gray-400">Thank you for reaching out. Our team will contact you shortly.</p>
                 <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-xs font-black uppercase tracking-widest text-amber-500 border-b border-amber-500/30 pb-1"
                 >
                    Send another message
                 </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

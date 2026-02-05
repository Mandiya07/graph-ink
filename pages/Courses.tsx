
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, Signal, CheckCircle, ArrowRight, Users } from 'lucide-react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] uppercase tracking-[0.2em] font-black mb-8">
            <GraduationCap size={12} />
            <span>Graph-ink Academy</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Learn 3D<br />From Masters</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400 font-medium">
            Accelerate your career in the animation industry with hands-on training from working professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {COURSES.map((course) => (
            <div key={course.id} className="group bg-neutral-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-amber-500/20 transition-all flex flex-col md:flex-row h-full">
              <div className="w-full md:w-2/5 relative">
                <img 
                  src={course.imageUrl} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt={course.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-transparent md:hidden"></div>
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      <Signal size={12} className="text-amber-500" />
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider">{course.level}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      <Clock size={12} className="text-amber-500" />
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider">{course.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                  <div className="space-y-3 mb-10">
                    {course.outline.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-bold text-white/70">
                        <CheckCircle size={14} className="text-amber-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {course.outline.length > 3 && (
                      <span className="text-[10px] text-gray-600 font-bold ml-6">+ {course.outline.length - 3} more modules</span>
                    )}
                  </div>
                </div>
                <Link 
                  to={`/courses/${course.id}`}
                  className="w-full bg-amber-500 text-black py-4 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center space-x-2 hover:bg-white transition-all transform active:scale-95"
                >
                  <span>Explore Details</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 bg-white/[0.02] p-16 rounded-[3rem] border border-white/5">
           <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-8">
                 <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Lifetime Access</h4>
              <p className="text-sm text-gray-500">Buy once, learn forever. Get all future updates to course material at no extra cost.</p>
           </div>
           <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-8">
                 <Users size={32} />
              </div>
              <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Direct Mentorship</h4>
              <p className="text-sm text-gray-500">Join weekly live Q&A sessions and get personalized feedback on your portfolio.</p>
           </div>
           <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-8">
                 <GraduationCap size={32} />
              </div>
              <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Certification</h4>
              <p className="text-sm text-gray-500">Receive an industry-recognized certificate upon completion to boost your resume.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

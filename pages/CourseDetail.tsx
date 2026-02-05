
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Signal, 
  CheckCircle, 
  BookOpen, 
  Zap, 
  ChevronRight, 
  ShoppingBag,
  Award,
  Users
} from 'lucide-react';
import { COURSES } from '../constants';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find((c) => c.id === id);
  const [enrolling, setEnrolling] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl font-black uppercase mb-4">Course Not Found</h2>
        <p className="text-gray-400 mb-8">The content you are looking for has been moved or deleted.</p>
        <Link to="/courses" className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest">
          Back to Courses
        </Link>
      </div>
    );
  }

  const handleEnroll = () => {
    setEnrolling(true);
    setTimeout(() => {
      setEnrolling(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={course.imageUrl} 
            className="w-full h-full object-cover" 
            alt={course.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <Link to="/courses" className="inline-flex items-center space-x-2 text-amber-500 font-bold uppercase text-xs tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={14} />
            <span>All Courses</span>
          </Link>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
              {course.level}
            </span>
            <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              {course.duration}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            {course.title}
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-300 font-medium">
            {course.description}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Objectives */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Zap size={32} className="text-amber-500" />
                <h2 className="text-3xl font-black uppercase tracking-tight">What you'll learn</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start space-x-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-amber-500" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{obj}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <BookOpen size={32} className="text-amber-500" />
                <h2 className="text-3xl font-black uppercase tracking-tight">Course Curriculum</h2>
              </div>
              <div className="space-y-4">
                {course.outline.map((item, i) => (
                  <div key={i} className="group flex items-center justify-between p-6 bg-neutral-900 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all">
                    <div className="flex items-center space-x-6">
                      <span className="text-2xl font-black text-white/10 group-hover:text-amber-500/20 transition-colors">0{i + 1}</span>
                      <h4 className="text-lg font-bold uppercase tracking-tight">{item}</h4>
                    </div>
                    <ChevronRight size={20} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-neutral-900 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Total Price</p>
                  <h3 className="text-5xl font-black text-amber-500">{course.price || '$299'}</h3>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Clock size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">Duration</span>
                    </div>
                    <span className="text-xs font-black uppercase">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Signal size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">Skill Level</span>
                    </div>
                    <span className="text-xs font-black uppercase">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Users size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">Students</span>
                    </div>
                    <span className="text-xs font-black uppercase">1,200+ Joined</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Award size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">Certificate</span>
                    </div>
                    <span className="text-xs font-black uppercase text-amber-500">Included</span>
                  </div>
                </div>

                {success ? (
                  <div className="bg-white text-black p-4 rounded-xl text-center fade-in">
                    <p className="text-xs font-black uppercase tracking-widest">Welcome to the Academy!</p>
                  </div>
                ) : (
                  <button 
                    onClick={handleEnroll}
                    disabled={enrolling}
                    className="w-full bg-amber-500 text-black py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-white transition-all transform active:scale-95 disabled:opacity-50"
                  >
                    <ShoppingBag size={18} />
                    <span>{enrolling ? 'Processing...' : 'Enroll Today'}</span>
                  </button>
                )}
                
                <p className="text-[9px] text-gray-600 font-bold uppercase text-center mt-6 tracking-widest">
                  Secure checkout • 30-day money back guarantee
                </p>
              </div>

              {/* Bonus Card */}
              <div className="bg-amber-500 p-8 rounded-[2.5rem] text-black">
                 <h4 className="text-xl font-black uppercase tracking-tight mb-4 leading-tight">Bundle & Save 20%</h4>
                 <p className="text-xs font-bold mb-6 opacity-80">Get both Intro & Elementary courses as a master bundle.</p>
                 <button className="w-full border-2 border-black py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-colors">
                    View Master Bundle
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

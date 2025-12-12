import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
          New: Lumina 2.5 is now available
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 animate-slide-up">
          Design at the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Speed of Thought
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Unleash your creativity with the world's most advanced AI-powered design tool. 
          Generate, edit, and collaborate on stunning visuals in seconds, not hours.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-lg shadow-indigo-500/30 transition-all hover:scale-105">
            Start Designing Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white md:text-lg backdrop-blur-sm transition-all">
            <PlayCircle className="ml-2 h-5 w-5 mr-2" />
            Watch Demo
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative rounded-xl bg-slate-800/50 border border-slate-700 p-2 shadow-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60"></div>
           <img 
            src="https://picsum.photos/1200/800?grayscale" 
            alt="Lumina Dashboard" 
            className="rounded-lg w-full h-auto opacity-80"
           />
        </div>
      </div>
    </div>
  );
};

export default Hero;
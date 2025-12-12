import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to create
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Powerful tools that adapt to your workflow, powered by state-of-the-art machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors duration-300 hover:bg-slate-800/80 group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 border border-slate-700 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
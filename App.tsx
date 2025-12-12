import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        
        {/* Testimonials Section (Inline for simplicity or could be separate file) */}
        <div id="testimonials" className="py-24 bg-slate-900 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-bold text-center text-white mb-12">Trusted by creative teams everywhere</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {[1, 2, 3].map((i) => (
                         <div key={i} className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                             <div className="flex items-center mb-4">
                                 {[1, 2, 3, 4, 5].map((star) => (
                                     <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                 ))}
                             </div>
                             <p className="text-slate-300 mb-6">"This tool has completely transformed how we approach design systems. The AI suggestions are spot on."</p>
                             <div className="flex items-center">
                                 <img src={`https://picsum.photos/50/50?random=${i}`} alt="User" className="w-10 h-10 rounded-full mr-3" />
                                 <div>
                                     <h4 className="text-white font-medium">Alex Johnson</h4>
                                     <p className="text-slate-500 text-sm">Creative Director</p>
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </div>

        <Pricing />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
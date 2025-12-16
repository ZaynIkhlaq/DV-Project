import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen w-full snap-start relative bg-[#020617] text-slate-200 overflow-hidden flex items-center justify-center">
      {/* Abstract Background - Data Flow Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-900/40 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-900/40 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent" />
        
        {/* Glowing Orbs - subtle and dark */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-light text-white tracking-tight mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Rethinking <br />
            <span className="font-medium bg-gradient-to-r from-indigo-200 via-white to-purple-200 bg-clip-text text-transparent">
              Prosperity
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-6 font-light max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
           Comparative Analysis of Economic Growth and Human Life Wellness
          </motion.p>

          <motion.p
            className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Through data visualization, we expose the hidden costs of consumerism: 
            atomized families, mental health crises, demographic decline, and the erosion of wellbeing 
            in even the wealthiest nations. This is the price of progress.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button
              onClick={() => {
                document.querySelector('.visualization-section').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="px-8 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Explore the Data</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

       {/* Scroll indicator - refined */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
        }}
      >
        <div className="w-5 h-8 border border-slate-600/50 rounded-full flex items-start justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1 h-1.5 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const DataCleaningSection = () => {
  return (
    <section className="min-h-screen w-full snap-start relative bg-[#020617] text-slate-200 overflow-hidden flex items-center justify-center py-20">
      {/* Abstract Background - reusing the theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-900/40 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-900/40 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent" />
        
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-indigo-400/80 font-mono text-xs tracking-[0.2em] uppercase mb-8 block">Methodology</span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-12">
            Data Collection & <span className="font-medium bg-gradient-to-r from-indigo-200 via-white to-blue-200 bg-clip-text text-transparent">Cleaning</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 text-left bg-slate-950/50 p-10 rounded-3xl border border-white/5 backdrop-blur-sm">
             <div>
                <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                   </div>
                   Data Cleaning
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                   Data cleaning is filtering required columns and then interpolating or removing null values where required.
                </p>
             </div>

             <div>
                <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                   </div>
                   Data Sources
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                   Data was collected from the sources:
                </p>
                <ul className="mt-4 space-y-2 text-slate-300 font-mono text-sm">
                   <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>Maddison Project</li>
                   <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>WDI (World Development Indicators)</li>
                   <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>WHO (World Health Organization)</li>
                </ul>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataCleaningSection;

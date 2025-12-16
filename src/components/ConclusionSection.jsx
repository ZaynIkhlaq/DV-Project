import React from 'react';
import { motion } from 'framer-motion';

const ConclusionSection = () => {
  return (
    <section className="min-h-screen w-full snap-start relative bg-[#020617] text-slate-200 overflow-hidden flex items-center justify-center py-20">
      {/* Abstract Background - Data Flow Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-900/40 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-900/40 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent" />
        
        {/* Glowing Orbs - subtle and dark */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-indigo-400/80 font-mono text-xs tracking-[0.2em] uppercase mb-6 block">Final Synthesis</span>
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">
            The Delicate Balance of <br />
            <span className="font-medium bg-gradient-to-r from-indigo-200 via-white to-indigo-200 bg-clip-text text-transparent">
              Human Flourishing
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Observation Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="relative h-full bg-slate-950/50 backdrop-blur-2xl border border-white/5 p-10 rounded-2xl group-hover:border-indigo-500/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-white tracking-wide">The Insight</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                High national wellbeing is not accidental—it requires a symbiotic relationship between <span className="text-indigo-300 font-medium">governmental efficacy (ISI)</span> and <span className="text-purple-300 font-medium">social cohesion (SBI)</span>. Our data reveals that neglect in either dimension creates a structural void, inevitably diminishing the quality of life regardless of economic output.
              </p>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-bl from-emerald-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="relative h-full bg-slate-950/50 backdrop-blur-2xl border border-white/5 p-10 rounded-2xl group-hover:border-emerald-500/20 transition-all duration-500">
               <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-white tracking-wide">The Imperative</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                The path forward demands a dual mandate. Governments must guarantee <span className="text-emerald-300 font-medium">robust infrastructure, healthcare, and equity</span>. Simultaneously, we as individuals must cultivate a society that values connection over accumulation—rejecting the pursuit of material ambition as the sole metric of success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;

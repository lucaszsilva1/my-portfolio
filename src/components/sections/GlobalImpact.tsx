import React from 'react';
import { motion } from 'motion/react';

export const GlobalImpact: React.FC = () => {
  return (
    <section id="impact" className="py-24 md:py-32 bg-black text-white flex flex-col justify-center overflow-hidden border-b border-black">
      
      {/* Infinite Marquee Section */}
      <div className="w-full relative py-12 md:py-24 overflow-hidden border-y-2 border-white bg-black text-white flex items-center">
        {/* Adds an internal wrapper to ensure smooth repeating flex behavior */}
        <div className="animate-marquee flex gap-16 font-display text-[clamp(5rem,10vw,12rem)] uppercase leading-none tracking-tighter">
          {/* Repeated items for a continuous looping effect */}
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="whitespace-nowrap shrink-0 flex items-center gap-16">
              <span>
                DADOS SÃO INOVAÇÃO <span className="text-outline-white text-transparent">SEM DESCULPAS</span>
              </span>
              <span className="text-white/30">—</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-32 pb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-12 font-mono text-[10px] md:text-sm uppercase tracking-widest text-gray-400"
        >
          <div className="flex items-center gap-4 text-white font-bold bg-white/10 px-6 py-3 border border-white/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span>DISPONÍVEL GLOBALMENTE</span>
          </div>
          <span className="hidden md:block text-gray-700">/</span>
          <span className="hover:text-white transition-colors cursor-default">FOCADO EM DESAFIOS COMPLEXOS</span>
          <span className="hidden md:block text-gray-700">/</span>
          <span className="hover:text-white transition-colors cursor-default">ABERTO A REALOCAÇÃO</span>
        </motion.div>
      </div>

    </section>
  );
};

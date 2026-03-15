import React from 'react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-widest mb-16 text-gray-400 pt-16 border-t border-white/20 w-full"
        >
          06. PRÓXIMOS PASSOS
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(4rem,10vw,12rem)] leading-[0.8] tracking-tighter uppercase mb-16"
        >
          VAMOS <br/> <span className="text-outline-white text-[transparent]">CONSTRUIR.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-8 w-full md:w-auto"
        >
          <a 
            href="https://www.linkedin.com/in/olucass-silva/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-between gap-8 font-mono text-sm md:text-base uppercase tracking-widest bg-white text-black px-8 py-5 hover:bg-gray-200 transition-colors focus:outline-none"
          >
            <span>LINKEDIN</span>
            <span className="font-display text-xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
          </a>
          <a 
            href="mailto:contato.lucassouzas@gmail.com" 
            className="group flex items-center justify-between gap-8 font-mono text-sm md:text-base uppercase tracking-widest border border-white px-8 py-5 hover:bg-white hover:text-black transition-colors focus:outline-none"
          >
            <span>E-MAIL</span>
            <span className="font-display text-xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
          </a>
          <a 
            href="https://github.com/luczzy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-between gap-8 font-mono text-sm md:text-base uppercase tracking-widest border border-white px-8 py-5 hover:bg-white hover:text-black transition-colors focus:outline-none"
          >
            <span>GITHUB</span>
            <span className="font-display text-xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

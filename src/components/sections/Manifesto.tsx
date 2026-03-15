import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Manifesto: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} id="manifesto" className="py-24 md:py-32 px-6 bg-black text-white border-b border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          <motion.div style={{ y: yText }} className="lg:col-span-8 flex flex-col justify-center relative z-20 mix-blend-difference pointer-events-none">
            <div className="font-mono text-xs uppercase tracking-widest mb-8 text-gray-400">
              {t('manifesto.subtitle')}
            </div>
            {/* The title overlaps the image column slightly because of extreme text size and difference blend */}
            <h2 className="font-display text-[clamp(4rem,10vw,12rem)] leading-[0.85] tracking-tighter uppercase mb-12 whitespace-nowrap min-w-max">
              {t('manifesto.title').split(' ').map((term: string, i: number) => (
                <span key={i}>
                  {term} {i === 0 && <br/>}
                </span>
              ))}
            </h2>
          </motion.div>

          {/* Text Content Block */}
          <div className="lg:col-span-4 lg:col-start-1 flex flex-col gap-8 max-w-xl z-20 relative">
              <p className="text-sm md:text-base leading-relaxed uppercase text-gray-300">
                {t('manifesto.text1')}
              </p>
              <p className="text-sm md:text-base leading-relaxed uppercase text-gray-300">
                {t('manifesto.text2')}
              </p>
              <p className="text-sm md:text-base leading-relaxed uppercase text-white font-bold border-l-2 border-white pl-4">
                {t('manifesto.text3')}
              </p>
          </div>

          {/* Image Content overlapping behind typography */}
          <motion.div 
            style={{ y: yImage }}
            className="lg:col-span-6 lg:col-start-7 lg:absolute lg:top-10 lg:right-0 flex justify-center lg:justify-end relative z-0 mt-12 lg:mt-0"
          >
            <div className="relative group w-full max-w-md lg:max-w-lg">
               <div className="absolute inset-0 bg-white/10 translate-x-4 translate-y-4 mix-blend-overlay border border-white/30 z-0 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
               <img 
                 src="/minha-foto.png" 
                 alt="Lucas Portrait" 
                 className="relative z-10 w-full h-[600px] object-cover grayscale contrast-125 brightness-90 border border-white/20"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-6 -left-6 font-mono text-[10px] uppercase tracking-widest text-white/50 rotate-90 origin-bottom-left">
                  SYSTEM_CORE_ENGINEER_V1
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export const GlobalImpact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="impact" className="py-24 md:py-32 bg-white text-black flex flex-col justify-center overflow-hidden border-b border-black">
      
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-medium text-[clamp(2.5rem,5.5vw,6rem)] uppercase leading-[1.05] tracking-tight mb-16"
        >
          {t('impact.mainText')}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 font-mono text-[11px] md:text-sm uppercase tracking-[0.2em] font-medium text-gray-500"
        >
          <div className="flex items-center gap-3 text-black font-bold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
            </span>
            <span>{t('impact.available')}</span>
          </div>
          <span className="hidden md:block text-gray-300">/</span>
          <span className="hover:text-black transition-colors cursor-default">{t('impact.challenges')}</span>
          <span className="hidden md:block text-gray-300">/</span>
          <span className="hover:text-black transition-colors cursor-default">{t('impact.relocation')}</span>
        </motion.div>

      </div>

    </section>
  );
};

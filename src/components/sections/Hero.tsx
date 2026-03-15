import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 15, stiffness: 100 },
  },
};

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-20 lg:py-32 border-b border-black bg-transparent text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-end text-right">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-widest mb-12 border-b border-black pb-4 w-full md:w-1/2"
        >
          {t('hero.meta')}
        </motion.div>
        
        <motion.h1 
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(4rem,10vw,12rem)] leading-[0.85] tracking-tighter uppercase mb-16"
        >
          <motion.span variants={letter} className="block">{t('hero.title1')}</motion.span>
          <motion.span variants={letter} className="block">{t('hero.title2')}</motion.span>
          <motion.span variants={letter} className="block text-outline">{t('hero.title3')}</motion.span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-8">
          <div className="hidden md:block">
             <div className="w-1/2 h-full border-l border-black ml-auto"></div>
          </div>
          <div className="flex flex-col items-end gap-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg leading-relaxed uppercase font-medium max-w-md text-justify"
            >
              {t('hero.desc')}
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-end gap-6"
            >
              <motion.a 
                whileHover={{ scale: 1.05, x: -10 }}
                href="#projects" 
                className="font-display text-2xl md:text-3xl uppercase hover:text-gray-500 transition-colors w-fit relative group flex items-center gap-4"
              >
                {t('hero.ctaImpact')}
                <span className="w-12 h-px bg-black group-hover:w-20 transition-all"></span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, x: -10 }}
                href="#contact" 
                className="font-display text-2xl md:text-3xl uppercase hover:text-gray-500 transition-colors w-fit relative group flex items-center gap-4"
              >
                {t('hero.ctaStart')}
                <span className="w-12 h-px bg-black group-hover:w-20 transition-all"></span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

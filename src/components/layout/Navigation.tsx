import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export const Navigation: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();

  return (
    <nav className="w-full border-b border-black px-4 md:px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md text-black sticky top-0 z-50 transition-colors">
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#" 
        className="font-display text-xl md:text-2xl tracking-tight uppercase hover:opacity-50 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        LUCAS_
      </motion.a>
      
      <div className="hidden md:flex gap-2 text-xs font-mono uppercase tracking-widest">
        <motion.a 
           whileHover={{ scale: 1.05, y: -2 }}
           whileTap={{ scale: 0.95 }}
           href="#manifesto" 
           className="relative hover:bg-black hover:text-white px-4 py-2 transition-colors focus:outline-none"
        >
          {t('nav.manifesto')}
        </motion.a>
        <motion.a 
           whileHover={{ scale: 1.05, y: -2 }}
           whileTap={{ scale: 0.95 }}
           href="#impact" 
           className="relative hover:bg-black hover:text-white px-4 py-2 transition-colors focus:outline-none"
        >
          {t('nav.impact')}
        </motion.a>
        <motion.a 
           whileHover={{ scale: 1.05, y: -2 }}
           whileTap={{ scale: 0.95 }}
           href="#arsenal" 
           className="relative hover:bg-black hover:text-white px-4 py-2 transition-colors focus:outline-none"
        >
          {t('nav.arsenal')}
        </motion.a>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex border border-black font-mono text-[10px] uppercase overflow-hidden">
          <button 
            onClick={() => setLocale('en')}
            className={`px-3 py-1.5 transition-colors ${locale === 'en' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLocale('pt')}
            className={`px-3 py-1.5 border-l border-black transition-colors ${locale === 'pt' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
          >
            PT
          </button>
        </div>

        <motion.a 
          whileHover={{ scale: 1.05, borderRadius: '0px' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="#contact" 
          className="text-[10px] md:text-xs font-mono uppercase tracking-widest bg-black text-white px-4 md:px-6 py-3 hover:bg-white hover:text-black border border-black transition-colors focus:outline-none"
        >
          {t('nav.contact')}
        </motion.a>
      </div>
    </nav>
  );
};

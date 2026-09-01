import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 md:py-12 px-6 bg-white text-black border-t border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
        <div className="flex flex-col gap-2">
          <span className="font-bold">© {new Date().getFullYear()} LUCAS SOUZA SILVA</span>
          <span className="text-gray-500">{t('footer.copyright')}</span>
        </div>
        <div className="flex flex-col gap-2 md:text-right">
          <span className="text-gray-500">{t('footer.connect')}</span>
          <div className="flex gap-4 md:justify-end">
            <a href="https://linkedin.com/in/olucass-silva/" target="_blank" rel="noreferrer" className="hover:text-black text-gray-700 transition-colors focus:outline-none focus:underline underline-offset-4">LINKEDIN</a>
            <a href="https://github.com/lucaszsilva1" target="_blank" rel="noreferrer" className="hover:text-black text-gray-700 transition-colors focus:outline-none focus:underline underline-offset-4">GITHUB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const communities = t('education.communities');
  const certifications = t('education.certifications');

  return (
    <section id="education" className="py-24 md:py-32 bg-white text-black border-b border-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          {...fadeInUp}
          className="font-mono text-xs uppercase tracking-[0.2em] font-medium mb-16"
        >
          {t('education.subtitle')}
        </motion.div>
      </div>

      <div className="w-full border-t border-black flex flex-col md:flex-row">
        
        {/* Left Column: Community */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-black flex flex-col">
          <div className="p-6 md:p-12 lg:p-16 border-b border-black bg-black text-white">
            <h3 className="font-display font-semibold text-3xl md:text-4xl uppercase mb-6 tracking-normal">{t('education.communityTitle')}</h3>
            <p className="text-sm leading-[1.75] text-gray-300 font-sans">
              {t('education.communityDesc')}
            </p>
          </div>
          <div className="flex-1 flex flex-col bg-white">
            {communities.map((community: string, idx: number) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border-b border-black last:border-b-0 p-6 md:p-8 hover:bg-black hover:text-white transition-colors cursor-default flex items-center gap-4"
              >
                <span className="w-2.5 h-2.5 bg-black group-hover:bg-white shrink-0"></span>
                <strong className="font-mono text-xs md:text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform font-medium">{community}</strong>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Certs */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-6 md:p-12 lg:p-16 border-b border-black">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-gray-400 mb-4">{t('education.academicTitle')}</div>
            <p className="font-display font-medium text-2xl md:text-3xl uppercase mb-2 tracking-normal">{t('education.academicDegree')}</p>
            <p className="text-sm text-gray-600 uppercase font-mono tracking-[0.2em]">UTFPR / 2024</p>
          </div>
          
          <div className="p-6 md:p-12 lg:p-16 bg-gray-50 flex-1 flex flex-col justify-center">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-gray-400 mb-8 border-b border-black pb-4">{t('education.certTitle')}</div>
            <ul className="flex flex-col gap-6">
              {certifications.map((cert: string, idx: number) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-2 group cursor-default"
                >
                  <span className="font-serif font-semibold text-sm md:text-base text-black group-hover:pl-4 transition-all duration-300 border-l-[3px] border-transparent group-hover:border-black">
                    {cert}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

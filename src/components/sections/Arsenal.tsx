import React from 'react';
import { motion } from 'motion/react';
import { skills } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Arsenal: React.FC = () => {
  const { t } = useLanguage();
  const translatedSkills = t('arsenal.skills');

  return (
    <section id="arsenal" className="py-24 md:py-32 bg-white text-black border-b border-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div {...fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] font-medium mb-16 flex items-center justify-between">
          <span>{t('arsenal.subtitle')}</span>
          <span className="hidden md:block w-1/3 h-px bg-black/20"></span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-black">
          {translatedSkills.map((skill: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group border-r border-b border-black p-8 md:p-10 flex flex-col hover:bg-black hover:text-white transition-colors duration-300"
            >
              <div className="font-mono text-xs text-gray-400 group-hover:text-gray-400 mb-8 italic">
                0{index + 1}.
              </div>
              <h3 className="font-display font-semibold text-2xl md:text-3xl uppercase mb-8 tracking-normal">
                {skill.title}
              </h3>
              <ul className="mt-auto flex flex-col gap-4 font-mono text-xs md:text-sm uppercase tracking-wider text-gray-600 group-hover:text-gray-300">
                {skill.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-black group-hover:bg-white mt-1.5 shrink-0 transition-colors"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

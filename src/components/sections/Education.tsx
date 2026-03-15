import React from 'react';
import { motion } from 'motion/react';
import { communities, certifications } from '../../data/skills';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-white text-black border-b border-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          {...fadeInUp}
          className="font-mono text-xs uppercase tracking-widest mb-16"
        >
          05. COMUNIDADE & FORMAÇÃO
        </motion.div>
      </div>

      <div className="w-full border-t border-black flex flex-col md:flex-row">
        
        {/* Left Column: Community */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-black flex flex-col">
          <div className="p-6 md:p-12 lg:p-16 border-b border-black bg-black text-white">
            <h3 className="font-display text-4xl md:text-5xl uppercase mb-6">COMUNIDADE & PALESTRAS</h3>
            <p className="text-sm leading-relaxed text-gray-300 font-mono">
              COMPARTILHANDO CONHECIMENTO SOBRE IA GENERATIVA, DADOS E ENGENHARIA DE SOFTWARE.
            </p>
          </div>
          <div className="flex-1 flex flex-col bg-white">
            {communities.map((community, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border-b border-black last:border-b-0 p-6 md:p-8 hover:bg-black hover:text-white transition-colors cursor-default flex items-center gap-4"
              >
                <span className="w-3 h-3 bg-black group-hover:bg-white shrink-0"></span>
                <strong className="font-mono text-xs md:text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform">{community}</strong>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Certs */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-6 md:p-12 lg:p-16 border-b border-black">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-4">EDUCAÇÃO ACADÊMICA</div>
            <p className="font-display text-2xl md:text-3xl uppercase mb-2">Engenharia de Software</p>
            <p className="text-sm text-gray-600 uppercase font-mono tracking-widest">UTFPR / 2024</p>
          </div>
          
          <div className="p-6 md:p-12 lg:p-16 bg-gray-50 flex-1 flex flex-col justify-center">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-8 border-b border-black pb-4">CERTIFICAÇÕES OFICIAIS</div>
            <ul className="flex flex-col gap-6">
              {certifications.map((cert, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-2 group cursor-default"
                >
                  <span className="font-bold text-sm md:text-base uppercase text-black group-hover:pl-4 transition-all duration-300 border-l-[3px] border-transparent group-hover:border-black">
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

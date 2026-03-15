import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skills } from '../../data/skills';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Arsenal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="arsenal" className="py-24 md:py-32 bg-white text-black border-b border-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="font-mono text-xs uppercase tracking-widest mb-16 flex items-center justify-between">
          <span>04. COMPETÊNCIAS TÉCNICAS</span>
          <span className="hidden md:block w-1/3 h-px bg-black/20"></span>
        </motion.div>
      </div>

      <div className="w-full border-t border-black flex flex-col">
        {skills.map((skill, index) => {
          const isActive = activeIndex === index;
          
          return (
            <div 
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="border-b border-black cursor-pointer bg-white group hover:bg-black transition-colors duration-500"
            >
              <div className="max-w-7xl mx-auto px-6 py-6 md:py-10 flex flex-col gap-4">
                
                {/* Header Row */}
                <div className="flex items-center gap-8 md:gap-16">
                  <div className={`font-mono text-xs md:text-sm shrink-0 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {skill.id}
                  </div>
                  <h3 className={`font-display text-[clamp(2rem,6vw,6rem)] uppercase transition-all duration-500 ${isActive ? 'text-white translate-x-4' : 'text-black group-hover:text-white focus:outline-none'}`}>
                    {skill.title}
                  </h3>
                </div>

                {/* Expandable Content (Accordion) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-14 md:pl-[6.5rem] pt-4 pb-4">
                        <div className="flex flex-wrap gap-x-6 gap-y-4 font-mono text-xs md:text-sm uppercase text-white">
                          {skill.items.map((item, i) => (
                            <motion.span 
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="bg-white/10 px-4 py-2 border border-white/20 hover:bg-white hover:text-black transition-colors"
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

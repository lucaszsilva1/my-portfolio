import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { projects } from '../../data/projects';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-white text-black border-b border-black">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="font-mono text-xs uppercase tracking-widest mb-16 flex items-center justify-between">
          <span>03. PROJETOS DE DESTAQUE & IMPACTO</span>
          <span className="hidden md:block w-1/3 h-px bg-black/20"></span>
        </motion.div>

        <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 border border-black relative">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group p-8 md:p-12 border-b border-black md:border-r md:last:border-r-0 relative overflow-hidden transition-all duration-500
                  ${isOtherHovered ? 'opacity-30 grayscale' : 'opacity-100'}
                  ${isHovered ? 'bg-black text-white' : 'bg-transparent text-black'}
                `}
              >
                {/* Magnetic reveal background line */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-white transform origin-bottom transition-transform duration-500 ease-out ${isHovered ? 'scale-y-100' : 'scale-y-0'}`}></div>

                <div className="font-display text-[clamp(4rem,8vw,8rem)] mb-4 transition-colors duration-300 relative z-10">
                  <AnimatedCounter 
                    value={project.value} 
                    prefix={project.prefix} 
                    suffix={project.suffix} 
                  />
                </div>
                
                <div className="font-mono text-xs uppercase tracking-widest mb-8 text-gray-400 relative z-10 flex items-center gap-4">
                  <span className={`w-4 h-px transition-colors duration-300 ${isHovered ? 'bg-white' : 'bg-black'}`}></span>
                  {project.category}
                </div>
                
                <h3 className={`font-bold text-2xl uppercase mb-4 transition-transform duration-300 relative z-10 ${isHovered ? 'translate-x-4' : 'translate-x-0'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed transition-colors duration-300 relative z-10 ${isHovered ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                {/* Arrow indicator */}
                <div className={`absolute bottom-8 right-8 font-display text-4xl transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  ↗
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

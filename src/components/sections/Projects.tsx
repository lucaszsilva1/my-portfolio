import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

interface ProjectItem {
  id: string;
  impactValue: string;
  impactLabel: string;
  category: string;
  title: string;
  context: string;
  roleImpact: string;
  techTags: string[];
}

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const items: ProjectItem[] = t('projects.items') || [];
  const roleLabel = t('projects.roleLabel') || "MY ROLE & IMPACT";
  const contextLabel = t('projects.contextLabel') || "STRATEGIC CONTEXT";
  const viewDetailsText = t('projects.viewDetails') || "EXPAND IMPACT ANALYSIS";
  const hideDetailsText = t('projects.hideDetails') || "COLLAPSE DETAILS";

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-white text-black border-b border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] font-medium mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-black"></span>
            <span>{t('projects.subtitle')}</span>
          </div>
          <span className="hidden md:block w-1/3 h-px bg-black/20"></span>
        </motion.div>

        {/* Bento / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black">
          {items.map((project, index) => {
            const isExpanded = expandedId === project.id;
            const isHovered = hoveredId === project.id;
            const isAnyHovered = hoveredId !== null;

            return (
              <motion.article
                key={project.id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group border-r border-b border-black flex flex-col justify-between transition-all duration-300 relative bg-white
                  ${isHovered ? 'shadow-[inset_0_0_0_1px_#000000]' : ''}
                  ${isAnyHovered && !isHovered ? 'opacity-85' : 'opacity-100'}
                `}
              >
                {/* Top Bar: Index & Category Badge */}
                <div className="p-6 md:p-8 pb-4 border-b border-black/10 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-gray-400 group-hover:text-black transition-colors">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] font-medium text-black bg-gray-100 px-2.5 py-0.5 border border-black/20">
                    {project.category}
                  </span>
                </div>

                {/* Hero Impact Metric Block */}
                <div className="p-6 md:p-8 pt-6 pb-6 bg-gray-50/50 group-hover:bg-black group-hover:text-white transition-colors duration-300 border-b border-black/10">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 group-hover:text-gray-400 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-none"></span>
                    {project.impactLabel}
                  </div>
                  <div className="font-display font-medium text-[clamp(2.75rem,5vw,4.25rem)] leading-none tracking-tight">
                    {project.impactValue}
                  </div>
                </div>

                {/* Project Core Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-xl md:text-2xl tracking-normal mb-3 text-black">
                      {project.title}
                    </h3>
                    
                    <div className="mb-6">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 mb-1">
                        {contextLabel}
                      </div>
                      <p className="text-sm text-gray-700 leading-[1.75] font-sans font-normal">
                        {project.context}
                      </p>
                    </div>
                  </div>

                  {/* Expandable Accordion: Role & Impact */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="w-full font-mono text-[11px] uppercase tracking-[0.18em] font-medium py-2.5 px-3 border border-black flex items-center justify-between text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer mb-6"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? hideDetailsText : viewDetailsText}</span>
                      <span className="font-display text-base leading-none transition-transform duration-300">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mb-6 p-4 bg-gray-50 border-l-2 border-black">
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-2">
                              {roleLabel}
                            </div>
                            <p className="text-xs md:text-sm text-gray-800 leading-[1.75] font-sans font-normal">
                              {project.roleImpact}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tech Tags */}
                    <div className="pt-4 border-t border-black/10">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-white border border-black/20 text-gray-800 hover:border-black transition-colors font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

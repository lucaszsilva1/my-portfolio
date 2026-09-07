import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Eye, 
  Download, 
  ShieldCheck, 
  X, 
  Sparkles, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Award 
} from 'lucide-react';
import { certificationsData, Certification } from '../../data/certifications';
import { useLanguage } from '../../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filterKeys = [
    { key: 'all', label: t('certifications.filterAll') },
    { key: 'ai', label: t('certifications.filterAi') },
    { key: 'data', label: t('certifications.filterData') },
    { key: 'cloud', label: t('certifications.filterCloud') },
    { key: 'agile', label: t('certifications.filterAgile') },
  ];

  const filteredCerts = certificationsData.filter((cert) => {
    if (activeFilter === 'all') return true;
    return cert.category === activeFilter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'data':
        return <Database className="w-3.5 h-3.5" />;
      case 'cloud':
        return <Cloud className="w-3.5 h-3.5" />;
      default:
        return <Award className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="certifications" className="py-24 md:py-32 bg-white text-black border-b border-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div {...fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] font-medium mb-6 flex items-center justify-between">
          <span>{t('certifications.subtitle')}</span>
          <span className="hidden md:block w-1/3 h-px bg-black/20"></span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl uppercase tracking-normal mb-4">
              {t('certifications.title')}
            </h2>
            <p className="font-mono text-xs md:text-sm text-gray-600 max-w-2xl uppercase tracking-wider">
              {t('certifications.desc')}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 border border-black p-1 bg-gray-50 self-start lg:self-auto">
            {filterKeys.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors font-medium ${
                  activeFilter === key 
                    ? 'bg-black text-white' 
                    : 'bg-transparent text-black hover:bg-black/10'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Credentials Showcase (with High-res Certificate Previews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCerts
            .filter((cert) => cert.featured)
            .map((cert, index) => {
              const itemTitle = t(`certifications.items.${cert.titleKey}.title`);
              const itemDesc = t(`certifications.items.${cert.titleKey}.desc`);
              const itemCategory = t(`certifications.items.${cert.titleKey}.category`);

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="border-2 border-black flex flex-col justify-between bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
                >
                  {/* Card Top / Meta Bar */}
                  <div className="p-5 border-b border-black flex items-center justify-between bg-gray-50 font-mono text-xs">
                    <div className="flex items-center gap-2 font-medium tracking-wider">
                      <span className="p-1 bg-black text-white">
                        {getCategoryIcon(cert.category)}
                      </span>
                      <span className="uppercase text-[11px]">{itemCategory}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-black font-semibold text-[11px] tracking-wider bg-black/5 px-2.5 py-1 border border-black/20">
                      <ShieldCheck className="w-3.5 h-3.5 text-black" />
                      <span>{t('certifications.badgeVerified')}</span>
                    </div>
                  </div>

                  {/* Certificate Image Preview with interactive overlay */}
                  {cert.previewImage && (
                    <div 
                      onClick={() => setSelectedCert(cert)}
                      className="relative overflow-hidden border-b border-black bg-neutral-100 cursor-pointer aspect-[16/10] group/img"
                    >
                      <img 
                        src={cert.previewImage} 
                        alt={itemTitle}
                        className="w-full h-full object-contain p-4 group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                        <span className="bg-white text-black font-mono text-xs uppercase tracking-widest px-4 py-2 font-semibold flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {t('certifications.viewCert')}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider pointer-events-none">
                        {cert.issueDate}
                      </div>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-gray-500 font-mono text-xs uppercase tracking-wider mb-2">
                        <span>{cert.issuer}</span>
                        {cert.credentialId && (
                          <span className="text-[10px] bg-gray-100 px-2 py-0.5 border border-gray-300">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-semibold text-2xl md:text-3xl uppercase tracking-normal mb-4">
                        {itemTitle}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-700 font-sans mb-6">
                        {itemDesc}
                      </p>

                      {/* Competency Pills */}
                      <div className="mb-6">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 mb-2.5">
                          {t('certifications.accreditedSkills')}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 bg-gray-100 border border-black/10 text-gray-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-6 border-t border-black/10 flex flex-wrap items-center gap-3 font-mono text-xs">
                      {cert.previewImage && (
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="px-4 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors uppercase tracking-wider font-medium flex items-center gap-2 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          {t('certifications.viewCert')}
                        </button>
                      )}

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-colors uppercase tracking-wider font-medium flex items-center gap-2"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t('certifications.verifyOnline')}
                        </a>
                      )}

                      {cert.certificatePdf && (
                        <a
                          href={cert.certificatePdf}
                          download
                          className="px-3 py-2.5 text-gray-600 hover:text-black border border-transparent hover:border-black/20 transition-colors uppercase tracking-wider flex items-center gap-1.5"
                          title={t('certifications.downloadPdf')}
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">PDF</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Supporting Accreditations Grid */}
        <div className="border border-black bg-white">
          <div className="p-4 md:p-6 bg-black text-white border-b border-black flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('certifications.badgeOfficial')}</span>
            </div>
            <span className="font-mono text-xs text-gray-400">FOUNDATIONAL / DOMAIN MASTERY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
            {filteredCerts
              .filter((cert) => !cert.featured)
              .map((cert, idx) => {
                const itemTitle = t(`certifications.items.${cert.titleKey}.title`);
                const itemDesc = t(`certifications.items.${cert.titleKey}.desc`);

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 md:p-8 flex flex-col justify-between hover:bg-gray-50 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-gray-400 font-mono text-[11px] uppercase tracking-wider mb-4">
                        <span>{cert.issuer}</span>
                        <span>{cert.issueDate}</span>
                      </div>

                      <h4 className="font-display font-semibold text-xl uppercase tracking-normal mb-3 group-hover:underline">
                        {itemTitle}
                      </h4>

                      <p className="text-xs leading-relaxed text-gray-600 font-sans mb-6">
                        {itemDesc}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 bg-gray-100 text-gray-700 border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>

      </div>

      {/* High-Resolution Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative z-10 w-full max-w-5xl bg-white border-2 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 md:p-6 bg-black text-white flex items-center justify-between border-b border-black">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-white"></span>
                  <h3 className="font-display font-semibold text-lg md:text-xl uppercase tracking-wide">
                    {t(`certifications.items.${selectedCert.titleKey}.title`)}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-white hover:bg-white hover:text-black transition-colors border border-transparent hover:border-white font-mono text-xs flex items-center gap-1 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Certificate Image Display */}
              <div className="p-4 md:p-8 overflow-y-auto bg-neutral-100 flex items-center justify-center">
                {selectedCert.previewImage ? (
                  <img
                    src={selectedCert.previewImage}
                    alt={t(`certifications.items.${selectedCert.titleKey}.title`)}
                    className="w-full max-w-4xl h-auto object-contain border border-black shadow-md bg-white"
                  />
                ) : (
                  <div className="p-12 text-center font-mono text-sm text-gray-500">
                    Preview not available
                  </div>
                )}
              </div>

              {/* Modal Footer / Actions */}
              <div className="p-4 md:p-6 bg-white border-t border-black flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-4 text-gray-600">
                  <span><strong>{t('certifications.issuedOn')}:</strong> {selectedCert.issueDate}</span>
                  {selectedCert.credentialId && (
                    <span><strong>{t('certifications.credentialId')}:</strong> {selectedCert.credentialId}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors font-medium flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t('certifications.verifyOnline')}
                    </a>
                  )}

                  {selectedCert.certificatePdf && (
                    <a
                      href={selectedCert.certificatePdf}
                      download
                      className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors font-medium flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {t('certifications.downloadPdf')}
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors uppercase tracking-wider font-medium cursor-pointer"
                  >
                    {t('certifications.close')}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

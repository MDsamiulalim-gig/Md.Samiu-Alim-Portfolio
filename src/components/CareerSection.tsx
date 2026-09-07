import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ExternalLink, Eye, X, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types';

interface CareerSectionProps {
  isDarkMode: boolean;
}

export default function CareerSection({ isDarkMode }: CareerSectionProps) {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section
      id="career"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0F0E13]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 sm:pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FF4D8D] uppercase inline-block mb-3">
              CAREER &amp; EXPERIENCE
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Work Experience, Industry Practice &amp; Recognized Certifications
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Practical engineering experience in production backend environments, university tech community leadership,
              and verified technical credentials.
            </p>
          </div>
        </div>

        {/* Experience Timeline Entries */}
        <div className="pt-12 space-y-6">
          <div className="flex items-center gap-2.5 pb-2">
            <Briefcase className="w-5 h-5 text-[#FF4D8D]" />
            <h3 className="font-display font-bold text-xl text-white">Experience Timeline</h3>
          </div>

          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 group hover:border-[#FF4D8D]/40 ${
                isDarkMode
                  ? 'bg-[#15131C] border-white/10 hover:bg-[#1B1824]'
                  : 'bg-zinc-50 border-zinc-200 hover:shadow-md'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Number Badge + Role + Company */}
                <div className="lg:col-span-8 flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#FF4D8D]/30 bg-[#FF4D8D]/10 text-[#FF4D8D] flex items-center justify-center font-mono font-bold text-base sm:text-lg shrink-0 group-hover:border-[#FF4D8D] group-hover:shadow-[0_0_15px_rgba(255,77,141,0.3)] transition-all">
                    {item.number}
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#FF4D8D] transition-colors">
                        {item.role}
                      </h4>
                      {item.isCurrent && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold animate-pulse">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                      <span className="text-sm font-semibold text-zinc-200">
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {item.location}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <div className="pt-3 space-y-2">
                      {item.bulletPoints.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#FF4D8D] shrink-0 mt-0.5" />
                          <span className={isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Period */}
                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="p-3 sm:px-5 sm:py-2.5 rounded-2xl bg-white/5 border border-white/5 text-right w-full lg:w-auto">
                    <div className="text-xs font-mono text-zinc-400 mb-0.5 flex items-center gap-1.5 lg:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-[#FF4D8D]" />
                      <span>Duration</span>
                    </div>
                    <div className="font-display font-bold text-base sm:text-lg text-zinc-100 tracking-tight">
                      {item.period}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Achievements Sub-block */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between pb-8">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#00E5FF]" />
              <h3 className="font-display font-bold text-xl text-white">Certifications &amp; Achievements</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">Verified Credentials</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                className={`rounded-3xl border p-6 transition-all duration-300 group hover:border-[#00E5FF]/50 ${
                  isDarkMode ? 'bg-[#15131C] border-white/10 hover:bg-[#1a1726]' : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                {/* Certificate Preview Thumbnail */}
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/40 border border-white/10 mb-5 group/thumb cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.certificateImage}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-[1.02] group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <button className="px-3.5 py-1.5 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-xs font-mono flex items-center gap-1.5 transition-all">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Certificate</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold">
                      {cert.badgeText}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{cert.date}</span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white group-hover:text-[#00E5FF] transition-colors">
                    {cert.title}
                  </h4>

                  <div className="text-xs font-mono text-zinc-400">
                    Issuer: <span className="text-zinc-200">{cert.issuer}</span>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {cert.description}
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-medium text-white flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>View Full Image</span>
                    </button>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 border border-[#00E5FF]/30 text-xs font-mono font-medium text-[#00E5FF] flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Verify Online</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full bg-[#161420] border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10">
                <div>
                  <h4 className="font-display font-bold text-lg text-white">{selectedCert.title}</h4>
                  <p className="text-xs font-mono text-zinc-400">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 max-h-[70vh] overflow-auto flex items-center justify-center bg-black/40">
                <img
                  src={selectedCert.certificateImage}
                  alt={selectedCert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
                />
              </div>

              <div className="p-4 sm:p-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#13111b]">
                <p className="text-xs text-zinc-300 max-w-md">{selectedCert.description}</p>
                <div className="flex items-center gap-2">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#00E5FF] text-black font-bold text-xs flex items-center gap-1.5 hover:bg-[#00cce6] transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

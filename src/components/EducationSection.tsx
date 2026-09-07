import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationSectionProps {
  isDarkMode: boolean;
}

export default function EducationSection({ isDarkMode }: EducationSectionProps) {
  return (
    <section
      id="education"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-[#141218]' : 'bg-zinc-50'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00E5FF]/5 blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 sm:pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#00E5FF] uppercase inline-block mb-3">
              ACADEMIC FOUNDATION
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Education &amp; Core Computer Science Background
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Strong academic footing in computer science, software engineering principles, discrete mathematics,
              and relational database architectures.
            </p>
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="pt-12 space-y-6">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 group hover:border-[#00E5FF]/40 ${
                isDarkMode
                  ? 'bg-[#181522] border-white/10 hover:bg-[#1f1b2d]'
                  : 'bg-white border-zinc-200 hover:shadow-md'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Number Badge + Title + Details */}
                <div className="lg:col-span-8 flex items-start gap-4 sm:gap-6">
                  {/* Number Circle Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center font-mono font-bold text-base sm:text-lg shrink-0 group-hover:border-[#00E5FF] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all">
                    {edu.number}
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#00E5FF] transition-colors">
                        {edu.degree}
                      </h3>
                      {edu.cgpaOrGpa && (
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#FF4D8D]/15 text-[#FF4D8D] border border-[#FF4D8D]/30 font-semibold">
                          {edu.cgpaOrGpa}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                      <span className="text-sm font-semibold text-zinc-200">
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {edu.location}
                      </span>
                    </div>

                    {edu.description && (
                      <p className={`text-sm leading-relaxed pt-1 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        {edu.description}
                      </p>
                    )}

                    {/* Relevant Coursework Pills */}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="pt-3">
                        <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 mb-2">
                          <BookOpen className="w-3.5 h-3.5 text-[#00E5FF]" />
                          <span>Relevant Coursework:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Timeline Year Badge */}
                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="p-3 sm:px-5 sm:py-2.5 rounded-2xl bg-white/5 border border-white/10 text-right w-full lg:w-auto">
                    <div className="text-xs font-mono text-zinc-400 mb-0.5 flex items-center gap-1.5 lg:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>Academic Period</span>
                    </div>
                    <div className="font-display font-bold text-base sm:text-xl text-zinc-100 tracking-tight">
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

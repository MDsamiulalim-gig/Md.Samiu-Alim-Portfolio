import { motion } from 'motion/react';
import { Activity, Film, Compass, Brain, Trophy, Heart } from 'lucide-react';
import { HOBBIES_DATA } from '../data/portfolioData';

interface HobbiesSectionProps {
  isDarkMode: boolean;
}

export default function HobbiesSection({ isDarkMode }: HobbiesSectionProps) {
  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return Activity;
      case 'Film':
        return Film;
      case 'Compass':
        return Compass;
      case 'Brain':
        return Brain;
      case 'Trophy':
        return Trophy;
      default:
        return Heart;
    }
  };

  return (
    <section
      id="hobbies"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-[#141218]' : 'bg-zinc-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HOBBIES SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 sm:pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FF4D8D] uppercase inline-block mb-3">
              PASSIONS &amp; PURSUITS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Personal Interests, Sports, Cinema &amp; Travel Beyond the Screen
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Beyond writing code, playing sports, watching movies, going for tours and road trips, and engaging in strategic games provide balance, energy, and inspiration.
            </p>
          </div>
        </div>

        {/* Hobbies Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {HOBBIES_DATA.map((hobby, index) => {
            const Icon = getHobbyIcon(hobby.icon);
            return (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-[#181522] border-white/10 hover:border-[#FF4D8D]/40 hover:bg-[#1E1929] hover:shadow-[0_10px_30px_rgba(255,77,141,0.12)]'
                    : 'bg-white border-zinc-200 hover:border-[#FF4D8D] hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${hobby.accent}20`,
                      color: hobby.accent,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                    style={{
                      borderColor: `${hobby.accent}40`,
                      color: hobby.accent,
                      backgroundColor: `${hobby.accent}10`,
                    }}
                  >
                    {hobby.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg mb-2 text-white group-hover:text-[#00E5FF] transition-colors">
                  {hobby.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {hobby.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

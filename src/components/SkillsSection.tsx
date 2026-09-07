import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Server,
  Database,
  Terminal,
  Cpu,
  CheckCircle2,
  Search,
  Zap,
  Globe2,
  GitBranch,
  ShieldCheck,
  Layers,
  Wrench
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

export default function SkillsSection({ isDarkMode }: SkillsSectionProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const groupNames = ['All', ...SKILL_GROUPS.map((g) => g.name)];

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Programming Languages':
        return Code;
      case 'Frameworks & Web Technologies':
      case 'Backend & Web Technologies':
        return Server;
      case 'API Architecture & Security':
        return ShieldCheck;
      case 'Databases & Architecture':
      case 'Databases & Storage':
        return Database;
      case 'Developer Tools & Networking':
      case 'Networking & Developer Tools':
        return Wrench;
      default:
        return Layers;
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0F0E13]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 sm:pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#00E5FF] uppercase inline-block mb-3">
              TECHNICAL EXPERTISE
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              A Structured Stack Engineered for Modern Full-Stack, AI &amp; Scalable Systems
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Hands-on proficiency across modern programming languages, full-stack frameworks, database design,
              RESTful contracts, and core developer tools.
            </p>
          </div>
        </div>

        {/* Filter Controls: Category Pills & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 pb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {groupNames.map((name) => (
              <button
                key={name}
                onClick={() => setSelectedGroup(name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  selectedGroup === name
                    ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_15px_rgba(0,229,255,0.35)]'
                    : isDarkMode
                    ? 'bg-[#181622] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                    : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200 border border-zinc-200'
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-full text-xs font-mono border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] ${
                isDarkMode
                  ? 'bg-[#181622] border-white/10 text-white placeholder-zinc-500'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-900 placeholder-zinc-400'
              }`}
            />
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {SKILL_GROUPS.filter((group) => selectedGroup === 'All' || group.name === selectedGroup).map((group, gIdx) => {
            const Icon = getCategoryIcon(group.name);
            const filteredSkills = group.skills.filter(
              (s) =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.description.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredSkills.length === 0) return null;

            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gIdx * 0.05 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-[#15131C] border-white/10'
                    : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/15 text-[#00E5FF] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        {group.name}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">{group.badge}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-2xl border transition-all duration-200 group hover:border-[#00E5FF]/40 ${
                        isDarkMode
                          ? 'bg-[#1A1725] border-white/5 hover:bg-[#1f1b2d]'
                          : 'bg-white border-zinc-200 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-display font-bold text-base text-zinc-100 group-hover:text-[#00E5FF] transition-colors">
                          {skill.name}
                        </div>
                        <span className="text-xs font-mono font-semibold text-[#FF4D8D]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Mini proficiency bar */}
                      <div className="w-full bg-zinc-800/80 rounded-full h-1.5 overflow-hidden mb-2.5">
                        <div
                          className="bg-gradient-to-r from-[#00E5FF] to-[#FF4D8D] h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

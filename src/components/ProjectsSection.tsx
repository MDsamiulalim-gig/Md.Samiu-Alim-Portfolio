import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Terminal, Eye, Sparkles, CheckCircle2, Shield, Database, ShoppingBag, BookOpen, Store } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

export default function ProjectsSection({ isDarkMode }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Backend', 'Full Stack', 'Web App'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  const getProjectIcon = (id: string) => {
    if (id.includes('favicon')) return ShoppingBag;
    if (id.includes('course')) return BookOpen;
    return Store;
  };

  return (
    <section
      id="projects"
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-[#141118]' : 'bg-zinc-50'
      }`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF4D8D]/10 blur-[130px] -z-10" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#00E5FF]/10 blur-[130px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 sm:pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FF4D8D] uppercase inline-block mb-3">
              FEATURED ENGINEERING PROJECTS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Production REST APIs, Normalized Database Systems &amp; Web Architectures
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#FF4D8D] to-[#D32F2F] text-white font-bold shadow-[0_0_15px_rgba(255,77,141,0.4)]'
                      : isDarkMode
                      ? 'bg-[#1E1927] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                      : 'bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12">
          {filteredProjects.map((project, index) => {
            const ProjectIcon = getProjectIcon(project.id);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group relative ${
                  isDarkMode
                    ? 'bg-[#181522] border-white/10 hover:border-[#FF4D8D]/40 hover:shadow-[0_15px_35px_rgba(255,77,141,0.15)]'
                    : 'bg-white border-zinc-200 hover:border-[#FF4D8D]/40 hover:shadow-xl'
                }`}
              >
                {/* Visual Terminal / Code Banner */}
                <div className="relative p-6 bg-[#0E0C13] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-zinc-400">/{project.id}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-[#FF4D8D]/15 text-[#FF4D8D] border border-[#FF4D8D]/30">
                    {project.category}
                  </span>
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <ProjectIcon className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-xl mb-1 group-hover:text-[#FF4D8D] transition-colors text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#00E5FF] mb-3">{project.subtitle}</p>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {project.description}
                    </p>

                    {project.metrics && (
                      <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-zinc-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  {/* Tech tags & Links */}
                  <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/5 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-xs font-semibold text-[#00E5FF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Detailed Architecture</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Project Inspector Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        isDarkMode={isDarkMode}
      />
    </section>
  );
}

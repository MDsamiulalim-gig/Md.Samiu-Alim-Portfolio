import { Project } from '../types';
import { ExternalLink, Github, X, CheckCircle, Zap, AlertCircle, Code2, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function ProjectModal({ project, onClose, isDarkMode }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl my-8 rounded-3xl border shadow-2xl overflow-hidden transition-all ${
          isDarkMode
            ? 'bg-[#16131E] border-white/15 text-white shadow-black/90'
            : 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Terminal Banner */}
        <div className="relative p-6 bg-[#0F0D15] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/15 text-[#00E5FF] flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-[#FF4D8D]/15 text-[#FF4D8D] border border-[#FF4D8D]/30">
                {project.category}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          <div>
            <p className="text-xs font-mono text-[#00E5FF] mb-2">{project.subtitle}</p>
            <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key Metric Banner if present */}
          {project.metrics && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#00E5FF]/10 to-[#FF4D8D]/10 border border-[#00E5FF]/20 flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#00E5FF] shrink-0" />
              <div className="text-xs sm:text-sm font-mono text-zinc-200">
                <span className="font-bold text-[#00E5FF]">Key Impact: </span>
                {project.metrics}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Architecture Features */}
          {project.keyFeatures && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">Key Architecture Features</h4>
              <div className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                    <span className={isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Challenges Solved */}
          {project.challenges && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">Engineering Challenges Solved</h4>
              <div className="space-y-2">
                {project.challenges.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span className={isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#121019]">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#FF4D8D] text-white text-xs font-semibold flex items-center gap-2 hover:bg-[#ff337a] transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-zinc-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

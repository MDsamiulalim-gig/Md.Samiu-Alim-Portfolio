import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isDarkMode: boolean;
  onOpenContact: () => void;
}

export default function Hero({ isDarkMode, onOpenContact }: HeroProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-28 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background wine/maroon glow container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] lg:w-[1100px] h-[480px] bg-gradient-to-b from-[#4A1525]/30 via-[#261A1D]/25 to-transparent blur-[130px] -z-10" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#00E5FF]/10 blur-[100px] -z-10" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF4D8D]/15 blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Sub-Headline */}
        <div className="text-center select-none mb-6">
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#FF4D8D] uppercase font-bold">
            CSE Graduate | Information Systems | Full-Stack Developer | AI &amp; Data Enthusiast
          </p>
        </div>

        {/* Central Asymmetric Grid with Portrait & Editorial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left / Top Editorial Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Location & Status Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              {/* Requested Location Pill */}
              <div
                id="hero-location-pill"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-zinc-300"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF4D8D]" />
                <span>Bishwal Center, Kuril, Dhaka</span>
              </div>

              {/* Status Indicator: Open to Software, AI & Data Opportunities */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
                </span>
                <span className={isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}>
                  Open to Software, AI &amp; Data Opportunities
                </span>
              </div>
            </motion.div>

            {/* Headline with requested greeting & dynamic gradient text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1
                id="hero-headline-title"
                onMouseEnter={() => setIsGlitching(true)}
                onMouseLeave={() => setIsGlitching(false)}
                className={`font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] cursor-default transition-all duration-200 ${
                  isGlitching ? 'text-glitch' : ''
                }`}
              >
                Hi, I&apos;m{' '}
                <span className="text-[#F5F5F7] underline decoration-[#FF4D8D] decoration-4 underline-offset-8">
                  MD Samiul Alim
                </span>
              </h1>
              <p className="font-display text-lg sm:text-xl lg:text-2xl font-bold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#38bdf8] to-[#FF4D8D]">
                CSE Graduate | Information Systems | Full-Stack Developer | AI &amp; Data Enthusiast
              </p>
            </motion.div>

            {/* Quick Editorial Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDarkMode ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              Passionate about software development, web technologies, AI, and backend engineering.
              Specialized in building high-performance REST APIs, database normalization, and secure
              scalable web applications.
            </motion.p>

            {/* Action Buttons: "View Projects" and "Get in Touch" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <button
                id="hero-action-projects"
                onClick={() => handleScrollTo('#projects')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4D8D] to-[#D32F2F] hover:from-[#ff337a] hover:to-[#b71c1c] text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-[0_4px_25px_rgba(255,77,141,0.45)] hover:shadow-[0_6px_30px_rgba(255,77,141,0.6)] transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>View Projects</span>
                <Code2 className="w-4 h-4" />
              </button>

              <button
                id="hero-action-contact"
                onClick={onOpenContact}
                className={`px-7 py-3.5 rounded-full border font-semibold text-sm sm:text-base flex items-center gap-2 backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ${
                  isDarkMode
                    ? 'border-white/15 bg-white/5 hover:border-[#00E5FF]/60 hover:text-[#00E5FF] hover:bg-[#00E5FF]/10 text-white'
                    : 'border-zinc-300 bg-zinc-100 hover:border-[#00E5FF] hover:text-[#00E5FF] text-zinc-900'
                }`}
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('#skills')}
                className={`px-4 py-3.5 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Explore Skills</span>
              </button>
            </motion.div>

            {/* Direct Links: Floating Action Bar for GitHub and LinkedIn Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1 hidden sm:inline-block">
                Profiles:
              </span>

              {/* GitHub Direct Link */}
              <a
                id="hero-social-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit MD Samiul Alim on GitHub"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono font-medium transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#16141D] border-white/10 text-zinc-300 hover:text-white hover:border-[#00E5FF]/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-[#00E5FF]/60 hover:shadow-md'
                }`}
              >
                <Github className="w-4 h-4 text-[#00E5FF]" />
                <span>GitHub Profile</span>
              </a>

              {/* LinkedIn Direct Link */}
              <a
                id="hero-social-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit MD Samiul Alim on LinkedIn"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono font-medium transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#16141D] border-white/10 text-zinc-300 hover:text-white hover:border-[#FF4D8D]/60 hover:shadow-[0_0_15px_rgba(255,77,141,0.25)]'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-[#FF4D8D]/60 hover:shadow-md'
                }`}
              >
                <Linkedin className="w-4 h-4 text-[#FF4D8D]" />
                <span>LinkedIn Profile</span>
              </a>

              {/* Email Direct Link */}
              <a
                id="hero-social-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send direct email"
                className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-[#16141D] border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950'
                }`}
                title={PERSONAL_INFO.email}
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Portrait Framing Container (Clean portrait without any "Backend Developer" labels) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              {/* Decorative wine-glow halo and rounded framing container */}
              <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-b from-[#FF4D8D]/30 via-[#261A1D] to-[#00E5FF]/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Main Portrait Frame with Glassmorphic Border */}
              <div
                id="hero-portrait-frame"
                className={`relative rounded-[2.2rem] overflow-hidden border p-2 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-[#18141E]/80 border-white/15 shadow-black/80'
                    : 'bg-white/80 border-zinc-200 shadow-zinc-300/60'
                }`}
              >
                <div className="relative rounded-[1.8rem] overflow-hidden bg-gradient-to-b from-[#261A1D] to-[#120F16] aspect-[3/4]">
                  <img
                    id="hero-portrait-image"
                    src={PERSONAL_INFO.profileImageUrl}
                    alt="MD Samiul Alim"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  />

                  {/* Subtle dark gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E13]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Detailed About Section Narrative (Exact user-provided story within the Home section sequence) */}
        <div id="about-story-container" className="mt-20 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#00E5FF] uppercase inline-block mb-3">
                ABOUT SAMIUL
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                Turning Complex Logic into Reliable Solutions
              </h2>
              <div className="mt-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-xs font-mono text-zinc-400">Education Background</div>
                <div className="text-sm font-bold text-white mt-1">B.Sc. in Computer Science &amp; Engineering</div>
                <div className="text-xs text-[#00E5FF] mt-0.5">American International University-Bangladesh (AIUB)</div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {PERSONAL_INFO.aboutStory.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-base sm:text-lg leading-relaxed ${
                    isDarkMode ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {/* Key Metrics / Stats bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {PERSONAL_INFO.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-4 rounded-2xl border transition-all ${
                      isDarkMode
                        ? 'bg-[#15131C]/60 border-white/10'
                        : 'bg-zinc-50 border-zinc-200'
                    }`}
                  >
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#00E5FF]">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold mt-1 text-zinc-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

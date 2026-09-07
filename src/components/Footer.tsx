import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDarkMode: boolean;
  onOpenContact: () => void;
}

export default function Footer({ isDarkMode, onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skill', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Career', href: '#career' },
    { label: 'Project', href: '#projects' },
    { label: 'Hobbies', href: '#hobbies' },
  ];

  const tickerItems = [
    'CLEAN REST APIS',
    'DATABASE OPTIMIZATION',
    'SCALABLE BACKEND ARCHITECTURE',
    'SECURE AUTHENTICATION',
    'CONTINUOUS SELF LEARNING',
    'TEST DRIVEN DEVELOPMENT',
    'POSTMAN AUTOMATION',
    'NODE.JS & NEXT.JS',
  ];

  return (
    <footer id="footer" className="relative overflow-hidden bg-[#120D15] text-white border-t border-white/10">
      {/* Ticker Banner */}
      <div className="border-b border-white/10 bg-[#1D1422] py-4 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {tickerItems.map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-[0.2em] text-white/90 uppercase">
                {text}
              </span>
              <span className="text-[#FF4D8D] font-mono text-xs">◆</span>
            </div>
          ))}
          {tickerItems.map((text, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-8">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-[0.2em] text-white/90 uppercase">
                {text}
              </span>
              <span className="text-[#FF4D8D] font-mono text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#00E5FF] via-[#FF4D8D] to-[#D32F2F]" />
              <span className="font-display text-2xl font-extrabold tracking-tight">MD Samiul Alim</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Computer Science &amp; Engineering graduate from AIUB passionate about software development,
              full-stack systems, AI &amp; data solutions, and crafting reliable web applications.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Terminal className="w-4 h-4 text-[#00E5FF]" />
              <span>Bishwal Center, Kuril, Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links (Strict 6 Links) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-[#00E5FF] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#FF4D8D]">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-2">
              Get in Touch
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00E5FF] hover:text-black border border-white/10 flex items-center justify-center text-zinc-300 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF4D8D] hover:text-white border border-white/10 flex items-center justify-center text-zinc-300 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF4D8D] hover:text-white border border-white/10 flex items-center justify-center text-zinc-300 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00E5FF] hover:text-black border border-white/10 flex items-center justify-center text-zinc-300 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>

            <div className="pt-2 text-xs font-mono text-zinc-400 space-y-1">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-200 hover:text-[#00E5FF]">{PERSONAL_INFO.email}</a></div>
              <div>Phone: <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-zinc-200 hover:text-[#00E5FF]">{PERSONAL_INFO.phone}</a></div>
              <div>Location: {PERSONAL_INFO.location}</div>
            </div>

            <button
              onClick={onOpenContact}
              className="mt-2 px-4 py-2 rounded-xl bg-[#FF4D8D] hover:bg-[#ff337a] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </div>
        </div>

        {/* Copyright Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} MD Samiul Alim. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#00E5FF] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00E5FF] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

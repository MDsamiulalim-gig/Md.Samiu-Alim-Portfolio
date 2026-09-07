import { useState, useEffect } from 'react';
import { Mail, Moon, Sun, Menu, X, ArrowUpRight, Github, Linkedin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  activeSection: string;
  onOpenContact: () => void;
}

export default function Navbar({ isDarkMode, onToggleTheme, activeSection, onOpenContact }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 6 primary navigation items as required
  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Skill', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Career', href: '#career', id: 'career' },
    { label: 'Project', href: '#projects', id: 'projects' },
    { label: 'Hobbies', href: '#hobbies', id: 'hobbies' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? 'bg-[#0F0E13]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3'
              : 'bg-white/90 backdrop-blur-xl border-b border-zinc-200/80 shadow-md shadow-zinc-200/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div
                id="brand-accent-bar"
                className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#00E5FF] via-[#FF4D8D] to-[#D32F2F] group-hover:h-7 transition-all duration-300 shadow-[0_0_12px_rgba(0,229,255,0.6)]"
              />
              <span
                id="brand-name-text"
                className="font-display text-lg sm:text-xl font-extrabold tracking-tight transition-colors duration-200"
              >
                MD Samiul Alim
              </span>
            </a>

            {/* Desktop Navigation Links (Strict 6 Items) */}
            <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer relative ${
                      isActive
                        ? 'text-[#FF4D8D] font-semibold bg-[#FF4D8D]/10 shadow-[0_0_12px_rgba(255,77,141,0.2)]'
                        : isDarkMode
                        ? 'text-zinc-300 hover:text-white hover:bg-white/5'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activePillIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FF4D8D] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Controls */}
            <div id="nav-action-controls" className="flex items-center gap-2 sm:gap-3">
              {/* Quick Contact CTA */}
              <button
                id="quick-contact-button"
                onClick={onOpenContact}
                aria-label="Contact MD Samiul Alim"
                className="w-10 h-10 rounded-2xl sm:rounded-xl bg-[#FF4D8D] hover:bg-[#ff337a] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,77,141,0.4)] cursor-pointer"
                title="Get in Touch"
              >
                <Mail className="w-5 h-5" />
              </button>

              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-button"
                onClick={onToggleTheme}
                aria-label="Toggle dark and light mode"
                className={`w-10 h-10 rounded-2xl sm:rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#181622] border-white/10 text-zinc-300 hover:text-white hover:border-[#00E5FF]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                    : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5 text-amber-500" />}
              </button>

              {/* Hamburger Menu Trigger for Drawer */}
              <button
                id="hamburger-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`w-10 h-10 rounded-2xl sm:rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer md:hidden ${
                  isDarkMode
                    ? 'bg-[#181622] border-white/10 text-zinc-200 hover:text-white'
                    : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-zinc-950'
                }`}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Rounded Drawer Menu (Exactly 6 Links: Home, Skill, Education, Career, Project, Hobbies) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
            />

            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`fixed top-20 left-4 right-4 z-50 rounded-3xl p-5 border shadow-2xl md:hidden ${
                isDarkMode
                  ? 'bg-[#15131C]/95 border-white/10 text-white shadow-black/80'
                  : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#00E5FF] to-[#FF4D8D]" />
                  <span className="font-display font-bold text-base">Navigation</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1.5 py-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`drawer-link-${item.id}`}
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full text-left px-4 py-2.5 rounded-2xl font-medium text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#FF4D8D]/15 text-[#FF4D8D] font-semibold border border-[#FF4D8D]/20 shadow-[0_0_15px_rgba(255,77,141,0.15)]'
                          : isDarkMode
                          ? 'text-zinc-300 hover:bg-white/5 hover:text-white'
                          : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#FF4D8D]" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] font-mono text-zinc-400">Dhaka, Bangladesh</div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenContact();
                  }}
                  className="px-4 py-2 rounded-xl bg-[#FF4D8D] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  Get In Touch
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

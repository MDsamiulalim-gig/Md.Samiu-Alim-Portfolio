import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CareerSection from './components/CareerSection';
import ProjectsSection from './components/ProjectsSection';
import HobbiesSection from './components/HobbiesSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      if (nextMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return nextMode;
    });
  };

  useEffect(() => {
    // Ensure dark mode class is applied initially
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Track active section for strict 6-section navigation highlighting
  useEffect(() => {
    const sectionIds = ['home', 'skills', 'education', 'career', 'projects', 'hobbies'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen font-body transition-colors duration-300 relative selection:bg-[#FF4D8D]/30 selection:text-[#00E5FF] ${
        isDarkMode ? 'bg-[#0F0E13] text-[#F5F5F7]' : 'bg-white text-zinc-900'
      }`}
    >
      {/* Top Navbar with strictly 6 links & quick contact */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area: Strictly following the 6-Section Sequence */}
      <main className="relative">
        {/* 1. Home Section (Hero + User-provided About story) */}
        <Hero
          isDarkMode={isDarkMode}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 2. Skill Section */}
        <SkillsSection isDarkMode={isDarkMode} />

        {/* 3. Education Section */}
        <EducationSection isDarkMode={isDarkMode} />

        {/* 4. Career Section (Timeline + Certifications & Achievements sub-block) */}
        <CareerSection isDarkMode={isDarkMode} />

        {/* 5. Project Section (Favicon E-Shop, Student Course Management, B2B Marketplace) */}
        <ProjectsSection isDarkMode={isDarkMode} />

        {/* 6. Hobbies Section (Interests outside coding; Gallery removed) */}
        <HobbiesSection isDarkMode={isDarkMode} />
      </main>

      {/* Editorial Footer */}
      <Footer
        isDarkMode={isDarkMode}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Quick Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

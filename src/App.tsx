import React, { useState, useEffect, useRef } from 'react';
import { contentEn, contentAr } from './data';
import { Content, Language } from './types';
import { sendMessage, ContactFormData } from './contactService';

// --- ICONS ---
const ChevronRight = () => (
  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
);
const ExternalLink = () => (
  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);
const OrcidIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.631 7.178c.676 0 1.222.547 1.222 1.222 0 .675-.546 1.221-1.222 1.221-.674 0-1.22-.546-1.22-1.221 0-.675.546-1.222 1.22-1.222zm1.884 9.897h-3.768v-8.15h3.768v8.15zm8.905-.724c-.382.744-1.027 1.284-1.802 1.509-.64.185-1.594.185-1.956.185h-2.804v-8.15h2.956c1.29 0 2.225.048 2.89.57.84.661 1.223 1.688 1.223 2.822 0 1.341-.53 2.404-1.507 3.064zm-1.898-4.576c-.524-.22-1.309-.234-2.031-.234h-1.082v5.337h1.018c.957 0 1.488-.047 1.932-.381.564-.424.81-1.127.81-2.288 0-1.277-.289-2.029-.647-2.434z"/></svg>
);

const SocialIcons = ({ className = '' }: { className?: string }) => (
  <div className={`flex gap-4 ${className}`}>
    <a href="https://www.linkedin.com/in/hassan-ahmed2007" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <LinkedInIcon />
    </a>
    <a href="https://github.com/HassanAhmed2Ha" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <GitHubIcon />
    </a>
    <a href="https://orcid.org/0009-0005-0306-0898" target="_blank" rel="noreferrer" aria-label="ORCID Profile" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <OrcidIcon />
    </a>
  </div>
);

// --- NEW VIDEO BACKGROUND COMPONENT ---
const VideoBackground = () => {
  // Converted GitHub blob URL to raw URL for direct video access
  const rawVideoUrl = "https://raw.githubusercontent.com/HassanAhmed2Ha/hassan-ahmed-portfolio/main/%D8%AA%D8%AD%D9%88%D9%8A%D9%84_%D8%B5%D9%88%D8%B1%D8%A9_%D8%A5%D9%84%D9%89_%D9%81%D9%8A%D8%AF%D9%8A%D9%88_%D8%AF%D9%8A%D9%86%D8%A7%D9%85%D9%8A%D9%83%D9%8A.mp4";

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gray-950/70 z-10 mix-blend-multiply"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src={rawVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


// --- UTILS ---
const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (index >= words.length) return;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pauseTime);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-amber-500 inline-block text-start" dir="auto">
      {words[index].substring(0, subIndex)}
      <span className={`inline-block w-0.5 h-6 mx-1 bg-amber-500 align-middle transition-opacity ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};

const Tilt3D: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRotation = -((y - rect.height / 2) / rect.height * 2);
    const yRotation = (x - rect.width / 2) / rect.width * 2;
    ref.current.style.transform = `perspective(1000px) scale(1.01) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  };
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
  };
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`transition-transform duration-200 ease-out transform-style-preserve-3d will-change-transform ${className}`}>
      {children}
    </div>
  );
};

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-12 perspective-1000'} ${className}`}>
      {children}
    </div>
  );
};


export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [content, setContent] = useState<Content>(contentEn);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language;
    if (stored) setLang(stored);
    else if (navigator.language.startsWith('ar')) setLang('ar');
  }, []);

  useEffect(() => {
    setContent(lang === 'en' ? contentEn : contentAr);
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.nav.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.nav]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const elementPositionCorrected = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: elementPositionCorrected, behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await sendMessage(formData);
    alert(response.message);
    if (response.success) setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const fontClass = lang === 'ar' ? "font-['Cairo']" : "font-['Plus_Jakarta_Sans']";

  return (
    <div className={`min-h-screen flex flex-col ${fontClass} overflow-x-hidden bg-gray-950 text-gray-100 relative pt-20 transition-all duration-300 antialiased`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-gray-800 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-full">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-2xl md:text-3xl font-bold tracking-tight text-gray-100 hover:text-amber-500 transition">
            {lang === 'en' ? 'Hassan.' : 'حسن.'}
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {content.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className={`transition-all duration-200 p-2 rounded-lg relative group cursor-pointer ${activeSection === item.id ? 'text-amber-500 font-bold' : 'text-gray-300 hover:text-amber-500'}`}>
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`}></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
             <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
             </button>
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold border transition ${lang === 'en' ? 'bg-amber-500 text-gray-900 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]' : 'text-gray-400 border-gray-700 hover:border-amber-500'}`}>EN</button>
            <button onClick={() => setLang('ar')} className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold border transition ${lang === 'ar' ? 'bg-amber-500 text-gray-900 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]' : 'text-gray-400 border-gray-700 hover:border-amber-500'}`}>AR</button>
          </div>
        </div>
        {menuOpen && (
            <nav className="md:hidden bg-gray-900 border-t border-gray-800 p-4 flex flex-col gap-4 text-start shadow-xl">
                  {content.nav.map((item) => (
                    <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className={`block p-2 rounded cursor-pointer ${activeSection === item.id ? 'bg-gray-800 text-amber-500' : 'text-gray-300'}`}>{item.label}</a>
                ))}
            </nav>
        )}
      </header>

      <main className="flex-grow z-10">
        
        {/* HERO */}
        <section id="home" className="relative py-20 md:py-32 flex items-center min-h-screen overflow-hidden">
            <VideoBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Reveal className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-start">
                <p className="text-xl md:text-2xl text-amber-500 font-semibold tracking-wide text-center md:text-start">{content.hero.greeting}</p>
                <h1 className="hero-title text-gray-100 leading-tight text-center md:text-start">
                  {content.hero.namePrefix} <span className="text-gray-100">{content.hero.name}</span>
                </h1>
                <div className="text-2xl md:text-3xl font-bold text-gray-300 h-10 text-center md:text-start">
                   <Typewriter words={content.hero.role} />
                </div>
                <p className="hero-subtitle text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0 text-center md:text-start">{content.hero.description}</p>
                <div className="flex justify-center md:justify-start"><SocialIcons /></div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                  <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="px-8 py-3 rounded-full font-semibold text-gray-900 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:bg-amber-400 hover:-translate-y-1 transition duration-300 inline-flex items-center gap-2 cursor-pointer btn">
                    <span>{content.hero.btnProjects}</span>
                    <ExternalLink />
                  </a>
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="px-6 py-3 rounded-full font-semibold border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition duration-300 cursor-pointer inline-flex items-center gap-2 btn">
                    <span>{content.hero.btnAbout}</span>
                    <ChevronRight />
                  </a>
                </div>
              </Reveal>
              <div className="flex justify-center items-center p-4 md:p-8 order-1 md:order-2">
                <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
                  <div className="absolute -inset-10 bg-amber-500/20 blur-3xl rounded-full pointer-events-none"></div>
                  <div className="absolute -inset-4 bg-amber-500/30 blur-2xl rounded-full pointer-events-none animate-pulse"></div>
                  <div className="w-full h-full rounded-full border-4 border-gray-800 shadow-2xl bg-gray-800 relative z-10 ring-4 ring-amber-500/30 overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img src="https://i.ibb.co/jvcKX6VZ/Gemini-Generated-Image-vx2w4cvx-2w4cvx2w.png" alt="Hassan Ahmed" className="w-full h-full object-cover rounded-full transform hover:scale-110 transition duration-700" loading="eager" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative py-20 bg-gray-900/50 overflow-hidden">
            <VideoBackground />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-10"><span className="border-b-4 border-amber-500 pb-2">{content.about.title}</span></h2>
              <Reveal className="w-full">
                <Tilt3D className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl relative overflow-hidden text-start">
                   <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-20 h-20 bg-amber-500 blur-3xl opacity-10 rounded-full"></div>
                   <p className="text-lg text-gray-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.about.p1 }} />
                   <p className="text-lg text-gray-300 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.about.p2 }} />
                   <a href="https://www.linkedin.com/in/hassan-ahmed2007" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:text-gray-100 transition-colors group">
                    <span>{content.about.btnLinkedin}</span>
                    <span className="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition"><ExternalLink /></span>
                  </a>
                </Tilt3D>
              </Reveal>
            </div>
        </section>

        {/* SERVICES (SKILLS) */}
        <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-16"><span className="border-b-4 border-amber-500 pb-2">{content.services.title}</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.services.items.map((service, idx) => (
                  <Reveal key={idx} className="h-full">
                     <Tilt3D className="bg-gray-800/60 backdrop-blur rounded-xl p-8 border border-gray-700 hover:border-amber-500 hover:bg-gray-800 transition-all duration-300 group h-full text-start">
                        <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 border border-gray-700 group-hover:border-amber-500 rtl:scale-x-[-1]">
                            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.iconPath}></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-amber-500 transition">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                     </Tilt3D>
                  </Reveal>
                ))}
              </div>
            </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-16"><span className="border-b-4 border-amber-500 pb-2">{content.experience.title}</span></h2>
              <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-600 before:to-transparent before:left-5 md:before:left-1/2 md:before:-translate-x-1/2 rtl:before:left-auto rtl:before:right-5 rtl:md:before:right-auto rtl:md:before:left-1/2">
                {content.experience.items.map((item, idx) => (
                  <Reveal key={idx} className="relative flex items-center justify-center w-full group">
                    <div className="timeline-dot absolute flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 bg-gray-900 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition shrink-0 shadow shadow-gray-900 z-10 left-5 rtl:right-5 -translate-x-1/2 rtl:translate-x-1/2"><div className="w-3 h-3 bg-amber-500 rounded-full"></div></div>
                    <div className={`w-full md:w-1/2 flex flex-col relative pl-12 rtl:pl-0 rtl:pr-12 md:pl-0 rtl:md:pr-0 ${idx % 2 === 0 ? 'md:mr-auto md:ml-0 md:pr-16 md:pl-0 md:items-end rtl:md:ml-auto rtl:md:mr-0 rtl:md:pl-16 rtl:md:pr-0' : 'md:ml-auto md:mr-0 md:pl-16 md:pr-0 md:items-start rtl:md:mr-auto rtl:md:ml-0 rtl:md:pr-16 rtl:md:pl-0'}`}>
                       <Tilt3D className="w-full p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition shadow-lg text-start">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                            <h3 className="font-bold text-lg text-gray-100 group-hover:text-amber-500 transition">{item.role}</h3>
                            <span className="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-1 rounded border border-gray-700 mt-1 md:mt-0">{item.period}</span>
                          </div>
                          <p className="text-sm text-amber-400 font-semibold mb-3">{item.company}</p>
                          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 marker:text-amber-500">
                            {item.description.map((point, i) => <li key={i}>{point}</li>)}
                          </ul>
                       </Tilt3D>
                    </div>
                  </Reveal>
                ))}
              </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-16"><span className="border-b-4 border-amber-500 pb-2">{content.certifications.title}</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content.certifications.items.map((cert, idx) => (
                      <Reveal key={idx} className="h-full">
                        <Tilt3D className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-amber-500 transition flex flex-col h-full group text-start">
                            <div className="mb-4 text-amber-500 rtl:scale-x-[-1]"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                            <h4 className="font-bold text-gray-100 mb-2 group-hover:text-amber-500 transition line-clamp-2">{cert.title}</h4>
                            <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                            <p className="text-xs text-gray-500 mb-4">{cert.date}</p>
                            <a href={cert.link} target="_blank" rel="noreferrer" className="mt-auto text-xs font-semibold text-amber-500 hover:text-gray-100 flex items-center gap-1 transition">Verify Credential <ExternalLink /></a>
                        </Tilt3D>
                      </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* PROJECTS (Updated to UI Card Design) */}
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-16"><span className="border-b-4 border-amber-500 pb-2">{content.projects.title}</span></h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {content.projects.items.map((project, idx) => (
                  <Reveal key={idx} className="h-full">
                     <Tilt3D className="bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all duration-300 flex flex-col group h-full text-start p-8 shadow-xl">
                        
                        <div className="flex items-center gap-3 mb-6">
                           <span className="bg-violet-900/50 text-violet-300 text-xs font-bold px-3 py-1 rounded-md border border-violet-700/50 tracking-wide">
                             {project.type || 'Project'}
                           </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-amber-500 transition">{project.title}</h3>
                        <p className="text-slate-400 mb-8 flex-grow text-sm leading-relaxed">{project.description}</p>
                        
                        {project.doiLink && (
                           <div className="mb-6 bg-teal-900/20 border border-teal-800/50 rounded-lg p-3 inline-flex items-center gap-2">
                             <span className="text-teal-500 font-mono text-xs">DOI:</span>
                             <a href={project.doiLink} target="_blank" rel="noreferrer" className="text-teal-400 font-mono text-xs hover:underline truncate max-w-xs">{project.doiLink.replace('https://doi.org/', '')}</a>
                           </div>
                        )}

                        <div className="mt-auto pt-6 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                           
                           {/* Tags */}
                           <div className="flex flex-wrap gap-2">
                              {project.tags?.map((tag, i) => (
                                 <span key={i} className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md">
                                    {tag}
                                 </span>
                              ))}
                           </div>

                           {/* Action Links */}
                           <div className="flex gap-3 shrink-0">
                              {project.demoLink && (
                                 <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-semibold text-amber-500 hover:text-amber-400 transition">
                                   Demo <ExternalLink />
                                 </a>
                              )}
                              {project.codeLink && (
                                 <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white transition">
                                   Code <GitHubIcon />
                                 </a>
                              )}
                           </div>
                        </div>

                     </Tilt3D>
                  </Reveal>
                ))}
              </div>
              <div className="text-center mt-12">
                <a href="https://github.com/HassanAhmed2Ha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors font-semibold">
                  <span>{content.projects.viewAll}</span>
                  <ExternalLink />
                </a>
              </div>
            </div>
        </section>

        {/* PUBLICATIONS (Updated to UI Card Design) */}
        <section id="publications" className="py-20 bg-gray-900/50 border-t border-slate-800">
             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-16"><span className="border-b-4 border-amber-500 pb-2">{content.publications.title}</span></h2>
              <div className="space-y-6">
                {content.publications.items.map((pub, idx) => (
                  <Reveal key={idx} className="w-full">
                     <Tilt3D className="bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 p-8 shadow-lg text-start flex flex-col md:flex-row gap-8">
                        
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-4">
                             <span className="bg-indigo-900/50 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border border-indigo-700/50">
                               Preprint
                             </span>
                             <span className="text-xs text-slate-500 font-mono">{pub.meta}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-100 mb-3 leading-snug">{pub.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-3xl">{pub.description}</p>
                          
                          {/* Tags / Keywords */}
                          <div className="flex flex-wrap gap-2">
                              {pub.tags?.map((tag, i) => (
                                 <span key={i} className="text-xs text-slate-500 bg-slate-900/80 border border-slate-700/50 px-2 py-1 rounded">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>

                        <div className="md:w-64 shrink-0 flex flex-col justify-start md:border-l md:border-slate-700 rtl:md:border-l-0 rtl:md:border-r md:pl-8 rtl:md:pl-0 rtl:md:pr-8 pt-6 md:pt-0 border-t md:border-t-0">
                           <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 break-all">
                              <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Digital Object Identifier</span>
                              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 text-sm font-mono flex flex-col gap-2 transition group">
                                 <span>{pub.doi}</span>
                                 <span className="flex items-center gap-1 text-xs text-slate-400 group-hover:text-teal-300"><ExternalLink /> View on Zenodo</span>
                              </a>
                           </div>
                        </div>

                     </Tilt3D>
                  </Reveal>
                ))}
              </div>
             </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-16"><span className="border-b-4 border-amber-500 pb-2">{content.contact.title}</span></h2>
              <Reveal className="max-w-2xl mx-auto">
                <Tilt3D className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1 text-start">{content.contact.placeholders.name}</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder={content.contact.placeholders.name} className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 outline-none text-start transition-shadow" required />
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1 text-start">{content.contact.placeholders.email}</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder={content.contact.placeholders.email} className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 outline-none text-start transition-shadow" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="group">
                             <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1 text-start">{content.contact.placeholders.phone}</label>
                             <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder={content.contact.placeholders.phone} className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 outline-none text-start transition-shadow" />
                          </div>
                          <div className="group">
                             <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-1 text-start">{content.contact.placeholders.subject}</label>
                             <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} placeholder={content.contact.placeholders.subject} className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 outline-none text-start transition-shadow" />
                          </div>
                      </div>
                      <div className="group">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1 text-start">{content.contact.placeholders.message}</label>
                        <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} placeholder={content.contact.placeholders.message} rows={5} className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 outline-none text-start transition-shadow" required></textarea>
                      </div>
                      <div className="text-center pt-2">
                        <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10 py-3 rounded-full font-bold text-gray-900 bg-amber-500 hover:bg-amber-400 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] disabled:opacity-50 inline-flex items-center justify-center gap-2 btn">
                          <span>{isSubmitting ? 'Sending...' : content.contact.btnSend}</span>
                          <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </button>
                      </div>
                    </form>
                </Tilt3D>
              </Reveal>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-16 relative z-10 mt-auto text-center md:text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-100">Hassan<span className="text-amber-500">.</span></h3>
            <p className="text-gray-400 text-base max-w-sm mx-auto md:mx-0">{content.footer.col1Text}</p>
            <div className="flex justify-center md:justify-start"><SocialIcons className="gap-5" /></div>
          </div>
          <div className="space-y-6">
             <h3 className="text-lg font-bold text-gray-100 uppercase">{content.footer.col2Title}</h3>
             <ul className="text-gray-400 space-y-3 text-sm">
                {content.nav.map(item => <li key={item.id}><a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="hover:text-amber-500 transition-colors block w-fit mx-auto md:mx-0">{item.label}</a></li>)}
             </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-100 uppercase">{content.footer.col3Title}</h3>
            <ul className="text-gray-400 space-y-4 text-sm">
                <li className="flex items-center justify-center md:justify-start gap-3"><span>{content.footer.contactInfo.phone}</span></li>
                <li className="flex items-center justify-center md:justify-start gap-3"><span>{content.footer.contactInfo.email}</span></li>
                <li className="flex items-center justify-center md:justify-start gap-3"><span>{content.footer.contactInfo.location}</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 mt-16 pt-8 border-t border-gray-800 text-sm">
          <p>{content.footer.copyright}</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)] z-40 text-gray-900 hover:scale-110 transition-all cursor-pointer" aria-label="Contact">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.13C2.42 12.552 2 11.234 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd"></path></svg>
      </a>
    </div>
  );
}

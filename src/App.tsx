import React, { useState, useEffect, useRef } from 'react';
import { contentEn, contentAr } from './data';
import { Content, Language } from './types';
import { sendMessage, ContactFormData } from './contactService';

// --- ICONS (Same icons, no changes needed) ---
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
  <div className={`flex gap-3 ${className}`}>
    <a href="https://www.linkedin.com/in/hassan-ahmed2007" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <LinkedInIcon />
    </a>
    <a href="https://github.com/HassanAhmed2Ha" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <GitHubIcon />
    </a>
    <a href="https://orcid.org/0009-0005-0306-0898" target="_blank" rel="noreferrer" aria-label="ORCID Profile" className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <OrcidIcon />
    </a>
  </div>
);

// --- ANIMATED BACKGROUND (Optimized) ---
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number; type: 'dot' | 'dna' | 'hexagon' }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000); 
      for (let i = 0; i < particleCount; i++) {
        const typeRoll = Math.random();
        let type: 'dot' | 'dna' | 'hexagon' = 'dot';
        if (typeRoll > 0.95) type = 'dna';
        else if (typeRoll > 0.90) type = 'hexagon';

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1,
          type
        });
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.fillStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 1;

        if (p.type === 'hexagon') {
            ctx.beginPath();
            const r = p.size * 2;
            for (let k = 0; k < 6; k++) {
                const angle = (k * 60 * Math.PI) / 180;
                const hx = p.x + r * Math.cos(angle);
                const hy = p.y + r * Math.sin(angle);
                if (k === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();
            ctx.stroke();
        } else if (p.type === 'dna') {
            ctx.beginPath();
            ctx.moveTo(p.x - p.size, p.y - p.size*2);
            ctx.lineTo(p.x + p.size, p.y + p.size*2);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener('resize', resize);
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30" />;
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
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-amber-500 inline-block text-start" dir="auto">
      {words[index].substring(0, subIndex)}
      <span className={`inline-block w-0.5 h-5 mx-1 bg-amber-500 align-middle ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};

// Simplified Tilt (Removed heavy 3D perspective to reduce "Big" feel)
const CardWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
};

// Simplified Reveal (Less movement)
const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
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
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
          }
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
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const elementPositionCorrected = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: elementPositionCorrected, behavior: 'smooth' });
    }
  };

  const toggleLang = (l: Language) => setLang(l);
  const fontClass = lang === 'ar' ? "font-['Cairo']" : "font-['Plus_Jakarta_Sans']";

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

  return (
    <div className={`min-h-screen flex flex-col ${fontClass} overflow-x-hidden bg-gray-900 text-gray-100 relative pt-16 antialiased`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-800 h-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-full">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-xl font-bold tracking-tight text-gray-100 hover:text-amber-500 transition">
            {lang === 'en' ? 'Hassan.' : 'حسن.'}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-5 text-sm font-medium">
            {content.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className={`transition-all duration-200 hover:text-amber-500 ${activeSection === item.id ? 'text-amber-500 font-bold' : 'text-gray-300'}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
             <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300 hover:text-white transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
             </button>
            <div className="flex text-xs font-semibold border border-gray-700 rounded-full overflow-hidden">
                <button onClick={() => toggleLang('en')} className={`px-3 py-1 ${lang === 'en' ? 'bg-amber-500 text-gray-900' : 'text-gray-300 hover:bg-gray-800'}`}>EN</button>
                <button onClick={() => toggleLang('ar')} className={`px-3 py-1 ${lang === 'ar' ? 'bg-amber-500 text-gray-900' : 'text-gray-300 hover:bg-gray-800'}`}>AR</button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
            <nav className="md:hidden bg-gray-900 border-t border-gray-800 p-4 flex flex-col gap-3 text-start shadow-xl">
                  {content.nav.map((item) => (
                    <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className={`block p-2 rounded text-sm ${activeSection === item.id ? 'bg-gray-800 text-amber-500' : 'text-gray-300'}`}>
                        {item.label}
                    </a>
                ))}
            </nav>
        )}
      </header>

      <main className="flex-grow z-10">
        
        {/* HERO */}
        <section id="home" className="relative py-12 md:py-20 flex items-center min-h-[90vh]">
            <ParticleBackground />
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Reveal className="space-y-5 order-2 md:order-1 text-center md:text-start">
                <p className="text-lg text-amber-500 font-medium tracking-wide">{content.hero.greeting}</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
                  {content.hero.namePrefix} <span className="text-gray-100">{content.hero.name}</span>
                </h1>
                <div className="text-xl md:text-2xl font-bold text-gray-300 h-8">
                   <Typewriter words={content.hero.role} />
                </div>
                <p className="text-base text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0">
                  {content.hero.description}
                </p>
                
                <div className="flex justify-center md:justify-start pt-2">
                    <SocialIcons />
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                  <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="px-6 py-2.5 rounded-full font-semibold text-sm text-gray-900 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 transition inline-flex items-center gap-2">
                    {content.hero.btnProjects} <ExternalLink />
                  </a>
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="px-5 py-2.5 rounded-full font-semibold text-sm border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition inline-flex items-center gap-2">
                    {content.hero.btnAbout} <ChevronRight />
                  </a>
                </div>
              </Reveal>

              <div className="flex justify-center items-center order-1 md:order-2">
                <div className="relative w-56 h-56 md:w-72 md:h-72 animate-float">
                  <div className="absolute -inset-4 bg-amber-500/20 blur-2xl rounded-full"></div>
                  <div className="w-full h-full rounded-full border-4 border-gray-800 shadow-xl overflow-hidden">
                    <img src="https://i.ibb.co/VYJzzrSs/unnamed-17.jpg" alt="Hassan Ahmed" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16 bg-gray-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-8">
                <span className="border-b-4 border-amber-500 pb-1">{content.about.title}</span>
              </h2>
              <Reveal>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 shadow-lg relative overflow-hidden text-start">
                   <p className="text-base text-gray-300 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.about.p1 }} />
                   <p className="text-base text-gray-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.about.p2 }} />
                   <a href="https://www.linkedin.com/in/hassan-ahmed2007" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold hover:text-gray-100 transition-colors group">
                    <span>{content.about.btnLinkedin}</span>
                    <span className="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition"><ExternalLink /></span>
                   </a>
                </div>
              </Reveal>
            </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-10">
                 <span className="border-b-4 border-amber-500 pb-1">{content.services.title}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {content.services.items.map((service, idx) => (
                  <Reveal key={idx} className="h-full">
                     <CardWrapper className="bg-gray-800/60 rounded-lg p-6 border border-gray-700 hover:border-amber-500 hover:bg-gray-800 h-full text-start">
                        <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center mb-4 border border-gray-700 rtl:scale-x-[-1]">
                            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.iconPath}></path></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-100 mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                     </CardWrapper>
                  </Reveal>
                ))}
              </div>
            </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-16 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-10">
                <span className="border-b-4 border-amber-500 pb-1">{content.experience.title}</span>
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-700 before:left-4 md:before:left-1/2 md:before:-translate-x-1/2 rtl:before:left-auto rtl:before:right-4 rtl:md:before:right-auto rtl:md:before:left-1/2">
                {content.experience.items.map((item, idx) => (
                  <Reveal key={idx} className="relative flex items-center justify-center w-full">
                    <div className="absolute w-3 h-3 rounded-full bg-amber-500 border-2 border-gray-900 z-10 left-4 rtl:right-4 md:left-1/2 md:rtl:left-auto md:rtl:right-1/2 -translate-x-[5px] rtl:translate-x-[5px] md:-translate-x-1.5 md:rtl:translate-x-1.5"></div>
                    
                    <div className={`w-full md:w-1/2 pl-10 rtl:pl-0 rtl:pr-10 md:pl-0 rtl:md:pr-0 ${idx % 2 === 0 ? 'md:pr-8 md:text-right rtl:md:pl-8 rtl:md:pr-0 rtl:md:text-left md:mr-auto' : 'md:pl-8 md:text-left rtl:md:pr-8 rtl:md:pl-0 rtl:md:text-right md:ml-auto'}`}>
                       <CardWrapper className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-amber-500 text-start">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
                            <h3 className="font-bold text-base text-gray-100">{item.role}</h3>
                            <span className="text-xs font-mono text-gray-400 bg-gray-900 px-1.5 py-0.5 rounded mt-1 md:mt-0">{item.period}</span>
                          </div>
                          <p className="text-xs text-amber-500 font-semibold mb-2">{item.company}</p>
                          <ul className="list-disc list-inside text-sm text-gray-400 space-y-0.5 marker:text-amber-500">
                            {item.description.map((point, i) => <li key={i}>{point}</li>)}
                          </ul>
                       </CardWrapper>
                    </div>
                  </Reveal>
                ))}
              </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-10">
                    <span className="border-b-4 border-amber-500 pb-1">{content.certifications.title}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {content.certifications.items.map((cert, idx) => (
                      <Reveal key={idx} className="h-full">
                        <CardWrapper className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-amber-500 flex flex-col h-full text-start">
                            <div className="mb-3 text-amber-500 rtl:scale-x-[-1]">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h4 className="font-bold text-sm text-gray-100 mb-1 line-clamp-2">{cert.title}</h4>
                            <p className="text-xs text-gray-400 mb-0.5">{cert.issuer}</p>
                            <p className="text-[10px] text-gray-500 mb-3">{cert.date}</p>
                            <a href={cert.link} target="_blank" rel="noreferrer" className="mt-auto text-xs font-semibold text-amber-500 hover:text-gray-100 flex items-center gap-1">
                              Verify <ExternalLink />
                            </a>
                        </CardWrapper>
                      </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 bg-gray-900/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-10">
                  <span className="border-b-4 border-amber-500 pb-1">{content.projects.title}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.projects.items.map((project, idx) => (
                  <Reveal key={idx} className="h-full">
                     <CardWrapper className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-amber-500/50 flex flex-col h-full text-start">
                        <div className="relative h-40 overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-gray-100 mb-2">{project.title}</h3>
                          <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">{project.description}</p>
                          <div className="flex gap-2 mt-auto">
                            {project.demoLink && (
                               <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-1.5 rounded bg-amber-500 text-gray-900 font-bold text-xs hover:bg-amber-400 transition">Demo</a>
                            )}
                            {project.codeLink ? (
                              <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-1.5 rounded border border-gray-600 text-gray-300 font-medium text-xs hover:border-amber-500 hover:text-amber-500 transition">Code</a>
                            ) : project.doiLink && (
                               <a href={project.doiLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-1.5 rounded border border-gray-600 text-gray-300 font-medium text-xs hover:border-amber-500 hover:text-amber-500 transition">DOI</a>
                            )}
                          </div>
                        </div>
                     </CardWrapper>
                  </Reveal>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="https://github.com/HassanAhmed2Ha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 text-sm font-semibold transition">
                  {content.projects.viewAll} <ExternalLink />
                </a>
              </div>
            </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" className="py-16">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-10">
                  <span className="border-b-4 border-amber-500 pb-1">{content.publications.title}</span>
              </h2>
              <div className="space-y-4">
                {content.publications.items.map((pub, idx) => (
                  <Reveal key={idx}>
                     <CardWrapper className="bg-gray-800/60 rounded-lg p-5 border-l-4 rtl:border-l-0 rtl:border-r-4 border-amber-500 hover:bg-gray-800 text-start">
                        <h3 className="text-lg font-bold text-gray-100 mb-1">{pub.title}</h3>
                        <p className="text-[10px] text-amber-500 font-mono mb-2 uppercase tracking-wider">{pub.meta}</p>
                        <p className="text-gray-400 mb-3 text-sm leading-relaxed">{pub.description}</p>
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-amber-500 text-xs inline-flex items-center gap-1">
                          DOI: {pub.doi} <ExternalLink />
                        </a>
                     </CardWrapper>
                  </Reveal>
                ))}
              </div>
             </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 bg-gray-900/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-10">
                 <span className="border-b-4 border-amber-500 pb-1">{content.contact.title}</span>
              </h2>
              <Reveal className="max-w-xl mx-auto">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={content.contact.placeholders.name} className="w-full p-2.5 bg-gray-900 border border-gray-600 rounded text-sm text-white focus:border-amber-500 focus:outline-none" required />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={content.contact.placeholders.email} className="w-full p-2.5 bg-gray-900 border border-gray-600 rounded text-sm text-white focus:border-amber-500 focus:outline-none" required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={content.contact.placeholders.phone} className="w-full p-2.5 bg-gray-900 border border-gray-600 rounded text-sm text-white focus:border-amber-500 focus:outline-none" />
                         <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder={content.contact.placeholders.subject} className="w-full p-2.5 bg-gray-900 border border-gray-600 rounded text-sm text-white focus:border-amber-500 focus:outline-none" />
                      </div>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={content.contact.placeholders.message} rows={4} className="w-full p-2.5 bg-gray-900 border border-gray-600 rounded text-sm text-white focus:border-amber-500 focus:outline-none" required></textarea>
                      <button type="submit" disabled={isSubmitting} className="w-full px-6 py-2.5 rounded font-bold text-gray-900 bg-amber-500 hover:bg-amber-400 transition disabled:opacity-50 text-sm">
                        {isSubmitting ? '...' : content.contact.btnSend}
                      </button>
                    </form>
                </div>
              </Reveal>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-10 mt-auto text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-start">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-gray-100">Hassan<span className="text-amber-500">.</span></h3>
            <p className="text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">{content.footer.col1Text}</p>
            <div className="flex justify-center md:justify-start"><SocialIcons /></div>
          </div>
          <div className="space-y-3">
             <h3 className="font-bold text-gray-100 uppercase text-xs tracking-wider">{content.footer.col2Title}</h3>
             <ul className="text-gray-400 space-y-2">
                {content.nav.map(item => <li key={item.id}><a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="hover:text-amber-500 block w-fit mx-auto md:mx-0 rtl:md:ml-auto rtl:md:mr-0">{item.label}</a></li>)}
             </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-gray-100 uppercase text-xs tracking-wider">{content.footer.col3Title}</h3>
            <ul className="text-gray-400 space-y-2 text-xs">
                <li className="flex items-center justify-center md:justify-start gap-2"><span>📞</span> {content.footer.contactInfo.phone}</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><span>✉️</span> {content.footer.contactInfo.email}</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><span>📍</span> {content.footer.contactInfo.location}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>{content.footer.copyright}</p>
        </div>
      </footer>
      
      {/* Scroll Top Button */}
      <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="fixed bottom-5 right-5 rtl:right-auto rtl:left-5 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg text-gray-900 hover:bg-white transition z-40">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
      </a>
    </div>
  );
}

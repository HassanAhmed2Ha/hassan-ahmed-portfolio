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
    <a href="https://www.linkedin.com/in/hassan-ahmed2007" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700 text-slate-400 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <LinkedInIcon />
    </a>
    <a href="https://github.com/HassanAhmed2Ha" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700 text-slate-400 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <GitHubIcon />
    </a>
    <a href="https://orcid.org/0009-0005-0306-0898" target="_blank" rel="noreferrer" aria-label="ORCID Profile" className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700 text-slate-400 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <OrcidIcon />
    </a>
  </div>
);

// --- REFINED ANIMATED BACKGROUND ---
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000); 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        if (mouseRef.current.active) {
          const dxM = p.x - mouseRef.current.x;
          const dyM = p.y - mouseRef.current.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < 180) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.2 * (1 - distM / 180)})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const handleMouseLeave = () => { mouseRef.current.active = false; };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
    const typeSpeed = 80;
    const deleteSpeed = 40;
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
    ref.current.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  };
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
  };
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`transition-transform duration-300 ease-out transform-style-preserve-3d will-change-transform ${className}`}>
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
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-8 perspective-1000'} ${className}`}>
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
  const glassCardClass = "bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300";

  return (
    <div className={`min-h-screen flex flex-col ${fontClass} overflow-x-hidden bg-slate-950 text-slate-100 relative pt-20 transition-all duration-300 antialiased selection:bg-amber-500/30 selection:text-amber-200`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl shadow-sm border-b border-slate-800 h-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-full">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100 hover:text-amber-500 transition">
            {lang === 'en' ? 'Hassan.' : 'Hassan.'}
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {content.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className={`transition-colors duration-200 py-2 relative group cursor-pointer ${activeSection === item.id ? 'text-amber-500 font-semibold' : 'text-slate-400 hover:text-slate-100'}`}>
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`}></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
             <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-400 hover:text-slate-100 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
             </button>
             <div className="flex bg-slate-900 border border-slate-800 rounded-full p-1">
              <button onClick={() => setLang('en')} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${lang === 'en' ? 'bg-amber-500 text-slate-900 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}>EN</button>
              <button onClick={() => setLang('ar')} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${lang === 'ar' ? 'bg-amber-500 text-slate-900 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}>AR</button>
             </div>
          </div>
        </div>
        {menuOpen && (
            <nav className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-4 flex flex-col gap-2 text-start shadow-2xl">
                  {content.nav.map((item) => (
                    <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className={`block px-4 py-3 rounded-lg font-medium cursor-pointer transition-colors ${activeSection === item.id ? 'bg-slate-800 text-amber-500' : 'text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'}`}>{item.label}</a>
                ))}
            </nav>
        )}
      </header>

      <main className="flex-grow z-10">
        
        {/* HERO */}
        <section id="home" className="relative py-20 md:py-32 flex items-center min-h-screen overflow-hidden">
            <ParticleBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-0"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Reveal className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-start">
                <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
                  {content.hero.greeting}
                </div>
                <h1 className="hero-title text-slate-100 leading-tight text-center md:text-start text-5xl md:text-7xl font-extrabold tracking-tight">
                  {content.hero.namePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">{content.hero.name}</span>
                </h1>
                <div className="text-xl md:text-2xl font-medium text-slate-300 h-10 text-center md:text-start">
                   <Typewriter words={content.hero.role} />
                </div>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0 text-center md:text-start">{content.hero.description}</p>
                <div className="flex justify-center md:justify-start"><SocialIcons /></div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                  <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="px-8 py-3.5 rounded-full font-semibold text-slate-900 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
                    <span>{content.hero.btnProjects}</span>
                    <ExternalLink />
                  </a>
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="px-8 py-3.5 rounded-full font-semibold border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition duration-300 cursor-pointer inline-flex items-center gap-2">
                    <span>{content.hero.btnAbout}</span>
                    <ChevronRight />
                  </a>
                </div>
              </Reveal>
              <div className="flex justify-center items-center p-4 md:p-8 order-1 md:order-2">
                <Tilt3D>
                  <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
                    <div className="absolute -inset-10 bg-amber-500/20 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="w-full h-full rounded-full border-4 border-slate-800 shadow-2xl bg-slate-800 relative z-10 overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img src="https://i.ibb.co/jvcKX6VZ/Gemini-Generated-Image-vx2w4cvx-2w4cvx2w.png" alt="Hassan Ahmed" className="w-full h-full object-cover rounded-full transform hover:scale-110 transition duration-700" loading="eager" />
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              </div>
            </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="w-full">
                <div className="flex flex-col items-center mb-12">
                  <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2">Discover</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-100 text-center">{content.about.title}</h2>
                  <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
                </div>
                <div className={`${glassCardClass} p-8 md:p-12 relative overflow-hidden text-start`}>
                   <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
                   <p className="text-lg text-slate-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.about.p1 }} />
                   <p className="text-lg text-slate-300 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.about.p2 }} />
                   <a href="https://www.linkedin.com/in/hassan-ahmed2007" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:text-amber-400 transition-colors group">
                    <span>{content.about.btnLinkedin}</span>
                    <span className="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"><ExternalLink /></span>
                  </a>
                </div>
              </Reveal>
            </div>
        </section>

        {/* SERVICES (SKILLS) */}
        <section id="services" className="py-24 bg-slate-900/20 border-y border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center mb-16">
                 <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2">Expertise</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-100 text-center">{content.services.title}</h2>
                 <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.services.items.map((service, idx) => (
                  <Reveal key={idx} className="h-full">
                     <div className={`${glassCardClass} p-8 group h-full text-start hover:-translate-y-1`}>
                        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors duration-300 border border-slate-700 group-hover:border-amber-500/30 rtl:scale-x-[-1]">
                            <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.iconPath}></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                     </div>
                  </Reveal>
                ))}
              </div>
            </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center mb-16">
                 <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2">Journey</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-100 text-center">{content.experience.title}</h2>
                 <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
              </div>
              <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent before:left-5 md:before:left-1/2 md:before:-translate-x-1/2 rtl:before:left-auto rtl:before:right-5 rtl:md:before:right-auto rtl:md:before:left-1/2">
                {content.experience.items.map((item, idx) => (
                  <Reveal key={idx} className="relative flex items-center justify-center w-full group">
                    <div className="timeline-dot absolute flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-900 group-hover:border-amber-500 transition-colors shrink-0 shadow-xl z-10 left-5 rtl:right-5 -translate-x-1/2 rtl:translate-x-1/2"><div className="w-2.5 h-2.5 bg-amber-500 rounded-full group-hover:scale-125 transition-transform"></div></div>
                    <div className={`w-full md:w-1/2 flex flex-col relative pl-12 rtl:pl-0 rtl:pr-12 md:pl-0 rtl:md:pr-0 ${idx % 2 === 0 ? 'md:mr-auto md:ml-0 md:pr-16 md:pl-0 md:items-end rtl:md:ml-auto rtl:md:mr-0 rtl:md:pl-16 rtl:md:pr-0' : 'md:ml-auto md:mr-0 md:pl-16 md:pr-0 md:items-start rtl:md:mr-auto rtl:md:ml-0 rtl:md:pr-16 rtl:md:pl-0'}`}>
                       <div className={`${glassCardClass} w-full p-8 text-start hover:-translate-y-1`}>
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                            <h3 className="font-bold text-xl text-slate-100 group-hover:text-amber-500 transition-colors">{item.role}</h3>
                            <span className="text-xs font-medium text-amber-400/90 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">{item.period}</span>
                          </div>
                          <p className="text-sm font-semibold text-slate-300 mb-4">{item.company}</p>
                          <ul className="list-none text-sm text-slate-400 space-y-2">
                            {item.description.map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-amber-500 mt-1 flex-shrink-0 text-[10px]">♦</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                       </div>
                    </div>
                  </Reveal>
                ))}
              </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 bg-slate-900/20 border-y border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col items-center mb-16">
                 <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2">Portfolio</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-100 text-center">{content.projects.title}</h2>
                 <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
               </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {content.projects.items.map((project, idx) => (
                  <Reveal key={idx} className="h-full">
                     <div className={`${glassCardClass} flex flex-col group h-full text-start p-8 hover:-translate-y-1.5`}>
                        
                        <div className="flex items-center gap-3 mb-6">
                           <span className="bg-indigo-500/10 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/20 tracking-wide">
                             {project.type || 'Project'}
                           </span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-amber-500 transition-colors">{project.title}</h3>
                        <p className="text-slate-400 mb-8 flex-grow text-sm leading-relaxed">{project.description}</p>
                        
                        {project.doiLink && (
                           <div className="mb-6 bg-slate-950/50 border border-slate-800 rounded-lg p-3 inline-flex items-center gap-2">
                             <span className="text-slate-500 font-mono text-xs font-semibold uppercase">DOI</span>
                             <div className="w-px h-4 bg-slate-700"></div>
                             <a href={project.doiLink} target="_blank" rel="noreferrer" className="text-amber-400/80 font-mono text-xs hover:text-amber-400 hover:underline truncate max-w-xs transition-colors">{project.doiLink.replace('https://doi.org/', '')}</a>
                           </div>
                        )}

                        <div className="mt-auto pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                           
                           {/* Tags Badges */}
                           <div className="flex flex-wrap gap-2">
                              {project.tags?.map((tag, i) => (
                                 <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full shadow-sm">
                                    {tag}
                                 </span>
                              ))}
                           </div>

                           {/* Action Links */}
                           <div className="flex gap-4 shrink-0">
                              {project.demoLink && (
                                 <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors">
                                   Demo <ExternalLink />
                                 </a>
                              )}
                              {project.codeLink && (
                                 <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                                   Code <GitHubIcon />
                                 </a>
                              )}
                           </div>
                        </div>

                     </div>
                  </Reveal>
                ))}
              </div>
              <div className="text-center mt-16">
                <a href="https://github.com/HassanAhmed2Ha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors font-medium border-b border-transparent hover:border-amber-500 pb-1">
                  <span>{content.projects.viewAll}</span>
                  <ExternalLink />
                </a>
              </div>
            </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center mb-16">
                 <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2">Connect</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-100 text-center">{content.contact.title}</h2>
                 <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
              </div>
              <Reveal className="max-w-2xl mx-auto">
                <div className={`${glassCardClass} p-8 md:p-10`}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 text-start">{content.contact.placeholders.name}</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder={content.contact.placeholders.name} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none text-start transition-all" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 text-start">{content.contact.placeholders.email}</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder={content.contact.placeholders.email} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none text-start transition-all" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label htmlFor="phone" className="block text-sm font-medium text-slate-400 text-start">{content.contact.placeholders.phone}</label>
                             <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder={content.contact.placeholders.phone} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none text-start transition-all" />
                          </div>
                          <div className="space-y-2">
                             <label htmlFor="subject" className="block text-sm font-medium text-slate-400 text-start">{content.contact.placeholders.subject}</label>
                             <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} placeholder={content.contact.placeholders.subject} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none text-start transition-all" />
                          </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 text-start">{content.contact.placeholders.message}</label>
                        <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} placeholder={content.contact.placeholders.message} rows={5} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none text-start transition-all resize-none" required></textarea>
                      </div>
                      <div className="text-center pt-4">
                        <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10 py-3.5 rounded-xl font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 inline-flex items-center justify-center gap-2">
                          <span>{isSubmitting ? 'Sending...' : content.contact.btnSend}</span>
                          <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </button>
                      </div>
                    </form>
                </div>
              </Reveal>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-16 relative z-10 mt-auto text-center md:text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-3xl font-bold text-slate-100">Hassan<span className="text-amber-500">.</span></h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">{content.footer.col1Text}</p>
            <div className="flex justify-center md:justify-start"><SocialIcons className="gap-4" /></div>
          </div>
          <div className="space-y-6">
             <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">{content.footer.col2Title}</h3>
             <ul className="text-slate-400 space-y-3 text-sm">
                {content.nav.map(item => <li key={item.id}><a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="hover:text-amber-500 transition-colors block w-fit mx-auto md:mx-0">{item.label}</a></li>)}
             </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">{content.footer.col3Title}</h3>
            <ul className="text-slate-400 space-y-4 text-sm">
                <li className="flex items-center justify-center md:justify-start gap-3"><span>{content.footer.contactInfo.phone}</span></li>
                <li className="flex items-center justify-center md:justify-start gap-3"><span>{content.footer.contactInfo.email}</span></li>
                <li className="flex items-center justify-center md:justify-start gap-3"><span>{content.footer.contactInfo.location}</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{content.footer.copyright}</p>
          <div className="flex items-center gap-2 text-xs">
            <span>Built with React & Tailwind</span>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 z-40 text-slate-900 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer" aria-label="Contact">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.13C2.42 12.552 2 11.234 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd"></path></svg>
      </a>
    </div>
  );
}

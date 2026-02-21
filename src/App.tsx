import React, { useState, useEffect, useRef } from 'react';
import { contentEn, contentAr } from './data';
import { Content, Language } from './types';
import { sendMessage, ContactFormData } from './contactService';

// --- ICONS ---
const ChevronRight = () => (
  <svg className="w-[clamp(16px,1.5vw,24px)] h-[clamp(16px,1.5vw,24px)] rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
);
const ExternalLink = () => (
  <svg className="w-[clamp(16px,1.5vw,24px)] h-[clamp(16px,1.5vw,24px)] rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);
const LinkedInIcon = () => (
  <svg className="w-[clamp(20px,2vw,28px)] h-[clamp(20px,2vw,28px)]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const GitHubIcon = () => (
  <svg className="w-[clamp(20px,2vw,28px)] h-[clamp(20px,2vw,28px)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);
const OrcidIcon = () => (
  <svg className="w-[clamp(20px,2vw,28px)] h-[clamp(20px,2vw,28px)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.631 7.178c.676 0 1.222.547 1.222 1.222 0 .675-.546 1.221-1.222 1.221-.674 0-1.22-.546-1.22-1.221 0-.675.546-1.222 1.22-1.222zm1.884 9.897h-3.768v-8.15h3.768v8.15zm8.905-.724c-.382.744-1.027 1.284-1.802 1.509-.64.185-1.594.185-1.956.185h-2.804v-8.15h2.956c1.29 0 2.225.048 2.89.57.84.661 1.223 1.688 1.223 2.822 0 1.341-.53 2.404-1.507 3.064zm-1.898-4.576c-.524-.22-1.309-.234-2.031-.234h-1.082v5.337h1.018c.957 0 1.488-.047 1.932-.381.564-.424.81-1.127.81-2.288 0-1.277-.289-2.029-.647-2.434z"/></svg>
);

const SocialIcons = ({ className = '' }: { className?: string }) => (
  <div className={`flex gap-[clamp(12px,1.5vw,20px)] ${className}`}>
    <a href="https://www.linkedin.com/in/hassan-ahmed2007" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="w-[clamp(40px,4vw,56px)] h-[clamp(40px,4vw,56px)] rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black hover:border-white transition duration-300 transform hover:scale-110">
      <LinkedInIcon />
    </a>
    <a href="https://github.com/HassanAhmed2Ha" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="w-[clamp(40px,4vw,56px)] h-[clamp(40px,4vw,56px)] rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black hover:border-white transition duration-300 transform hover:scale-110">
      <GitHubIcon />
    </a>
    <a href="https://orcid.org/0009-0005-0306-0898" target="_blank" rel="noreferrer" aria-label="ORCID Profile" className="w-[clamp(40px,4vw,56px)] h-[clamp(40px,4vw,56px)] rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black hover:border-white transition duration-300 transform hover:scale-110">
      <OrcidIcon />
    </a>
  </div>
);

// --- ANIMATED BACKGROUND COMPONENT ---
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;

    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number; type: 'dot' | 'dna' | 'hexagon' | 'binary' }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000); 
      for (let i = 0; i < particleCount; i++) {
        const typeRoll = Math.random();
        let type: 'dot' | 'dna' | 'hexagon' | 'binary' = 'dot';
        
        if (typeRoll > 0.95) type = 'dna';
        else if (typeRoll > 0.90) type = 'hexagon';
        else if (typeRoll > 0.85) type = 'binary';

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          type
        });
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // UPDATED: Glassy white color instead of amber
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;

        if (p.type === 'binary') {
            ctx.font = '10px monospace';
            ctx.fillText(Math.random() > 0.5 ? '1' : '0', p.x, p.y);
        } else if (p.type === 'hexagon') {
            ctx.beginPath();
            const r = p.size * 2.5;
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
            const h = p.size * 5;
            const w = p.size * 2;
            
            ctx.moveTo(p.x - w, p.y - h);
            ctx.bezierCurveTo(p.x + w, p.y - h/2, p.x - w, p.y + h/2, p.x + w, p.y + h);
            
            ctx.moveTo(p.x + w, p.y - h);
            ctx.bezierCurveTo(p.x - w, p.y - h/2, p.x + w, p.y + h/2, p.x - w, p.y + h);
            
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            // UPDATED: Glassy connection lines
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
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

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
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
    <span className="text-white/90 inline-block text-start" dir="auto">
      {words[index].substring(0, subIndex)}
      <span className={`inline-block w-[2px] h-[1em] mx-1 bg-white align-middle transition-opacity ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
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
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out transform-style-preserve-3d will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-[4%] scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [content, setContent] = useState<Content>(contentEn);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', phone: '', subject: '', message: ''
  });
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
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
      const offset = 80;
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
    if (response.success) {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${fontClass} overflow-x-hidden bg-black text-white relative pt-[80px] transition-all duration-300 antialiased`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* HEADER - Liquid Glass */}
      <header className="fixed top-0 left-0 right-0 z-50 liquid-glass h-[80px] border-b-0">
        <div className="w-full max-w-[1400px] mx-auto px-[5%] flex justify-between items-center h-full">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-[clamp(20px,2vw,28px)] font-bold tracking-tight text-white hover:text-white/70 transition"
          >
            {lang === 'en' ? 'Hassan.' : 'Hassan.'}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-[clamp(16px,2vw,32px)] text-[clamp(13px,1vw,16px)] font-medium">
            {content.nav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)}
                className={`transition-all duration-300 py-2 relative group cursor-pointer ${activeSection === item.id ? 'text-white font-bold' : 'text-white/60 hover:text-white'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-[clamp(8px,1vw,16px)]">
             <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/70 hover:text-white transition">
                <svg className="w-[clamp(24px,6vw,32px)] h-[clamp(24px,6vw,32px)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
             </button>
             <div className="flex bg-white/10 rounded-full p-1 border border-white/10 backdrop-blur-md">
                <button
                  onClick={() => toggleLang('en')}
                  className={`px-[clamp(10px,1.5vw,16px)] py-[clamp(4px,0.8vw,8px)] rounded-full text-[clamp(10px,0.9vw,14px)] font-semibold transition-all ${lang === 'en' ? 'bg-white text-black shadow-md' : 'text-white/70 hover:text-white'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => toggleLang('ar')}
                  className={`px-[clamp(10px,1.5vw,16px)] py-[clamp(4px,0.8vw,8px)] rounded-full text-[clamp(10px,0.9vw,14px)] font-semibold transition-all ${lang === 'ar' ? 'bg-white text-black shadow-md' : 'text-white/70 hover:text-white'}`}
                >
                  AR
                </button>
             </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
            <nav className="md:hidden liquid-glass absolute top-[80px] left-0 right-0 p-[5%] flex flex-col gap-[16px] text-start border-t border-white/10">
                  {content.nav.map((item) => (
                    <a 
                        key={item.id} 
                        href={`#${item.id}`} 
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`block py-2 text-[16px] cursor-pointer ${activeSection === item.id ? 'text-white font-bold' : 'text-white/60'}`}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        )}
      </header>

      <main className="flex-grow z-10">
        
        {/* HERO */}
        <section id="home" className="relative py-[clamp(80px,15vw,160px)] flex items-center min-h-screen overflow-hidden">
            <ParticleBackground />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,64px)] items-center">
              <Reveal className="space-y-[clamp(16px,2.5vw,32px)] order-2 md:order-1 text-center md:text-start">
                <p className="text-[clamp(16px,1.5vw,24px)] text-white/60 font-medium tracking-wide">{content.hero.greeting}</p>
                <h1 className="text-[clamp(40px,5vw,80px)] font-bold text-white leading-[1.05] tracking-tight">
                  {content.hero.namePrefix} <span className="text-white">{content.hero.name}</span>
                </h1>
                <div className="text-[clamp(20px,2.5vw,36px)] font-semibold text-white/90 h-[1.5em]">
                   <Typewriter words={content.hero.role} />
                </div>
                <p className="text-[clamp(14px,1.2vw,20px)] text-white/70 max-w-[80%] leading-[1.6] mx-auto md:mx-0">
                  {content.hero.description}
                </p>
                
                <div className="flex justify-center md:justify-start">
                    <SocialIcons />
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-[clamp(12px,1.5vw,24px)] pt-[clamp(8px,1.5vw,16px)]">
                  <a 
                    href="#projects" 
                    onClick={(e) => scrollToSection(e, 'projects')}
                    className="px-[clamp(24px,3vw,40px)] py-[clamp(12px,1.5vw,20px)] rounded-full text-[clamp(14px,1vw,18px)] font-semibold text-black bg-white hover:bg-white/90 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>{content.hero.btnProjects}</span>
                    <ExternalLink />
                  </a>
                  <a 
                    href="#about" 
                    onClick={(e) => scrollToSection(e, 'about')}
                    className="px-[clamp(24px,3vw,40px)] py-[clamp(12px,1.5vw,20px)] rounded-full text-[clamp(14px,1vw,18px)] font-semibold border border-white/20 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>{content.hero.btnAbout}</span>
                    <ChevronRight />
                  </a>
                </div>
              </Reveal>

              <div className="flex justify-center items-center order-1 md:order-2">
                <div className="relative w-[clamp(250px,30vw,450px)] aspect-square">
                  <div className="absolute inset-[10%] bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
                  <div className="w-full h-full rounded-full liquid-glass p-[2%] flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                      <img
                        src="https://i.ibb.co/jvcKX6VZ/Gemini-Generated-Image-vx2w4cvx-2w4cvx2w.png"
                        alt="Hassan Ahmed"
                        className="w-full h-full object-cover rounded-full transform hover:scale-105 transition duration-700"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-[clamp(60px,10vw,120px)] relative">
            <div className="w-full max-w-[1000px] mx-auto px-[5%]">
              <h2 className="text-[clamp(28px,3vw,48px)] font-bold text-white text-center mb-[clamp(40px,6vw,80px)]">
                <span className="border-b-[3px] border-white/40 pb-2">{content.about.title}</span>
              </h2>
              <Reveal className="w-full">
                <Tilt3D className="liquid-glass rounded-3xl p-[clamp(24px,5vw,64px)] text-start relative">
                   <p className="text-[clamp(14px,1.2vw,20px)] text-white/80 mb-[clamp(16px,2vw,32px)] leading-[1.8]" dangerouslySetInnerHTML={{ __html: content.about.p1 }} />
                   <p className="text-[clamp(14px,1.2vw,20px)] text-white/80 mb-[clamp(24px,3vw,40px)] leading-[1.8]" dangerouslySetInnerHTML={{ __html: content.about.p2 }} />
                   <a
                    href="https://www.linkedin.com/in/hassan-ahmed2007"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[clamp(14px,1.2vw,18px)] text-white font-semibold hover:text-white/70 transition-colors group"
                  >
                    <span>{content.about.btnLinkedin}</span>
                    <span className="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition"><ExternalLink /></span>
                  </a>
                </Tilt3D>
              </Reveal>
            </div>
        </section>

        {/* SERVICES (SKILLS) */}
        <section id="services" className="py-[clamp(60px,10vw,120px)] relative">
            <div className="w-full max-w-[1400px] mx-auto px-[5%]">
              <h2 className="text-[clamp(28px,3vw,48px)] font-bold text-white text-center mb-[clamp(40px,6vw,80px)]">
                 <span className="border-b-[3px] border-white/40 pb-2">{content.services.title}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vw,32px)]">
                {content.services.items.map((service, idx) => (
                  <Reveal key={idx} className="h-full">
                     <Tilt3D className="liquid-glass liquid-glass-hover rounded-2xl p-[clamp(24px,3vw,40px)] transition-all duration-300 group h-full text-start flex flex-col">
                        <div className="w-[clamp(48px,4vw,64px)] h-[clamp(48px,4vw,64px)] liquid-glass rounded-xl flex items-center justify-center mb-[clamp(16px,2vw,32px)] group-hover:scale-110 transition duration-500 rtl:scale-x-[-1]">
                            <svg className="w-[50%] h-[50%] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.iconPath}></path>
                            </svg>
                        </div>
                        <h3 className="text-[clamp(18px,1.5vw,24px)] font-bold text-white mb-[clamp(8px,1vw,16px)]">{service.title}</h3>
                        <p className="text-white/60 text-[clamp(13px,1vw,16px)] leading-[1.6]">{service.description}</p>
                     </Tilt3D>
                  </Reveal>
                ))}
              </div>
            </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-[clamp(60px,10vw,120px)] relative">
          <div className="w-full max-w-[1400px] mx-auto px-[5%]">
              <h2 className="text-[clamp(28px,3vw,48px)] font-bold text-white text-center mb-[clamp(40px,6vw,80px)]">
                <span className="border-b-[3px] border-white/40 pb-2">{content.experience.title}</span>
              </h2>
              
              <div className="max-w-[1000px] mx-auto space-y-[clamp(32px,4vw,64px)] relative before:absolute before:top-0 before:bottom-0 before:w-px before:bg-white/20 before:left-[20px] md:before:left-1/2 md:before:-translate-x-1/2 rtl:before:left-auto rtl:before:right-[20px] rtl:md:before:right-auto rtl:md:before:left-1/2">
                {content.experience.items.map((item, idx) => (
                  <Reveal key={idx} className="relative flex items-center justify-center w-full group">
                    
                    <div 
                      className="absolute flex items-center justify-center w-[clamp(32px,3vw,48px)] h-[clamp(32px,3vw,48px)] rounded-full liquid-glass z-10 
                                left-[20px] rtl:right-[20px] -translate-x-1/2 rtl:translate-x-1/2"
                    >
                      <div className="w-[25%] h-[25%] bg-white rounded-full"></div>
                    </div>
                    
                    <div className={`
                        w-full md:w-1/2 flex flex-col relative
                        pl-[clamp(48px,5vw,80px)] rtl:pl-0 rtl:pr-[clamp(48px,5vw,80px)] md:pl-0 rtl:md:pr-0 
                        ${idx % 2 === 0 
                            ? 'md:mr-auto md:ml-0 md:pr-[clamp(32px,4vw,64px)] md:pl-0 md:items-end rtl:md:ml-auto rtl:md:mr-0 rtl:md:pl-[clamp(32px,4vw,64px)] rtl:md:pr-0' 
                            : 'md:ml-auto md:mr-0 md:pl-[clamp(32px,4vw,64px)] md:pr-0 md:items-start rtl:md:mr-auto rtl:md:ml-0 rtl:md:pr-[clamp(32px,4vw,64px)] rtl:md:pl-0' 
                        }
                    `}>
                       <Tilt3D className="w-full p-[clamp(20px,2vw,32px)] liquid-glass liquid-glass-hover rounded-2xl text-start">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[clamp(8px,1vw,16px)]">
                            <h3 className="font-bold text-[clamp(16px,1.5vw,22px)] text-white">{item.role}</h3>
                            <span className="text-[clamp(11px,0.8vw,14px)] font-mono text-white/60 bg-white/5 px-2 py-1 rounded border border-white/10 mt-2 md:mt-0">{item.period}</span>
                          </div>
                          <p className="text-[clamp(13px,1vw,16px)] text-white/80 font-semibold mb-[clamp(12px,1.5vw,24px)]">{item.company}</p>
                          <ul className="list-disc list-inside text-[clamp(13px,1vw,16px)] text-white/60 space-y-[clamp(4px,0.5vw,8px)] marker:text-white/40">
                            {item.description.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                       </Tilt3D>
                    </div>
                  </Reveal>
                ))}
              </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-[clamp(60px,10vw,120px)] relative">
            <div className="w-full max-w-[1400px] mx-auto px-[5%]">
                <h3 className="text-[clamp(28px,3vw,48px)] font-bold text-white text-center mb-[clamp(40px,6vw,80px)]">
                    <span className="border-b-[3px] border-white/40 pb-2">{content.certifications.title}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,32px)]">
                    {content.certifications.items.map((cert, idx) => (
                      <Reveal key={idx} className="h-full">
                        <Tilt3D className="liquid-glass liquid-glass-hover rounded-2xl p-[clamp(20px,2vw,32px)] flex flex-col h-full group text-start">
                            <div className="mb-[clamp(12px,1.5vw,24px)] text-white rtl:scale-x-[-1]">
                              <svg className="w-[clamp(24px,2.5vw,40px)] h-[clamp(24px,2.5vw,40px)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h4 className="font-bold text-[clamp(14px,1.2vw,18px)] text-white mb-[clamp(8px,1vw,16px)] line-clamp-2">{cert.title}</h4>
                            <p className="text-[clamp(12px,0.9vw,14px)] text-white/70 mb-[clamp(4px,0.5vw,8px)]">{cert.issuer}</p>
                            <p className="text-[clamp(11px,0.8vw,13px)] text-white/50 mb-[clamp(16px,2vw,32px)]">{cert.date}</p>
                            <a href={cert.link} target="_blank" rel="noreferrer" className="mt-auto text-[clamp(12px,0.9vw,14px)] font-semibold text-white/80 hover:text-white flex items-center gap-1 transition">
                              Verify Credential <ExternalLink />
                            </a>
                        </Tilt3D>
                      </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-[clamp(60px,10vw,120px)] relative">
            <div className="w-full max-w-[1400px] mx-auto px-[5%]">
               <h2 className="text-[clamp(28px,3vw,48px)] font-bold text-white text-center mb-[clamp(40px,6vw,80px)]">
                  <span className="border-b-[3px] border-white/40 pb-2">{content.projects.title}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(24px,3vw,48px)]">
                {content.projects.items.map((project, idx) => (
                  <Reveal key={idx} className="h-full">
                     <Tilt3D className="liquid-glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 flex flex-col group h-full text-start">
                        <div className="relative overflow-hidden aspect-video">
                          <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                              loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>
                        <div className="p-[clamp(20px,2vw,32px)] flex flex-col flex-grow relative">
                          <h3 className="text-[clamp(18px,1.5vw,24px)] font-bold text-white mb-[clamp(8px,1vw,16px)]">{project.title}</h3>
                          <p className="text-white/60 mb-[clamp(16px,2vw,32px)] flex-grow text-[clamp(13px,1vw,16px)] leading-[1.6] line-clamp-3">{project.description}</p>
                          <div className="flex flex-wrap gap-[clamp(8px,1vw,16px)] mt-auto">
                            {project.demoLink && (
                               <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-[clamp(8px,1vw,12px)] rounded-lg bg-white text-black font-semibold text-[clamp(12px,0.9vw,14px)] hover:bg-white/80 transition">
                                  Demo
                                </a>
                            )}
                            {project.codeLink ? (
                              <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-[clamp(8px,1vw,12px)] rounded-lg border border-white/20 text-white font-semibold text-[clamp(12px,0.9vw,14px)] hover:bg-white/10 transition">
                                Code
                              </a>
                            ) : (
                               project.doiLink && (
                                   <a href={project.doiLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-[clamp(8px,1vw,12px)] rounded-lg border border-white/20 text-white font-semibold text-[clamp(12px,0.9vw,14px)] hover:bg-white/10 transition">
                                     DOI
                                   </a>
                               )
                            )}
                          </div>
                        </div>
                     </Tilt3D>
                  </Reveal>
                ))}
              </div>
              <div className="text-center mt-[clamp(40px,5vw,80px)]">
                <a
                  href="https://github.com/HassanAhmed2Ha"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[clamp(14px,1.2vw,18px)] text-white/60 hover:text-white transition-colors font-semibold border-b border-transparent hover:border-white pb-1"
                >
                  <span>{content.projects.viewAll}</span>
                  <ExternalLink />
                </a>
              </div>
            </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" className="py-[clamp(60px,10vw,120px)] relative">
             <div className="w-full max-w-[1000px] mx-auto px-[5%]">
               <h2 className="text-[clamp(28px,3vw,48px)] font-bold text-white text-center mb-[clamp(40px,6vw,80px)]">
                  <span className="border-b-[3px] border-white/40 pb-2">{content.publications.title}</span>
              </h2>
              <div className="space-y-[clamp(16px,2vw,32px)]">
                {content.publications.items.map((pub, idx) => (
                  <Reveal key={idx} className="w-full">
                     <Tilt3D className="liquid-glass liquid-glass-hover rounded-2xl p-[clamp(20px,2vw,32px)] border-l-4 rtl:border-l-0 rtl:border-r-4 border-white/40 text-start">
                        <div className="flex flex-col">
                          <h3 className="text-[clamp(16px,1.5vw,22px)] font-bold text-white mb-[clamp(8px,1vw,12px)]">{pub.title}</h3>
                          <p className="text-[clamp(11px,0.8vw,14px)] text-white/50 font-mono mb-[clamp(12px,1.5vw,20px)] uppercase tracking-wider">{pub.meta}</p>
                          <p className="text-white/70 mb-[clamp(16px,2vw,24px)] text-[clamp(13px,1vw,16px)] leading-[1.6]">{pub.description}</p>
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-[clamp(12px,0.9vw,14px)] inline-flex items-center gap-2 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            DOI: {pub.doi}
                          </a>
                        </div>
                     </Tilt3D>
                  </Reveal>
                ))}
              </div>
             </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-[clamp(60px,10vw,120px)] relative">
            <div className="w-full max-w-[1000px] mx-auto px-[5%]">
              <h2 className="text-[clamp(28px,3vw,48px)] font-bold text-white text-center mb-[clamp(40px,6vw,80px)]">
                 <span className="border-b-[3px] border-white/40 pb-2">{content.contact.title}</span>
              </h2>

              <Reveal className="w-full">
                <Tilt3D className="liquid-glass p-[clamp(24px,4vw,48px)] rounded-3xl">
                    <form onSubmit={handleSubmit} className="space-y-[clamp(16px,2vw,32px)]">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(16px,2vw,32px)]">
                        <div className="group">
                            <label htmlFor="name" className="block text-[clamp(12px,0.9vw,14px)] font-medium text-white/60 mb-2 ml-1 rtl:mr-1 rtl:ml-0 group-focus-within:text-white transition text-start">{content.contact.placeholders.name}</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder={content.contact.placeholders.name}
                              className="w-full p-[clamp(12px,1.5vw,16px)] bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition text-start text-[clamp(14px,1vw,16px)]"
                              required
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="block text-[clamp(12px,0.9vw,14px)] font-medium text-white/60 mb-2 ml-1 rtl:mr-1 rtl:ml-0 group-focus-within:text-white transition text-start">{content.contact.placeholders.email}</label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder={content.contact.placeholders.email}
                              className="w-full p-[clamp(12px,1.5vw,16px)] bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition text-start text-[clamp(14px,1vw,16px)]"
                              required
                            />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(16px,2vw,32px)]">
                          <div className="group">
                             <label htmlFor="phone" className="block text-[clamp(12px,0.9vw,14px)] font-medium text-white/60 mb-2 ml-1 rtl:mr-1 rtl:ml-0 group-focus-within:text-white transition text-start">{content.contact.placeholders.phone}</label>
                             <input
                               type="tel"
                               name="phone"
                               id="phone"
                               value={formData.phone}
                               onChange={handleInputChange}
                               placeholder={content.contact.placeholders.phone}
                               className="w-full p-[clamp(12px,1.5vw,16px)] bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition text-start text-[clamp(14px,1vw,16px)]"
                             />
                          </div>
                          <div className="group">
                             <label htmlFor="subject" className="block text-[clamp(12px,0.9vw,14px)] font-medium text-white/60 mb-2 ml-1 rtl:mr-1 rtl:ml-0 group-focus-within:text-white transition text-start">{content.contact.placeholders.subject}</label>
                             <input
                               type="text"
                               name="subject"
                               id="subject"
                               value={formData.subject}
                               onChange={handleInputChange}
                               placeholder={content.contact.placeholders.subject}
                               className="w-full p-[clamp(12px,1.5vw,16px)] bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition text-start text-[clamp(14px,1vw,16px)]"
                             />
                          </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="message" className="block text-[clamp(12px,0.9vw,14px)] font-medium text-white/60 mb-2 ml-1 rtl:mr-1 rtl:ml-0 group-focus-within:text-white transition text-start">{content.contact.placeholders.message}</label>
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={content.contact.placeholders.message}
                          rows={5}
                          className="w-full p-[clamp(12px,1.5vw,16px)] bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition text-start text-[clamp(14px,1vw,16px)] resize-none"
                          required
                        ></textarea>
                      </div>

                      <div className="text-center pt-[clamp(8px,1vw,16px)]">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto px-[clamp(32px,4vw,64px)] py-[clamp(12px,1.5vw,20px)] rounded-full font-bold text-black bg-white hover:bg-white/80 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-[clamp(14px,1vw,16px)]"
                        >
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
      <footer className="border-t border-white/10 py-[clamp(40px,6vw,80px)] relative z-10 mt-auto liquid-glass border-x-0 border-b-0">
        <div className="w-full max-w-[1400px] mx-auto px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(32px,4vw,64px)] text-center md:text-start">
          
          <div className="space-y-[clamp(16px,2vw,32px)] lg:col-span-2">
            <h3 className="text-[clamp(24px,2.5vw,36px)] font-bold text-white tracking-tight">Hassan<span className="text-white/50">.</span></h3>
            <p className="text-white/60 text-[clamp(13px,1vw,16px)] leading-[1.8] max-w-[400px] mx-auto md:mx-0 text-center md:text-start">{content.footer.col1Text}</p>
            <div className="flex justify-center md:justify-start">
               <SocialIcons className="gap-[clamp(12px,1.5vw,20px)]" />
            </div>
          </div>
          
          <div className="space-y-[clamp(16px,2vw,32px)]">
             <h3 className="text-[clamp(16px,1.2vw,20px)] font-bold text-white uppercase tracking-wider">{content.footer.col2Title}</h3>
             <ul className="text-white/60 space-y-[clamp(12px,1.5vw,20px)] text-[clamp(13px,1vw,16px)] font-medium">
                {content.nav.map(item => (
                    <li key={item.id}><a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="hover:text-white transition-colors duration-200 block w-fit mx-auto md:mx-0 rtl:md:ml-auto rtl:md:mr-0">{item.label}</a></li>
                ))}
             </ul>
          </div>

          <div className="space-y-[clamp(16px,2vw,32px)]">
            <h3 className="text-[clamp(16px,1.2vw,20px)] font-bold text-white uppercase tracking-wider">{content.footer.col3Title}</h3>
            <ul className="text-white/60 space-y-[clamp(16px,2vw,24px)] text-[clamp(13px,1vw,16px)]">
                <li className="flex items-start justify-center md:justify-start gap-3 group">
                    <div className="p-2 liquid-glass rounded-lg text-white group-hover:bg-white group-hover:text-black transition mt-[-4px]">
                       <svg className="w-[1em] h-[1em]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <span>{content.footer.contactInfo.phone}</span>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3 group">
                     <div className="p-2 liquid-glass rounded-lg text-white group-hover:bg-white group-hover:text-black transition mt-[-4px]">
                        <svg className="w-[1em] h-[1em]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                     </div>
                    <span>{content.footer.contactInfo.email}</span>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3 group">
                    <div className="p-2 liquid-glass rounded-lg text-white group-hover:bg-white group-hover:text-black transition mt-[-4px]">
                       <svg className="w-[1em] h-[1em]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <span>{content.footer.contactInfo.location}</span>
                </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-[1400px] mx-auto px-[5%] text-center text-white/40 mt-[clamp(32px,5vw,64px)] pt-[clamp(16px,2vw,32px)] border-t border-white/10 text-[clamp(12px,0.9vw,14px)] font-medium">
          <p>{content.footer.copyright}</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a
        href="#contact"
        onClick={(e) => scrollToSection(e, 'contact')}
        className="fixed bottom-[clamp(16px,3vw,32px)] right-[clamp(16px,3vw,32px)] rtl:right-auto rtl:left-[clamp(16px,3vw,32px)] w-[clamp(48px,5vw,64px)] h-[clamp(48px,5vw,64px)] bg-white rounded-full flex items-center justify-center z-40 text-black hover:scale-110 shadow-xl transition-all duration-300 cursor-pointer"
        aria-label="Contact"
      >
        <svg className="w-[50%] h-[50%] rtl:rotate-180" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.13C2.42 12.552 2 11.234 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd"></path>
        </svg>
      </a>
    </div>
  );
}

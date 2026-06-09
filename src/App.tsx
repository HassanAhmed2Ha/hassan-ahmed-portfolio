import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation } from 'swiper/modules';
import CountUp from 'react-countup';
import { BsArrowRight } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri';
import { contentEn, contentAr } from './data';
import { Content, Language } from './types';
import { sendMessage, ContactFormData } from './contactService';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// --- ICONS & UI COMPONENTS ---
const ExternalLink = () => (
  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);

const SocialIcons = () => (
  <div className="flex items-center gap-x-5 text-lg z-50 relative">
    <a href="https://www.linkedin.com/in/hassan-ahmed2007" target="_blank" rel="noreferrer" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine className="text-2xl" />
    </a>
    <a href="https://github.com/HassanAhmed2Ha" target="_blank" rel="noreferrer" className="bg-accent text-white rounded-full p-[5px] hover:scale-110 transition-all duration-300">
      <RiGithubLine className="text-xl" />
    </a>
  </div>
);

// --- BIO-COMPUTATIONAL PARTICLE BACKGROUND ---
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initAIParticles();
    };

    const initAIParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 5000); 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.1
        });
      }
    };

    const drawDNA = () => {
      const centerY = canvas.height / 2;
      const amplitude = canvas.height / 3.5; 
      const frequency = 0.005; 
      const xSpacing = 15; 
      
      ctx.lineWidth = 1.2;

      for (let x = 0; x < canvas.width; x += xSpacing) {
        const angle1 = x * frequency + time;
        const angle2 = x * frequency + time + Math.PI; 

        const z1 = Math.cos(angle1);
        const z2 = Math.cos(angle2);

        const y1 = centerY + Math.sin(angle1) * amplitude;
        const y2 = centerY + Math.sin(angle2) * amplitude;

        const radius1 = 2 + (z1 * 1.5);
        const radius2 = 2 + (z2 * 1.5);
        const alpha1 = 0.4 + (z1 * 0.4);
        const alpha2 = 0.4 + (z2 * 0.4);

        ctx.beginPath();
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${Math.min(alpha1, alpha2) * 0.4})`;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y1, radius1 > 0 ? radius1 : 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha1})`; // Cyan
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y2, radius2 > 0 ? radius2 : 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${alpha2})`; // Amber
        ctx.fill();
        
        if (mouseRef.current.active) {
            const dxM = x - mouseRef.current.x;
            const dyM = ((y1 + y2) / 2) - mouseRef.current.y;
            const distM = Math.sqrt(dxM * dxM + dyM * dyM);
            if (distM < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(232, 56, 204, ${0.3 * (1 - distM / 150)})`;
                ctx.moveTo(x, (y1 + y2) / 2);
                ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                ctx.stroke();
            }
        }
      }
    };

    const drawAIParticles = () => {
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
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
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time -= 0.01; 
      drawAIParticles();
      drawDNA();
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

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen" />;
};

// --- ANIMATION VARIANTS ---
const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 1.2, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] },
    },
  };
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [content, setContent] = useState<Content>(contentEn);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setContent(lang === 'en' ? contentEn : contentAr);
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang;
  }, [lang]);

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
    <div className={`page bg-site text-white bg-cover bg-no-repeat relative ${lang === 'ar' ? "font-['Cairo']" : "font-['Sora']"}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* GLOWING AMBIENT EFFECTS */}
      <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[300px] xl:w-[500px] opacity-40 pointer-events-none animate-pulse duration-75 bg-gradient-to-br from-accent/50 to-transparent blur-3xl h-[500px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 mix-blend-color-dodge z-10 w-[400px] xl:w-[600px] opacity-30 pointer-events-none animate-pulse duration-75 bg-gradient-to-tl from-[#e838cc]/40 to-transparent blur-3xl h-[600px] rounded-full"></div>

      <ParticleBackground />

      {/* HEADER & NAV */}
      <header className="absolute z-30 w-full items-center px-6 xl:px-0 xl:h-[90px] mt-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-4 bg-white/5 backdrop-blur-md rounded-full px-8 border border-white/10">
            <h1 className="text-2xl font-bold tracking-tight">Hassan<span className="text-accent">.</span></h1>
            <SocialIcons />
            <div className="flex gap-4">
              <button onClick={() => setLang('en')} className={`text-sm font-semibold transition ${lang === 'en' ? 'text-accent' : 'text-white/60 hover:text-white'}`}>EN</button>
              <button onClick={() => setLang('ar')} className={`text-sm font-semibold transition ${lang === 'ar' ? 'text-accent' : 'text-white/60 hover:text-white'}`}>AR</button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="h-full overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-20">
          <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between h-full z-20 px-6">
            <div className="text-center xl:text-start flex flex-col justify-center xl:pt-10 w-full xl:w-1/2">
              <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" animate="show" className="h1 text-[40px] md:text-[65px] font-bold leading-tight mb-6">
                {content.hero.namePrefix} <br />
                <span className="text-accent">{content.hero.name}</span>
              </motion.h1>
              <motion.p variants={fadeIn("down", 0.3)} initial="hidden" animate="show" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/60 text-lg leading-relaxed">
                {content.hero.description}
              </motion.p>
              <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" className="flex justify-center xl:justify-start">
                 <a href="#projects" className="relative w-[160px] h-[160px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer z-50">
                    <div className="absolute inset-0 rounded-full border border-accent/30 animate-spin-slow"></div>
                    <span className="font-bold tracking-widest text-sm uppercase">{content.hero.btnProjects}</span>
                    <BsArrowRight className="absolute text-4xl group-hover:translate-x-3 rtl:group-hover:-translate-x-3 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                 </a>
              </motion.div>
            </div>
            
            <motion.div variants={fadeIn("up", 0.5)} initial="hidden" animate="show" className="w-full xl:w-1/2 flex justify-center mt-16 xl:mt-0 relative">
              <div className="w-[300px] h-[300px] xl:w-[450px] xl:h-[450px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-[#e838cc] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img src="https://i.ibb.co/jvcKX6VZ/Gemini-Generated-Image-vx2w4cvx-2w4cvx2w.png" alt="Avatar" className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10 liquid-glass" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT & STATS SECTION */}
        <section id="about" className="py-20 bg-primary/30 relative">
          <div className="container mx-auto px-6">
            <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="h2 mb-12 text-center xl:text-start">
              Bridging Biology <span className="text-accent">&</span> Data.
            </motion.h2>
            
            <div className="flex flex-col xl:flex-row gap-12 items-center">
              <motion.div variants={fadeIn("right", 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex-1 text-white/60 text-lg leading-relaxed space-y-6">
                <p dangerouslySetInnerHTML={{ __html: content.about.p1 }} />
                <p dangerouslySetInnerHTML={{ __html: content.about.p2 }} />
              </motion.div>

              <motion.div variants={fadeIn("left", 0.6)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex-1 grid grid-cols-2 gap-6 w-full">
                <div className="relative flex-1 liquid-glass p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-extrabold text-accent mb-2"><CountUp start={0} end={4} duration={4} />+</div>
                  <div className="text-xs uppercase tracking-[1px] text-white/50">Full-Stack AI Projects</div>
                </div>
                <div className="relative flex-1 liquid-glass p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-extrabold text-accent mb-2"><CountUp start={0} end={3} duration={4} /></div>
                  <div className="text-xs uppercase tracking-[1px] text-white/50">Research Preprints</div>
                </div>
                <div className="relative flex-1 liquid-glass p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-extrabold text-accent mb-2"><CountUp start={0} end={800} duration={4} />+</div>
                  <div className="text-xs uppercase tracking-[1px] text-white/50">Students Impacted</div>
                </div>
                <div className="relative flex-1 liquid-glass p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-extrabold text-accent mb-2"><CountUp start={0} end={11} duration={4} /></div>
                  <div className="text-xs uppercase tracking-[1px] text-white/50">Certifications</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (SWIPER + HOVER EFFECTS) */}
        <section id="projects" className="py-32 relative">
          <div className="container mx-auto px-6">
            <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="h2 text-center mb-16">
              My <span className="text-accent">Work.</span>
            </motion.h2>

            <motion.div variants={fadeIn("down", 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }} className="w-full">
              <Swiper
                breakpoints={{ 320: { slidesPerView: 1, spaceBetween: 15 }, 768: { slidesPerView: 2, spaceBetween: 30 } }}
                pagination={{ clickable: true }}
                modules={[Pagination, FreeMode]}
                freeMode={true}
                className="h-[400px] sm:h-[450px]"
              >
                {content.projects.items.map((project, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative rounded-2xl overflow-hidden flex items-center justify-center group h-full bg-slate-900 border border-white/10 shadow-2xl">
                      
                      {/* Abstract Tech Background for empty images */}
                      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#1a0b2e]"></div>
                      
                      {/* Card Content (Visible before hover) */}
                      <div className="absolute inset-0 p-8 flex flex-col z-10 group-hover:opacity-0 transition-opacity duration-300">
                         <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4">{project.type}</span>
                         <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                         <p className="text-white/60 text-sm leading-relaxed line-clamp-4">{project.description}</p>
                         <div className="mt-auto flex flex-wrap gap-2">
                           {project.tags?.map((tag, i) => (
                             <span key={i} className="text-xs font-mono text-white/40 bg-white/5 border border-white/10 px-2 py-1 rounded">{tag}</span>
                           ))}
                         </div>
                      </div>

                      {/* HOVER OVERLAY (The Ethan Smith Effect) */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-700 z-20 flex flex-col justify-center items-center p-6 text-center">
                         <h3 className="text-2xl font-bold text-white mb-4 translate-y-[200%] group-hover:translate-y-0 transition-all duration-500 delay-100">{project.title}</h3>
                         <div className="flex gap-4 translate-y-[300%] group-hover:translate-y-0 transition-all duration-500 delay-200">
                           {project.demoLink && (
                             <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white bg-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-[#4a22bd] transition">
                               LIVE <BsArrowRight />
                             </a>
                           )}
                           {project.codeLink && (
                             <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white border border-white/50 px-6 py-3 rounded-full hover:bg-white hover:text-[#4a22bd] transition">
                               CODE
                             </a>
                           )}
                         </div>
                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-primary/20">
          <div className="container mx-auto px-6 h-full flex items-center justify-center">
            <div className="flex flex-col w-full max-w-[700px]">
              <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="h2 text-center mb-12">
                Let's <span className="text-accent">connect.</span>
              </motion.h2>

              <motion.form variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }} onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 w-full mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-6 w-full">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={content.contact.placeholders.name} className="input flex-1" required />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={content.contact.placeholders.email} className="input flex-1" required />
                </div>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder={content.contact.placeholders.subject} className="input" required />
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={content.contact.placeholders.message} className="textarea" required />
                
                <button type="submit" disabled={isSubmitting} className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto md:mx-0 mt-4 relative">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-bold">
                    {isSubmitting ? 'Sending...' : content.contact.btnSend}
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent" />
                </button>
              </motion.form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

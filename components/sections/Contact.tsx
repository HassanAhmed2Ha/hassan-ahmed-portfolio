import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";
import { 
  RiSendPlaneFill, 
  RiLoader5Line, 
  RiCheckboxCircleLine, 
  RiErrorWarningLine, 
  RiFileCopyLine,
  RiCheckLine,
  RiArrowRightUpLine
} from "react-icons/ri";
import Circles from "../Circles";
import emailjs from "@emailjs/browser";
import { contentEn as content } from "../../src/data";

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    if (content.contact.directEmail) {
      navigator.clipboard.writeText(content.contact.directEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: null });
    const SERVICE_ID = "service_w4uopbl";
    const TEMPLATE_ID = "template_xi12phd";
    const PUBLIC_KEY = "-FWQCDVQFrhOS5QMv";
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not Provided",
      title: formData.subject || "No Subject",
      message: formData.message,
    };
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      if (response.status === 200) {
        setStatus({
          type: "success",
          message:
            "Message transmitted successfully. I will review your proposal and respond promptly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Transmission error received.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          `Transmission failed. Please reach out directly at ${content.contact.directEmail}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 relative z-20 w-full pb-32 flex items-center justify-center">
      <Circles />

      {/* Ambient Radial Backlight */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-accent/[0.03] rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-4 xl:px-0 relative z-10 w-full max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16 md:mb-20">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            className="h2 mb-4"
          >
            Get in Touch & <span className="font-serif italic font-normal text-accent">Collaborate</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed font-sans font-normal"
          >
            {content.contact.description}
          </motion.p>
        </div>

        {/* Top Horizon Line */}
        <div className="w-full h-[1px] bg-white/10 relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        {/* Cardless Editorial Horizon Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Column: Direct Connection Streams (Cardless) */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Stream 01: Direct Email Transmission */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-accent tracking-widest">01</span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/40 font-semibold">Direct Channel</span>
              </div>
              
              <div className="pt-1">
                <a
                  href={`mailto:${content.contact.directEmail}`}
                  className="text-xl md:text-2xl font-serif italic text-white hover:text-amber-200 transition-colors block break-all font-normal"
                >
                  {content.contact.directEmail}
                </a>
              </div>

              <div className="flex items-center gap-x-3 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-x-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 hover:border-accent/40 text-xs font-mono text-white/70 hover:text-accent transition-colors"
                >
                  {copied ? (
                    <>
                      <RiCheckLine className="text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <RiFileCopyLine />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Stream 02: Operational Telemetry & Timezone */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-accent tracking-widest">02</span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/40 font-semibold">Operational Telemetry</span>
              </div>

              <div className="space-y-2 text-sm font-sans text-white/80">
                <p className="flex items-center gap-x-2">
                  <span className="text-white/40 font-mono text-xs">Location:</span>
                  <span className="text-white/90 font-medium">{content.contact.location || "Alexandria, Egypt (UTC+2)"}</span>
                </p>
                <p className="flex items-center gap-x-2">
                  <span className="text-white/40 font-mono text-xs">Response SLA:</span>
                  <span className="inline-flex items-center gap-x-1.5 text-emerald-400 font-mono text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{content.contact.responseTime || "< 24 Hours Response"}</span>
                  </span>
                </p>
                <p className="flex items-center gap-x-2">
                  <span className="text-white/40 font-mono text-xs">Status:</span>
                  <span className="text-white/75">{content.contact.availability || "Open for Scientific AI Collaborations"}</span>
                </p>
              </div>
            </div>

            {/* Stream 03: Verified Research & Engineering Links */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-accent tracking-widest">03</span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/40 font-semibold">Research Profiles</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1 text-sm font-mono">
                <a
                  href="https://github.com/HassanAhmed2Ha"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/75 hover:text-accent flex items-center gap-x-1.5 transition-colors group"
                >
                  <span>GitHub</span>
                  <RiArrowRightUpLine className="text-white/40 group-hover:text-accent transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/hassan-ahmed2007/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/75 hover:text-accent flex items-center gap-x-1.5 transition-colors group"
                >
                  <span>LinkedIn</span>
                  <RiArrowRightUpLine className="text-white/40 group-hover:text-accent transition-colors" />
                </a>

                <a
                  href="https://orcid.org/0009-0005-0306-0898"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/75 hover:text-accent flex items-center gap-x-1.5 transition-colors group"
                >
                  <span>ORCID</span>
                  <RiArrowRightUpLine className="text-white/40 group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Clarity Open Dispatch Form */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Form Dispatch Status Pill */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/50">
              <div className="flex items-center gap-x-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/90 font-medium tracking-wide">Interactive Collaboration Dispatch</span>
              </div>
              <span className="text-[11px] text-white/40 hidden sm:inline">Direct Encrypted Gateway</span>
            </div>

            {/* Status alerts */}
            <AnimatePresence mode="wait">
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className={`p-4 rounded-2xl flex items-center gap-x-3 text-sm font-mono border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <RiCheckboxCircleLine className="text-xl shrink-0" />
                  ) : (
                    <RiErrorWarningLine className="text-xl shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Field 01: Name */}
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] hover:border-white/30 focus-within:border-accent focus-within:bg-white/[0.06] focus-within:shadow-[0_0_20px_rgba(251,191,36,0.12)] p-4 transition-all duration-200 space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/45 font-semibold flex items-center justify-between">
                    <span>Full Name / Entity *</span>
                    <span className="text-accent text-[10px] font-bold">01</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.name}
                    className="w-full bg-transparent text-white placeholder-white/30 text-sm md:text-base font-sans outline-none"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Field 02: Email */}
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] hover:border-white/30 focus-within:border-accent focus-within:bg-white/[0.06] focus-within:shadow-[0_0_20px_rgba(251,191,36,0.12)] p-4 transition-all duration-200 space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/45 font-semibold flex items-center justify-between">
                    <span>Email Address *</span>
                    <span className="text-accent text-[10px] font-bold">02</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.email}
                    className="w-full bg-transparent text-white placeholder-white/30 text-sm md:text-base font-sans outline-none"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Field 03: Subject / Topic */}
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] hover:border-white/30 focus-within:border-accent focus-within:bg-white/[0.06] focus-within:shadow-[0_0_20px_rgba(251,191,36,0.12)] p-4 transition-all duration-200 space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-white/45 font-semibold flex items-center justify-between">
                  <span>Collaboration Topic / Subject</span>
                  <span className="text-accent text-[10px] font-bold">03</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={content.contact.placeholders.subject}
                  className="w-full bg-transparent text-white placeholder-white/30 text-sm md:text-base font-sans outline-none"
                  disabled={isLoading}
                />
              </div>

              {/* Field 04: Message / Proposal */}
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] hover:border-white/30 focus-within:border-accent focus-within:bg-white/[0.06] focus-within:shadow-[0_0_20px_rgba(251,191,36,0.12)] p-4 transition-all duration-200 space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-white/45 font-semibold flex items-center justify-between">
                  <span>Project Vision or Proposal *</span>
                  <span className="text-accent text-[10px] font-bold">04</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.contact.placeholders.message}
                  className="w-full bg-transparent text-white placeholder-white/30 text-sm md:text-base font-sans outline-none h-[110px] resize-none pt-1"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Submit Kinetic Trigger */}
              <div className="pt-2 flex items-center justify-between">
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.03, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-x-2.5 px-8 py-3.5 rounded-full font-bold font-sans text-sm text-primary bg-accent hover:bg-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] disabled:opacity-50 transition-all duration-300"
                >
                  {isLoading ? (
                    <RiLoader5Line className="text-xl animate-spin" />
                  ) : (
                    <RiSendPlaneFill className="text-base" />
                  )}
                  <span>
                    {isLoading ? "Transmitting..." : content.contact.btnSend || "Send Transmission"}
                  </span>
                </motion.button>

                <span className="text-xs font-mono text-white/40 hidden sm:inline">
                  ⚡ Response guaranteed within 24h
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

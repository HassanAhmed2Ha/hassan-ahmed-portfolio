import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";
import { 
  RiSendPlaneFill, 
  RiLoader5Line, 
  RiCheckboxCircleLine, 
  RiErrorWarningLine, 
  RiMailLine,
  RiMapPinLine,
  RiTimeLine,
  RiFileCopyLine,
  RiCheckLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTerminalBoxLine,
  RiExternalLinkLine
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
            "Transmission received successfully. I will review your inquiry and respond within 24 hours.",
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
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-4 xl:px-0 relative z-10 w-full max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-14 md:mb-16">
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

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Direct Telemetry & Scientific Connection */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Direct Email Horizon Card */}
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-5 relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3 text-accent font-mono text-xs font-semibold uppercase tracking-wider">
                  <RiMailLine className="text-lg" />
                  <span>Direct Transmission</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-x-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 hover:border-accent/40 text-[11px] font-mono text-white/70 hover:text-accent transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <RiCheckLine className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <RiFileCopyLine />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1">
                <a
                  href={`mailto:${content.contact.directEmail}`}
                  className="text-lg md:text-xl font-mono font-medium text-white hover:text-accent transition-colors block break-all"
                >
                  {content.contact.directEmail}
                </a>
                <p className="text-xs text-white/50 font-sans">
                  Click to open default mail client or use the interactive dispatch portal.
                </p>
              </div>
            </div>

            {/* Operational Telemetry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Location & Timezone */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-2">
                <div className="flex items-center gap-x-2 text-white/40 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  <RiMapPinLine className="text-accent text-sm" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-medium text-white/90">
                  {content.contact.location || "Alexandria, Egypt (UTC+2)"}
                </div>
              </div>

              {/* Response Horizon */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-2">
                <div className="flex items-center gap-x-2 text-white/40 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  <RiTimeLine className="text-emerald-400 text-sm" />
                  <span>Response SLA</span>
                </div>
                <div className="text-sm font-medium text-emerald-400 flex items-center gap-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{content.contact.responseTime || "< 24 Hours"}</span>
                </div>
              </div>
            </div>

            {/* Scientific Profiles & Networks */}
            <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 font-semibold">
                Verified Research & Engineering Profiles
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/HassanAhmed2Ha"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-x-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-accent/40 text-xs font-mono text-white/80 hover:text-accent transition-all group"
                >
                  <RiGithubLine className="text-base text-white/60 group-hover:text-accent" />
                  <span>GitHub</span>
                  <RiExternalLinkLine className="text-xs text-white/30 group-hover:text-accent" />
                </a>

                <a
                  href="https://www.linkedin.com/in/hassan-ahmed2007/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-x-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-accent/40 text-xs font-mono text-white/80 hover:text-accent transition-all group"
                >
                  <RiLinkedinBoxLine className="text-base text-white/60 group-hover:text-accent" />
                  <span>LinkedIn</span>
                  <RiExternalLinkLine className="text-xs text-white/30 group-hover:text-accent" />
                </a>

                <a
                  href="https://orcid.org/0009-0005-0306-0898"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-x-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-accent/40 text-xs font-mono text-white/80 hover:text-accent transition-all group"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>ORCID ID</span>
                  <RiExternalLinkLine className="text-xs text-white/30 group-hover:text-accent" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Dispatch Form */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.005] backdrop-blur-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden text-left shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            {/* Top Gateway Pill */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs font-mono text-white/50">
              <div className="flex items-center gap-x-2">
                <RiTerminalBoxLine className="text-accent text-base" />
                <span className="text-white/80 font-medium">Research Dispatch Interface</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70">Gateway Active</span>
              </div>
            </div>

            {/* Status alerts */}
            <AnimatePresence mode="wait">
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-xl flex items-center gap-x-3 text-sm font-mono border ${
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

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                    Full Name / Entity
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.name}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent focus:bg-white/[0.06] text-white placeholder-white/25 text-sm font-sans outline-none transition-all duration-200"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.email}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent focus:bg-white/[0.06] text-white placeholder-white/25 text-sm font-sans outline-none transition-all duration-200"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Row 2: Phone and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.phone}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent focus:bg-white/[0.06] text-white placeholder-white/25 text-sm font-sans outline-none transition-all duration-200"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                    Collaboration Scope / Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.subject}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent focus:bg-white/[0.06] text-white placeholder-white/25 text-sm font-sans outline-none transition-all duration-200"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                  Proposal or Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.contact.placeholders.message}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent focus:bg-white/[0.06] text-white placeholder-white/25 text-sm font-sans outline-none transition-all duration-200 h-[130px] resize-none"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-start">
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-x-2 px-8 py-3.5 rounded-xl font-bold font-sans text-sm text-primary bg-accent hover:bg-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300"
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
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

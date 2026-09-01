import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";
import { RiSendPlaneFill, RiLoader5Line, RiCheckboxCircleLine, RiErrorWarningLine, RiTerminalBoxLine } from "react-icons/ri";
import Circles from "../Circles";
import emailjs from "@emailjs/browser";
import { contentEn as content } from "../../src/data";

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
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
            "Message transmitted successfully. I will review and respond promptly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("SMTP failure response code received.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Transmission error. Please email directly at hassan.ahmed.2007.alex@gmail.com",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 relative z-20 w-full pb-32 flex items-center justify-center">
      <Circles />
      <div className="container mx-auto px-4 xl:px-0 relative z-10 w-full max-w-3xl">
        <div className="flex flex-col w-full text-center items-center">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show" 
              viewport={{ once: true, amount: 0.15 }}
              exit="hidden"
              className="h2 mb-4"
            >
              Get in Touch & <span className="font-serif italic font-normal text-accent">Collaborate</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show" 
              viewport={{ once: true, amount: 0.15 }}
              exit="hidden"
              className="max-w-xl mx-auto text-white/70 text-sm md:text-base leading-relaxed font-sans font-normal"
            >
              Direct channel for research inquiries, foundational ML benchmark evaluations, and scientific AI initiatives.
            </motion.p>
          </div>

          {/* Collaboration Terminal Wrapper */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.005] backdrop-blur-xl p-6 md:p-10 relative overflow-hidden text-left shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            {/* Terminal Micro Header */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.name}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:bg-white/[0.06] text-white placeholder-white/30 text-sm font-sans outline-none transition-all"
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
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:bg-white/[0.06] text-white placeholder-white/30 text-sm font-sans outline-none transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Row 2: Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:bg-white/[0.06] text-white placeholder-white/30 text-sm font-sans outline-none transition-all"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.subject}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:bg-white/[0.06] text-white placeholder-white/30 text-sm font-sans outline-none transition-all"
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
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:bg-white/[0.06] text-white placeholder-white/30 text-sm font-sans outline-none transition-all h-[140px] resize-none"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <div className="mt-3 flex justify-start">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-x-2 px-8 py-3.5 rounded-xl font-bold font-sans text-sm text-primary bg-accent hover:bg-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300"
                >
                  {isLoading ? (
                    <RiLoader5Line className="text-xl animate-spin" />
                  ) : (
                    <RiSendPlaneFill className="text-base" />
                  )}
                  <span>
                    {isLoading ? "Transmitting..." : "Send Transmission"}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

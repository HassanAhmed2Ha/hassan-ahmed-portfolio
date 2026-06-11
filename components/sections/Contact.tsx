import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";
import { RiSendPlaneFill, RiLoader5Line, RiCheckboxCircleLine, RiErrorWarningLine } from "react-icons/ri";
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
            "Message sent successfully! I will get back to you ASAP.",
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
          "Failed to send message. Please try again or email hassan.ahmed.2007.alex@gmail.com directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="min-h-screen py-24 relative z-20 w-full pb-32 flex items-center justify-center">
      <Circles />
      <div className="container mx-auto px-4 xl:px-0 relative z-10 w-full max-w-[750px]">
        <div className="flex flex-col w-full text-center">
          {/* Title */}
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="h2 text-center mb-8"
          >
            {content.contact.title} <span className="text-accent">.</span>
          </motion.h2>
          {/* Form container */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="liquid-glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-left "
          >
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-accent/5 blur-3xl rounded-full" />
            {/* Status alerts */}
            <AnimatePresence mode="wait">
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-xl flex items-center gap-x-3 text-sm md:text-base border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <RiCheckboxCircleLine className="text-2xl shrink-0" />
                  ) : (
                    <RiErrorWarningLine className="text-2xl shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.name}
                    className="input w-full"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.email}
                    className="input w-full"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              {/* Row 2: Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.phone}
                    className="input w-full"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={content.contact.placeholders.subject}
                    className="input w-full"
                    disabled={isLoading}
                  />
                </div>
              </div>
              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.contact.placeholders.message}
                  className="textarea w-full h-[150px]"
                  required
                  disabled={isLoading}
                />
              </div>
              {/* Submit Button */}
              <div className="mt-4 flex justify-center md:justify-start">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-x-2 px-8 py-3.5 rounded-full font-semibold text-white bg-accent hover:bg-red-400 hover:scale-105 shadow-[0_0_15px_rgba(241,48,36,0.4)] disabled:opacity-50 disabled:hover:scale-100 disabled:bg-accent transition-all duration-300 group min-w-[180px]"
                >
                  {isLoading ? (
                    <RiLoader5Line className="text-xl animate-spin" />
                  ) : (
                    <RiSendPlaneFill className="text-lg transform group-hover:translate-x-1  transition duration-300" />
                  )}
                  <span>
                    {isLoading
                      ? "Sending..."
                      : content.contact.btnSend}
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

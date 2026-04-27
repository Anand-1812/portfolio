"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const socials = [
  {
    label: "GitHub",
    handle: "@Anand-1812",
    href: "https://github.com/Anand-1812",
    icon: <Github size={20} />,
    hoverColor: "hover:text-white",
    hoverBorder: "hover:border-neutral-600",
  },
  {
    label: "LinkedIn",
    handle: "anand-kumar-d2005",
    href: "https://www.linkedin.com/in/anand-kumar-d2005",
    icon: <Linkedin size={20} />,
    hoverColor: "hover:text-[#0A66C2]",
    hoverBorder: "hover:border-[#0A66C2]/40",
  },
  {
    label: "LeetCode",
    handle: "@anand_1812",
    href: "https://leetcode.com/anand_1812",
    icon: <SiLeetcode size={20} />,
    hoverColor: "hover:text-[#FFA116]",
    hoverBorder: "hover:border-[#FFA116]/40",
  },
  {
    label: "Email",
    handle: "anand.work2005@gmail.com",
    href: "mailto:anand.work2005@gmail.com",
    icon: <Mail size={20} />,
    hoverColor: "hover:text-white",
    hoverBorder: "hover:border-neutral-600",
  },
];

type FormState = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Build a mailto link with the form data and open it
    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(
      `mailto:anand.work2005@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );

    // Optimistically show success after a short delay
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);

      // Reset back to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  const inputBase =
    "w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none transition-all duration-200 focus:border-neutral-600 focus:bg-neutral-900";

  return (
    <SectionWrapper id="contact" noBorder>
      {/* Heading */}
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-3 uppercase"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-500 text-base font-mono italic"
        >
          I&apos;m open to internship opportunities — shoot me a message.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 max-w-3xl mx-auto">
        {/* ── Left: Social Links ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-3"
        >
          <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1">
            Find me on
          </p>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className={`flex items-center gap-4 px-4 py-3 bg-neutral-900/40 border border-neutral-900
                rounded-2xl text-neutral-400 transition-all duration-200 group
                ${s.hoverColor} ${s.hoverBorder}`}
            >
              <span className="transition-transform duration-200 group-hover:scale-110">
                {s.icon}
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-current transition-colors">
                  {s.label}
                </span>
                <span className="text-sm font-mono truncate">{s.handle}</span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* ── Right: Contact Form ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-4">
            Send a message
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                disabled={status === "sending" || status === "success"}
                className={inputBase}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                disabled={status === "sending" || status === "success"}
                className={inputBase}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What's on your mind?"
                rows={5}
                value={form.message}
                onChange={handleChange}
                disabled={status === "sending" || status === "success"}
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Status feedback */}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs text-red-400 font-mono"
              >
                <AlertCircle size={13} />
                Please fill in all fields before sending.
              </motion.p>
            )}

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs text-green-400 font-mono"
              >
                <CheckCircle2 size={13} />
                Mail client opened — message ready to send!
              </motion.p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black
                text-sm font-semibold rounded-xl hover:bg-neutral-200 transition-colors
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                  />
                  Sending…
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={16} />
                  Sent!
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

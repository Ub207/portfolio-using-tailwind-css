"use client";

import { useState } from "react";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiCheckCircle } from "react-icons/hi";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())               e.name    = "Name is required";
    if (!form.email.trim())              e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim())            e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    // Simulate send (replace with real API call)
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value })),
  });

  return (
    <section id="contact" className="container py-24 md:py-32">

      {/* Heading */}
      <div className="mb-14" data-aos="fade-up">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
          Let&apos;s work together
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Get in <span className="text-accent">Touch</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

        {/* ── Left: Info ─────────────────────────────────────────── */}
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            I&apos;m open to freelance projects, full-time roles, and collaboration.
            Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:usmanubaidurrehman@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-[rgba(8,233,94,0.1)] text-accent
                group-hover:bg-[rgba(8,233,94,0.2)] transition-colors shrink-0">
                <AiOutlineMail size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <p className="text-sm font-semibold text-gray-200 group-hover:text-accent transition-colors">
                  usmanubaidurrehman@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-[rgba(8,233,94,0.1)] text-accent shrink-0">
                <FaPhone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                <p className="text-sm font-semibold text-gray-200">0317-0203221</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Follow me</p>
            <div className="flex gap-3">
              {[
                { icon: FaGithub,   href: "https://github.com/Ub207", label: "GitHub" },
                { icon: FaLinkedin, href: "#",                          label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl
                    border border-[#222] text-gray-400
                    hover:border-accent/40 hover:text-accent hover:bg-accent/5
                    transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Form ────────────────────────────────────────── */}
        <div data-aos="fade-up" data-aos-delay="200">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4
              bg-[#111] border border-[#222] rounded-2xl p-10">
              <HiCheckCircle className="w-14 h-14 text-accent" />
              <h3 className="text-xl font-bold">Message Sent!</h3>
              <p className="text-gray-400 text-sm">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-accent text-sm font-semibold underline underline-offset-2 hover:no-underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ubaid ur Rahman"
                  {...field("name")}
                  className={`w-full bg-[#111] border rounded-xl px-4 py-3 text-white text-sm
                    placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-200
                    ${errors.name
                      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                      : "border-[#222] focus:border-accent focus:ring-accent/20"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...field("email")}
                  className={`w-full bg-[#111] border rounded-xl px-4 py-3 text-white text-sm
                    placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-200
                    ${errors.email
                      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                      : "border-[#222] focus:border-accent focus:ring-accent/20"
                    }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  {...field("message")}
                  className={`w-full bg-[#111] border rounded-xl px-4 py-3 text-white text-sm
                    placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-200 resize-none
                    ${errors.message
                      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                      : "border-[#222] focus:border-accent focus:ring-accent/20"
                    }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-full bg-accent text-black font-bold text-sm
                  hover:bg-[#05c04e] hover:shadow-[0_0_24px_rgba(8,233,94,0.35)]
                  disabled:opacity-60 disabled:cursor-not-allowed
                  active:scale-95 transition-all duration-200"
              >
                {status === "loading" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

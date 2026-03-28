import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const SOCIALS = [
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/Ub207" },
  { icon: FaLinkedin, label: "LinkedIn",  href: "#" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#08E95E 1px, transparent 1px), linear-gradient(90deg, #08E95E 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* ── Left: Text ────────────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight animate-fade-up-1">
              Hi, I&apos;m{" "}
              <span className="text-accent">Ubaid</span>
              <br />
              <span className="text-white">ur Rahman</span>
            </h1>

            <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-up-2">
              Full Stack Developer specialising in{" "}
              <span className="text-white font-medium">Next.js</span>,{" "}
              <span className="text-white font-medium">React</span> &amp;{" "}
              <span className="text-white font-medium">TypeScript</span>.
              Building modern web experiences that are fast, accessible and
              visually polished.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 animate-fade-up-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-black font-bold
                  px-7 py-3.5 rounded-full text-sm
                  hover:bg-[#05c04e] hover:shadow-[0_0_24px_rgba(8,233,94,0.4)]
                  active:scale-95 transition-all duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#333] text-white
                  px-7 py-3.5 rounded-full text-sm font-semibold
                  hover:border-accent/50 hover:bg-accent/5
                  active:scale-95 transition-all duration-200"
              >
                <FaDownload className="w-3.5 h-3.5" />
                Hire Me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 animate-fade-up-4">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full
                    border border-[#333] text-gray-400
                    hover:border-accent/50 hover:text-accent hover:bg-accent/5
                    transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-gray-600 text-sm">
                Open to freelance &amp; full-time roles
              </span>
            </div>
          </div>

          {/* ── Right: Profile image ───────────────────────────────── */}
          <div className="flex-shrink-0 animate-fade-in">
            {/* Floating ring decoration */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-xl" />
              {/* Accent ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-[float_4s_ease-in-out_infinite]" />
              {/* Inner ring */}
              <div className="absolute inset-3 rounded-full border border-accent/15" />
              {/* Profile image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-[#111] border-2 border-accent/20">
                <Image
                  src="/profile-picture.jpeg"
                  alt="Qari Hafiz Ubaid ur Rahman"
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 248px, 288px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge — years */}
              <div className="absolute -bottom-2 -right-2 bg-[#111] border border-[#222] rounded-2xl px-3 py-2 shadow-card">
                <p className="text-xs text-gray-400 leading-none">Projects</p>
                <p className="text-xl font-black text-accent leading-tight">6+</p>
              </div>
              {/* Floating badge — tech */}
              <div className="absolute -top-2 -left-2 bg-[#111] border border-[#222] rounded-2xl px-3 py-2 shadow-card">
                <p className="text-xs text-gray-400 leading-none">Tech Stack</p>
                <p className="text-xl font-black text-accent leading-tight">6+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll to about">
            <HiArrowDown className="w-5 h-5 text-gray-600 hover:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const LINKS = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-[#222] shadow-[0_4px_32px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl font-black tracking-tight hover:text-accent transition-colors duration-200"
          >
            Ubaid<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors duration-200
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-accent
                    after:transition-all after:duration-300
                    ${isActive
                      ? "text-accent after:w-full"
                      : "text-gray-400 hover:text-white after:w-0 hover:after:w-full"
                    }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-black font-bold
              px-5 py-2 rounded-full text-sm hover:bg-[#05c04e]
              hover:shadow-[0_0_24px_rgba(8,233,94,0.35)]
              active:scale-95 transition-all duration-200"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {open
              ? <AiOutlineClose size={24} className="text-accent" />
              : <AiOutlineMenu  size={24} />
            }
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[#111] border-l border-[#222]
          flex flex-col pt-20 pb-10 px-6
          transition-transform duration-300 ease-in-out md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5"
          aria-label="Close menu"
        >
          <AiOutlineClose size={22} className="text-accent" />
        </button>

        <nav className="flex flex-col gap-1">
          {LINKS.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 px-4 rounded-xl text-base font-semibold transition-colors duration-150
                  ${isActive
                    ? "text-accent bg-[rgba(8,233,94,0.1)]"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center bg-accent text-black font-bold
              w-full py-3 rounded-full text-sm hover:bg-[#05c04e] transition-colors"
          >
            Hire Me
          </a>
        </div>
      </aside>
    </>
  );
}

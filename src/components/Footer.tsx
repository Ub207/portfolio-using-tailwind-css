import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const LINKS = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="#hero" className="text-lg font-black hover:text-accent transition-colors">
            Ubaid<span className="text-accent">.</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-gray-500 hover:text-accent transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ub207"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg
                border border-[#222] text-gray-500
                hover:border-accent/40 hover:text-accent transition-all duration-150"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-lg
                border border-[#222] text-gray-500
                hover:border-accent/40 hover:text-accent transition-all duration-150"
            >
              <FaLinkedin size={15} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[#161616] text-center">
          <p className="text-xs text-gray-600 flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Qari Hafiz Ubaid ur Rahman. Built with{" "}
            <FaHeart className="text-accent w-3 h-3" />
            using Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

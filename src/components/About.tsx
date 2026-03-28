import { FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const STATS = [
  { icon: FaCode,          value: "6+",       label: "Projects Built" },
  { icon: FaBriefcase,     value: "1+",       label: "Years Learning" },
  { icon: FaGraduationCap, value: "GIAIC",    label: "AI & Web3 Program" },
];

export default function About() {
  return (
    <section id="about" className="container py-24 md:py-32">

      {/* Heading */}
      <div className="mb-14" data-aos="fade-up">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
          Who I am
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          About <span className="text-accent">Me</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Bio ──────────────────────────────────────────── */}
        <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">
          <p className="text-gray-300 text-base leading-relaxed">
            I&apos;m <span className="text-white font-semibold">Qari Hafiz Ubaid ur Rahman</span>,
            a passionate Full Stack Developer and student at{" "}
            <span className="text-accent font-semibold">GIAIC</span>, where I&apos;m
            pursuing an advanced course in Artificial Intelligence, Web 3.0, and
            the Metaverse.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            I specialise in building clean, performant web applications using
            modern technologies like <span className="text-white">Next.js</span>,{" "}
            <span className="text-white">TypeScript</span>, and{" "}
            <span className="text-white">Tailwind CSS</span>. I focus on writing
            maintainable code and delivering polished user experiences.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            When I&apos;m not coding, I explore emerging technologies — AI, Web 3.0,
            and blockchain — constantly pushing to stay ahead of the curve.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "AI/ML"].map((skill) => (
              <span
                key={skill}
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full
                  bg-[rgba(8,233,94,0.08)] text-accent border border-accent/20"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-black font-bold
                px-6 py-3 rounded-full text-sm
                hover:bg-[#05c04e] hover:shadow-[0_0_24px_rgba(8,233,94,0.35)]
                active:scale-95 transition-all duration-200"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* ── Right: Stats ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4" data-aos="fade-up" data-aos-delay="200">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-5 bg-[#111] border border-[#222] rounded-2xl p-5
                hover:border-accent/30 hover:bg-[#161616]
                transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-[rgba(8,233,94,0.1)] text-accent group-hover:bg-[rgba(8,233,94,0.15)]
                transition-colors shrink-0">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-3xl font-black text-accent leading-none">{value}</p>
                <p className="text-sm text-gray-400 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

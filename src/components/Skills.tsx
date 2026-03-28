import {
  SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiHtml5, SiCss3, SiJavascript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const SKILLS = [
  { icon: SiTypescript, name: "TypeScript",  level: 80, color: "#3178C6" },
  { icon: FaReact,      name: "React.js",    level: 85, color: "#61DAFB" },
  { icon: SiNextdotjs,  name: "Next.js",     level: 75, color: "#ffffff" },
  { icon: SiTailwindcss,name: "Tailwind CSS",level: 90, color: "#38BDF8" },
  { icon: SiNodedotjs,  name: "Node.js",     level: 65, color: "#68A063" },
  { icon: SiJavascript, name: "JavaScript",  level: 82, color: "#F7DF1E" },
  { icon: SiHtml5,      name: "HTML5",       level: 95, color: "#E34F26" },
  { icon: SiCss3,       name: "CSS3",        level: 88, color: "#1572B6" },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-24 md:py-32">

      {/* Heading */}
      <div className="mb-14" data-aos="fade-up">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
          What I use
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Tech <span className="text-accent">Stack</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* ── Left: Skill cards ──────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-3">
          {SKILLS.map(({ icon: Icon, name, color }, i) => (
            <div
              key={name}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="group flex items-center gap-3 bg-[#111] border border-[#222]
                rounded-2xl p-4 hover:border-accent/30 hover:bg-[#161616]
                hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl shrink-0
                  bg-black/40 group-hover:scale-110 transition-transform duration-200"
              >
                <Icon size={22} style={{ color }} />
              </div>
              <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* ── Right: Progress bars ───────────────────────────────── */}
        <div className="space-y-5" data-aos="fade-up" data-aos-delay="150">
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            I have a strong foundation in modern web technologies, with hands-on
            experience building full-stack applications. I&apos;m constantly expanding
            my knowledge in AI, Web 3.0, and cloud infrastructure.
          </p>

          {SKILLS.slice(0, 5).map(({ name, level, color }, i) => (
            <div key={name} data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-semibold text-gray-300">{name}</span>
                <span className="text-xs font-bold" style={{ color }}>{level}%</span>
              </div>
              <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${level}%`,
                    background: `linear-gradient(90deg, ${color}88, ${color})`,
                  }}
                />
              </div>
            </div>
          ))}

          <div className="pt-4 flex flex-wrap gap-2">
            {["Git", "REST APIs", "Sanity CMS", "Vercel", "Figma"].map((tool) => (
              <span
                key={tool}
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full
                  bg-[#111] border border-[#222] text-gray-400
                  hover:border-accent/30 hover:text-accent transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

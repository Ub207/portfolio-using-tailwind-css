import Card from "./Card";

const PROJECTS = [
  {
    id: 1,
    title: "Static Resume",
    desc: "A clean static resume built using pure HTML and CSS, showcasing personal information, education, and experience.",
    img: "/static-resume.png",
    tags: ["HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Dynamic Resume",
    desc: "A dynamic resume featuring real-time interactivity and data binding, built with JavaScript and styled with modern CSS.",
    img: "/Dynamicresume.png",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Editable Resume",
    desc: "An interactive resume built with TypeScript, HTML & CSS, allowing real-time updates and live customisation.",
    img: "/Editableresume.png",
    tags: ["TypeScript", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "World Watches Website",
    desc: "Multipage website with React components — Home, About, Contact, and Watches pages. Fully responsive.",
    img: "/multipge website.png",
    tags: ["React", "Node", "Tailwind", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Nike Marketplace",
    desc: "A full-featured e-commerce marketplace with cart, wishlist, filtering, Sanity CMS integration and product detail pages.",
    img: "/dynamic website.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Sanity"],
    github: "https://github.com/Ub207/marketplace-hakathone",
    live: "#",
  },
  {
    id: 6,
    title: "Sharable Resume",
    desc: "A TypeScript-based sharable resume with dynamic content, allowing users to showcase and share their skills online.",
    img: "/sherable-resume.png",
    tags: ["TypeScript", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-24 md:py-32">

      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14" data-aos="fade-up">
        <div>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            My work
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs">
          A selection of projects I&apos;ve built while learning and growing as a developer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <Card key={project.id} {...project} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}

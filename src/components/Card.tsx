import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface CardProps {
  title:  string;
  desc:   string;
  img:    string;
  tags:   string[];
  github: string;
  live:   string;
  delay?: number;
}

export default function Card({ title, desc, img, tags, github, live, delay = 0 }: CardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group bg-[#111] border border-[#222] rounded-2xl overflow-hidden
        hover:border-accent/30 hover:-translate-y-1
        hover:shadow-[0_0_24px_rgba(8,233,94,0.12)]
        transition-all duration-300 flex flex-col"
    >
      {/* Image with overlay */}
      <div className="relative overflow-hidden aspect-[16/10] bg-[#0d0d0d]">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0
          group-hover:opacity-100 transition-opacity duration-300
          flex items-center justify-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 border border-white/20 text-white
              px-4 py-2.5 rounded-full text-sm font-semibold
              hover:bg-accent hover:border-accent hover:text-black
              transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={15} /> Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-black
              px-4 py-2.5 rounded-full text-sm font-bold
              hover:bg-[#05c04e] transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt size={13} /> Live
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-base font-bold text-white leading-snug group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full
                bg-[rgba(8,233,94,0.08)] text-accent border border-accent/15"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

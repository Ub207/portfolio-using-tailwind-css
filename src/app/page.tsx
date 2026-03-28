"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar  from "@/components/Navbar";
import Hero    from "@/components/Hero";
import About   from "@/components/About";
import Projects from "@/components/Projects";
import Skills  from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      duration: 800,
      delay: 50,
      mirror: true,
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

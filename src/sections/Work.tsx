import AnimatedSection from "../components/AnimatedSection";
import { useState } from "react";

type Props = {
  language: string;
};

function Work({ language }: Props) {
  const t = {
    title: language === "es" ? "Proyectos" : "Projects",
    subtitle: language === "es" ? "Hechos con amor" : "Crafted with Love",
    categories:
      language === "es"
        ? ["Todos", "UI/UX", "Análisis", "Aprendizaje Automático"]
        : ["All", "UI/UX", "Analytics", "Machine Learning"],
  };

  const rawCategories = ["All", "UI/UX", "Analytics", "Machine Learning"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Studyeasy",
      image: "/Study.png",
      category: "UI/UX",
      link: "https://github.com/RGarcia1881/StudyEasy.git",
    },
    {
      title: "Banklytics",
      image: "/Banklytics.png",
      category: "Analytics",
      link: "https://github.com/dfrancohdez/proyecto-distribuidos.git",
    },
    {
      title: "Water Status",
      image: "/Water.png",
      category: "Machine Learning",
      link: "https://github.com/RGarcia1881/NeuronalNet.git",
    },
  ];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <AnimatedSection id="work" className="pt-16 pb-10 bg-white text-center">
      {/* Encabezado */}
      <h3 className="text-secondary font-abel text-center uppercase tracking-widest mb-2">
        {t.title}
      </h3>
      <div className="h-[2px] w-6 border-b border-secondary mx-auto mb-4"></div>
      <h2 className="text-2xl md:text-3xl text-center font-roboto text-primary uppercase mb-6">
        {t.subtitle}
      </h2>

      {/* Filtros */}
      <div className="flex justify-center flex-wrap gap-4 mb-8 text-sm font-abel uppercase">
        {rawCategories.map((cat, i) => (
          <button
            key={cat}
            className={`transition-colors px-3 py-1 border-b-2 ${
              activeCategory === cat
                ? "text-primary border-primary"
                : "text-gray-400 border-transparent hover:text-primary"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {t.categories[i]}
          </button>
        ))}
      </div>

      {/* Proyectos */}
      <div className="flex flex-wrap justify-center gap-8 px-4 max-w-6xl mx-auto">
        {filtered.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden shadow-md w-full max-w-[350px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none">
              <i className="bx bxl-github text-3xl text-white mr-2"></i>
              <span className="text-white text-sm tracking-widest uppercase">
                {project.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Work;

import AnimatedSection from "../components/AnimatedSection";
import AnimatedCircle from "../components/AnimatedCircle";

type Props = {
  language: string;
};

function About({ language }: Props) {
  const t = {
    aboutMe: language === "es" ? "SOBRE MÍ" : "ABOUT ME",
    experienceTitle:
      language === "es"
        ? "5 AÑOS DE EXPERIENCIA CREANDO SOLUCIONES"
        : "5 YEARS OF EXPERIENCE CODING SOLUTIONS",
    description:
      language === "es"
        ? "Ingeniero en Sistemas Computacionales con más de 5 años de experiencia diseñando, desarrollando y optimizando soluciones tecnológicas. He trabajado en diversos proyectos como aplicaciones móviles/web, sistemas embebidos y arquitecturas en la nube."
        : "Computer Systems Engineer with 5+ years of experience in designing, developing, and optimizing technology solutions. Worked on diverse projects including mobile/web applications, embedded systems, and cloud architectures.",
    coreTech:
      language === "es" ? "TECNOLOGÍAS PRINCIPALES" : "CORE TECHNOLOGIES",
    familiarTech:
      language === "es" ? "TECNOLOGÍAS FAMILIARES" : "FAMILIAR TECHNOLOGIES",
  };

  return (
    <AnimatedSection
      id="about"
      className="pt-8 md:pt-16 px-4 md:px-12 bg-white text-center -mt-12 md:mt-0"
    >
      {/* Foto */}
      <img
        src="/About.jpg"
        alt="Raúl Bautista"
        className="w-32 h-32 object-cover rounded-full mx-auto mb-6"
      />

      {/* Descripción */}
      <h3 className="text-sm font-abel text-center text-secondary uppercase tracking-widest mb-2">
        {t.aboutMe}
      </h3>
      <div className="mt-2 mb-3 h-[2px] w-6 border-b border-secondary mx-auto"></div>

      <h2 className="text-xl text-center md:text-2xl font-roboto uppercase text-primary mb-2">
        {t.experienceTitle}
      </h2>
      <p className="text-secondary font-abel max-w-2xl mx-auto mb-10 uppercase text-sm md:text-base leading-relaxed text-center">
        {t.description}
      </p>

      {/* Core technologies */}
      <h3 className="text-accent text-center font-roboto text-xl md:text-2xl uppercase tracking-wide mb-6">
        {t.coreTech}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mb-10">
        {[
          { label: "HTML5", percent: 95 },
          { label: "JS", percent: 85 },
          { label: "CSS", percent: 80 },
          { label: "C", percent: 80 },
          { label: "PYTHON", percent: 95 },
          { label: "SQL", percent: 85 },
          { label: "REACT/REACT NATIVE", percent: 80 },
          { label: "AWS", percent: 80 },
        ].map((tech) => (
          <AnimatedCircle
            key={tech.label}
            label={tech.label}
            percent={tech.percent}
          />
        ))}
      </div>

      {/* Familiar technologies */}
      <h3 className="text-accent font-roboto text-xl md:text-2xl text-center uppercase tracking-wide mb-6">
        {t.familiarTech}
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-6 text-5xl text-primary">
        <i className="bx bxl-django"></i>
        <i className="bx bxl-arduino"></i>
        <i className="bx bx-chip"></i>
        <i className="bx bxl-apple"></i>
        <i className="bx bxl-android"></i>
      </div>
    </AnimatedSection>
  );
}

export default About;

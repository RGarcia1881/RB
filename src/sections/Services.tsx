import AnimatedSection from "../components/AnimatedSection";
import ServiceCard from "../components/ServiceCard";

type Props = {
  language: string;
};

function Services({ language }: Props) {
  const t = {
    sectionTitle: language === "es" ? "SERVICIOS" : "SERVICES",
    subtitle: language === "es" ? "LO QUE HAGO" : "WHAT I DO",
  };

  const services =
    language === "es"
      ? [
          {
            icon: "bx-palette",
            title: "Diseño Web",
            description:
              "Diseño de sitios atractivos y modernas con navegación intuitiva.",
          },
          {
            icon: "bx-code-alt",
            title: "Frontend",
            description:
              "Interfaces modernas y responsivas con React y Tailwind.",
          },
          {
            icon: "bx-data",
            title: "Backend",
            description:
              "APIs y servidores con Node, Django o soluciones serlverless.",
          },
          {
            title: "APLICACIONES MÓVILES",
            icon: "bx bx-mobile-alt",
            description: "Apps multiplataforma con React Native y Flutter.",
          },
          {
            title: "GESTIÓN DE PROYECTOS",
            icon: "bx bx-calendar-check",
            description:
              "Gestión de tareas, estimaciones y coordinación de equipos.",
          },
          {
            title: "CAPACITACIÓN",
            icon: "bx bx-chalkboard",
            description:
              "Talleres personalizados y mentoría en tecnologías modernas.",
          },
        ]
      : [
          {
            icon: "bx-palette",
            title: "Web Design",
            description:
              "Designing attractive websites with modern layouts and intuitive navigation.",
          },
          {
            icon: "bx-code-alt",
            title: "Frontend",
            description:
              "Building modern, responsive interfaces using React and Tailwind.",
          },
          {
            icon: "bx-data",
            title: "Backend",
            description:
              "Designing scalable APIs and server logic using Node, Django, or serverless stacks.",
          },
          {
            title: "MOBILE APP DEVELOPMENT",
            icon: "bx bx-mobile-alt",
            description:
              "Cross-platform apps built with React Native and Flutter.",
          },
          {
            title: "PROJECT PLANNING",
            icon: "bx bx-calendar-check",
            description:
              "Efficient task management, estimation and team coordination.",
          },
          {
            title: "TRAINING PROGRAMS",
            icon: "bx bx-chalkboard",
            description:
              "Personalized workshops and mentoring in tech stacks and tools.",
          },
        ];

  return (
    <AnimatedSection id="services" className="py-16 px-4 bg-white text-center">
      <h3 className="text-secondary font-abel text-center uppercase tracking-widest mb-2">
        {t.sectionTitle}
      </h3>
      <div className="mt-2 mb-6 h-[2px] w-6 border-b border-secondary mx-auto"></div>
      <h2 className="text-2xl md:text-3xl text-center font-roboto text-primary mb-10 uppercase">
        {t.subtitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 uppercase gap-8 place-items-center max-w-6xl mx-auto px-4">
        {services.map((srv) => (
          <ServiceCard key={srv.title} {...srv} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Services;

import AnimatedSection from "../components/AnimatedSection";

type Props = {
  language: string;
};

function Resume({ language }: Props) {
  const t = {
    resume: language === "es" ? "TRAYECTORIA" : "RESUME",
    heading:
      language === "es" ? "Experiencia académica" : "People I've Worked With",
    awardsTitle:
      language === "es" ? "Premios y Reconocimientos" : "Awards & Recognitions",
  };

  const education =
    language === "es"
      ? [
          {
            institution: "INSTITUTO POLITÉCNICO NACIONAL",
            detail: "ESCUELA SUPERIOR DE CÓMPUTO",
            title: "Ingeniero en Sistemas Computacionales",
            period: "AGO 2020 - DIC 2025",
          },
          {
            institution: "INSTITUTO POLITÉCNICO NACIONAL",
            detail: "C.E.C.Y.T. NO.9: JUAN DE DIOS BÁTIZ",
            title: "Técnico en Programación",
            period: "AGO 2016 - AGO 2020",
          },
        ]
      : [
          {
            institution: "INSTITUTO POLITÉCNICO NACIONAL",
            detail: "ESCUELA SUPERIOR DE CÓMPUTO",
            title: "Computer Systems Engineer",
            period: "AUG 2020 - DEC 2025",
          },
          {
            institution: "INSTITUTO POLITÉCNICO NACIONAL",
            detail: "C.E.C.Y.T. NO.9: JUAN DE DIOS BÁTIZ",
            title: "Programming Technician",
            period: "AUG 2016 - AUG 2020",
          },
        ];

  const awards =
    language === "es"
      ? [
          {
            title: "1ER LUGAR – MEJOR PROYECTO DE E-COMMERCE | EXPO BATIZ 2018",
            description:
              "Premio por desarrollar una plataforma de comercio electrónico innovadora con pasarelas de pago integradas e interfaz responsiva.",
          },
          {
            title: "2DO LUGAR – MEJOR PROYECTO TECNOLÓGICO | EXPO BATIZ 2019",
            description:
              "Reconocimiento por crear una app web de seguridad familiar con monitoreo en tiempo real y alertas de emergencia.",
          },
        ]
      : [
          {
            title: "1ST PLACE – BEST E-COMMERCE PROJECT | EXPO BATIZ 2018",
            description:
              "Awarded for the development of an innovative e-commerce platform with integrated payment gateways and responsive UI.",
          },
          {
            title: "2ND PLACE – BEST TECHNOLOGICAL PROJECT | EXPO BATIZ 2019",
            description:
              "Recognized for creating a family security web app with real-time monitoring and emergency alert features.",
          },
        ];

  return (
    <AnimatedSection id="resume" className="py-16 px-4 bg-white">
      <h3 className="text-secondary font-abel uppercase tracking-widest mb-2 text-center">
        {t.resume}
      </h3>
      <div className="mt-2 mb-6 h-[2px] w-6 border-b border-secondary mx-auto"></div>
      <h2 className="text-2xl md:text-3xl font-roboto text-primary mb-10 text-center uppercase">
        {t.heading}
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="border-l-2 border-gray-300 ml-1 md:ml-[50%] h-full absolute top-0"></div>
        <div className="flex flex-col gap-12 md:gap-60">
          {education.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative flex justify-between items-start"
              >
                {isLeft && (
                  <div className="w-1/2 pr-16 text-right mr-auto">
                    <h4 className="text-sm font-roboto uppercase">
                      {item.institution}
                    </h4>
                    <p className="text-xs font-roboto text-secondary">
                      {item.detail}
                    </p>
                    <p className="text-sm text-accent font-abel uppercase mt-1">
                      {item.title}
                    </p>
                  </div>
                )}

                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-center text-xs font-roboto p-2 leading-tight shadow-md">
                    {item.period}
                  </div>
                  {idx < education.length - 1 && (
                    <div className="h-32 w-[2px] bg-gray-300"></div>
                  )}
                </div>

                {!isLeft && (
                  <div className="w-1/2 pl-16 text-left ml-auto">
                    <h4 className="text-sm font-roboto uppercase">
                      {item.institution}
                    </h4>
                    <p className="text-xs font-roboto text-secondary">
                      {item.detail}
                    </p>
                    <p className="text-sm font-abel text-accent uppercase mt-1">
                      {item.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20 max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-bold uppercase mb-6">{t.awardsTitle}</h3>
        <div className="flex flex-col items-start gap-6">
          {awards.map((award, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <i className="bx bxs-award text-2xl text-accent mt-1"></i>
              <div className="text-left">
                <h4 className="text-sm font-roboto uppercase">{award.title}</h4>
                <p className="text-xs font-roboto uppercase text-gray-500">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Resume;

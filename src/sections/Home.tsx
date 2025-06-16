import AnimatedSection from "../components/AnimatedSection";

type Props = {
  language: string;
};

function Home({ language }: Props) {
  const t = {
    greeting: language === "es" ? "HOLA, SOY" : "HI, I'M",
    profession:
      language === "es"
        ? "INGENIERO EN SISTEMAS COMPUTACIONALES"
        : "COMPUTER SYSTEMS ENGINEER",
  };

  return (
    <AnimatedSection id="home">
      <div className="flex flex-col md:flex-row md:h-screen overflow-hidden -ml-6">
        {/* Imagen izquierda con degradado */}
        <div className="w-full md:w-1/2 relative aspect-[4/2.5] md:aspect-auto md:h-full">
          <img
            src="/Home.jpg"
            alt="Raúl Bautista"
            className="absolute top-0 left-0 w-full h-full object-cover object-top md:object-left"
            style={{
              maskImage: "linear-gradient(to right, black 75%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, black 75%, transparent)",
            }}
          />
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 pt-32 md:pt-0">
          <h2 className="text-secondary text-lg font-roboto mb-1">
            {t.greeting}
          </h2>

          <h1 className="text-4xl md:text-5xl text-accent font-roboto">
            RAÚL BAUTISTA
          </h1>

          <div className="mt-2 mb-3 h-[2px] w-16 border-b border-secondary"></div>

          <p className="text-secondary text-base md:text-lg tracking-wide mb-4 font-abel">
            {t.profession}
          </p>

          <img
            src="/RBG.png"
            alt="RB Logo"
            className="w-14 h-14 object-contain"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Home;

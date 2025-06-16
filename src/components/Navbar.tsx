import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const labels = {
    en: ["HOME", "ABOUT", "SERVICES", "RESUME", "WORK", "CONTACT"],
    es: [
      "INICIO",
      "SOBRE MÍ",
      "SERVICIOS",
      "TRAYECTORIA",
      "PROYECTOS",
      "CONTACTO",
    ],
  };

  const sectionIds = ["home", "about", "services", "resume", "work", "contact"];
  const translatedLinks = labels[language];

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          if (sectionId) {
            setActiveLink(sectionId.toUpperCase());
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/RBG.png" alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        {/* Botón menú (mobile) */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="bx bx-menu cursor-pointer"></i>
        </button>

        {/* Menú de navegación */}
        <ul
          className={`${
            isOpen ? "flex animate-fadeIn" : "hidden"
          } absolute top-20 right-4 w-52 bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex-col items-start gap-4 md:flex md:static md:w-auto md:flex-row md:items-center md:bg-transparent md:shadow-none md:border-0 font-abel text-base uppercase`}
        >
          {translatedLinks.map((label, idx) => {
            const id = sectionIds[idx];
            const isActive = activeLink === id.toUpperCase();
            return (
              <li key={id} className="relative w-full md:w-auto text-left">
                <a
                  href={`#${id}`}
                  className={`block w-full transition-colors duration-300 ${
                    isActive
                      ? "text-accent font-abel"
                      : "text-secondary hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
                {isActive && (
                  <span className="absolute -bottom-1 left-1 w-1.5 h-1.5 bg-accent rounded-full md:hidden"></span>
                )}
              </li>
            );
          })}

          {/* Botón de idioma */}
          <li className="w-full md:w-auto">
            <button
              onClick={toggleLanguage}
              className="uppercase text-secondary border border-secondary px-2 py-1 text-xs rounded hover:text-primary transition"
            >
              {language === "en" ? "ESPAÑOL" : "ENGLISH"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

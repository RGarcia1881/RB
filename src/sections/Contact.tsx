import AnimatedSection from "../components/AnimatedSection";

type Props = {
  language: string;
};

function Contact({ language }: Props) {
  const t = {
    title: language === "es" ? "Contacto" : "Contact",
    subtitle: language === "es" ? "Hablemos" : "Get in touch",
    placeholders: {
      name: language === "es" ? "Nombre" : "Name",
      email: "Email",
      message: language === "es" ? "Mensaje" : "Message",
    },
    send: language === "es" ? "Enviar mensaje" : "Send Message",
    download: language === "es" ? "Descargar CV" : "Download CV",
    whatsapp: language === "es" ? "56 - 3035 - 0916" : "56 - 3035 - 0916",
    email: "rgb101001@gmail.com",
    location: language === "es" ? "México, CDMX" : "Mexico City, MX",
    social:
      language === "es" ? "Dale un vistazo a mi mundo" : "Behind the scenes",
  };

  const cvFile =
    language === "es" ? "/RBautistaCVEsp.pdf" : "/RBautistaCVEng.pdf";

  return (
    <AnimatedSection id="contact" className="bg-white text-center">
      {/* Título */}
      <h3 className="text-secondary font-abel uppercase tracking-widest text-center mb-2">
        {t.title}
      </h3>
      <div className="h-[2px] w-6 border-b border-secondary mx-auto mb-4"></div>
      <h2 className="text-2xl md:text-3xl font-roboto text-center text-primary uppercase mb-10">
        {t.subtitle}
      </h2>

      {/* Formulario */}
      <form
        action="https://formspree.io/f/xqabpqpe"
        method="POST"
        className="max-w-xl mx-auto space-y-6 px-4"
      >
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            placeholder={t.placeholders.name}
            className="peer w-full border-b border-gray-300 focus:outline-none py-2 text-sm tracking-wide bg-transparent text-accent placeholder:text-secondary"
          />
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 peer-focus:w-full"></span>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            placeholder={t.placeholders.email}
            className="peer w-full border-b border-gray-300 focus:outline-none py-2 text-sm tracking-wide bg-transparent text-accent placeholder:text-secondary"
          />
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 peer-focus:w-full"></span>
        </div>

        <div className="relative">
          <textarea
            name="message"
            required
            rows={4}
            placeholder={t.placeholders.message}
            className="peer w-full border-b border-gray-300 focus:outline-none py-2 text-sm tracking-wide resize-none bg-transparent text-accent placeholder:text-secondary"
          ></textarea>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 peer-focus:w-full"></span>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all"
          >
            {t.send}
          </button>
        </div>
      </form>

      {/* Descargar CV */}
      <div className="mt-6">
        <a
          href={cvFile}
          download
          className="text-secondary text-center hover:text-accent text-sm transition-colors duration-300"
        >
          {t.download}
        </a>
      </div>

      {/* Información */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto px-4 text-sm">
        <div className="flex flex-col items-center">
          <i className="bx bxl-whatsapp text-2xl mb-2 text-primary"></i>
          <p>{t.whatsapp}</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="bx bxs-envelope text-2xl mb-2 text-primary"></i>
          <p>{t.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="bx bxs-map text-2xl mb-2 text-primary"></i>
          <p>{t.location}</p>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="mt-16 text-center">
        <p className="text-sm uppercase text-secondary tracking-widest mb-4">
          {t.social}
        </p>
        <div className="flex justify-center gap-8 text-4xl">
          <a
            href="https://www.instagram.com/homin_us_nocturna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/raúl-bautista-858b20264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Contact;

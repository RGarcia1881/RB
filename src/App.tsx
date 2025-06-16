import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Resume from "./sections/Resume";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

function MainApp() {
  const { language } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fade, setFade] = useState(false); // 🔸 nuevo estado para transición

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => setShowSplash(false), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // 🔸 efecto que aplica transición cuando cambia el idioma
  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timer);
  }, [language]);

  if (showSplash) {
    return <Splash fadeOut={fadeOut} />;
  }

  return (
    <div className="bg-white text-black">
      <Navbar />
      <main
        className={`scroll-smooth transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <Home language={language} />
        <About language={language} />
        <Services language={language} />
        <Resume language={language} />
        <Work language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  id: string;
  children: React.ReactNode;
};

function AnimatedSection({ id, children }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`w-full relative px-6 py-10 section-hidden ${
        isVisible ? "section-visible" : ""
      }`}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;

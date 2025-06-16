import { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

function AnimatedSection({ id, children, className }: AnimatedSectionProps) {
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
      className={`min-h-screen px-6 py-16 section-hidden ${
        isVisible ? "section-visible" : ""
      } ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;

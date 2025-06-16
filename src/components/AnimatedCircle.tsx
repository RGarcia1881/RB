import { useEffect, useRef, useState } from "react";

interface AnimatedCircleProps {
  percent: number;
  label: string;
}

function AnimatedCircle({ percent, label }: AnimatedCircleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = isVisible
    ? circumference * (1 - percent / 100)
    : circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#363636"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1.2s ease-out",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="14"
          fill="#363636"
          fontWeight="bold"
        >
          {percent}%
        </text>
      </svg>
      <p className="mt-2 text-xs md:text-sm text-center">{label}</p>
    </div>
  );
}

export default AnimatedCircle;

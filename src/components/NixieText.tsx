import { useEffect, useState } from "react";

interface NixieTextProps {
  text: string;
  className?: string;
}

const NixieText = ({ text, className = "" }: NixieTextProps) => {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger flicker every second
      setFlicker(true);
      // Quick flicker sequence (broken bulb effect)
      setTimeout(() => setFlicker(false), 50);
      setTimeout(() => setFlicker(true), 100);
      setTimeout(() => setFlicker(false), 150);
      setTimeout(() => setFlicker(true), 180);
      setTimeout(() => setFlicker(false), 220);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const lines = text.split("\n");

  return (
    <div className={`nixie-text-container ${className}`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap justify-center">
          {line.split("").map((char, index) => (
            <span
              key={index}
              className={`nixie-text-char ${flicker ? "nixie-flicker" : ""}`}
              style={{
                animationDelay: `${(lineIndex * line.length + index) * 0.02}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NixieText;

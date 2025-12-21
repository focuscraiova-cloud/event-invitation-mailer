import { useEffect, useState } from "react";

interface NixieTextProps {
  text: string;
  className?: string;
  flickerLines?: number[];
}

const NixieText = ({ text, className = "", flickerLines = [] }: NixieTextProps) => {
  const [activeFlicker, setActiveFlicker] = useState<Set<number>>(new Set());

  useEffect(() => {
    setActiveFlicker(new Set(flickerLines));
  }, [flickerLines]);

  const lines = text.split("\n");

  return (
    <div className={`nixie-text-container ${className}`}>
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className={`flex flex-wrap justify-center ${
            lineIndex === 0 ? "nixie-steady-line" : lineIndex === 1 ? "nixie-flash-line" : ""
          }`}
        >
          {line.split("").map((char, index) => (
            <span
              key={index}
              className={`nixie-text-char ${activeFlicker.has(lineIndex) ? "nixie-flicker" : ""}`}
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

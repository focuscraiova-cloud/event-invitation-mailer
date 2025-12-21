import { useEffect, useState, type CSSProperties } from "react";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
  drift: number;
  sway: number;
  blur: number;
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    const count = 70;

    for (let i = 0; i < count; i++) {
      const size = 1.5 + Math.random() * 4.5;
      const drift = -25 + Math.random() * 50;
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 12,
        animationDelay: Math.random() * -20,
        size,
        opacity: 0.3 + Math.random() * 0.7,
        drift,
        sway: drift * 0.5,
        blur: Math.max(0, size - 2.5) * 0.35,
      });
    }

    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {snowflakes.map((flake) => {
        const style = {
          left: `${flake.left}%`,
          width: `${flake.size}px`,
          height: `${flake.size}px`,
          opacity: flake.opacity,
          animationDuration: `${flake.animationDuration}s`,
          animationDelay: `${flake.animationDelay}s`,
          "--drift": `${flake.drift}px`,
          "--sway": `${flake.sway}px`,
          "--blur": `${flake.blur}px`,
        } as CSSProperties;

        return (
          <div
            key={flake.id}
            className="absolute rounded-full bg-white snowflake"
            style={style}
          />
        );
      })}
    </div>
  );
};

export default Snowfall;

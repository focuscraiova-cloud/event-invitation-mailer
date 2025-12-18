import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2025-12-24T22:00:00").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-4 md:gap-6 animate-fade-in animation-delay-300">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="bg-red-950/30 backdrop-blur-sm border border-red-500/40 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(239,68,68,0.4),0_0_40px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6),0_0_60px_rgba(34,197,94,0.3)] transition-shadow duration-300">
            <span className="text-2xl md:text-3xl font-bold text-red-100 animate-pulse-subtle drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-red-300/80 uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

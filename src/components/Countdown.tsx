import { useState, useEffect } from "react";
import NixieDigit from "./NixieDigit";

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

  const isTimerUp = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  // Format as DD:HH:MM:SS for display
  const days = String(timeLeft.days).padStart(2, "0");
  const hours = String(timeLeft.hours).padStart(2, "0");
  const minutes = String(timeLeft.minutes).padStart(2, "0");
  const seconds = String(timeLeft.seconds).padStart(2, "0");

  if (isTimerUp) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 'clamp(0.5rem, 2vw, 1rem)',
        padding: 'clamp(0.5rem, 2vw, 1rem) clamp(0.75rem, 3vw, 2rem)',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        minHeight: '120px'
      }}>
        <div className="nixie-text-container">
          <div className="flex flex-wrap justify-center nixie-flash-line">
            {"LIVE NOW!".split("").map((char, index) => (
              <span
                key={index}
                className="nixie-text-char-red nixie-flicker-red"
                style={{
                  animationDelay: `${index * 0.02}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: 'clamp(0.5rem, 2vw, 1rem)',
      padding: 'clamp(0.5rem, 2vw, 1rem) clamp(0.75rem, 3vw, 2rem)',
      width: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden',
      minHeight: '120px'
    }}>
      <div className="flex flex-col sm:flex-row items-center justify-center" style={{ 
        gap: 'clamp(1rem, 3vw, 1.5rem)',
        maxWidth: '100%',
        width: '100%'
      }}>
        {/* Days */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(0.25rem, 1vw, 0.5rem)', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 'clamp(0.1rem, 0.5vw, 0.25rem)' }}>
            <NixieDigit key={`d1-${days[0]}-${timeLeft.days}`} value={days[0]} />
            <NixieDigit key={`d2-${days[1]}-${timeLeft.days}`} value={days[1]} />
          </div>
          <span style={{ 
            color: '#e6b871', 
            fontSize: 'clamp(0.6rem, 2vw, 0.75rem)', 
            fontFamily: 'Courier New',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap'
          }}>Days</span>
        </div>
        
        {/* Hours */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(0.25rem, 1vw, 0.5rem)', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 'clamp(0.1rem, 0.5vw, 0.25rem)' }}>
            <NixieDigit key={`h1-${hours[0]}-${timeLeft.hours}`} value={hours[0]} />
            <NixieDigit key={`h2-${hours[1]}-${timeLeft.hours}`} value={hours[1]} />
          </div>
          <span style={{ 
            color: '#e6b871', 
            fontSize: 'clamp(0.6rem, 2vw, 0.75rem)', 
            fontFamily: 'Courier New',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap'
          }}>Hours</span>
        </div>
        
        {/* Minutes */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(0.25rem, 1vw, 0.5rem)', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 'clamp(0.1rem, 0.5vw, 0.25rem)' }}>
            <NixieDigit key={`m1-${minutes[0]}-${timeLeft.minutes}`} value={minutes[0]} />
            <NixieDigit key={`m2-${minutes[1]}-${timeLeft.minutes}`} value={minutes[1]} />
          </div>
          <span style={{ 
            color: '#e6b871', 
            fontSize: 'clamp(0.6rem, 2vw, 0.75rem)', 
            fontFamily: 'Courier New',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap'
          }}>Minutes</span>
        </div>
        
        {/* Seconds */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(0.25rem, 1vw, 0.5rem)', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 'clamp(0.1rem, 0.5vw, 0.25rem)' }}>
            <NixieDigit key={`s1-${seconds[0]}-${timeLeft.seconds}`} value={seconds[0]} />
            <NixieDigit key={`s2-${seconds[1]}-${timeLeft.seconds}`} value={seconds[1]} />
          </div>
          <span style={{ 
            color: '#e6b871', 
            fontSize: 'clamp(0.6rem, 2vw, 0.75rem)', 
            fontFamily: 'Courier New',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap'
          }}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

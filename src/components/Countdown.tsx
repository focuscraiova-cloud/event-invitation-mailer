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

  // Format as DD:HH:MM:SS for display
  const days = String(timeLeft.days).padStart(2, "0");
  const hours = String(timeLeft.hours).padStart(2, "0");
  const minutes = String(timeLeft.minutes).padStart(2, "0");
  const seconds = String(timeLeft.seconds).padStart(2, "0");

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '1rem',
      padding: '1rem 2rem',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '0.75rem',
        flexWrap: 'wrap',
        maxWidth: '100%'
      }}>
        {/* Days */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <NixieDigit key={`d1-${days[0]}-${timeLeft.days}`} value={days[0]} />
            <NixieDigit key={`d2-${days[1]}-${timeLeft.days}`} value={days[1]} />
          </div>
          <span style={{ 
            color: '#e6b871', 
            fontSize: '0.75rem', 
            fontFamily: 'Courier New',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>Days</span>
        </div>
        
        {/* Colon */}
        <NixieDigit key="colon1" value=":" />
        
        {/* Hours */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <NixieDigit key={`h1-${hours[0]}-${timeLeft.hours}`} value={hours[0]} />
            <NixieDigit key={`h2-${hours[1]}-${timeLeft.hours}`} value={hours[1]} />
          </div>
          <span style={{ 
            color: '#e6b871', 
            fontSize: '0.75rem', 
            fontFamily: 'Courier New',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>Hours</span>
        </div>
        
        {/* Colon */}
        <NixieDigit key="colon2" value=":" />
        
        {/* Minutes */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <NixieDigit key={`m1-${minutes[0]}-${timeLeft.minutes}`} value={minutes[0]} />
            <NixieDigit key={`m2-${minutes[1]}-${timeLeft.minutes}`} value={minutes[1]} />
          </div>
          <span style={{ 
            color: '#e6b871', 
            fontSize: '0.75rem', 
            fontFamily: 'Courier New',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>Minutes</span>
        </div>
        
        {/* Colon */}
        <NixieDigit key="colon3" value=":" />
        
        {/* Seconds */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <NixieDigit key={`s1-${seconds[0]}-${timeLeft.seconds}`} value={seconds[0]} />
            <NixieDigit key={`s2-${seconds[1]}-${timeLeft.seconds}`} value={seconds[1]} />
          </div>
          <span style={{ 
            color: '#e6b871', 
            fontSize: '0.75rem', 
            fontFamily: 'Courier New',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

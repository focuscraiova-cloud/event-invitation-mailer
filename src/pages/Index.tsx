import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import focusLogo from "@/assets/focus-events-logo.png";
import grinchImg from "@/assets/grinch.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Logo - Restyled with glow effect */}
      <div className="mb-8 animate-scale-in">
        <img 
          src={focusLogo} 
          alt="Focus Events Logo" 
          className="w-40 md:w-56 h-auto drop-shadow-[0_0_15px_rgba(230,184,113,0.5)] hover:drop-shadow-[0_0_25px_rgba(230,184,113,0.8)] transition-all duration-500" 
        />
      </div>

      {/* Event Teaser with Grinch */}
      <div className="text-center mb-8 animate-fade-in relative" style={{ animationDelay: "0.2s" }}>
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Coming Soon</p>
        
        {/* Event Title with Grinch */}
        <div className="relative inline-block">
          {/* Animated Grinch peeking */}
          <img 
            src={grinchImg} 
            alt="Grinch" 
            className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 w-20 md:w-28 h-auto z-10 animate-bounce drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Styled Christmas Flashbacks Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-2 relative">
            <span className="bg-gradient-to-r from-red-500 via-green-400 to-red-500 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]" style={{ animationDuration: '3s' }}>
              Christmas
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-light tracking-widest text-amber-200/90 drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">
              Flashbacks
            </span>
          </h1>
        </div>
        
        <p className="text-gray-500 mt-4">24 December 2025 • 22:00</p>
      </div>

      {/* Countdown */}
      <div className="mb-12">
        <Countdown />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Button
          className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-6 text-sm uppercase tracking-wider"
          onClick={() => window.open("/subscribe", "_blank")}
        >
          Sign Up
        </Button>
        <Button
          className="bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-6 text-sm uppercase tracking-wider"
          onClick={() => window.open("https://www.livetickets.ro/e/0a90594", "_blank")}
        >
          Tickets Here
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-12 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <p className="text-gray-600 text-xs tracking-wider">focusevents.ro</p>
      </div>
    </div>
  );
};

export default Index;

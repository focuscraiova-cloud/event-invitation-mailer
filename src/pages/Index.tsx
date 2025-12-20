import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import NixieText from "@/components/NixieText";
import focusLogo from "@/assets/focus-events-logo.png";
import grinchImg from "@/assets/grinch.png";

const Index = () => {
  return <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Logo - Restyled with glow effect */}
      <div className="mb-8 animate-scale-in">
        <img src={focusLogo} alt="Focus Events Logo" className="w-40 md:w-56 h-auto drop-shadow-[0_0_15px_rgba(230,184,113,0.5)] hover:drop-shadow-[0_0_25px_rgba(230,184,113,0.8)] transition-all duration-500" />
      </div>

      {/* Event Teaser with Grinch */}
      <div className="text-center mb-8 animate-fade-in relative" style={{
      animationDelay: "0.2s"
    }}>
        {/* Event Title with Nixie Tube Style */}
        <div className="relative inline-block">
          {/* Animated Grinch peeking */}
          <img 
            src={grinchImg} 
            alt="Grinch" 
            className="absolute -top-12 -right-8 w-16 md:w-20 animate-bounce z-10"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Nixie Tube Style Event Name */}
          <NixieText text="CHRISTMAS FLASHBACKS" className="mb-4" />
        </div>
        
        <p className="text-gray-500 mt-4 font-mono tracking-wider">24 December 2025 • 22:00</p>
      </div>

      {/* Countdown */}
      <div className="mb-12">
        <Countdown />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
      animationDelay: "0.4s"
    }}>
        <Button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-6 text-sm uppercase tracking-wider" onClick={() => window.open("/subscribe", "_blank")}>
          Sign Up
        </Button>
        <Button className="bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-6 text-sm uppercase tracking-wider" onClick={() => window.open("https://www.livetickets.ro/e/0a90594", "_blank")}>
          Tickets Here
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-12 text-center animate-fade-in" style={{
      animationDelay: "0.6s"
    }}>
        <p className="text-gray-600 text-xs tracking-wider">focusevents.ro</p>
      </div>
    </div>;
};
export default Index;
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import NixieText from "@/components/NixieText";
import Snowfall from "@/components/Snowfall";
import focusLogo from "@/assets/focus-events-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 px-4 pt-4 pb-6 overflow-x-hidden relative">
      {/* Snowfall Background */}
      <Snowfall />

      {/* Logo + Event Teaser */}
      <div className="flex flex-col items-center gap-0 md:gap-0 flex-shrink-0 z-10">
        <div className="animate-scale-in mb-9 sm:mb-0">
          <img
            src={focusLogo}
            alt="Focus Events Logo"
            className="w-[min(63vw,520px)] sm:w-[min(85vw,520px)] md:w-[min(60vw,340px)] h-auto drop-shadow-[0_0_15px_rgba(230,184,113,0.5)] logo-white logo-float"
          />
        </div>

        <div className="flex flex-col items-center gap-3 text-center animate-fade-in -mt-[7.5rem] md:-mt-[8rem]" style={{ animationDelay: "0.2s" }}>
          <NixieText 
            text={"CHRISTMAS\nFLASHBACKS"} 
            flickerLines={[1]}
          />
          <p className="text-gray-500 font-mono tracking-wider text-xs md:text-sm">24 December 2025 22:00</p>
        </div>
      </div>

      {/* Countdown */}
      <div className="flex-shrink-0 z-10">
        <Countdown />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 animate-fade-in flex-shrink-0 z-10" style={{ animationDelay: "0.4s" }}>
        <Button 
          className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 px-6 py-4 text-xs uppercase tracking-wider" 
          onClick={() => window.open("/subscribe", "_blank")}
        >
          Sign Up
        </Button>
        <Button className="bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 px-6 py-4 text-xs uppercase tracking-wider" onClick={() => window.open("https://www.livetickets.ro/e/0a90594", "_blank")}>
          Tickets Here
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center animate-fade-in flex-shrink-0 z-10" style={{ animationDelay: "0.6s" }}>
        <p className="text-gray-600 text-xs tracking-wider">focusevents.ro</p>
      </div>
    </div>
  );
};

export default Index;























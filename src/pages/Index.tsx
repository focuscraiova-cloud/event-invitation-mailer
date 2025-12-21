import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import NixieText from "@/components/NixieText";
import Snowfall from "@/components/Snowfall";
import focusLogo from "@/assets/focus-events-logo.png";

const Index = () => {
  return (
    <div className="h-[100svh] sm:min-h-screen bg-black text-white flex flex-col items-center justify-center gap-3 sm:gap-6 px-3 pt-0 pb-2 sm:px-4 sm:pt-4 sm:pb-6 overflow-hidden relative">
      {/* Snowfall Background */}
      <Snowfall />

      {/* Logo + Event Teaser */}
      <div className="flex flex-col items-center gap-0 md:gap-0 flex-shrink-0 z-10">
        <div className="animate-scale-in mt-2 mb-1 sm:mb-0">
          <img
            src={focusLogo}
            alt="Focus Events Logo"
            className="w-auto h-auto max-h-[12vh] max-w-[65vw] sm:max-h-[18vh] sm:max-w-[80vw] md:max-h-[14vh] md:max-w-[32vw] drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] logo-white logo-float"
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
      <div className="flex-shrink-0 z-10 scale-80 sm:scale-100 origin-top">
        <Countdown />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 animate-fade-in flex-shrink-0 z-10 scale-90 sm:scale-100 origin-top" style={{ animationDelay: "0.4s" }}>
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























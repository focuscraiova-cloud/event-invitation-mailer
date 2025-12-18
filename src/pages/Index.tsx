import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import focusLogo from "@/assets/focus-events-logo.png";
import eventPhoto1 from "@/assets/event-photo-1.jpg";
import eventPhoto2 from "@/assets/event-photo-2.jpg";

const Index = () => {
  useEffect(() => {
    // Load Mailchimp script
    const script = document.createElement("script");
    script.id = "mcjs";
    script.async = true;
    script.src = "https://chimpstatic.com/mcjs-connected/js/users/009447cf40041bdacac0c1ff1/5ae36002f2bd260af218723a6.js";
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("mcjs");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Photos with Animation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 animate-[fade-in_2s_ease-out] transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${eventPhoto1})`,
            animation: "pulse-bg 8s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 animate-[fade-in_2s_ease-out_0.5s]"
          style={{ 
            backgroundImage: `url(${eventPhoto2})`,
            animation: "pulse-bg 8s ease-in-out infinite 4s"
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Logo */}
      <div className="mb-8 animate-scale-in relative z-10">
        <img
          src={focusLogo}
          alt="Focus Events Logo"
          className="w-48 md:w-64 h-auto animate-float"
        />
      </div>

      {/* Event Teaser */}
      <div className="text-center mb-8 animate-fade-in relative z-10" style={{ animationDelay: "0.2s" }}>
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Coming Soon</p>
        <h1 className="text-2xl md:text-4xl font-light mb-2">Christmas Flashbacks</h1>
        <p className="text-gray-500">24 December 2025 • 22:00</p>
      </div>

      {/* Countdown */}
      <div className="mb-12 relative z-10">
        <Countdown />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in relative z-10" style={{ animationDelay: "0.4s" }}>
        <Button
          className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-6 text-sm uppercase tracking-wider"
          onClick={() => window.open("https://focusevents.ro/signup", "_blank")}
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
      <div className="absolute bottom-8 text-center animate-fade-in z-10" style={{ animationDelay: "0.6s" }}>
        <p className="text-gray-600 text-xs tracking-wider">focusevents.ro</p>
      </div>
    </div>
  );
};

export default Index;

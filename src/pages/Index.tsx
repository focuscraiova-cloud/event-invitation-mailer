import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import focusLogo from "@/assets/focus-events-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <div className="mb-8 animate-scale-in">
        <img src={focusLogo} alt="Focus Events Logo" className="w-48 md:w-64 h-auto animate-float" />
      </div>

      {/* Event Teaser */}
      <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Coming Soon</p>
        <h1 className="text-2xl md:text-4xl font-light mb-2">Christmas Flashbacks</h1>
        <p className="text-gray-500">24 December 2025 • 22:00</p>
      </div>

      {/* Countdown */}
      <div className="mb-12">
        <Countdown />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Button
          className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-6 text-sm uppercase tracking-wider"
          onClick={() =>
            window.open(
              "https://focusevents.us6.list-manage.com/subscribe/post?u=009447cf40041bdacac0c1ff1&amp;id=595c3e61cd&amp;f_id=000c1ce2f0",
              "_blank",
            )
          }
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
      <div className="absolute bottom-8 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <p className="text-gray-600 text-xs tracking-wider">focusevents.ro</p>
      </div>
    </div>
  );
};

export default Index;

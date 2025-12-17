import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Logo / Brand */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
          FOCUS<span className="text-red-500">.</span>
        </h1>
        <p className="text-sm text-gray-400 tracking-widest uppercase mt-2 text-center">Events</p>
      </div>

      {/* Event Teaser */}
      <div className="text-center mb-16">
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Coming Soon</p>
        <h2 className="text-2xl md:text-4xl font-light mb-2">Christmas Flashbacks</h2>
        <p className="text-gray-500">24 December 2024</p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-sm uppercase tracking-wider"
          onClick={() => window.open('https://focusevents.ro/signup', '_blank')}
        >
          Sign Up
        </Button>
        <Button 
          className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-6 text-sm uppercase tracking-wider"
          onClick={() => window.open('https://focusevents.ro/tickets', '_blank')}
        >
          Tickets Here
        </Button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center">
        <p className="text-gray-600 text-xs tracking-wider">focusevents.ro</p>
      </div>
    </div>
  );
};

export default Index;

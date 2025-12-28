import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549363842-4f38b0d77490?q=80&w=2070&auto=format&fit=crop"
          alt="Mongolian Steppe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
          The Land of the Eternal Blue Sky
        </h1>
        <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
          Discover untouched wilderness, ancient nomadic traditions, and the warm hospitality of Mongolia.
        </p>
        <a 
          href="#destinations"
          className="inline-flex items-center gap-2 bg-mongolia-sky hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
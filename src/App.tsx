import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinationCard } from './components/DestinationCard';
import { Footer } from './components/Footer';
import { destinations } from './data/content';
import { Tent, Sun, Camera } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white" id="about">
          <div className="container mx-auto px-4 text-center">
            <span className="text-mongolia-blue font-bold tracking-wider uppercase mb-2 block">Welcome to Mongolia</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Adventure Awaits in the Steppe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-mongolia-blue">
                  <Tent size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Nomadic Life</h3>
                <p className="text-slate-600">Stay in traditional Gers and experience the hospitality of nomadic families who have lived this way for centuries.</p>
              </div>
              <div className="p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-mongolia-red">
                  <Sun size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Untouched Nature</h3>
                <p className="text-slate-600">Explore vast landscapes without fences, from the dunes of the Gobi to the crystal clear lakes of the north.</p>
              </div>
              <div className="p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-700">
                  <Camera size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Rich History</h3>
                <p className="text-slate-600">Walk in the footsteps of Genghis Khan and discover ancient Buddhist monasteries nestled in mountains.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 md:py-24 bg-slate-50" id="destinations">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <span className="text-mongolia-blue font-bold tracking-wider uppercase mb-2 block">Explore</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Top Destinations</h2>
              </div>
              <button className="hidden md:block text-mongolia-blue font-bold hover:text-mongolia-red transition-colors mt-4 md:mt-0">
                View All Places &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <button className="text-mongolia-blue font-bold hover:text-mongolia-red transition-colors">
                View All Places &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-20 bg-mongolia-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to plan your Mongolian adventure?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for travel tips, hidden gems, and exclusive seasonal offers.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-mongolia-gold"
              />
              <button className="bg-mongolia-gold text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
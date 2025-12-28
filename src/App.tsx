import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinationCard } from './components/DestinationCard';
import { Footer } from './components/Footer';
import { destinations, facts } from './data/mockData';
import { Tent, Sun, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Intro Section - Facts */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Fast Facts</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facts.map((fact, index) => (
                <div key={fact.id} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-6">
                    {index === 0 && <Tent className="w-6 h-6" />}
                    {index === 1 && <Sun className="w-6 h-6" />}
                    {index === 2 && <BookOpen className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{fact.title}</h3>
                  <p className="text-slate-600">{fact.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section id="destinations" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Must-Visit Destinations</h2>
              <p className="text-lg text-slate-600 max-w-2xl">From the singing sands of the Gobi to the pristine waters of KhÃ¶vsgÃ¶l, explore the diversity of the Mongolian landscape.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <DestinationCard key={dest.id} data={dest} />
              ))}
            </div>
          </div>
        </section>

        {/* Culture CTA */}
        <section id="culture" className="py-20 bg-primary overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience the Nomadic Way of Life</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stay in a traditional Ger, taste Airag, and witness the incredible skill of Eagle Hunters.
              Mongolia offers a travel experience unlike any other.
            </p>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
              Plan Your Trip
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

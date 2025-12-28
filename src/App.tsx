import React from 'react';
import Header from './components/Header';
import DestinationCard from './components/DestinationCard';
import ContactForm from './components/ContactForm';
import { destinations, culturalFacts } from './data/content';
import { Tent, Sun, Trophy } from 'lucide-react';

// Icon mapping helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'tent': return <Tent className="h-8 w-8 text-mongolia-red" />;
    case 'horse': return <Trophy className="h-8 w-8 text-mongolia-red" />; // Using trophy as placeholder for specialized horse icon
    case 'sun': return <Sun className="h-8 w-8 text-mongolia-gold" />;
    default: return <Sun className="h-8 w-8" />;
  }
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="hero-pattern h-[600px] flex items-center justify-center text-center px-4 relative">
          <div className="max-w-4xl mx-auto text-white z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Discover <span className="text-mongolia-blue">Mongolia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light text-gray-100">
              Land of the Eternal Blue Sky
            </p>
            <a 
              href="#destinations" 
              className="bg-mongolia-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 inline-block"
            >
              Explore Now
            </a>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nomadic Heritage</h2>
              <p className="max-w-2xl mx-auto text-slate-600">
                Immerse yourself in a culture that has remained largely unchanged for centuries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {culturalFacts.map((fact) => (
                <div key={fact.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:border-mongolia-blue transition-colors">
                  <div className="flex justify-center mb-4 bg-slate-50 w-16 h-16 rounded-full items-center mx-auto">
                    {getIcon(fact.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{fact.title}</h3>
                  <p className="text-slate-600">{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section id="destinations" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Destinations</h2>
                <p className="text-slate-600 max-w-xl">
                  From the rugged Altai Mountains to the vast Gobi Desert, explore the diversity of Mongolian landscapes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <DestinationCard key={dest.id} data={dest} />
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Visit Mongolia. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
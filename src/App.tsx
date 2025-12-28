import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinationCard } from './components/DestinationCard';
import { Footer } from './components/Footer';
import { Destination, Category } from './types';

// Static Data Generation to fulfill "Self-Contained" directive
const STATIC_DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: 'Gobi Desert',
    description: 'Experience the vast expanse of the Gobi, home to singing sand dunes, rare camels, and dinosaur fossils.',
    imageUrl: 'https://images.unsplash.com/photo-1627894450325-13936a2879d7?q=80&w=2070&auto=format&fit=crop',
    category: 'Nature',
    location: 'Southern Mongolia'
  },
  {
    id: '2',
    title: 'Golden Eagle Festival',
    description: 'Witness the ancient tradition of eagle hunting in the Altai Mountains, a cultural spectacle unlike any other.',
    imageUrl: 'https://images.unsplash.com/photo-1596296317586-b41315664d50?q=80&w=2070&auto=format&fit=crop',
    category: 'Culture',
    location: 'Bayan-Ölgii Province'
  },
  {
    id: '3',
    title: 'Lake Khuvsgul',
    description: 'Known as the "Blue Pearl of Mongolia", this pristine alpine lake is surrounded by forests and mountains.',
    imageUrl: 'https://images.unsplash.com/photo-1605625902162-8456209b5523?q=80&w=2070&auto=format&fit=crop',
    category: 'Nature',
    location: 'Northern Mongolia'
  },
  {
    id: '4',
    title: 'Erdene Zuu Monastery',
    description: 'Explore the earliest surviving Buddhist monastery in Mongolia, located near the ancient capital of Karakorum.',
    imageUrl: 'https://images.unsplash.com/photo-1579782536830-4e5a95690b23?q=80&w=1974&auto=format&fit=crop',
    category: 'Culture',
    location: 'Övörkhangai Province'
  },
  {
    id: '5',
    title: 'Orkhon Valley',
    description: 'A UNESCO World Heritage site representing the evolution of nomadic pastoral traditions spanning two millennia.',
    imageUrl: 'https://images.unsplash.com/photo-1549609653-53b708b5e679?q=80&w=1974&auto=format&fit=crop',
    category: 'Adventure',
    location: 'Central Mongolia'
  }
];

const CATEGORIES: Category[] = ['All', 'Nature', 'Culture', 'Adventure'];

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredDestinations = activeCategory === 'All' 
    ? STATIC_DESTINATIONS 
    : STATIC_DESTINATIONS.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Main Content Area */}
        <section id="destinations" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Destinations</h2>
              <div className="w-24 h-1 bg-mongolia-blue mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From the arid Gobi desert to the taiga forests of the north, Mongolia offers diverse landscapes and rich cultural heritage.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-mongolia-blue text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} data={destination} />
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No destinations found for this category.
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
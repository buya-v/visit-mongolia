import { cultureFacts } from '../data/content';
import { Tent, Music, MoveVertical as Horse } from 'lucide-react'; // Using proxies for icons

export default function Culture() {
  return (
    <section id="culture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-mongolia-sky uppercase tracking-wider mb-2">Tradition</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">A Living Heritage</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Mongolia's culture is deeply rooted in its nomadic history. Despite modernization, these traditions remain a vital part of daily life, offering visitors a unique glimpse into a way of life that has existed for millennia.
            </p>
            
            <div className="space-y-6">
              {cultureFacts.map((fact) => (
                <div key={fact.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-mongolia-sand/20 flex items-center justify-center text-mongolia-green">
                      {fact.icon === 'tent' && <Tent className="w-6 h-6" />}
                      {fact.icon === 'music' && <Music className="w-6 h-6" />}
                      {fact.icon === 'horse' && <Horse className="w-6 h-6" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{fact.title}</h4>
                    <p className="text-slate-600">{fact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1572620603770-3882a8707166?q=80&w=1000&auto=format&fit=crop" 
               alt="Mongolian Culture" 
               className="absolute inset-0 w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
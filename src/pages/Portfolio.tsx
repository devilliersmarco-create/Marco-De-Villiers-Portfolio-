import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Graphic Design', 'Branding', 'Print Design', 'Apparel Design', 'Marketing'];

const projects = [
  { id: 1, title: 'Streetwear Identity', category: 'Apparel Design', img: 'https://picsum.photos/seed/apparel1/800/800' },
  { id: 2, title: 'Coffee Shop Branding', category: 'Branding', img: 'https://picsum.photos/seed/brand1/800/800' },
  { id: 3, title: 'Music Festival Poster', category: 'Graphic Design', img: 'https://picsum.photos/seed/design1/800/800' },
  { id: 4, title: 'Car Wrap Design', category: 'Print Design', img: 'https://picsum.photos/seed/print1/800/800' },
  { id: 5, title: 'Retail Campaign', category: 'Marketing', img: 'https://picsum.photos/seed/market1/800/800' },
  { id: 6, title: 'Gaming Logo', category: 'Branding', img: 'https://picsum.photos/seed/brand2/800/800' },
  { id: 7, title: 'Sports Apparel', category: 'Apparel Design', img: 'https://picsum.photos/seed/apparel2/800/800' },
  { id: 8, title: 'Store Signage', category: 'Graphic Design', img: 'https://picsum.photos/seed/design2/800/800' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">Showcase</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">PORTFOLIO</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs uppercase tracking-widest border transition-all ${
                  activeCategory === cat 
                    ? 'bg-orange-500 border-orange-500 text-black font-bold' 
                    : 'border-white/10 text-white/50 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square bg-zinc-900 overflow-hidden"
              >
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
                  <span className="text-orange-500 text-xs uppercase tracking-[0.2em] mb-4">{project.category}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                  <div className="mt-6 w-10 h-1 bg-orange-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

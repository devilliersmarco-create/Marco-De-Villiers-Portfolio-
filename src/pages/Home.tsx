import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Palette, Camera, Video, Printer, Shirt, Truck, ArrowRight } from 'lucide-react';

const services = [
  { icon: <Palette />, name: 'Graphic Design', desc: 'Visual identities & branding' },
  { icon: <Camera />, name: 'Photography', desc: 'Professional visual storytelling' },
  { icon: <Video />, name: 'Videography', desc: 'Cinematic brand campaigns' },
  { icon: <Printer />, name: 'Printing', desc: 'High-quality print production' },
  { icon: <Shirt />, name: 'Apparel Design', desc: 'Custom clothing & graphics' },
  { icon: <Truck />, name: 'Vehicle Branding', desc: 'Mobile marketing solutions' },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-6"
          >
            MARCO GRAHAM <br /> DE VILLIERS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/70 font-light tracking-wide mb-10 max-w-2xl mx-auto"
          >
            Graphic Designer | Visual Creator | Brand Specialist
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/portfolio" className="px-8 py-4 bg-orange-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
              View Portfolio
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Hire Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Quick Grid */}
      <section className="py-32 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">FULL CREATIVE STUDIO</h2>
            </div>
            <p className="text-white/50 max-w-md text-lg leading-relaxed">
              From concept to production, I deliver powerful visual communication across all media platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="p-12 bg-black transition-colors group"
              >
                <div className="text-orange-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{service.name}</h3>
                <p className="text-white/40 mb-8">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-xs uppercase tracking-widest text-white/60 hover:text-orange-500 transition-colors">
                  Learn More <ArrowRight className="ml-2" size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">SELECTED WORKS</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -10 }}
                className="relative aspect-[4/3] overflow-hidden group bg-zinc-900"
              >
                <img 
                  src={`https://picsum.photos/seed/marco${item}/1200/900`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  alt="Portfolio Piece"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-orange-500 text-xs uppercase tracking-widest mb-2">Graphic Design</span>
                  <h3 className="text-2xl font-bold uppercase">Brand Identity Concept</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/portfolio" className="text-sm uppercase tracking-[0.4em] font-bold hover:text-orange-500 transition-colors inline-flex items-center">
              View All Projects <ArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

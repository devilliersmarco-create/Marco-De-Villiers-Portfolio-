/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Mail, Phone, MapPin, Camera, Video, Palette, Printer, Shirt, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import PhotographyVideo from './pages/PhotographyVideo';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Photo & Video', path: '/photography-video' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          MARCO<span className="text-orange-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-orange-500",
                location.pathname === link.path ? "text-orange-500 font-semibold" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg uppercase tracking-widest",
                    location.pathname === link.path ? "text-orange-500" : "text-white/70"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-20 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">MARCO GRAHAM DE VILLIERS</h3>
        <p className="text-white/50 leading-relaxed max-w-sm">
          Creating powerful visual identities through design, photography, video and print production.
        </p>
      </div>
      <div>
        <h4 className="text-sm uppercase tracking-widest mb-6 text-orange-500">Contact</h4>
        <div className="space-y-4 text-white/70">
          <div className="flex items-center space-x-3">
            <MapPin size={18} />
            <span>19 Stonehedge Road, Cape Town</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={18} />
            <span>hello@marcodevilliers.com</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-sm uppercase tracking-widest mb-6 text-orange-500">Follow</h4>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-orange-500 transition-colors"><Instagram /></a>
          <a href="#" className="hover:text-orange-500 transition-colors"><Mail /></a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-white/30 text-xs uppercase tracking-widest">
      &copy; {new Date().getFullYear()} Marco Graham De Villiers. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen font-sans text-white selection:bg-orange-500 selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/photography-video" element={<PhotographyVideo />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

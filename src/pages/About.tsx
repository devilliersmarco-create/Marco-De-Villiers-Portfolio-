import { motion } from 'motion/react';

const skills = [
  { category: 'Software Expertise', items: ['Adobe Creative Suite', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Camera Raw', 'CorelDRAW', 'Canva', 'CapCut'] },
  { category: 'Creative Skills', items: ['Photography', 'Videography', 'VFX Editing', 'Print Production', 'Branding Strategy', 'Item Management', 'Supplier Engagement'] }
];

export default function About() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-zinc-900 overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Marco Graham De Villiers"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-orange-500/20 -z-10 hidden md:block" />
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">The Story</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">MARCO GRAHAM <br /> DE VILLIERS</h1>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Marco Graham De Villiers is a creative graphic designer and visual content specialist based in Cape Town, South Africa.
                </p>
                <p>
                  With extensive experience working across retail, fashion, marketing and digital media, Marco combines design, photography and video production to deliver powerful visual communication.
                </p>
                <p>
                  His expertise spans across the full Adobe Creative Suite, print production, brand development and multimedia content creation.
                </p>
                <p>
                  Marco has worked with retail clothing brands and marketing campaigns, producing designs that drive engagement and strengthen brand identity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10"
            >
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h3 className="text-sm uppercase tracking-widest text-orange-500 mb-6">{skillGroup.category}</h3>
                  <ul className="space-y-3">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="text-white/80 font-medium flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

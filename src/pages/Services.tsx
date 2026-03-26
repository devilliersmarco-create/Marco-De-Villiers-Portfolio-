import { Check, Printer, Palette, Camera, Video, Truck, Shirt } from 'lucide-react';
import { motion } from 'motion/react';

const serviceGroups = [
  {
    title: 'Graphic Design',
    icon: <Palette className="text-orange-500" size={32} />,
    items: ['Posters', 'Flyers', 'Store signage', 'Social media graphics']
  },
  {
    title: 'Branding',
    icon: <Palette className="text-orange-500" size={32} />,
    items: ['Logo design', 'Brand identity', 'Brand campaigns']
  },
  {
    title: 'Printing Services',
    icon: <Printer className="text-orange-500" size={32} />,
    items: ['Business Cards', 'Posters', 'Banners', 'Rollups', 'Gazebos', 'Teardrops']
  },
  {
    title: 'Vehicle Branding',
    icon: <Truck className="text-orange-500" size={32} />,
    items: ['Cars', 'Trucks', 'Store signage']
  },
  {
    title: 'Apparel Printing',
    icon: <Shirt className="text-orange-500" size={32} />,
    items: ['T-Shirts', 'Hoodies', 'Caps', 'Woolen Hats', 'DTF Printing Available']
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">What I Do</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">SERVICES</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Comprehensive creative solutions tailored to your brand's unique needs. From digital design to physical production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {serviceGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-zinc-950 border border-white/5 hover:border-orange-500/30 transition-colors group"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {group.icon}
              </div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">{group.title}</h3>
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center text-white/60 group-hover:text-white transition-colors">
                    <Check className="text-orange-500 mr-3" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

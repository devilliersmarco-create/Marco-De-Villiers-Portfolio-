import { motion } from 'motion/react';
import { Briefcase, Award, CheckCircle } from 'lucide-react';

const experiences = [
  'Retail campaign posters',
  'Store signage',
  'Apparel graphics',
  'Digital advertising',
  'Video content',
  'Brand development'
];

export default function Experience() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">Credibility</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">EXPERIENCE</h1>
            
            <div className="space-y-8 text-white/60 text-lg leading-relaxed">
              <p>
                Marco has experience designing for retail clothing brands and marketing campaigns across South Africa, creating impactful visual content used in stores and promotional advertising.
              </p>
              <p>
                His professional journey is marked by a deep understanding of the retail landscape and the ability to translate brand values into compelling visual assets that resonate with target audiences.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-zinc-950 border border-white/5">
                <Briefcase className="text-orange-500 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-2 uppercase">Retail Specialist</h3>
                <p className="text-white/40 text-sm">Expertise in store signage and campaign visuals.</p>
              </div>
              <div className="p-8 bg-zinc-950 border border-white/5">
                <Award className="text-orange-500 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-2 uppercase">Brand Builder</h3>
                <p className="text-white/40 text-sm">Developing cohesive identities for emerging brands.</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full" />
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">Key Contributions</h2>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="mt-1">
                    <CheckCircle className="text-orange-500 group-hover:scale-125 transition-transform" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-wide mb-2">{exp}</h4>
                    <p className="text-white/40 text-sm">High-impact visual solutions delivered for major retail clients.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

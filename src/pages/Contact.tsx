import { motion } from 'motion/react';
import { Mail, MapPin, Send, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">CONTACT</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Let's Create Something <br /> <span className="text-orange-500">Extraordinary</span></h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-md">
                Ready to take your brand to the next level? Reach out for a consultation or project quote.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center border border-white/5">
                  <MapPin className="text-orange-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/40 mb-1">Location</h4>
                  <p className="text-lg font-medium">19 Stonehedge Road, Hanover Park, Cape Town, 7780</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center border border-white/5">
                  <Mail className="text-orange-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/40 mb-1">Email</h4>
                  <p className="text-lg font-medium">hello@marcodevilliers.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center border border-white/5">
                  <Instagram className="text-orange-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/40 mb-1">Social</h4>
                  <p className="text-lg font-medium">@marcodevilliers_design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-950 p-10 md:p-12 border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 p-4 focus:border-orange-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Email</label>
                  <input type="email" className="w-full bg-black border border-white/10 p-4 focus:border-orange-500 outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Project Type</label>
                <select className="w-full bg-black border border-white/10 p-4 focus:border-orange-500 outline-none transition-colors appearance-none">
                  <option>Graphic Design</option>
                  <option>Photography</option>
                  <option>Videography</option>
                  <option>Branding</option>
                  <option>Printing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={5} className="w-full bg-black border border-white/10 p-4 focus:border-orange-500 outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-orange-500 text-black font-bold py-4 uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center">
                Send Message <Send className="ml-3" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

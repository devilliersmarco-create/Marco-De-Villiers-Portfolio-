import { motion } from 'motion/react';
import { Camera, Video, Play } from 'lucide-react';

const photoServices = ['Matric photoshoots', 'Weddings', 'Catalogue shoots', 'Campaign imagery', 'Model photography'];
const videoServices = ['Promotional videos', 'Social media reels', 'Brand campaigns', 'Product marketing'];

export default function PhotographyVideo() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">Visual Storytelling</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">PHOTO & VIDEO</h1>
        </div>

        {/* Photography Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Camera className="text-orange-500" size={32} />
                <h2 className="text-3xl font-bold uppercase tracking-tight">Photography</h2>
              </div>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Capturing moments and products with a professional eye. From high-fashion catalogue shoots to intimate wedding celebrations.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photoServices.map((s, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-zinc-900 overflow-hidden">
                <img src="https://picsum.photos/seed/photo1/600/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Work" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] bg-zinc-900 overflow-hidden mt-12">
                <img src="https://picsum.photos/seed/photo2/600/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Work" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Videography Section */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="order-2 lg:order-1 relative group cursor-pointer">
              <div className="aspect-video bg-zinc-900 flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/video1/1280/720" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" alt="Video Preview" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-black fill-black ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm uppercase tracking-widest text-white/50">Featured Reel</h4>
                <p className="text-lg font-bold uppercase">Brand Campaign 2024</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <Video className="text-orange-500" size={32} />
                <h2 className="text-3xl font-bold uppercase tracking-tight">Videography</h2>
              </div>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Dynamic motion content that drives engagement. Specialized in promotional reels, brand campaigns, and social media storytelling.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {videoServices.map((s, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

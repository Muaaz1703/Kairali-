import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
          alt="Indian Spices and Food"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-kairali-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Authentic Kerala Cuisine
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              A Taste of <br /> God's Own Country
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Experience the rich, aromatic flavors of South India. Traditional recipes passed down through generations, prepared with fresh ingredients and authentic spices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-kairali-red hover:bg-red-800 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 group">
                View Menu
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all">
                Book a Table
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

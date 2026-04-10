import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-kairali-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=1000&auto=format&fit=crop"
              alt="Traditional Kerala Food"
              className="rounded-2xl w-full h-64 object-cover mt-8 shadow-xl"
              referrerPolicy="no-referrer"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop"
              alt="Spices"
              className="rounded-2xl w-full h-80 object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-48 h-48 bg-kairali-gold/20 rounded-full blur-3xl"></div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-kairali-red font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-kairali-dark mb-6 leading-tight">
              Tradition in Every Bite
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Founded with a passion for bringing the authentic taste of Kerala to your plate, Kairali Restaurant is a celebration of South Indian culinary heritage. 
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              From the fiery curries of Malabar to the soothing coconut-infused stews of Travancore, our chefs use traditional techniques and hand-ground spices to recreate the magic of home-cooked meals.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <h4 className="text-3xl font-serif font-bold text-kairali-gold mb-2">15+</h4>
                <p className="text-gray-600 font-medium">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-kairali-gold mb-2">50+</h4>
                <p className="text-gray-600 font-medium">Authentic Dishes</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

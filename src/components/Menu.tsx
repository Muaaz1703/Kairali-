import { motion } from 'motion/react';
import { useState } from 'react';

const menuCategories = ['All', 'Starters', 'Mains', 'Breads', 'Desserts'];

const menuItems = [
  { id: 1, name: 'Kerala Parotta', description: 'Flaky, layered flatbread made from maida flour.', price: '$4.00', category: 'Breads', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Malabar Chicken Biryani', description: 'Aromatic kaima rice cooked with spiced chicken and fried onions.', price: '$16.00', category: 'Mains', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Meen Pollichathu', description: 'Pearl spot fish marinated in spices and roasted in banana leaf.', price: '$22.00', category: 'Mains', image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Beef Ularthiyathu', description: 'Slow-roasted beef with coconut slices and curry leaves.', price: '$18.00', category: 'Mains', image: 'https://images.unsplash.com/photo-1606499882260-0322b724578b?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Parippu Vada', description: 'Crispy lentil fritters served with coconut chutney.', price: '$6.00', category: 'Starters', image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=800&auto=format&fit=crop' },
  { id: 6, name: 'Palada Payasam', description: 'Sweet milk dessert with rice flakes and cardamom.', price: '$8.00', category: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-kairali-red font-semibold tracking-wider uppercase text-sm mb-3 block">
            Discover
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kairali-dark mb-6">
            Our Menu
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-kairali-dark text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-kairali-dark">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-kairali-dark">{item.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="text-kairali-red font-semibold text-sm hover:text-red-800 transition-colors uppercase tracking-wide">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

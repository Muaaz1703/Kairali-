import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-kairali-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold tracking-wider mb-6 text-white">KAIRALI</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Bringing the authentic flavors and warm hospitality of Kerala right to your table. Experience the true taste of South India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kairali-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kairali-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kairali-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-kairali-gold shrink-0 mt-1" />
                <span>123 Spice Avenue, Culinary District<br />Food City, FC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-kairali-gold shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-kairali-gold shrink-0" />
                <span>hello@kairalirestaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Opening Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Mon - Thu</span>
                <span className="text-white">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Fri - Sat</span>
                <span className="text-white">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Sunday</span>
                <span className="text-white">12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-kairali-gold transition-colors"
              />
              <button className="bg-kairali-red hover:bg-red-800 text-white px-4 py-3 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kairali Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

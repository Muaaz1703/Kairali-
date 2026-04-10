/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-kairali-gold/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

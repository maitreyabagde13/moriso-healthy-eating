import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { WhyMoriso, HowItWorks } from './components/Features';
import { MenuGrid } from './components/MenuGrid';
import Pricing from './components/Pricing';
import HostelMessOptimiser from './components/HostelMessOptimiser';
import { BlogsPage } from './components/BlogSection';
import { SocialProof } from './components/Testimonials';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import { Stats } from './components/Stats';
import { Referral } from './components/Referral';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Components
const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <WhyMoriso />
    <HowItWorks />
    <Referral />
    <SocialProof />
  </>
);

const MenuPage = () => (
  <div className="pt-16">
    <MenuGrid />
  </div>
);

const PlansPage = () => (
  <div className="pt-16">
    <Pricing />
  </div>
);

const OptimiserPage = () => (
  <div className="pt-16">
    <HostelMessOptimiser />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <CartDrawer />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/plans" element={<PlansPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/optimiser" element={<OptimiserPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
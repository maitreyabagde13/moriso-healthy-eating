import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Referral: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="bg-gradient-to-r from-moriso-teal to-moriso-navy rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                  <Gift className="w-4 h-4" /> Referral Program
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Eat Together, Save Together
                </h2>
                <p className="text-white/90 text-lg max-w-xl">
                  Refer a roommate or friend to MORISO and you both get <span className="font-bold text-moriso-gold">₹100 off</span> your next meal plan renewal.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <button className="bg-white text-moriso-navy font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-moriso-gold hover:text-moriso-navy transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Get Referral Link <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
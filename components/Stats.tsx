import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Users, Utensils, Star, MapPin } from 'lucide-react';

const stats = [
  { label: "Healthy Meals Delivered", value: "15,000+", icon: Utensils },
  { label: "Happy Students", value: "2,500+", icon: Users },
  { label: "Average Rating", value: "4.8/5", icon: Star },
  { label: "Campuses Covered", value: "5+", icon: MapPin },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-moriso-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-moriso-teal blur-[100px]"></div>
         <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-moriso-gold blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-moriso-teal/20 text-moriso-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
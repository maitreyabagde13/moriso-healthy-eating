import React, { useEffect, useState } from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from '../context/CartContext';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-moriso-light to-white pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`text-center md:text-left transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-moriso-teal/10 text-moriso-teal text-sm font-semibold mb-6 animate-fade-in">
              <Leaf className="w-4 h-4" />
              <span>Smart Nutrition for Students</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-moriso-navy leading-tight mb-6">
              Healthy Eating Made Easy for <span className="text-moriso-teal inline-block relative">
                Hostelers
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-moriso-gold opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 delay-100">
              MORISO delivers fresh, affordable, goal-based meals—straight from our cloud kitchen to your room or PG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/menu" className="px-8 py-4 bg-moriso-teal text-white rounded-full font-bold text-lg shadow-lg hover:shadow-moriso-teal/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/plans" className="px-8 py-4 bg-white text-moriso-navy border-2 border-moriso-navy/10 rounded-full font-bold text-lg hover:border-moriso-navy transition-all flex items-center justify-center hover:bg-gray-50">
                Get 30-Day FitPlan
              </Link>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 transform ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Abstract blobs for modern feel */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-moriso-gold/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-moriso-teal/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <img 
              src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Healthy Paneer Dish" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px] md:h-[500px] hover:scale-[1.02] transition-transform duration-500"
            />
            
            {/* Floating badge */}
            <div className="absolute top-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">
                520
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Calories</p>
                <p className="text-sm font-bold text-moriso-navy">High Protein Paneer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
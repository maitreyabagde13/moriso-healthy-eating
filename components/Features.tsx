import React from 'react';
import { Target, Calendar, ChefHat, Heart, XCircle, Clock, ShoppingBag } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const WhyMoriso: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll className="order-2 md:order-1 relative">
                 <div className="absolute -inset-4 bg-moriso-teal/5 rounded-3xl -rotate-2 scale-105"></div>
                 <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 opacity-50">
                            <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-400 line-through">Mess food is oily & boring</h4>
                                <p className="text-sm text-gray-400">Repetitive menus that wreck your gut health.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 opacity-50">
                            <Clock className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-400 line-through">Cooking takes too much time</h4>
                                <p className="text-sm text-gray-400">Shopping + Prep + Cleaning = Hours lost.</p>
                            </div>
                        </li>
                        <li className="flex items-center justify-center py-4">
                            <div className="h-px bg-gray-200 w-full"></div>
                            <span className="px-4 text-gray-400 font-medium text-sm">VS</span>
                            <div className="h-px bg-gray-200 w-full"></div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Heart className="w-6 h-6 text-moriso-teal shrink-0 mt-1 fill-moriso-teal animate-pulse" />
                            <div>
                                <h4 className="font-bold text-moriso-navy text-lg">Clean, Tasty & Affordable</h4>
                                <p className="text-sm text-gray-600">Chef-curated meals designed for your health goals.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <ShoppingBag className="w-6 h-6 text-moriso-teal shrink-0 mt-1 fill-moriso-teal" />
                            <div>
                                <h4 className="font-bold text-moriso-navy text-lg">Zero Stress Delivery</h4>
                                <p className="text-sm text-gray-600">We deliver to your room. You just eat.</p>
                            </div>
                        </li>
                    </ul>
                 </div>
            </RevealOnScroll>
            
            <RevealOnScroll className="order-1 md:order-2" delay={200}>
                <span className="text-moriso-teal font-bold tracking-wider uppercase text-sm mb-2 block">The Problem</span>
                <h2 className="text-3xl md:text-5xl font-bold text-moriso-navy mb-6">Why MORISO?</h2>
                <div className="prose text-lg text-gray-600 leading-relaxed">
                    <p className="mb-4">
                        Eating healthy is hard when you live in a hostel or alone. 
                        Most people <span className="font-bold text-moriso-navy">WANT</span> to stay healthy—but daily life gets in the way.
                    </p>
                    <p className="mb-6">
                        Work + classes + gym leave no space for meal prep. And let's be honest, 
                        mess food is often unpredictable.
                    </p>
                    <p>
                        MORISO solves this. We cook clean, tasty, affordable meals—so you never have to stress about eating healthy again.
                    </p>
                </div>
            </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
    const steps = [
        { title: "Choose Your Goal", desc: "Fat Loss, Muscle Gain, or Balanced Diet.", icon: Target },
        { title: "Pick Your Plan", desc: "Daily, Weekly, or Monthly subscriptions.", icon: Calendar },
        { title: "We Cook Fresh", desc: "Prepared daily in hygienic cloud kitchens.", icon: ChefHat },
        { title: "Eat & Live Better", desc: "Delivered to your door. Track consistency.", icon: Heart },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-moriso-teal text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <RevealOnScroll>
                   <h2 className="text-3xl md:text-5xl font-bold mb-16">How MORISO Works</h2>
                </RevealOnScroll>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/30 -z-1"></div>
                    
                    {steps.map((step, idx) => (
                        <RevealOnScroll key={idx} delay={idx * 150} className="relative z-10 group">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-moriso-teal group-hover:scale-110 transition-transform duration-300">
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-white/80">{step.desc}</p>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};
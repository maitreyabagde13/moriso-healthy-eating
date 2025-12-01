import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Daily Meal Box",
        price: "₹149",
        period: "/ day",
        desc: "For sudden busy days",
        features: ["1 clean, fresh meal", "Zero cooking, zero stress", "Order before 11 AM"],
        isPopular: false
    },
    {
        name: "Weekly FitPlan",
        price: "₹899",
        period: "/ week",
        desc: "Perfect for testing us out",
        features: ["14 meals / week", "Save more vs daily", "Meal swaps allowed", "Balanced macros"],
        isPopular: false
    },
    {
        name: "30-Day FitPlan",
        price: "₹2799",
        period: "/ month",
        desc: "Best for hostels & consistency",
        features: ["42 meals / month", "Highest savings", "Goal-based customisation", "Pause anytime", "Dietician support"],
        isPopular: true
    }
];

const Pricing: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-moriso-navy mb-4">Choose Your FitPlan</h2>
          <p className="text-gray-600">Flexible options designed for student budgets.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {plans.map((plan, idx) => (
                <div key={idx} className={`relative rounded-3xl p-8 border-2 transition-transform hover:-translate-y-2 duration-300 ${plan.isPopular ? 'border-moriso-teal bg-moriso-light shadow-2xl scale-105 z-10' : 'border-gray-100 bg-white shadow-lg'}`}>
                    {plan.isPopular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-moriso-gold text-moriso-navy font-bold px-4 py-1 rounded-full text-sm shadow-md">
                            MOST POPULAR
                        </div>
                    )}
                    <h3 className="text-2xl font-bold text-moriso-navy mb-2">{plan.name}</h3>
                    <p className="text-gray-500 mb-6 text-sm">{plan.desc}</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-extrabold text-moriso-teal">{plan.price}</span>
                        <span className="text-gray-500 font-medium">{plan.period}</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        {plan.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="bg-moriso-teal/10 p-0.5 rounded-full mt-0.5">
                                    <Check className="w-3 h-3 text-moriso-teal" />
                                </div>
                                <span className="text-gray-700 font-medium">{feat}</span>
                            </li>
                        ))}
                    </ul>
                    <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-moriso-teal text-white hover:bg-moriso-navy shadow-lg' : 'bg-white text-moriso-navy border-2 border-moriso-navy/10 hover:border-moriso-navy'}`}>
                        Choose Plan
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
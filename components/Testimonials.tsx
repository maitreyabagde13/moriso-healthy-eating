import React, { useState } from 'react';
import { Quote, Plus, Minus } from 'lucide-react';

const testimonials = [
  {
    text: "MORISO saved my fitness goals. High-protein meals that are actually tasty.",
    name: "Aditi",
    role: "MBA Student"
  },
  {
    text: "I don’t cook anymore. MORISO gives me clean food every day.",
    name: "Karan",
    role: "Software Engineer"
  },
  {
    text: "Hostel mess was unpredictable. Now I eat consistently.",
    name: "Rohan",
    role: "Engineering Student"
  }
];

const faqs = [
  { question: "Do you deliver to hostels and PGs?", answer: "Yes, we deliver to hostels, PGs, company dorms, and shared flats directly to your reception or room." },
  { question: "Can I pause my subscription?", answer: "Absolutely. You can pause anytime from your dashboard if you are going home for the weekend." },
  { question: "Can I swap meals?", answer: "Yes! Weekly and monthly plans allow unlimited meal swaps from our daily menu." },
  { question: "Is the food hygienic?", answer: "100%. All meals are prepared in our certified, hairnet-mandatory cloud kitchens with top-tier hygiene ratings." },
  { question: "Do you customise for goals?", answer: "Yes. When you sign up, you pick a track: Fat Loss, Muscle Gain, or Clean Eating, and we adjust your recommended meals." }
];

export const SocialProof: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-moriso-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-moriso-navy mb-12">People ❤️ MORISO</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <Quote className="w-8 h-8 text-moriso-teal/20 mb-4 fill-moriso-teal" />
                        <p className="text-gray-700 text-lg mb-6 italic">"{t.text}"</p>
                        <div>
                            <p className="font-bold text-moriso-navy">{t.name}</p>
                            <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-moriso-navy mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <button 
                            className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        >
                            {faq.question}
                            {openFaq === idx ? <Minus className="w-5 h-5 text-moriso-teal" /> : <Plus className="w-5 h-5 text-gray-400" />}
                        </button>
                        {openFaq === idx && (
                            <div className="p-5 pt-0 text-gray-600 bg-gray-50">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Instagram, Facebook, Utensils, Mail, Phone, MessageSquare, X, Send, Loader2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        setIsFeedbackOpen(false);
        setSubmitted(false);
        setFeedback('');
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <footer className="bg-moriso-navy text-white pt-16 pb-8" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                 <div className="bg-moriso-teal p-1.5 rounded-lg">
                    <Utensils className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-xl tracking-tight">MORISO</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering students and singles to eat better, live healthier, and stress less about food.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/morisomeals/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-moriso-teal transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61581800837113" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-moriso-teal transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-moriso-teal">About Us</a></li>
                <li><a href="#" className="hover:text-moriso-teal">Cloud Kitchens</a></li>
                <li><a href="#" className="hover:text-moriso-teal">Terms of Service</a></li>
                <li><a href="#" className="hover:text-moriso-teal">Privacy Policy</a></li>
                <li>
                  <button 
                    onClick={() => setIsFeedbackOpen(true)}
                    className="hover:text-moriso-teal flex items-center gap-2 transition-colors text-left"
                  >
                    Share Feedback
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Us - NEW */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-moriso-teal shrink-0" />
                  <a href="mailto:morisobuisness@gmail.com" className="hover:text-white transition-colors">
                    morisobuisness@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-moriso-teal shrink-0" />
                  <a href="tel:+917587520523" className="hover:text-white transition-colors">
                    +91 7587520523
                  </a>
                </li>
              </ul>
            </div>

            {/* App Download */}
            <div>
               <h4 className="font-bold text-lg mb-4">Get the App</h4>
               <p className="text-gray-400 text-sm mb-4">Order faster on the go.</p>
               <div className="space-y-3">
                   <button className="bg-white/10 w-full py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/20 transition-all text-left flex items-center gap-2">
                      🍎 App Store
                   </button>
                   <button className="bg-white/10 w-full py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/20 transition-all text-left flex items-center gap-2">
                      🤖 Google Play
                   </button>
               </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} MORISO Technologies Pvt Ltd. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made with ❤️ for healthy living.</p>
          </div>
        </div>
      </footer>

      {/* Feedback Modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative animate-scale-in">
            <button 
              onClick={() => setIsFeedbackOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-moriso-teal/10 p-2 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-moriso-teal" />
                </div>
                <h3 className="text-2xl font-bold text-moriso-navy">Your Feedback</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Help us improve MORISO. What do you think about our food or service?
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-1">Thank You!</h4>
                  <p className="text-green-700 text-sm">Your feedback has been sent directly to our team.</p>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit}>
                  <div className="mb-4">
                    <textarea 
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="I really liked the..."
                      className="w-full h-32 p-4 rounded-xl border-2 border-gray-200 focus:border-moriso-teal focus:ring-0 text-gray-800 resize-none transition-all placeholder:text-gray-400 text-sm"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !feedback.trim()}
                    className="w-full bg-moriso-navy text-white py-3 rounded-xl font-bold hover:bg-moriso-teal disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Feedback <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
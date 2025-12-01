import React, { useState } from 'react';
import { BlogItem } from '../types';
import { Calendar, Clock, User, X, ArrowRight } from 'lucide-react';

const blogs: BlogItem[] = [
  {
    id: 1,
    title: "Why Eating Healthy in College Feels Impossible — And How MORISO Solves It",
    excerpt: "College life is chaotic. Between classes and exams, food is the first thing compromised. Here's how to fix it.",
    date: "Oct 12, 2023",
    readTime: "4 min read",
    author: "Team MORISO",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    tags: ["Student Life", "Health Hacks"],
    content: `
      <p class="mb-4">College life is exciting, but let’s be honest — it’s also chaotic. Between early-morning classes, project meetings, unpredictable timetables, gym sessions, and late-night studying, the one thing students almost always compromise on is food. Not because they want to, but because they simply don’t have the time or energy to plan, cook, or even find a healthy option.</p>
      
      <h3 class="text-xl font-bold text-moriso-navy mt-6 mb-3">The Student Struggle</h3>
      <p class="mb-4">Most students want to eat healthy, but the reality looks like this:</p>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
        <li>Skipping breakfast because you overslept.</li>
        <li>Surviving on the mess menu which changes every day.</li>
        <li>Ordering junk food because you’re hungry and tired.</li>
        <li>Repeating the cycle until fatigue and low energy become normal.</li>
      </ul>

      <h3 class="text-xl font-bold text-moriso-navy mt-6 mb-3">MORISO was created to break this cycle.</h3>
      <p class="mb-4">We offer clean, nutritious, affordable meals made specifically for students who want to stay healthy without the stress of cooking or the unpredictability of hostel food. Every meal is cooked fresh, balanced with the right nutrients, and priced in a way that fits a student’s budget.</p>

      <h3 class="text-xl font-bold text-moriso-navy mt-6 mb-3">What makes MORISO different?</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
        <li><strong>Hygienic, home-style cooking:</strong> No excess oil or preservatives.</li>
        <li><strong>Balanced meals:</strong> Ideal for daily nutrition and energy.</li>
        <li><strong>Affordable prices:</strong> Designed strictly for student budgets.</li>
        <li><strong>Consistency:</strong> Great taste and quality, every single day.</li>
        <li><strong>Fast delivery:</strong> Reliable service straight to your door.</li>
      </ul>

      <p class="font-medium text-lg text-moriso-teal">With MORISO, eating healthy becomes simple — not a struggle.</p>
    `
  },
  {
    id: 2,
    title: "The Hidden Cost of Unhealthy Eating in Hostels",
    excerpt: "Late-night Maggi and oily parathas feel harmless, but they affect your grades and fitness more than you think.",
    date: "Oct 15, 2023",
    readTime: "5 min read",
    author: "Dr. A. Sharma",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Wellness", "Hostel Life"],
    content: `
      <p class="mb-4">Hostel life comes with its own charm — late-night chats, canteen gatherings, and endless memories. But it also comes with something students rarely talk about: unhealthy eating habits that slowly affect their health, fitness, and productivity.</p>
      
      <p class="mb-4">When the mess food is unpredictable and cooking isn’t an option, students often end up choosing convenience over nutrition. Late-night Maggi, oily parathas, fried snacks, and skipped meals might feel harmless in the moment, but the long-term impact is real.</p>

      <h3 class="text-xl font-bold text-moriso-navy mt-6 mb-3">Unhealthy eating affects:</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
        <li><strong>Energy Levels:</strong> You feel tired and unfocused during classes.</li>
        <li><strong>Digestion:</strong> Acidity, bloating, and irregular appetite become normal.</li>
        <li><strong>Fitness:</strong> You can’t build muscle or lose fat without consistent nutrition.</li>
        <li><strong>Mental Well-being:</strong> Food affects mood, concentration, and sleep quality.</li>
      </ul>

      <h3 class="text-xl font-bold text-moriso-navy mt-6 mb-3">This is where MORISO steps in.</h3>
      <p class="mb-4">We create healthy, home-style meals that help students regain control over their eating habits. With fresh ingredients, cleaner cooking methods, and balanced menus, MORISO is designed to support your fitness, academics, and overall well-being.</p>
      
      <p class="mb-4">Our rotating menu keeps meals exciting, and our pricing ensures you eat better without spending more. For gym-goers, we also offer high-protein options that match fitness goals.</p>

      <p class="font-medium text-lg text-moriso-teal">Healthy eating doesn’t need to be complicated — MORISO makes it easy.</p>
    `
  },
  {
    id: 3,
    title: "MORISO Meal Subscriptions: Your Daily Healthy Meal, Delivered",
    excerpt: "No mess confusion. No last-minute food hunts. Just fresh, clean, balanced food delivered consistently.",
    date: "Oct 20, 2023",
    readTime: "3 min read",
    author: "Team MORISO",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    tags: ["Subscriptions", "Productivity"],
    content: `
      <p class="mb-4">Imagine a college life where you don’t have to worry about what to eat every day. No mess confusion. No last-minute food hunts. No skipping meals. Just fresh, clean, balanced food delivered consistently.</p>
      
      <p class="font-bold text-lg mb-4 text-moriso-navy">That’s exactly what the MORISO Subscription Plans offer.</p>
      
      <p class="mb-4">Our subscription model is built for students who want a stable, healthy eating pattern without the stress of cooking or the inconsistency of hostel food. You can choose from daily lunch, dinner, or full-month meal plans depending on your routine.</p>

      <h3 class="text-xl font-bold text-moriso-navy mt-6 mb-3">Why students love MORISO subscriptions:</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
        <li>Zero cooking, zero mess</li>
        <li>No stress about what to eat</li>
        <li>Same quality every day</li>
        <li>Affordable monthly pricing</li>
        <li>Ideal for fitness and academic routines</li>
      </ul>

      <h3 class="text-xl font-bold text-moriso-navy mt-6 mb-3">How it works:</h3>
      <ol class="list-decimal pl-5 space-y-2 mb-6 text-gray-700">
        <li>Select your meal plan for the month.</li>
        <li>Receive fresh meals delivered to your hostel or home daily.</li>
        <li>Enjoy clean, homestyle food that keeps you energized and consistent.</li>
      </ol>

      <p class="mb-4">MORISO subscriptions are perfect for students at IIM Jammu, IIT Jammu, AIIMS, and nearby colleges — as well as working professionals living alone in the city. If you want to build healthier habits, save time, and focus on what matters, this is the simplest way to do it.</p>

      <p class="font-medium text-lg text-moriso-teal">Eating well should be effortless. With MORISO, it finally is.</p>
    `
  }
];

export const BlogsPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  return (
    <section className="py-20 bg-moriso-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-moriso-navy mb-4">
            The MORISO Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, stories, and guides on staying healthy while navigating college life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  {blog.tags.map(tag => (
                    <span key={tag} className="bg-white/95 backdrop-blur text-moriso-navy text-xs font-bold px-3 py-1 rounded-full shadow-sm mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-moriso-teal transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                   <div className="flex items-center gap-2">
                     <div className="bg-gray-100 p-1.5 rounded-full">
                       <User className="w-3 h-3 text-gray-500" />
                     </div>
                     <span className="text-xs font-medium text-gray-700">{blog.author}</span>
                   </div>
                   <span className="text-moriso-teal text-sm font-bold flex items-center gap-1">
                     Read More <ArrowRight className="w-4 h-4" />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in cursor-pointer"
          onClick={() => setSelectedBlog(null)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden relative animate-scale-in max-h-[90vh] flex flex-col cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 shrink-0">
               <img 
                 src={selectedBlog.image} 
                 alt={selectedBlog.title} 
                 className="w-full h-full object-cover"
               />
               <button 
                 onClick={() => setSelectedBlog(null)}
                 className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-md"
               >
                 <X className="w-6 h-6" />
               </button>
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-24">
                  <div className="flex gap-2 mb-2">
                    {selectedBlog.tags.map(tag => (
                        <span key={tag} className="bg-moriso-teal text-white text-xs font-bold px-2 py-1 rounded-md">
                        {tag}
                        </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {selectedBlog.title}
                  </h2>
               </div>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
               <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
                  <span className="flex items-center gap-2"><User className="w-4 h-4" /> By {selectedBlog.author}</span>
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {selectedBlog.date}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {selectedBlog.readTime}</span>
               </div>
               
               <div 
                 className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 prose-headings:text-moriso-navy prose-a:text-moriso-teal"
                 dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
               >
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
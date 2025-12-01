import React from 'react';
import { MealItem } from '../types';
import { Flame, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const meals: MealItem[] = [
  {
    id: 1,
    name: "High-Protein Paneer Bowl",
    calories: 520,
    description: "Paneer, sautéed veggies, brown rice, light spices.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["High Protein", "Veg"],
    price: 189,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Shredded Chicken Power Box",
    calories: 600,
    description: "Lean chicken, herbed rice, salad, high protein.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["High Protein", "Non-Veg"],
    price: 219
  },
  {
    id: 3,
    name: "Dal-Chawal Lite Combo",
    calories: 450,
    description: "Comfort food made clean: low oil, high fiber.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Balanced", "Veg"],
    price: 129
  },
  {
    id: 4,
    name: "Oats & Fruit Power Bowl",
    calories: 380,
    description: "Sweet, filling, perfect for breakfast.",
    image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Breakfast", "Fiber"],
    price: 149
  }
];

export const MenuGrid: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-20 bg-moriso-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-moriso-navy mb-4">
            Fresh, Healthy Meals <br/> Cooked Daily
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chef-prepared recipes designed for your goals. No preservatives, just real food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={meal.image} 
                  alt={meal.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Best Seller Badge */}
                {meal.isBestSeller && (
                  <div className="absolute top-0 right-0 bg-moriso-gold text-moriso-navy text-xs font-bold px-3 py-1.5 rounded-bl-2xl shadow-md z-10 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-moriso-navy" /> Best Seller
                  </div>
                )}

                <div className="absolute top-4 left-4 flex gap-2">
                    {meal.tags.map(tag => (
                        <span key={tag} className="bg-white/95 backdrop-blur text-moriso-navy text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="absolute bottom-4 right-4">
                    <div className="bg-white/95 backdrop-blur text-moriso-navy font-extrabold px-3 py-1 rounded-lg shadow-sm">
                        ₹{meal.price}
                    </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight pr-4">{meal.name}</h3>
                    <div className="flex items-center gap-1 text-moriso-gold font-semibold text-sm whitespace-nowrap bg-moriso-gold/10 px-2 py-0.5 rounded">
                        <Flame className="w-3.5 h-3.5 fill-current" /> {meal.calories}
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{meal.description}</p>
                <button 
                  onClick={() => addToCart(meal)}
                  className="w-full flex items-center justify-center gap-2 border-2 border-moriso-teal text-moriso-teal font-bold py-2.5 rounded-xl hover:bg-moriso-teal hover:text-white transition-colors active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
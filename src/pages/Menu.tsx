import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { allMenuItems, siteConfig } from "../data";
import { ArrowRight, Utensils, GlassWater, ShoppingBag } from "lucide-react";
import { cn } from "../lib/utils";

const categories = ["All", "Meals", "Sandwiches", "Drinks"];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? allMenuItems 
    : allMenuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-4 block">Our Offerings</span>
        <h1 className="text-5xl md:text-6xl font-serif text-cafe-purple-dark mb-4">The Menu</h1>
        <p className="text-cafe-text/70 max-w-lg mx-auto">
          Savor the moments with our exquisite curation of meals, artisanal sandwiches, and premium beverages.
        </p>
      </div>

      {/* Instant Ordering Direct Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.a
          href={siteConfig.zappieMainMenuUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden bg-cafe-purple-dark text-white p-8 rounded-3xl border border-cafe-gold/20 flex items-center justify-between shadow-md transition-all duration-300"
        >
          <div className="relative z-10 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-cafe-gold/20 flex items-center justify-center text-cafe-gold shrink-0">
              <Utensils size={28} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-cafe-gold font-semibold mb-1 block">Full Food Menu</span>
              <h3 className="text-2xl font-serif font-bold group-hover:text-cafe-gold-light transition-colors">Order Main Menu</h3>
              <p className="text-white/70 text-xs mt-1">Burgers, chicken, rice bowls, pasta & more</p>
            </div>
          </div>
          <ArrowRight size={24} className="text-cafe-gold group-hover:translate-x-1 transition-transform relative z-10" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-cafe-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        </motion.a>

        <motion.a
          href={siteConfig.zappieDrinksMenuUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden bg-white text-cafe-dark p-8 rounded-3xl border border-cafe-gold/20 flex items-center justify-between shadow-md transition-all duration-300"
        >
          <div className="relative z-10 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-cafe-purple-dark/5 flex items-center justify-center text-cafe-purple shrink-0">
              <GlassWater size={28} className="text-cafe-purple-dark" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-cafe-gold font-semibold mb-1 block">Beverages & Cocktails</span>
              <h3 className="text-2xl font-serif font-bold text-cafe-purple-dark group-hover:text-cafe-gold transition-colors">Order Drinks Menu</h3>
              <p className="text-cafe-text/60 text-xs mt-1">Mocktails, coffee, cocktails, milkshakes & spirits</p>
            </div>
          </div>
          <ArrowRight size={24} className="text-cafe-gold group-hover:translate-x-1 transition-transform relative z-10" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-cafe-purple-dark/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        </motion.a>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm uppercase tracking-wide font-medium transition-all duration-300",
              activeCategory === cat 
                ? "bg-cafe-purple-dark text-white shadow-sm" 
                : "bg-white text-cafe-dark hover:bg-cafe-gold hover:text-white border border-cafe-gold/10 shadow-sm"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredMenu.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col sm:flex-row gap-6 items-start"
            >
              <a 
                href={item.zappieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row gap-6 items-start w-full group"
              >
                {item.image && (
                  <div className="w-full sm:w-32 h-48 sm:h-32 shrink-0 rounded-2xl overflow-hidden bg-cafe-cream border border-cafe-gold/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start gap-4 mb-2 border-b border-cafe-gold/20 pb-2">
                    <h3 className="font-serif text-xl font-bold text-cafe-purple-dark group-hover:text-cafe-gold transition-colors">{item.name}</h3>
                    <span className="font-medium text-cafe-gold whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-cafe-text/70 mt-3 mb-3">{item.description}</p>
                  
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-cafe-gold group-hover:text-cafe-purple-dark transition-colors">
                    <ShoppingBag size={14} />
                    <span>Order on Zappie</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="text-center bg-cafe-purple-dark text-white p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cafe-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <h3 className="text-3xl font-serif mb-6 relative z-10">Craving something specific?</h3>
        <p className="text-white/80 mb-8 max-w-lg mx-auto relative z-10">
          Explore our full collection and place your order securely on Zappie.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <a 
            href={siteConfig.zappieMainMenuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-cafe-gold text-cafe-dark font-medium rounded-full hover:bg-white transition-colors"
          >
            Order Food <ArrowRight size={18} />
          </a>
          <a 
            href={siteConfig.zappieDrinksMenuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Order Drinks <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

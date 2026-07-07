import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "../data";
import { Phone, MapPin, Clock } from "lucide-react";

export function Reservation() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-4 block">Book a Table</span>
          <h1 className="text-5xl md:text-6xl font-serif text-cafe-purple-dark mb-6 leading-tight">
            Reserve your spot! <br/> Ultimate joy of dining done right
          </h1>
          <p className="text-lg text-cafe-text/80 leading-relaxed mb-10 max-w-md">
            Whether it's an intimate dinner, a business lunch, or our famous Sunday Brunch, we are ready to host you.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cafe-gold/10 flex items-center justify-center text-cafe-gold shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-cafe-dark mb-1">Call for Reservations</h3>
                <p className="text-cafe-text/70">We accept reservations via phone for parties of 1 to 10. For larger events, please contact us directly.</p>
                <a href={`tel:${siteConfig.phone}`} className="inline-block mt-2 text-2xl font-serif text-cafe-purple-dark hover:text-cafe-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cafe-gold/10 flex items-center justify-center text-cafe-gold shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-cafe-dark mb-1">Opening Hours</h3>
                <p className="text-cafe-text/70">{siteConfig.hours.weekdays}</p>
                <p className="text-cafe-text/70">Open everyday</p>
              </div>
            </div>
          </div>

          <a 
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-cafe-purple-dark text-white font-medium rounded-full hover:bg-cafe-gold transition-colors w-full sm:w-auto"
          >
            Call Now to Book
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-zEYcy8tb_2hWB_LEf-rfDopjbsF7vnd-Vlff90rlzoEnD5WbW3_jzx1jMQ1cD7mksOTanM4JmGUeGolglGUu0np6T7PBH_Z2yXZL8CqjPJMCKKetBa9761w3QroY1NuauM5tUutX7PAf8ncUKcZhdf8fa3oSL5P7tHgynO_-NGOy8KTfWjMWou0bqBqm/s400/lc1sw2.webp" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-cafe-gold rounded-3xl z-0 hidden md:block" />
        </motion.div>

      </div>
    </div>
  );
}

import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "../data";

export function About() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-4 block">About Us</span>
        <h1 className="text-5xl md:text-6xl font-serif text-cafe-purple-dark mb-6">Our Story</h1>
        <p className="text-lg text-cafe-text/80 leading-relaxed">
          Every smile, every bite, every sip... that's the Purple Jasmine Café experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/5] rounded-2xl overflow-hidden"
        >
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX48rkNVXu7n5wvsPVoTgtNQOmMraM5H5K67h6G2dySd1JK-WsbPPql1hqnxpspMapx37j6TBLCkEZn719H_XHIm8Gu-Pknkk3nr_gG19Y7hua_K9MLEfgN__VN5JUMt7H8fuhYBen5vq6aJ3y5y5oxhf3d1AdJkhfbtRih2A4e-lMIvbEgSHSQugdCDo_/s320/1hiew2.png" 
            alt="Dining Experience" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-serif text-cafe-purple-dark">A Passion for Quality</h2>
          <p className="text-cafe-text/80 leading-relaxed">
            Located in Ikoyi, Purple Jasmine Café & Lounge was born out of a love for exceptional food, signature cocktails, and warm hospitality. We believe that a café should be more than just a place to eat—it should be an all-day destination where cherished moments are created and shared.
          </p>
          <p className="text-cafe-text/80 leading-relaxed">
            Our menu is thoughtfully curated with premium ingredients, bringing together the best of local flavours and international café classics. From savory favorites like our Parmesan Chicken and Truffle Shrimp Melt to refreshing beverages like Matcha Milkshakes, craft cocktails, and rich espresso, every item is prepared to delight.
          </p>
          <p className="text-cafe-text/80 leading-relaxed">
            Whether you’re joining us for our signature Sunday Brunch, a quiet afternoon coffee, or a delightful dinner, we aim to make every visit a memorable experience.
          </p>
        </motion.div>
      </div>

      <div className="bg-white p-12 rounded-3xl shadow-sm text-center">
        <h3 className="text-2xl font-serif text-cafe-purple-dark mb-4">Visit Us Today</h3>
        <p className="text-cafe-text/80 mb-8 max-w-lg mx-auto">
          We'd love to see your reaction next! Come for the food, stay for the moments.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
          <div className="bg-cafe-cream p-6 rounded-2xl">
            <h4 className="font-semibold text-cafe-gold uppercase tracking-wider text-sm mb-2">Location</h4>
            <p className="text-cafe-dark">{siteConfig.address}</p>
          </div>
          <div className="bg-cafe-cream p-6 rounded-2xl">
            <h4 className="font-semibold text-cafe-gold uppercase tracking-wider text-sm mb-2">Hours</h4>
            <p className="text-cafe-dark">Mon - Sun: 08:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

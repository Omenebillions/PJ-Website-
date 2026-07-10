import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { siteConfig, featuredMenuItems } from "../data";
import { ArrowRight, Star, ShoppingBag } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[720px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-cafe-dark pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMhnS3ZhBgn8EdTwBOfemt8S3g-3-5m1ggX6NejogpIrLcATBi3dPVJ0BPlna6GnB3TTAGsFEavnA06PdV5sLqOERlpIXEEuI2LIQ1Kn8lxowJ7Uipm_mX7aszgTsOnnaqfxf0TAPrc057smQKMmjtqii8PkdBrtyqT5U4ooZDjonQ258EBdG3e72bd_BK/s320/9afva6.jpg" 
            alt="Interior of Purple Jasmine Cafe" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cafe-purple-dark/90 via-cafe-dark/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-36 md:pt-44">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-cafe-gold/50 bg-cafe-gold/10 text-cafe-gold text-xs uppercase tracking-[0.15em] mb-6 backdrop-blur-sm font-semibold">
              All-Day Café & Lounge • Breakfast • Brunch • Lunch • Dinner • Cocktails
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
              Experience the <br className="hidden md:block"/>
              <span className="text-cafe-gold italic">Language</span> of Taste
            </h1>
            <p className="text-lg md:text-2xl text-cafe-cream font-medium mb-3 max-w-3xl mx-auto tracking-wide">
              Where every smile, every bite, and every sip tells a story.
            </p>
            <p className="text-sm md:text-base text-cafe-cream/80 font-light mb-10 max-w-2xl mx-auto">
              Indulge in exceptional food, handcrafted drinks, and unforgettable moments at Purple Jasmine Café.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href={siteConfig.zappieMainMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-cafe-gold text-cafe-dark font-medium tracking-wide rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Order Food Menu</span> <ArrowRight size={18} />
              </a>
              <a 
                href={siteConfig.zappieDrinksMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-cafe-purple-dark border border-cafe-gold/40 text-white font-medium tracking-wide rounded-full hover:bg-cafe-purple transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Order Drinks Menu</span> <ArrowRight size={18} />
              </a>
              <Link 
                to="/reservation"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium tracking-wide rounded-full hover:bg-white/10 transition-colors"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp}>
          <span className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif text-cafe-purple-dark mb-6 leading-tight">
            Blending tradition & innovation to create unforgettable dining experiences
          </h2>
          <p className="text-cafe-text/80 leading-relaxed mb-8">
            Located in the heart of Ikoyi, Purple Jasmine is an all-day cafe & lounge designed for those who appreciate the finer details. From our signature Parmesan Chicken to our Truffle Scrambled Eggs, every dish is crafted to evoke joy.
          </p>
          <Link to="/about" className="inline-flex items-center text-cafe-purple font-medium hover:text-cafe-gold transition-colors uppercase tracking-wide text-sm gap-2">
            Read Our Story <ArrowRight size={16} />
          </Link>
        </motion.div>
        <motion.div 
          {...fadeUp} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX48rkNVXu7n5wvsPVoTgtNQOmMraM5H5K67h6G2dySd1JK-WsbPPql1hqnxpspMapx37j6TBLCkEZn719H_XHIm8Gu-Pknkk3nr_gG19Y7hua_K9MLEfgN__VN5JUMt7H8fuhYBen5vq6aJ3y5y5oxhf3d1AdJkhfbtRih2A4e-lMIvbEgSHSQugdCDo_/s320/1hiew2.png" 
              alt="Dining Experience" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
            <div className="flex text-cafe-gold mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="font-serif italic text-cafe-purple-dark mb-2">"Every bite was a burst of flavor! The ambiance and service were flawless."</p>
            <p className="text-xs text-cafe-text/60 uppercase tracking-wider font-semibold">- Satisfied Customer</p>
          </div>
        </motion.div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div {...fadeUp} className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-4 block">Main Course</span>
              <h2 className="text-4xl md:text-5xl font-serif text-cafe-purple-dark leading-tight">
                Your next favorite meal awaits
              </h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <Link to="/menu" className="inline-flex items-center px-6 py-3 border border-cafe-gold text-cafe-purple-dark font-medium rounded-full hover:bg-cafe-gold hover:text-white transition-all uppercase tracking-wide text-sm">
                Discover our Menu
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMenuItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <a 
                  href={item.zappieUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-cafe-cream">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-xl font-bold text-cafe-purple-dark leading-snug group-hover:text-cafe-gold transition-colors">{item.name}</h3>
                    <span className="font-medium text-cafe-gold whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-cafe-text/70 line-clamp-2 mb-4">{item.description}</p>
                  
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cafe-gold group-hover:text-cafe-purple-dark transition-colors">
                    <ShoppingBag size={14} />
                    <span>Order on Zappie</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sunday Brunch Banner */}
      <section className="py-24 px-6 md:px-12 bg-cafe-purple-dark text-cafe-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
            src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=2000&auto=format&fit=crop" 
            alt="Brunch pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeUp}>
            <span className="text-cafe-gold uppercase tracking-[0.2em] font-semibold text-sm mb-4 block">Special Event</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white italic">Sunday Brunch</h2>
            <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
              For ₦55,000 only, enjoy a delicious 3-course brunch with 2 drinks and beautiful moments to share.
            </p>
            <Link 
              to="/reservation"
              className="inline-flex px-10 py-4 bg-white text-cafe-purple-dark font-semibold tracking-wide rounded-full hover:bg-cafe-gold hover:text-white transition-colors"
            >
              Reserve Your Table
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
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
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatically cycle slides every 10 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const showOverlayText = activeSlide === 1 || !videoPlaying;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] min-h-[480px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-cafe-dark">
        {/* Cinematic Background Slideshow (Video and Image) */}
        <div className="absolute inset-0 z-0">
          {/* Slide 0: Video */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => {
                if (activeSlide === 0) setVideoPlaying(true);
              }}
              onPause={() => setVideoPlaying(false)}
              className="w-full h-full object-cover"
              poster="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMhnS3ZhBgn8EdTwBOfemt8S3g-3-5m1ggX6NejogpIrLcATBi3dPVJ0BPlna6GnB3TTAGsFEavnA06PdV5sLqOERlpIXEEuI2LIQ1Kn8lxowJ7Uipm_mX7aszgTsOnnaqfxf0TAPrc057smQKMmjtqii8PkdBrtyqT5U4ooZDjonQ258EBdG3e72bd_BK/s320/9afva6.jpg"
            >
              <source
                src="https://solitary-bar-a943.ejaetaomene.workers.dev/"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Slide 1: Image of Purple Jasmine Café */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMhnS3ZhBgn8EdTwBOfemt8S3g-3-5m1ggX6NejogpIrLcATBi3dPVJ0BPlna6GnB3TTAGsFEavnA06PdV5sLqOERlpIXEEuI2LIQ1Kn8lxowJ7Uipm_mX7aszgTsOnnaqfxf0TAPrc057smQKMmjtqii8PkdBrtyqT5U4ooZDjonQ258EBdG3e72bd_BK/s320/9afva6.jpg" 
              alt="Atmosphere at Purple Jasmine Cafe" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Multi-layered luxury gradient mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-cafe-purple-dark via-cafe-dark/25 to-black/30 transition-opacity duration-1000" />
        </div>

        {/* Text overlay - dynamically fades when video plays on active slide 0 */}
        <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 transform ${showOverlayText ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
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
          </motion.div>
        </div>

        {/* Premium Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          <button
            onClick={() => {
              setActiveSlide(0);
              setVideoPlaying(false); // trigger replay state check
            }}
            aria-label="Video Slide"
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === 0 ? "bg-cafe-gold scale-125" : "bg-white/40 hover:bg-white/60"}`}
          />
          <button
            onClick={() => setActiveSlide(1)}
            aria-label="Atmospheric Image Slide"
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === 1 ? "bg-cafe-gold scale-125" : "bg-white/40 hover:bg-white/60"}`}
          />
        </div>
      </section>

      {/* Experience & Order Sections - Clean Premium UI immediately below the video banner */}
      <section className="py-12 px-6 md:px-12 bg-cafe-cream/35 border-b border-cafe-gold/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-cafe-gold/30 bg-cafe-gold/5 text-cafe-purple-dark text-xs uppercase tracking-[0.15em] font-bold">
              All-Day Café & Lounge • Breakfast • Brunch • Lunch • Dinner • Cocktails
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cafe-purple-dark leading-tight">
              Experience the <span className="text-cafe-gold italic">Language</span> of Taste
            </h2>
            
            <p className="text-lg md:text-xl text-cafe-purple-dark/80 font-medium tracking-wide max-w-2xl mx-auto">
              Where every smile, every bite, and every sip tells a story.
            </p>
            
            <p className="text-base text-cafe-text/80 leading-relaxed max-w-2xl mx-auto font-light">
              Indulge in exceptional food, handcrafted drinks, and unforgettable moments at Purple Jasmine Café.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a 
                href={siteConfig.zappieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-cafe-gold hover:bg-cafe-purple-dark hover:text-white text-cafe-dark font-semibold tracking-wide rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Order Now</span> <ArrowRight size={18} />
              </a>
              <Link 
                to="/reservation"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-cafe-purple-dark/30 hover:border-cafe-purple-dark text-cafe-purple-dark font-semibold tracking-wide rounded-full hover:bg-cafe-purple-dark/5 transition-all flex items-center justify-center"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-14 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
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
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTg9NCGApXBclZW-zMEavV7LqtF0t3S-P594ORCBF6bi5FaM0b-R2rPb_g9LNzR2U4DfArxy8oaGWfEJfBeX_3l5l0Wp9GuOTFhVZkC13T7AgPxGHBHmzkMwp3QlqlxEtRmMwUcIKZuCk2m6tDFpxQpxygQ6GoIxbe8VhedJZs9RDC2qbH3vecCwe457T8/s320/WhatsApp%20Image%202026-07-13%20at%208.38.41%20AM.jpeg" 
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
      <section className="py-14 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
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
      <section className="py-14 md:py-16 px-6 md:px-12 bg-cafe-purple-dark text-cafe-cream relative overflow-hidden">
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

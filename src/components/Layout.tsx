import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "../data";
import { cn } from "../lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [orderDropdownOpen, setOrderDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Reservation", path: "/reservation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cafe-cream/95 backdrop-blur-sm py-4 border-b border-cafe-gold/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center z-50 relative">
            <span className="font-serif text-2xl md:text-3xl font-bold text-cafe-purple-dark tracking-tight">
              Purple Jasmine Cafe
            </span>
            <span className="text-[0.65rem] uppercase tracking-widest text-cafe-gold font-medium mt-0.5">
              All Day Cafe & Lounge
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-wider font-medium transition-colors hover:text-cafe-gold",
                  location.pathname === link.path
                    ? "text-cafe-gold"
                    : "text-cafe-dark"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50 relative">
            <div 
              className="relative hidden md:block"
              onMouseEnter={() => setOrderDropdownOpen(true)}
              onMouseLeave={() => setOrderDropdownOpen(false)}
            >
              <button
                onClick={() => setOrderDropdownOpen(!orderDropdownOpen)}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-white bg-cafe-purple-dark hover:bg-cafe-purple transition-colors rounded-full shadow-sm cursor-pointer gap-1.5"
              >
                <span>Order Now</span>
                <span className="text-xs opacity-80">▾</span>
              </button>

              <AnimatePresence>
                {orderDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-cafe-gold/20 overflow-hidden z-50"
                  >
                    <a
                      href={siteConfig.zappieMainMenuUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-cafe-purple-dark hover:bg-cafe-cream transition-colors border-b border-gray-100"
                    >
                      <span>🍽️</span>
                      <span>Order Food Menu</span>
                    </a>
                    <a
                      href={siteConfig.zappieDrinksMenuUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-cafe-purple-dark hover:bg-cafe-cream transition-colors"
                    >
                      <span>🍸</span>
                      <span>Order Drinks Menu</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="md:hidden text-cafe-dark hover:text-cafe-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cafe-cream pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col space-y-6 text-center mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-2xl font-serif transition-colors",
                    location.pathname === link.path
                      ? "text-cafe-gold italic"
                      : "text-cafe-dark"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col items-center gap-3.5 w-full max-w-sm mx-auto">
              <a
                href={siteConfig.zappieMainMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-center text-base font-medium tracking-wide text-white bg-cafe-purple-dark hover:bg-cafe-purple transition-colors rounded-full shadow-md flex items-center justify-center gap-2"
              >
                <span>🍽️</span> Order Food Menu
              </a>
              <a
                href={siteConfig.zappieDrinksMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-center text-base font-medium tracking-wide text-cafe-purple-dark bg-cafe-gold hover:bg-cafe-gold-light transition-colors rounded-full shadow-md flex items-center justify-center gap-2"
              >
                <span>🍸</span> Order Drinks Menu
              </a>
              <div className="flex gap-6 text-cafe-dark pt-3">
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-cafe-purple-dark text-cafe-cream py-16 px-6 md:px-12 mt-auto border-t-[8px] border-cafe-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-cafe-gold mb-6">Purple Jasmine</h3>
            <p className="text-cafe-cream/80 text-sm leading-relaxed max-w-sm">
              Experience the language of taste. An all-day cafe & lounge serving premium meals and crafted moments in Ikoyi.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-cafe-cream/80">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/reservation" className="hover:text-white transition-colors">Reservations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-6">Visit Us</h4>
            <address className="not-italic text-sm text-cafe-cream/80 space-y-2">
              <p>{siteConfig.address}</p>
              <p className="pt-2">{siteConfig.hours.weekdays}</p>
              <p>Everyday</p>
            </address>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-6">Connect</h4>
            <div className="space-y-4 text-sm text-cafe-cream/80">
              <p><a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">{siteConfig.phone}</a></p>
              <div className="flex gap-4 pt-2">
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-cafe-gold transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-cafe-gold transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center md:text-left text-xs text-cafe-cream/50 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Purple Jasmine Cafe. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

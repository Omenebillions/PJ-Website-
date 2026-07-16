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
          <Link to="/" className="flex items-center gap-3 z-50 relative group">
            <img 
              src="/logo.png" 
              alt="Purple Jasmine Cafe Logo" 
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-cafe-gold/30 shadow-sm group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-cafe-purple-dark tracking-tight leading-tight">
                Purple Jasmine Cafe
              </span>
              <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest text-cafe-gold font-semibold leading-none mt-0.5">
                All Day Cafe & Lounge
              </span>
            </div>
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
            <a
              href={siteConfig.zappieUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-white bg-cafe-purple-dark hover:bg-cafe-gold hover:text-cafe-dark transition-colors rounded-full shadow-sm cursor-pointer"
            >
              <span>Order Now</span>
            </a>

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
            {/* Top Order Now button inside mobile menu */}
            <div className="w-full max-w-sm mx-auto mt-12 mb-6 px-4">
              <a
                href={siteConfig.zappieUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-base font-semibold tracking-wide text-white bg-cafe-purple-dark hover:bg-cafe-gold hover:text-cafe-dark transition-all rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🛍️</span> Order Now
              </a>
            </div>

            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
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

            <div className="mt-auto flex flex-col items-center gap-3.5 w-full max-w-sm mx-auto pb-4">
              <div className="flex gap-6 text-cafe-dark pt-3">
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
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
              <div className="flex flex-col gap-2">
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors block">
                  {siteConfig.phone}
                </a>
                <a 
                  href={siteConfig.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-full transition-colors w-fit"
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="inline-block">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.092-2.87-6.948C16.612 1.98 14.14 1.135 11.514 1.135 6.075 1.135 1.65 5.548 1.646 10.967c-.001 1.694.441 3.354 1.282 4.8l-.943 3.441 3.522-.924zm10.933-7.871c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.174.199-.349.224-.649.075-.3-.15-1.264-.467-2.41-1.485-.892-.793-1.493-1.771-1.668-2.07-.174-.3-.019-.463.13-.612.135-.133.3-.349.45-.523.15-.174.2-.3.3-.499.1-.2.05-.375-.025-.524-.075-.15-.677-1.633-.927-2.233-.243-.587-.493-.507-.677-.517-.174-.008-.375-.01-.576-.01-.2 0-.527.075-.803.374-.276.3-1.053 1.03-1.053 2.512 0 1.483 1.077 2.913 1.227 3.112.15.2 2.118 3.235 5.132 4.536.717.309 1.277.494 1.711.632.72.228 1.375.196 1.893.118.577-.087 1.771-.724 2.022-1.388.251-.663.251-1.23.176-1.348-.075-.118-.276-.199-.576-.349z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <div className="flex gap-4 pt-2">
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-cafe-gold transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-cafe-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-cafe-gold transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
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

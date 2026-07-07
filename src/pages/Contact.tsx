import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "../data";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-4 block">Get in Touch</span>
        <h1 className="text-5xl md:text-6xl font-serif text-cafe-purple-dark mb-6">Contact Us</h1>
        <p className="text-lg text-cafe-text/80 max-w-2xl mx-auto">
          Have a question, feedback, or want to host an event with us? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-cafe-gold/10">
        {/* Contact Info */}
        <div className="p-12 md:p-16 flex flex-col justify-center bg-cafe-purple-dark text-white">
          <h2 className="text-3xl font-serif mb-8 text-cafe-gold">We are here for you</h2>
          
          <div className="space-y-8 flex-1">
            <div className="flex items-start gap-4">
              <MapPin className="text-cafe-gold shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-white/80 leading-relaxed max-w-xs">{siteConfig.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="text-cafe-gold shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href={`tel:${siteConfig.phone}`} className="text-white/80 hover:text-cafe-gold transition-colors">{siteConfig.phone}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="text-cafe-gold shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href={`mailto:${siteConfig.email}`} className="text-white/80 hover:text-cafe-gold transition-colors">{siteConfig.email}</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-cafe-gold">Follow Our Journey</h3>
            <div className="flex gap-4">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cafe-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cafe-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Map / Image Area */}
        <div className="h-64 lg:h-auto min-h-[400px] relative">
           <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
            alt="Cafe exterior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

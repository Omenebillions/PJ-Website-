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
                <h3 className="font-semibold mb-1">Phone & WhatsApp</h3>
                <div className="flex flex-col gap-2">
                  <a href={`tel:${siteConfig.phone}`} className="text-white/80 hover:text-cafe-gold transition-colors block">
                    {siteConfig.phone}
                  </a>
                  <a 
                    href={siteConfig.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-full transition-colors w-fit"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="inline-block">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.092-2.87-6.948C16.612 1.98 14.14 1.135 11.514 1.135 6.075 1.135 1.65 5.548 1.646 10.967c-.001 1.694.441 3.354 1.282 4.8l-.943 3.441 3.522-.924zm10.933-7.871c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.174.199-.349.224-.649.075-.3-.15-1.264-.467-2.41-1.485-.892-.793-1.493-1.771-1.668-2.07-.174-.3-.019-.463.13-.612.135-.133.3-.349.45-.523.15-.174.2-.3.3-.499.1-.2.05-.375-.025-.524-.075-.15-.677-1.633-.927-2.233-.243-.587-.493-.507-.677-.517-.174-.008-.375-.01-.576-.01-.2 0-.527.075-.803.374-.276.3-1.053 1.03-1.053 2.512 0 1.483 1.077 2.913 1.227 3.112.15.2 2.118 3.235 5.132 4.536.717.309 1.277.494 1.711.632.72.228 1.375.196 1.893.118.577-.087 1.771-.724 2.022-1.388.251-.663.251-1.23.176-1.348-.075-.118-.276-.199-.576-.349z"/>
                    </svg>
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
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
              <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cafe-gold transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
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

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import { siteConfig } from "../data";
import { Phone, MapPin, Clock, Calendar, Users, CheckCircle2, Send, MessageSquare } from "lucide-react";

// WhatsApp SVG Icon
export const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    className={`inline-block ${className}`}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.092-2.87-6.948C16.612 1.98 14.14 1.135 11.514 1.135 6.075 1.135 1.65 5.548 1.646 10.967c-.001 1.694.441 3.354 1.282 4.8l-.943 3.441 3.522-.924zm10.933-7.871c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.174.199-.349.224-.649.075-.3-.15-1.264-.467-2.41-1.485-.892-.793-1.493-1.771-1.668-2.07-.174-.3-.019-.463.13-.612.135-.133.3-.349.45-.523.15-.174.2-.3.3-.499.1-.2.05-.375-.025-.524-.075-.15-.677-1.633-.927-2.233-.243-.587-.493-.507-.677-.517-.174-.008-.375-.01-.576-.01-.2 0-.527.075-.803.374-.276.3-1.053 1.03-1.053 2.512 0 1.483 1.077 2.913 1.227 3.112.15.2 2.118 3.235 5.132 4.536.717.309 1.277.494 1.711.632.72.228 1.375.196 1.893.118.577-.087 1.771-.724 2.022-1.388.251-.663.251-1.23.176-1.348-.075-.118-.276-.199-.576-.349z"/>
  </svg>
);

export function Reservation() {
  const [formState, handleFormspreeSubmit] = useForm("mnjkebdr");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "Casual Dining"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getWhatsAppLink = () => {
    const text = `Hi Purple Jasmine, I'd like to book a table reservation.\n\n` +
      `*Reservation Details:*\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Date:* ${formData.date}\n` +
      `• *Time:* ${formData.time}\n` +
      `• *Guests:* ${formData.guests} people\n` +
      `• *Occasion:* ${formData.occasion}`;
    
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Info Column */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-cafe-gold mb-4 block">Book a Table</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cafe-purple-dark mb-6 leading-tight">
              Reserve your spot!
            </h1>
            <p className="text-base text-cafe-text/80 leading-relaxed mb-10 max-w-md">
              Whether it's an intimate dinner, a business lunch, or our famous Sunday Brunch, we are ready to host you. Complete our short form to send an email notification, then instantly secure your spot via WhatsApp.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cafe-gold/10 flex items-center justify-center text-cafe-gold shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-cafe-dark mb-1">Call for Reservations</h3>
                  <p className="text-sm text-cafe-text/70 mb-2">We accept reservations via phone for parties of 1 to 10. For larger events, please contact us directly.</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={`tel:${siteConfig.phone}`} className="inline-block text-xl font-serif text-cafe-purple-dark hover:text-cafe-gold transition-colors font-bold">
                      {siteConfig.phone}
                    </a>
                    <a 
                      href={siteConfig.whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-full transition-colors"
                    >
                      <WhatsAppIcon size={14} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cafe-gold/10 flex items-center justify-center text-cafe-gold shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-cafe-dark mb-1">Opening Hours</h3>
                  <p className="text-sm text-cafe-text/70">{siteConfig.hours.weekdays}</p>
                  <p className="text-sm text-cafe-text/70">Open everyday</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cafe-gold/10 flex items-center justify-center text-cafe-gold shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-cafe-dark mb-1">Our Location</h3>
                  <p className="text-sm text-cafe-text/70">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-cafe-gold/10"
          >
            <AnimatePresence mode="wait">
              {!formState.succeeded ? (
                <motion.div
                  key="reservation-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-serif text-cafe-purple-dark font-bold mb-2">Book Your Table</h2>
                    <p className="text-sm text-cafe-text/70">Fill in the fields below to send an email request.</p>
                  </div>

                  <form onSubmit={handleFormspreeSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-cafe-purple-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl border border-cafe-gold/20 bg-cafe-cream/30 text-cafe-dark placeholder-cafe-text/40 focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold transition-all text-sm"
                        />
                        <ValidationError prefix="Name" field="name" errors={formState.errors} className="text-xs text-red-500 mt-1" />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-cafe-purple-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-cafe-gold/20 bg-cafe-cream/30 text-cafe-dark placeholder-cafe-text/40 focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold transition-all text-sm"
                        />
                        <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-xs text-red-500 mt-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-cafe-purple-dark mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 0814 824 7243"
                          className="w-full px-4 py-3 rounded-xl border border-cafe-gold/20 bg-cafe-cream/30 text-cafe-dark placeholder-cafe-text/40 focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold transition-all text-sm"
                        />
                        <ValidationError prefix="Phone" field="phone" errors={formState.errors} className="text-xs text-red-500 mt-1" />
                      </div>

                      <div>
                        <label htmlFor="guests" className="block text-xs font-bold uppercase tracking-wider text-cafe-purple-dark mb-2">
                          Number of Guests *
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          required
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cafe-gold/20 bg-cafe-cream/30 text-cafe-dark focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold transition-all text-sm"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6">6 People</option>
                          <option value="7">7 People</option>
                          <option value="8">8 People</option>
                          <option value="9">9 People</option>
                          <option value="10">10+ People</option>
                        </select>
                        <ValidationError prefix="Guests" field="guests" errors={formState.errors} className="text-xs text-red-500 mt-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-cafe-purple-dark mb-2">
                          Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-cafe-gold/20 bg-cafe-cream/30 text-cafe-dark focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold transition-all text-sm"
                          />
                        </div>
                        <ValidationError prefix="Date" field="date" errors={formState.errors} className="text-xs text-red-500 mt-1" />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-xs font-bold uppercase tracking-wider text-cafe-purple-dark mb-2">
                          Time *
                        </label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cafe-gold/20 bg-cafe-cream/30 text-cafe-dark focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold transition-all text-sm"
                        />
                        <ValidationError prefix="Time" field="time" errors={formState.errors} className="text-xs text-red-500 mt-1" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="occasion" className="block text-xs font-bold uppercase tracking-wider text-cafe-purple-dark mb-2">
                        Occasion / Special Notes
                      </label>
                      <input
                        type="text"
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        placeholder="Birthday, anniversary, business or general notes..."
                        className="w-full px-4 py-3 rounded-xl border border-cafe-gold/20 bg-cafe-cream/30 text-cafe-dark placeholder-cafe-text/40 focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold transition-all text-sm"
                      />
                      <ValidationError prefix="Occasion" field="occasion" errors={formState.errors} className="text-xs text-red-500 mt-1" />
                    </div>

                    <button
                      type="submit"
                      disabled={formState.submitting}
                      className="w-full mt-2 py-4 px-6 bg-cafe-purple-dark text-white font-medium hover:bg-cafe-gold transition-all rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {formState.submitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Reservation Request</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-step"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-[#25D366]">
                    <CheckCircle2 size={48} className="animate-bounce" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#25D366] mb-2 block">
                      Step 1 Complete!
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-cafe-purple-dark mb-2">
                      Request Received!
                    </h2>
                    <p className="text-sm text-cafe-text/70 max-w-md mx-auto">
                      Your table reservation details have been successfully logged and sent via email to our reservation team.
                    </p>
                  </div>

                  <div className="bg-cafe-cream/30 border border-cafe-gold/20 p-6 rounded-2xl max-w-md mx-auto text-left space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-cafe-purple-dark border-b border-cafe-gold/10 pb-2">
                      Reservation Summary:
                    </p>
                    <div className="grid grid-cols-2 gap-y-2 text-xs text-cafe-text">
                      <span className="font-semibold">Name:</span> <span className="text-right">{formData.name}</span>
                      <span className="font-semibold">Guests:</span> <span className="text-right">{formData.guests} people</span>
                      <span className="font-semibold">Date & Time:</span> <span className="text-right">{formData.date} at {formData.time}</span>
                      <span className="font-semibold">Occasion:</span> <span className="text-right">{formData.occasion}</span>
                    </div>
                  </div>

                  <div className="border-t border-cafe-gold/20 pt-6 max-w-md mx-auto">
                    <div className="bg-[#25D366]/5 rounded-2xl p-5 border border-[#25D366]/20 mb-6">
                      <h4 className="text-sm font-bold text-[#20ba59] mb-1.5 flex items-center justify-center gap-1.5">
                        <WhatsAppIcon size={16} />
                        <span>Instant WhatsApp Confirmation</span>
                      </h4>
                      <p className="text-xs text-cafe-text/80 leading-relaxed">
                        To lock in your table instantly and chat directly with our host, tap the button below to send your details via WhatsApp.
                      </p>
                    </div>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
                    >
                      <WhatsAppIcon size={20} />
                      <span>Next: Send to WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

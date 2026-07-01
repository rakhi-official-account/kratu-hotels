"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// Premium placeholder portraits from Unsplash Source
const TESTIMONIALS = [
  {
    id: 1,
    name: "Vikram Goel",
    role: "Chief Operating Officer",
    quote: "Direct integration to Laxmi Mall made our business stay exceptionally convenient. The executive suite offers premium luxury while shopping and multiplex dining tables are just a brief private elevator ride away.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
    // Base layout coordinates (percentages) to scatter them naturally
    top: "20%",
    left: "15%",
    size: 90
  },
  {
    id: 2,
    name: "Rajesh Hegde",
    role: "Event Organizer",
    quote: "Aura Hall was majestic. The dual kitchen facilities made hosting our wedding seamless. Our out-of-town guests loved having the luxurious hotel stay directly integrated with their event.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
    top: "45%",
    left: "5%",
    size: 110
  },
  {
    id: 3,
    name: "Sunitha K.",
    role: "Leisure Traveler",
    quote: "The Superior Room had gorgeous city views and the room service was incredibly fast. The staff went above and beyond to personalize my corporate retreat. Easily the best hotel in Hubli.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
    top: "65%",
    left: "30%",
    size: 130
  },
  {
    id: 4,
    name: "Arjun Desai",
    role: "Business Executive",
    quote: "An impeccable standard of luxury. The attention to detail in the architecture and the swift, silent service create an atmosphere of total tranquility amidst a bustling city.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256",
    top: "15%",
    left: "45%",
    size: 100
  },
  {
    id: 5,
    name: "Meera Patel",
    role: "Lifestyle Blogger",
    quote: "The culinary experience at the sky lounge is unparalleled. I spent my evenings enjoying bespoke cocktails while overlooking the city skyline. A truly five-star experience.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256",
    top: "80%",
    left: "15%",
    size: 85
  }
];

export default function Testimonials() {
  const [activeId, setActiveId] = useState(TESTIMONIALS[2].id); // Default active
  const activeTestimonial = TESTIMONIALS.find(t => t.id === activeId) || TESTIMONIALS[0];

  return (
    <section id="testimonials" className="relative w-full min-h-screen bg-background border-b border-cream/5 flex items-center justify-center py-24 overflow-hidden">
      
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-charcoal/40 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 min-h-[60vh]">
        
        {/* LEFT: Scattered Portraits Container */}
        <div className="relative w-full h-[400px] lg:h-full min-h-[500px]">
          {TESTIMONIALS.map((testimonial) => {
            const isActive = activeId === testimonial.id;

            return (
              <motion.button
                key={testimonial.id}
                onClick={() => setActiveId(testimonial.id)}
                className={`absolute rounded-full overflow-hidden focus:outline-none transition-shadow duration-500 cursor-none ${
                  isActive ? "z-30 shadow-[0_0_30px_rgba(212,175,55,0.2)]" : "z-10 shadow-lg hover:z-20"
                }`}
                style={{
                  top: testimonial.top,
                  left: testimonial.left,
                  width: testimonial.size,
                  height: testimonial.size,
                }}
                // Floating continuous animation for ALL avatars
                animate={{
                  y: [0, -8, 0],
                  scale: isActive ? 1.2 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                  borderColor: isActive ? "rgba(212, 175, 55, 0.8)" : "rgba(236, 234, 226, 0.1)",
                  borderWidth: isActive ? 2 : 1,
                  filter: isActive ? "grayscale(0%)" : "grayscale(60%)"
                }}
                transition={{
                  y: {
                    duration: 4 + (testimonial.id % 3), // Randomize float speed
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  scale: { duration: 0.5, ease: "easeOut" },
                  opacity: { duration: 0.5 },
                  filter: { duration: 0.5 }
                }}
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            );
          })}
        </div>

        {/* RIGHT: Active Testimonial Content */}
        <div className="flex flex-col justify-center h-full">
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-8 block font-semibold">
            Guest Experiences
          </span>

          <div className="relative min-h-[250px]">
            <Quote size={40} className="text-cream/10 absolute -top-4 -left-4" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10"
              >
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream tracking-wide leading-relaxed italic font-light mb-8">
                  "{activeTestimonial.quote}"
                </h2>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-gold/50" />
                  <div className="flex flex-col">
                    <p className="font-sans text-sm text-cream tracking-widest uppercase font-semibold">
                      {activeTestimonial.name}
                    </p>
                    <p className="font-sans text-[10px] text-cream/50 tracking-[0.2em] uppercase mt-1">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (menuOpen) {
      // Slide in menu drawer
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power4.out",
      });
      // Stagger nav links entering
      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    } else {
      // Slide out menu drawer
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex items-center justify-between bg-transparent border-b border-cream/5 backdrop-blur-md transition-all duration-300">
        {/* Left Side: Hamburger menu toggle */}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-3 text-cream/70 hover:text-cream transition-all duration-300 group"
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span
              className={`w-6 h-[1.5px] bg-cream transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-cream self-end transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-cream transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </div>
          <span className="font-sans text-xs tracking-[0.25em] font-medium uppercase hidden sm:inline-block">
            Menu
          </span>
        </button>

        {/* Center: Editorial Serif Logo (No backgrounds or drop shadows) */}
        <a
          href="#"
          className="font-serif text-lg md:text-xl tracking-[0.3em] font-semibold text-cream hover:text-gold transition-colors duration-500 select-none uppercase"
        >
          KRATU HOTELS
        </a>

        {/* Right Side: Language, Contacts, and Book Stay CTA */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Language Selector */}
          <div className="relative group hidden md:block">
            <select className="bg-transparent border-none text-cream/70 hover:text-cream text-xs tracking-widest uppercase font-medium focus:outline-none appearance-none pr-4 cursor-none">
              <option value="en" className="bg-charcoal text-cream">
                EN
              </option>
              <option value="kn" className="bg-charcoal text-cream">
                KN
              </option>
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-cream/60 text-[8px] font-sans">
              ▼
            </span>
          </div>

          {/* Contacts */}
          <a
            href="#footer"
            className="font-sans text-xs tracking-[0.2em] font-medium uppercase text-cream/70 hover:text-cream transition-colors duration-300 hidden sm:block"
          >
            Contacts
          </a>

          {/* Book Stay CTA */}
          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-booking-modal", { detail: { type: "room" } }));
            }}
            className="border border-cream/20 hover:border-gold px-4 py-2 text-xs tracking-[0.25em] font-semibold uppercase bg-cream/5 hover:bg-gold hover:text-background transition-all duration-500 rounded-sm cursor-none"
          >
            Book Stay
          </button>
        </div>
      </header>

      {/* Slide-out Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 left-0 w-full md:w-[480px] h-screen bg-charcoal border-r border-cream/5 z-[60] p-12 flex flex-col justify-between -translate-x-full shadow-2xl"
      >
        <div className="flex justify-between items-center">
          <span className="font-serif text-sm tracking-[0.3em] text-cream/30">
            K.H
          </span>
          <button
            onClick={toggleMenu}
            className="text-cream/50 hover:text-cream transition-colors duration-300"
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col gap-6 my-auto">
          {[
            { name: "Home", href: "#home" },
            { name: "Story", href: "#story" },
            { name: "Rooms", href: "#rooms" },
            { name: "Amenities", href: "#amenities" },
            { name: "Dining & Lounges", href: "#dining" },
            { name: "Banquets", href: "#banquets" },
            { name: "Sightseeing", href: "#nearby" },
            { name: "Reviews", href: "#testimonials" },
          ].map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              ref={(el) => {
                linksRef.current[idx] = el;
              }}
              className="font-serif text-3xl md:text-4xl text-cream hover:text-gold transition-colors duration-300 w-fit"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Menu Footer */}
        <div className="flex flex-col gap-4 text-cream/40 font-sans text-xs tracking-wider border-t border-cream/5 pt-6">
          <p>© 2026 Kratu Hotels. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cream transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Vimeo
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Journal
            </a>
          </div>
        </div>
      </div>

      {/* Background overlay drawer */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] transition-opacity duration-300"
        />
      )}
    </>
  );
}

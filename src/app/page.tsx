"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Calendar, 
  User, 
  Compass, 
  Wifi, 
  ShieldCheck, 
  ShowerHead, 
  Utensils, 
  ArrowRight, 
  Star, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award,
  Sparkles,
  Tv,
  Gamepad2
} from "lucide-react";
import Testimonials from "../components/Testimonials";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scene 01 — Hero Refs (Static Background)
  const heroRef = useRef<HTMLDivElement>(null);
  const heroWidgetRef = useRef<HTMLDivElement>(null);

  // Scene 03 — Counter Parallax Refs
  const counterParallaxPinRef = useRef<HTMLDivElement>(null);
  const largeImgRef = useRef<HTMLImageElement>(null);
  const smallImg1Ref = useRef<HTMLImageElement>(null);
  const smallImg2Ref = useRef<HTMLImageElement>(null);
  const smallImg3Ref = useRef<HTMLImageElement>(null);
  const smallImg4Ref = useRef<HTMLImageElement>(null);

  // Scene 04 — Rooms Sticky Scroll Refs
  const roomsPinRef = useRef<HTMLDivElement>(null);
  const room2Ref = useRef<HTMLDivElement>(null);
  const room3Ref = useRef<HTMLDivElement>(null);
  const room4Ref = useRef<HTMLDivElement>(null);
  const room5Ref = useRef<HTMLDivElement>(null);
  const room1ImgRef = useRef<HTMLImageElement>(null);
  const room2ImgRef = useRef<HTMLImageElement>(null);
  const room3ImgRef = useRef<HTMLImageElement>(null);
  const room4ImgRef = useRef<HTMLImageElement>(null);
  const room5ImgRef = useRef<HTMLImageElement>(null);

  // Scene 05 — Expanding Accordion Gallery State
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Scene 06 — Amenities Refs
  const amenitiesSectionRef = useRef<HTMLDivElement>(null);
  const [activeAmenity, setActiveAmenity] = useState(0);

  // Scene 07 — Immersive Video Zoom-Out & Scrub Refs
  const eventVideoSectionRef = useRef<HTMLDivElement>(null);
  const eventVideoRef = useRef<HTMLVideoElement>(null);
  const eventText1Ref = useRef<HTMLDivElement>(null);
  const eventText2Ref = useRef<HTMLDivElement>(null);
  const eventText3Ref = useRef<HTMLDivElement>(null);

  // Scene 08 — Dining Horizontal Scroll Refs
  const diningPinRef = useRef<HTMLDivElement>(null);
  const diningScrollRef = useRef<HTMLDivElement>(null);

  // Scene 11 — Banquet Refs
  const banquetSectionRef = useRef<HTMLDivElement>(null);
  const banquetCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reservation Form State (Hero Widget)
  const [checkIn, setCheckIn] = useState("");
  const [roomType, setRoomType] = useState("deluxe-superior");
  const [guestsCount, setGuestsCount] = useState("2");

  // Newsletter Footer State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Inquiry Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("room"); // 'room', 'banquet', 'dining', 'general'
  const [modalSubmitted, setModalSubmitted] = useState(false);
  
  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");
  const [inquiryGuests, setInquiryGuests] = useState("2");
  const [inquiryNotes, setInquiryNotes] = useState("");

  const amenityImages = [
    "/images/1.jpg",       // Reception Lobby
    "/images/2.jpeg",   // Superior Room
    "/images/1.jpeg",       // Laxmi Mall
    "/images/3.jpeg",       // Suite
    "/images/10.jpeg",// Banquet
  ];

  const accordionPanels = [
    {
      title: "Executive Stays",
      subtitle: "Bespoke Suites & Rooms",
      description: "Experience premium orthocare bedding, custom mahogany credenzas, and integrated ambient temperature settings.",
      img: "/images/3.jpeg"
    },
    {
      title: "Gastronomy",
      subtitle: "Fine Dining & Lounges",
      description: "Enjoy award-winning regional recipes, global signature menus, and curated sky lounge cocktails.",
      img: "/images/1.jpg"
    },
    {
      title: "Celebrations",
      subtitle: "Majestic Banquets",
      description: "Celebrate milestones in Aura, Amrith, or Abhinandan halls hosting up to 600 guests with dual veg/non-veg kitchens.",
      img: "/images/10.jpeg"
    },
    {
      title: "Entertainment",
      subtitle: "Direct Laxmi Mall Link",
      description: "Seamless private elevator connectivity to high-end fashion, Dolby Atmos multiplex screens, and arcade gaming.",
      img: "/images/1.jpeg"
    }
  ];

  useEffect(() => {
    // ----------------------------------------------------------------
    // FIX 1: ALWAYS START AT TOP ON PAGE LOAD / RELOAD
    // ----------------------------------------------------------------
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // Clear any GSAP ScrollTrigger cached scroll memory from prev session
    ScrollTrigger.clearScrollMemory();
    window.history.scrollRestoration = 'manual';

    // Custom event listener from Header to open booking modal
    const handleOpenModalEvent = (e: any) => {
      if (e.detail && e.detail.type) {
        setModalType(e.detail.type);
      } else {
        setModalType("room");
      }
      setIsModalOpen(true);
      setModalSubmitted(false);
    };

    window.addEventListener("open-booking-modal", handleOpenModalEvent);

    // ----------------------------------------------------
    // SCENE 01 — HERO ENTRANCE
    // ----------------------------------------------------
    if (heroWidgetRef.current) {
      gsap.fromTo(heroWidgetRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }

    // ----------------------------------------------------
    // SCENE 03 — COUNTER PARALLAX SCROLL TRIGGER
    // ----------------------------------------------------
    const counterParallaxPin = counterParallaxPinRef.current;
    const largeImg = largeImgRef.current;
    const smallImg1 = smallImg1Ref.current;
    const smallImg2 = smallImg2Ref.current;
    const smallImg3 = smallImg3Ref.current;
    const smallImg4 = smallImg4Ref.current;

    const scene03Ctx = gsap.matchMedia();

    if (counterParallaxPin && largeImg) {
      scene03Ctx.add("(min-width: 1024px)", () => {
        const parallaxTl = gsap.timeline({
          scrollTrigger: {
            trigger: counterParallaxPin,
            start: "top top",
            end: "bottom+=700 top",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          }
        });

        // Large image: slow drift down
        parallaxTl.to(largeImg, { yPercent: 12, scale: 1.04, ease: "none" }, 0);

        // Image 1 (Right): drifts UP as scroll progresses
        if (smallImg1) parallaxTl.fromTo(smallImg1,
          { yPercent: 18 },
          { yPercent: -6, ease: "none" }, 0);

        // Image 3 (Left): counter-drift DOWN slightly
        if (smallImg3) parallaxTl.fromTo(smallImg3,
          { yPercent: 10 },
          { yPercent: -4, ease: "none" }, 0.05);
      });

      scene03Ctx.add("(max-width: 1023px)", () => {
        const parallaxTl = gsap.timeline({
          scrollTrigger: {
            trigger: counterParallaxPin,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });

        parallaxTl.to(largeImg, { yPercent: 8, scale: 1.02, ease: "none" }, 0);
        if (smallImg1) parallaxTl.fromTo(smallImg1, { yPercent: 8 }, { yPercent: -4, ease: "none" }, 0);
        if (smallImg3) parallaxTl.fromTo(smallImg3, { yPercent: 10 }, { yPercent: -3, ease: "none" }, 0.05);
      });
    }

    // ----------------------------------------------------
    // SCENE 04 — ROOMS PINNED SEQUENCE (yPercent transforms)
    // ----------------------------------------------------
    const roomsPin = roomsPinRef.current;
    if (roomsPin) {
      // Immediately clear any CSS transforms and hard-set GSAP positions
      // This must run before ScrollTrigger is created to avoid flash of stacked content
      const hiddenRooms = [room2Ref.current, room3Ref.current, room4Ref.current, room5Ref.current];
      gsap.set(hiddenRooms, { clearProps: "transform" });
      gsap.set(hiddenRooms, { yPercent: 100 });

      const roomsTl = gsap.timeline({
        scrollTrigger: {
          trigger: roomsPin,
          start: "top top",
          end: "bottom+=1600 top",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Slide 1 Image slow zoom out while visible
      roomsTl.to(room1ImgRef.current, { scale: 1.08, ease: "none", duration: 0.15 }, 0);

      // Reveal Slide 2 — curtain slide-up
      roomsTl.to(room2Ref.current, { yPercent: 0, ease: "power2.inOut", duration: 0.22 }, 0.12);
      roomsTl.fromTo(room2ImgRef.current, { scale: 1.12 }, { scale: 1.03, ease: "none", duration: 0.22 }, 0.12);

      // Reveal Slide 3 — curtain slide-up
      roomsTl.to(room3Ref.current, { yPercent: 0, ease: "power2.inOut", duration: 0.22 }, 0.36);
      roomsTl.fromTo(room3ImgRef.current, { scale: 1.12 }, { scale: 1.03, ease: "none", duration: 0.22 }, 0.36);

      // Reveal Slide 4 — curtain slide-up
      roomsTl.to(room4Ref.current, { yPercent: 0, ease: "power2.inOut", duration: 0.22 }, 0.60);
      roomsTl.fromTo(room4ImgRef.current, { scale: 1.12 }, { scale: 1.03, ease: "none", duration: 0.22 }, 0.60);

      // Reveal Slide 5 — curtain slide-up
      roomsTl.to(room5Ref.current, { yPercent: 0, ease: "power2.inOut", duration: 0.22 }, 0.84);
      roomsTl.fromTo(room5ImgRef.current, { scale: 1.12 }, { scale: 1.03, ease: "none", duration: 0.22 }, 0.84);
    }

    // ----------------------------------------------------
    // SCENE 06 — AMENITIES CINEMATIC REVEAL
    // ----------------------------------------------------
    const amenitiesSection = amenitiesSectionRef.current;
    if (amenitiesSection) {
      const items = gsap.utils.toArray(".amenity-item");
      items.forEach((item: any, idx: number) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center+=120",
          end: "bottom center-=120",
          onEnter: () => setActiveAmenity(idx),
          onEnterBack: () => setActiveAmenity(idx),
        });

        // Stagger list text entering
        gsap.fromTo(item, 
          { opacity: 0.1, x: -25 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "bottom center",
              scrub: true,
            }
          }
        );
      });
    }

    // ----------------------------------------------------
    // SCENE 07 — PINNED VIDEO ZOOM-OUT & SCRUB (DOWN SECTION)
    // ----------------------------------------------------
    let eventVideoMetadataCleanup: (() => void) | null = null;
    let eventVideoTickerCleanup: (() => void) | null = null;
    const evVideo = eventVideoRef.current;
    const evSection = eventVideoSectionRef.current;
    if (evVideo && evSection) {
      let targetTime = 0;
      let actualTime = 0;
      let scrollTriggerInstance: any = null;
      let tickerRemove: (() => void) | null = null;

      const initEventScrub = () => {
        const dur = evVideo.duration;
        if (!dur || isNaN(dur)) return;

        evVideo.currentTime = 0.001;

        const evTl = gsap.timeline({
          scrollTrigger: {
            trigger: evSection,
            start: "top top",
            end: "bottom+=1500 top", // Scrub duration
            pin: true,
            anticipatePin: 1,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              targetTime = self.progress * dur;
            }
          }
        });

        scrollTriggerInstance = evTl.scrollTrigger;

        // Shrink the video and add rounded corners as user scrolls
        evTl.to(evVideo, {
          scale: 0.65,
          borderRadius: "24px",
          ease: "none"
        }, 0);

        // Text overlays fading in/out sequentially relative to timeline progress
        evTl.fromTo(eventText1Ref.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" },
          0.05
        ).to(eventText1Ref.current, {
          opacity: 0,
          y: -60,
          scale: 0.95,
          duration: 0.2,
          ease: "power2.in"
        }, 0.32);
        
        evTl.fromTo(eventText2Ref.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" },
          0.42
        ).to(eventText2Ref.current, {
          opacity: 0,
          y: -60,
          scale: 0.95,
          duration: 0.2,
          ease: "power2.in"
        }, 0.68);
        
        evTl.fromTo(eventText3Ref.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" },
          0.78
        ).to(eventText3Ref.current, {
          opacity: 0,
          y: -60,
          scale: 0.95,
          duration: 0.2,
          ease: "power2.in"
        }, 0.96);

        // LERP Loop for smooth video currentTime scrubbing
        const updateVideoTime = () => {
          actualTime += (targetTime - actualTime) * 0.1;
          if (Math.abs(targetTime - actualTime) > 0.01) {
            evVideo.currentTime = actualTime;
          }
        };

        gsap.ticker.add(updateVideoTime);
        tickerRemove = () => gsap.ticker.remove(updateVideoTime);
        eventVideoTickerCleanup = tickerRemove;
      };
      
      const loadListener = () => {
        initEventScrub();
      };
      
      if (evVideo.readyState >= 1) {
        initEventScrub();
      } else {
        evVideo.addEventListener("loadedmetadata", loadListener);
        eventVideoMetadataCleanup = () => {
          if (evVideo) {
            evVideo.removeEventListener("loadedmetadata", loadListener);
          }
        };
      }
    }

    // ----------------------------------------------------
    // SCENE 08 — DINING & LOUNGES HORIZONTAL WALKTHROUGH
    // (smooth, faster, no unnecessary lock)
    // ----------------------------------------------------
    const diningPin = diningPinRef.current;
    const diningScroll = diningScrollRef.current;
    if (diningPin && diningScroll) {
      const scrollTween = gsap.to(diningScroll, {
        x: () => -(diningScroll.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: diningPin,
          start: "top top",
          end: "bottom+=1400 top", // Robust fixed vertical scroll pinning distance
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Animate active card focus, scaling, blur, and text fade reveals using containerAnimation
      const cards = diningScroll.querySelectorAll(".dining-card");
      cards.forEach((card) => {
        const img = card.querySelector(".dining-card-img");
        const text = card.querySelector(".dining-card-text");

        if (img) {
          // Scale down + focus (brightness and blur) on entry
          gsap.fromTo(img,
            { scale: 1.15, filter: "brightness(0.3) blur(2px)" },
            {
              scale: 1,
              filter: "brightness(0.85) blur(0px)",
              ease: "power1.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: "left 90%",
                end: "center 50%",
                scrub: true,
              }
            }
          );

          // Exit fade out + blur + scale up
          gsap.to(img, {
            scale: 1.15,
            filter: "brightness(0.3) blur(2px)",
            ease: "power1.in",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "center 50%",
              end: "right 10%",
              scrub: true,
            }
          });
        }

        if (text) {
          // Slide up and fade in text on entry
          gsap.fromTo(text,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: "left 85%",
                end: "center 50%",
                scrub: true,
              }
            }
          );

          // Slide up and fade out text on exit
          gsap.to(text, {
            opacity: 0,
            y: -30,
            ease: "power2.in",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "center 50%",
              end: "right 15%",
              scrub: true,
            }
          });
        }
      });
    }

    // ----------------------------------------------------
    // SCENE 11 — BANQUET ZOOM & FADE REVEALS
    // ----------------------------------------------------
    banquetCardRefs.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(card, 
        { scale: 0.95, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=120",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // ----------------------------------------------------
    // SCENE 12 — SIGHTSEEING MASONRY & REVIEWS STAGGERS
    // ----------------------------------------------------
    const revealItems = gsap.utils.toArray(".general-reveal");
    revealItems.forEach((el: any) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Refresh ScrollTrigger to recalculate horizontal widths after a short rendering frame
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener("open-booking-modal", handleOpenModalEvent);
      clearTimeout(refreshTimer);
      scene03Ctx.revert();
      if (eventVideoMetadataCleanup) eventVideoMetadataCleanup();
      if (eventVideoTickerCleanup) eventVideoTickerCleanup();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleBookingRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setModalType("room");
    setInquiryGuests(guestsCount);
    setInquiryDate(checkIn);
    setInquiryNotes(`Room reservation inquiry from hero booking widget. Selected room type: ${roomType}.`);
    setIsModalOpen(true);
    setModalSubmitted(false);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  const openInquiryModal = (type: string, notesText = "") => {
    setModalType(type);
    setInquiryNotes(notesText);
    setIsModalOpen(true);
    setModalSubmitted(false);
  };

  return (
    <div ref={containerRef} className="relative w-full bg-background min-h-screen text-foreground select-none overflow-x-hidden">
      
      {/* ---------------------------------------------------- */}
      {/* SCENE 01 — HERO SECTION (STATIC OFFICIAL BACKGROUND) */}
      {/* ---------------------------------------------------- */}
      <section ref={heroRef} id="home" className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
        
        {/* Fullscreen Background Static Official Lobby Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/1.jpg"
            alt="Hotel Kratu Hotels Lobby Reception"
            className="w-full h-full object-cover brightness-[0.45] origin-center"
          />
        </div>

        {/* Ambient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/50 z-10 pointer-events-none" />

        {/* Cinematic Content Sequences */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center px-6 max-w-5xl pointer-events-none">
          <div className="flex flex-col items-center">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-4 font-semibold">
              Hotel Kratu Hotels
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-cream leading-tight uppercase font-medium">
              Kratu Hotels
            </h1>
          </div>

          <p className="font-sans text-[10px] md:text-xs text-cream/70 max-w-md mt-4 tracking-[0.2em] leading-loose font-light uppercase">
            Your Hubballi Experience Starts Here
          </p>
          
          <p className="font-serif text-base md:text-lg text-cream/80 max-w-xl leading-relaxed italic font-light mt-4">
            Luxury hospitality connected to shopping, dining and entertainment.
          </p>
        </div>

        {/* Floating Reservation Widget centering wrapper */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center z-30 pointer-events-none">
          <div
            ref={heroWidgetRef}
            className="w-[92%] max-w-[80rem] transition-all duration-300 pointer-events-auto"
          >
            <form
              onSubmit={handleBookingRequest}
              className="bg-charcoal/70 backdrop-blur-xl border border-cream/10 p-4 md:py-3 md:px-8 rounded-xl flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl"
            >
              {/* Check-In Date */}
              <div className="flex items-center gap-4 w-full md:w-auto border-b border-cream/5 md:border-none pb-4 md:pb-0">
                <Calendar size={20} className="text-gold flex-shrink-0" />
                <div className="flex flex-col w-full">
                  <label className="text-[12px] tracking-[0.2em] uppercase text-cream/40 font-semibold mb-1">
                    Check In
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent text-base text-cream focus:outline-none cursor-none w-full min-w-[160px]"
                  />
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-[1px] h-8 bg-cream/10" />

              {/* Room Category */}
              <div className="flex items-center gap-4 w-full md:w-auto border-b border-cream/5 md:border-none pb-4 md:pb-0">
                <Compass size={20} className="text-gold flex-shrink-0" />
                <div className="flex flex-col w-full">
                  <label className="text-[12px] tracking-[0.2em] uppercase text-cream/40 font-semibold mb-1">
                    Choose Room
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="bg-transparent text-base text-cream focus:outline-none cursor-none w-full min-w-[200px] appearance-none"
                  >
                    <option value="deluxe-superior" className="bg-charcoal text-cream text-sm">Deluxe Superior Room</option>
                    <option value="deluxe-twin" className="bg-charcoal text-cream text-sm">Deluxe Twin Room</option>
                    <option value="suite" className="bg-charcoal text-cream text-sm">Executive Suite</option>
                  </select>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-[1px] h-8 bg-cream/10" />

              {/* Guests */}
              <div className="flex items-center gap-4 w-full md:w-auto border-b border-cream/5 md:border-none pb-4 md:pb-0">
                <User size={20} className="text-gold flex-shrink-0" />
                <div className="flex flex-col w-full">
                  <label className="text-[12px] tracking-[0.2em] uppercase text-cream/40 font-semibold mb-1">
                    Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="bg-transparent text-base text-cream focus:outline-none cursor-none w-full min-w-[100px] appearance-none"
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num} value={num} className="bg-charcoal text-cream text-sm">
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Book CTA */}
              <button
                type="submit"
                className="w-full md:w-auto bg-gold hover:bg-cream text-background hover:text-black font-sans text-[14px] font-semibold tracking-[0.2em] uppercase py-3.5 px-7 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0 cursor-none"
              >
                Book Your Stay
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 02 — STORY INTRODUCTION (OFFICIAL LAXMI MALL) */}
      {/* ---------------------------------------------------- */}
      <section id="story" className="relative w-full min-h-screen bg-background py-16 md:py-24 px-6 md:px-16 flex items-center border-b border-cream/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column: Image Container */}
          <div className="lg:col-span-6 overflow-hidden rounded-md border border-cream/10 relative h-[350px] md:h-[450px]">
            <img
              src="/images/1.jpeg"
              alt="Laxmi Mall Hubballi"
              className="absolute inset-0 w-full h-full object-cover origin-center"
            />
            <div className="absolute inset-0 bg-background/20" />
          </div>

          {/* Right Column: Narrative Block */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-5 block font-semibold">
              The Integration
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream tracking-wide leading-tight mb-6">
              A Portal to Shopping, Dining & Entertainment
            </h2>
            <p className="font-sans text-xs md:text-sm text-cream/70 leading-relaxed font-light tracking-wide mb-4">
              Hotel Kratu Hotels redefined the hospitality landscape in Hubballi by establishing a direct physical integration with **Laxmi Mall**. 
            </p>
            <p className="font-sans text-xs md:text-sm text-cream/70 leading-relaxed font-light tracking-wide mb-6">
              This layout grants our residents private, frictionless elevator access to high-fashion showrooms, state-of-the-art multiplex screens, gaming zones, and fine dining hotspots—making your stay an effortless urban dream.
            </p>
            <button 
              onClick={() => openInquiryModal("general", "General reservation inquiry regarding Laxmi Mall integration features.")}
              className="border border-cream/20 hover:border-gold px-4 py-2.5 text-[9px] tracking-[0.2em] font-medium uppercase bg-cream/5 hover:bg-gold hover:text-background transition-all duration-500 rounded-sm cursor-none"
            >
              Discover Connections
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 03 — COUNTER PARALLAX IMAGE SECTION (14s EFFECT) */}
      {/* ---------------------------------------------------- */}
      <section ref={counterParallaxPinRef} className="relative w-full h-auto lg:h-screen overflow-hidden bg-charcoal/20 border-b border-cream/5 flex items-center py-12 md:py-16 lg:py-0">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative h-auto lg:h-[75vh]">
          
          {/* Left: Large slow-moving image container with text below */}
          <div className="lg:col-span-6 flex flex-col justify-between h-auto lg:h-full relative">
            <div className="w-full h-[300px] lg:h-[65%] overflow-hidden rounded-md border border-cream/10 relative">
              <img
                ref={largeImgRef}
                src="/images/3.jpeg"
                alt="Luxury Suite Living Area"
                className="absolute top-[-10%] left-0 w-full h-[120%] object-cover brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/35 to-transparent pointer-events-none z-10" />
            </div>
            
            <div className="mt-4 text-left">
              <span className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase mb-2 block font-semibold">
                Designed to Exceed
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-cream uppercase tracking-wide leading-tight">
                Crafting Elevated Experiences
              </h3>
            </div>
          </div>

          {/* Right: Text explanation and two overlapping fast-moving images */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-between h-auto lg:h-full relative py-2 mt-8 lg:mt-0">
            <div className="text-left mb-6 lg:mb-0">
              <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
                Perspective
              </span>
              <h2 className="font-serif text-2xl text-cream uppercase tracking-wide mb-3">
                Dimensional Luxury
              </h2>
              <p className="font-sans text-[11px] text-cream/55 leading-relaxed font-light max-w-xs">
                Watch the details align as you navigate our spaces. Our structural layouts integrate quiet, private luxury with direct urban access.
              </p>
            </div>

            {/* 2-image floating editorial composition */}
            <div className="relative w-full h-[400px] lg:h-[45vh] mt-4 lg:mt-0 flex-shrink-0">

              {/* Image 1 — Right */}
              <div className="absolute top-[10%] right-[0%] w-[48%] aspect-[4/5] overflow-hidden rounded-md border border-cream/15 shadow-2xl z-20">
                <img
                  ref={smallImg1Ref}
                  src="/images/4.jpeg"
                  alt="Executive Room"
                  className="w-full h-full object-cover brightness-[0.82]"
                />
              </div>

              {/* Image 2 — Left */}
              <div className="absolute bottom-[10%] left-[0%] w-[48%] aspect-[4/5] overflow-hidden rounded-md border border-cream/15 shadow-2xl z-10">
                <img
                  ref={smallImg3Ref}
                  src="/images/2.jpeg"
                  alt="Hotel Reception"
                  className="w-full h-full object-cover brightness-[0.78]"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SCENE 04 — ROOMS SCENIC PINNED SEQUENCE (OFFICIAL ROOMS) */}
      {/* ---------------------------------------------------- */}
      <section ref={roomsPinRef} id="rooms" className="relative w-full h-screen overflow-hidden bg-background border-b border-cream/5">
        
        {/* ROOM 01 — DELUXE SUPERIOR (Visible initially, stays flat) */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:py-12 md:px-16 z-10 bg-background">
          <div className="absolute inset-0 z-0">
            <img
              ref={room1ImgRef}
              src="/images/2.jpeg"
              alt="Deluxe Superior Room"
              className="w-full h-full object-cover brightness-[0.45] origin-center ken-burns-room"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl text-left">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
              Accommodation / 01
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide mb-4 uppercase">
              Deluxe Superior
            </h3>
            <p className="font-sans text-xs text-cream/70 leading-relaxed tracking-wider font-light mb-4 max-w-md">
              A serene haven tailored for the business traveler, featuring custom workspaces, smart room climate panels, and sweeping views of Hubballi's skyline.
            </p>
            <div className="flex flex-wrap gap-4 text-cream/50 text-[10px] uppercase font-sans tracking-widest items-center mb-6">
              <span>King Bed</span>
              <span>•</span>
              <span>Wi-Fi</span>
              <span>•</span>
              <span>320 sq. ft.</span>
            </div>
            <button 
              onClick={() => openInquiryModal("room", "Inquiry for Room: Deluxe Superior.")}
              className="border border-gold/40 hover:border-gold px-5 py-2 text-[10px] tracking-[0.2em] font-semibold uppercase text-gold hover:bg-gold hover:text-background transition-all duration-300 rounded-sm cursor-none"
            >
              Book Deluxe Superior
            </button>
          </div>
        </div>

        {/* ROOM 02 — DELUXE TWIN (Slides up over room 1) */}
        <div
          ref={room2Ref}
          style={{ transform: 'translateY(100%)' }}
          className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:py-12 md:px-16 z-20 bg-background"
        >
          <div className="absolute inset-0 z-0">
            <img
              ref={room2ImgRef}
              src="/images/5.jpeg"
              alt="Deluxe Twin Room"
              className="w-full h-full object-cover brightness-[0.45] origin-center ken-burns-room"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl text-left">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
              Accommodation / 02
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide mb-4 uppercase">
              Deluxe Twin
            </h3>
            <p className="font-sans text-xs text-cream/70 leading-relaxed tracking-wider font-light mb-4 max-w-md">
              Ideal for families or travel partners, configured with twin luxurious orthocare beds, premium writing credenzas, and private marble bathing suites.
            </p>
            <div className="flex flex-wrap gap-4 text-cream/50 text-[10px] uppercase font-sans tracking-widest items-center mb-6">
              <span>Twin Beds</span>
              <span>•</span>
              <span>Wi-Fi</span>
              <span>•</span>
              <span>350 sq. ft.</span>
            </div>
            <button 
              onClick={() => openInquiryModal("room", "Inquiry for Room: Deluxe Twin.")}
              className="border border-gold/40 hover:border-gold px-5 py-2 text-[10px] tracking-[0.2em] font-semibold uppercase text-gold hover:bg-gold hover:text-background transition-all duration-300 rounded-sm cursor-none"
            >
              Book Deluxe Twin
            </button>
          </div>
        </div>

        {/* ROOM 03 — EXECUTIVE SUITE (Slides up over room 2) */}
        <div
          ref={room3Ref}
          style={{ transform: 'translateY(100%)' }}
          className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:py-12 md:px-16 z-30 bg-background"
        >
          <div className="absolute inset-0 z-0">
            <img
              ref={room3ImgRef}
              src="/images/8.jpeg"
              alt="Executive Suite"
              className="w-full h-full object-cover brightness-[0.45] origin-center ken-burns-alt"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl text-left">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
              Accommodation / 03
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide mb-4 uppercase">
              Executive Suite
            </h3>
            <p className="font-sans text-xs text-cream/70 leading-relaxed tracking-wider font-light mb-4 max-w-md">
              The pinnacle of luxury at Kratu Hotels. Provides a sprawling separate living parlor, walk-in closets, automated vanity systems, and deep-soaking bathtubs.
            </p>
            <div className="flex flex-wrap gap-4 text-cream/50 text-[10px] uppercase font-sans tracking-widest items-center mb-6">
              <span>Presidential King</span>
              <span>•</span>
              <span>Lounge access</span>
              <span>•</span>
              <span>620 sq. ft.</span>
            </div>
            <button 
              onClick={() => openInquiryModal("room", "Inquiry for Room: Executive Suite.")}
              className="border border-gold/40 hover:border-gold px-5 py-2 text-[10px] tracking-[0.2em] font-semibold uppercase text-gold hover:bg-gold hover:text-background transition-all duration-300 rounded-sm cursor-none"
            >
              Book Executive Suite
            </button>
          </div>
        </div>

        {/* ROOM 04 — EXECUTIVE CLUB ROOM (Slides up over room 3) */}
        <div
          ref={room4Ref}
          style={{ transform: 'translateY(100%)' }}
          className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:py-12 md:px-16 z-40 bg-background"
        >
          <div className="absolute inset-0 z-0">
            <img
              ref={room4ImgRef}
              src="/images/6.jpeg"
              alt="Executive Club Room"
              className="w-full h-full object-cover brightness-[0.45] origin-center ken-burns-room"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl text-left">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
              Accommodation / 04
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide mb-4 uppercase">
              Executive Club Room
            </h3>
            <p className="font-sans text-xs text-cream/70 leading-relaxed tracking-wider font-light mb-4 max-w-md">
              An exclusive business-focused retreat. Features custom workspace layouts, smart climate dials, orthocare bedding, and high-performance room automation.
            </p>
            <div className="flex flex-wrap gap-4 text-cream/50 text-[10px] uppercase font-sans tracking-widest items-center mb-6">
              <span>King Bed</span>
              <span>•</span>
              <span>Club Privileges</span>
              <span>•</span>
              <span>410 sq. ft.</span>
            </div>
            <button 
              onClick={() => openInquiryModal("room", "Inquiry for Room: Executive Club Room.")}
              className="border border-gold/40 hover:border-gold px-5 py-2 text-[10px] tracking-[0.2em] font-semibold uppercase text-gold hover:bg-gold hover:text-background transition-all duration-300 rounded-sm cursor-none"
            >
              Book Executive Club
            </button>
          </div>
        </div>

        {/* ROOM 05 — GRAND PRESIDENTIAL SANCTUARY (Slides up over room 4) */}
        <div
          ref={room5Ref}
          style={{ transform: 'translateY(100%)' }}
          className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:py-12 md:px-16 z-50 bg-background"
        >
          <div className="absolute inset-0 z-0">
            <img
              ref={room5ImgRef}
              src="/images/7.jpeg"
              alt="Grand Presidential Sanctuary"
              className="w-full h-full object-cover brightness-[0.45] origin-center ken-burns-alt"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl text-left">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
              Accommodation / 05
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide mb-4 uppercase">
              Presidential Sanctuary
            </h3>
            <p className="font-sans text-xs text-cream/70 leading-relaxed tracking-wider font-light mb-4 max-w-md">
              The absolute crown jewel of Hubballi. Spans dual-level entertainment enclaves, deep-soaking premium marble baths, private butler services, and full lounge access.
            </p>
            <div className="flex flex-wrap gap-4 text-cream/50 text-[10px] uppercase font-sans tracking-widest items-center mb-6">
              <span>Presidential Suite</span>
              <span>•</span>
              <span>VIP Access</span>
              <span>•</span>
              <span>780 sq. ft.</span>
            </div>
            <button 
              onClick={() => openInquiryModal("room", "Inquiry for Room: Grand Presidential Sanctuary.")}
              className="border border-gold/40 hover:border-gold px-5 py-2 text-[10px] tracking-[0.2em] font-semibold uppercase text-gold hover:bg-gold hover:text-background transition-all duration-300 rounded-sm cursor-none"
            >
              Book Presidential Sanctuary
            </button>
          </div>
        </div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 05 — EXPANDING IMAGE EXPERIENCE (8s EFFECT) */}
      {/* ---------------------------------------------------- */}
      <section id="features-accordion" className="relative w-full bg-background py-16 md:py-24 px-6 md:px-16 border-b border-cream/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-4 block font-semibold">
              Spaces
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream tracking-wide">
              The Kratu Enclaves
            </h2>
            <p className="font-sans text-xs text-cream/50 mt-3 max-w-sm mx-auto">
              Hover over each panel to experience the transitions between our premium environments.
            </p>
          </div>

          {/* Accordion Layout */}
          <div className="flex flex-col md:flex-row h-[380px] md:h-[440px] gap-4 w-full">
            {accordionPanels.map((panel, idx) => {
              const isActive = activeAccordion === idx;
              return (
                <div
                  key={panel.title}
                  onMouseEnter={() => setActiveAccordion(idx)}
                  onClick={() => setActiveAccordion(idx)}
                  className={`relative h-full overflow-hidden rounded-md border border-cream/10 cursor-none transition-all duration-700 ease-in-out ${
                    isActive ? "flex-[2.5] md:flex-[3.5] border-gold/30" : "flex-[1]"
                  }`}
                >
                  <img
                    src={panel.img}
                    alt={panel.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out brightness-[0.45]"
                    style={{
                      transform: isActive ? "scale(1.05)" : "scale(1)"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent pointer-events-none" />

                  {/* Collapsed Vertical Title (Perfect centering via Flex, no absolute-relative jumping) */}
                  <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}>
                    <h3 className="font-serif text-cream uppercase tracking-[0.2em] text-xs md:text-sm -rotate-90 whitespace-nowrap opacity-60">
                      {panel.title}
                    </h3>
                  </div>

                  {/* Active Expanded Content (Fades and slides up slightly when active) */}
                  <div className={`absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-left h-full transition-all duration-500 ease-in-out ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}>
                    {/* Subtitle */}
                    <span className="font-sans text-[9px] tracking-[0.3em] text-gold uppercase font-semibold mb-1">
                      {panel.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-cream text-xl md:text-2xl mb-3 uppercase tracking-wider">
                      {panel.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-sans text-xs text-cream/75 leading-relaxed font-light max-w-md pb-3">
                      {panel.description}
                    </p>

                    <div className="flex items-center gap-2 text-gold text-[9px] font-sans tracking-widest uppercase mt-1 font-semibold">
                      <span>Details Active</span>
                      <ArrowRight size={10} className="rotate-90" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 06 — AMENITIES CINEMATIC REVEAL */}
      {/* ---------------------------------------------------- */}
      <section ref={amenitiesSectionRef} id="amenities" className="relative w-full bg-charcoal/30 py-24 md:py-32 px-6 md:px-24 border-b border-cream/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Feature List */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10">
            <div className="text-left">
              <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-4 block font-semibold">
                Services
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-cream tracking-wide">
                Refining Comfort
              </h2>
            </div>

            <div className="flex flex-col border-t border-cream/10">
              
              {/* Feature Item 01 */}
              <div className="amenity-item border-b border-cream/10 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-6">
                  <Wifi size={20} className="text-gold" />
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cream">High-Speed WiFi</h4>
                    <p className="font-sans text-xs text-cream/50 mt-1">Seamless Gigabit coverage across all layouts.</p>
                  </div>
                </div>
              </div>

              {/* Feature Item 02 */}
              <div className="amenity-item border-b border-cream/10 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-6">
                  <ShieldCheck size={20} className="text-gold" />
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cream">24/7 Housekeeping</h4>
                    <p className="font-sans text-xs text-cream/50 mt-1">Bespoke dynamic cleanings at your command.</p>
                  </div>
                </div>
              </div>

              {/* Feature Item 03 */}
              <div className="amenity-item border-b border-cream/10 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-6">
                  <Compass size={20} className="text-gold" />
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cream">Valet Parking</h4>
                    <p className="font-sans text-xs text-cream/50 mt-1">Secure underground automated garages.</p>
                  </div>
                </div>
              </div>

              {/* Feature Item 04 */}
              <div className="amenity-item border-b border-cream/10 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-6">
                  <ShowerHead size={20} className="text-gold" />
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cream">Premium Bathroom</h4>
                    <p className="font-sans text-xs text-cream/50 mt-1">Plush bathrobes, marble fixtures, and walk-in rain showers.</p>
                  </div>
                </div>
              </div>

              {/* Feature Item 05 */}
              <div className="amenity-item border-b border-cream/10 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-6">
                  <Utensils size={20} className="text-gold" />
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-cream">In-Room Dining</h4>
                    <p className="font-sans text-xs text-cream/50 mt-1">Curated gourmet menu delivered directly to your bed.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Transitioning Visuals */}
          <div className="lg:col-span-5 h-[320px] md:h-[440px] overflow-hidden rounded-md border border-cream/10 relative">
            {amenityImages.map((src, index) => (
              <img
                key={`${src}-${index}`} // Fixed React Duplicate Key Warning
                src={src}
                alt={`Amenity visual ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: activeAmenity === index ? 0.75 : 0,
                  zIndex: activeAmenity === index ? 10 : 0,
                }}
              />
            ))}
            <div className="absolute inset-0 bg-background/25 z-15" />
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 07 — PINNED VIDEO ZOOM-OUT & SCRUB */}
      {/* ---------------------------------------------------- */}
      <section
        ref={eventVideoSectionRef}
        id="event-film"
        className="relative w-full h-screen overflow-hidden bg-background border-b border-cream/5"
      >
        {/* Background Video for Scroll Scrubbing */}
        <video
          ref={eventVideoRef}
          src="/generate_the_event_video.mp4"
          preload="metadata"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0 origin-center"
        />

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10 pointer-events-none" />

        {/* Scroll-scrubbed overlay texts */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center pointer-events-none">
          
          <div ref={eventText1Ref} className="absolute max-w-4xl flex flex-col items-center opacity-0">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
              The Celebrations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream tracking-wide uppercase font-medium leading-tight">
              Cinematic Celebrations
            </h2>
            <p className="font-sans text-[11px] text-cream/60 max-w-sm mt-3 tracking-wide font-light">
              Watch your special banquet milestones unfold like high-end visual poetry.
            </p>
          </div>

          <div ref={eventText2Ref} className="absolute max-w-4xl flex flex-col items-center opacity-0">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
              The Scale
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream tracking-wide uppercase font-medium leading-tight">
              Ample Banquet Halls
            </h2>
            <p className="font-sans text-[11px] text-cream/60 max-w-sm mt-3 tracking-wide font-light">
              From business summits to wedding conventions, we host up to 600 guests.
            </p>
          </div>

          <div ref={eventText3Ref} className="absolute max-w-4xl flex flex-col items-center opacity-0">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-3 block font-semibold">
              The Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream tracking-wide uppercase font-medium leading-tight">
              Curated Hospitality
            </h2>
            <p className="font-sans text-[11px] text-cream/60 max-w-sm mt-3 tracking-wide font-light">
              Luxury stays directly connected to Gokul Road and Laxmi Mall.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 08 — DINING & ENTERTAINMENT (HORIZONTAL SCROLL) */}
      {/* ---------------------------------------------------- */}
      <section
        ref={diningPinRef}
        id="dining"
        className="relative w-full h-screen h-scroll-section bg-background border-b border-cream/5"
      >
        <div
          ref={diningScrollRef}
          className="absolute inset-y-0 left-0 flex items-center h-full gap-[15vw] px-12 md:px-24 py-16"
          style={{ width: "fit-content" }}
        >
          {/* Headline Panel */}
          <div className="w-[75vw] md:w-[35vw] flex flex-col justify-center text-left flex-shrink-0 mr-[4vw]">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-4 font-semibold">
              Entertainment
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream tracking-wide leading-tight mb-6">
              A World of Gastronomy &amp; Play
            </h2>
            <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
              Explore dynamic sensory transitions inside our dedicated food layouts and gaming salons connected to the lobby.
            </p>
            <div className="flex gap-4 mt-6 items-center text-gold text-xs tracking-wider font-sans uppercase">
              <span>Scroll to Enter</span>
              <ArrowRight size={14} className="animate-pulse" />
            </div>
          </div>

          {/* Space 01 — Fine Dine (Upper Right) */}
          <div className="dining-card flex flex-col items-end self-start mt-[4vh] flex-shrink-0 w-[70vw] md:w-[35vh]">
            <div className="w-full h-[70vw] md:h-[35vh] aspect-square rounded-md overflow-hidden relative border border-cream/10 bg-charcoal/20">
              <img
                src="/images/8.jpeg"
                alt="Kratu Fine Dine Lobby"
                className="dining-card-img absolute inset-0 w-full h-full object-cover brightness-[0.55] ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>
            <div className="dining-card-text mt-4 text-right max-w-[35vh] pointer-events-none">
              <span className="dining-card-number font-sans text-[9px] tracking-[0.3em] text-gold uppercase mb-1 block font-semibold">
                Spaces / 01
              </span>
              <h3 className="font-serif text-lg md:text-xl text-cream tracking-wide mb-2 uppercase">
                Kratu Fine Dine
              </h3>
              <p className="font-sans text-[11px] text-cream/60 leading-relaxed font-light">
                Authentic local cuisines and global culinary delicacies engineered by award-winning chefs.
              </p>
            </div>
          </div>

          {/* Space 02 — Sky Lounge (Lower Left) */}
          <div className="dining-card flex flex-col items-start self-end mb-[4vh] flex-shrink-0 w-[70vw] md:w-[35vh]">
            <div className="dining-card-text mb-4 text-left max-w-[35vh] pointer-events-none">
              <span className="dining-card-number font-sans text-[9px] tracking-[0.3em] text-gold uppercase mb-1 block font-semibold">
                Spaces / 02
              </span>
              <h3 className="font-serif text-lg md:text-xl text-cream tracking-wide mb-2 uppercase">
                Alcorhythm Sky Lounge
              </h3>
              <p className="font-sans text-[11px] text-cream/60 leading-relaxed font-light">
                A high-altitude cocktail oasis offering majestic nocturnal views and signature botanical mixers.
              </p>
            </div>
            <div className="w-full h-[70vw] md:h-[35vh] aspect-square rounded-md overflow-hidden relative border border-cream/10 bg-charcoal/20">
              <img
                src="/images/3.jpeg"
                alt="Alcorhythm Sky Lounge"
                className="dining-card-img absolute inset-0 w-full h-full object-cover brightness-[0.55] ken-burns-alt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Space 03 — Multiplex (Upper Left) */}
          <div className="dining-card flex flex-col items-start self-start mt-[4vh] flex-shrink-0 w-[70vw] md:w-[35vh]">
            <div className="w-full h-[70vw] md:h-[35vh] aspect-square rounded-md overflow-hidden relative border border-cream/10 bg-charcoal/20">
              <img
                src="/images/4.jpeg"
                alt="Laxmi City Pride Multiplex"
                className="dining-card-img absolute inset-0 w-full h-full object-cover brightness-[0.55] ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>
            <div className="dining-card-text mt-4 text-left max-w-[35vh] pointer-events-none">
              <span className="dining-card-number font-sans text-[9px] tracking-[0.3em] text-gold uppercase mb-1 block font-semibold">
                Spaces / 03
              </span>
              <h3 className="font-serif text-lg md:text-xl text-cream tracking-wide mb-2 uppercase">
                Premium Multiplex
              </h3>
              <p className="font-sans text-[11px] text-cream/60 leading-relaxed font-light">
                Next-generation screens with 4K laser projectors and Dolby Atmos sound systems, steps from your room.
              </p>
            </div>
          </div>

          {/* Space 04 — Gaming Arena (Lower Right) */}
          <div className="dining-card flex flex-col items-end self-end mb-[4vh] flex-shrink-0 w-[70vw] md:w-[35vh] mr-[10vw]">
            <div className="dining-card-text mb-4 text-right max-w-[35vh] pointer-events-none">
              <span className="dining-card-number font-sans text-[9px] tracking-[0.3em] text-gold uppercase mb-1 block font-semibold">
                Spaces / 04
              </span>
              <h3 className="font-serif text-lg md:text-xl text-cream tracking-wide mb-2 uppercase">
                Gaming Arena
              </h3>
              <p className="font-sans text-[11px] text-cream/60 leading-relaxed font-light">
                Immersive virtual reality setups, simulators, and standard arcade terminals for all ages.
              </p>
            </div>
            <div className="w-full h-[70vw] md:h-[35vh] aspect-square rounded-md overflow-hidden relative border border-cream/10 bg-charcoal/20">
              <img
                src="/images/5.jpeg"
                alt="Laxmi Mall Game Zone"
                className="dining-card-img absolute inset-0 w-full h-full object-cover brightness-[0.55] ken-burns-alt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 09 — INTERACTIVE FLOATING TESTIMONIALS */}
      {/* ---------------------------------------------------- */}
      <Testimonials />

      {/* ---------------------------------------------------- */}
      {/* SCENE 10 — INTERACTIVE IMAGE ENLARGE SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="nearby" className="relative w-full bg-background py-16 md:py-24 px-6 md:px-16 border-b border-cream/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-left max-w-xl">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-4 block font-semibold">
              Travel Journal
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream tracking-wide leading-tight mb-6">
              Sightseeing & Heritage
            </h2>
            <p className="font-sans text-[11px] text-cream/60 leading-relaxed font-light">
              Explore the rich historical landscape and botanical reserves of Hubballi, all located steps or a brief drive away from our residency vaults. Hover over the cards to highlight destinations.
            </p>
          </div>

          {/* Sightseeing Cards Grid - Scene 09 / 10 interactive enlarges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 group/sightseeing">
            
            {/* Attraction 01 */}
            <div className="general-reveal flex flex-col gap-4 transition-all duration-500 hover:scale-105 hover:z-20 group-hover/sightseeing:opacity-40 hover:!opacity-100">
              <div className="w-full h-[180px] md:h-[200px] overflow-hidden rounded-md border border-cream/10 relative shadow-md hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="/images/9.jpeg"
                  alt="Unkal Lake"
                  className="w-full h-full object-cover brightness-[0.7] transition-transform duration-500 origin-center"
                />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-lg text-cream uppercase">Unkal Lake</h4>
                <p className="font-sans text-[11px] text-cream/50 mt-1 leading-relaxed font-light">
                  A gorgeous historical lake body, offering boat layouts and dynamic sunset points. (4.5 km from Hotel)
                </p>
              </div>
            </div>

            {/* Attraction 02 */}
            <div className="general-reveal flex flex-col gap-4 transition-all duration-500 hover:scale-105 hover:z-20 group-hover/sightseeing:opacity-40 hover:!opacity-100">
              <div className="w-full h-[180px] md:h-[200px] overflow-hidden rounded-md border border-cream/10 relative shadow-md hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="/images/6.jpeg"
                  alt="Nrupatunga Betta"
                  className="w-full h-full object-cover brightness-[0.7] transition-transform duration-500 origin-center"
                />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-lg text-cream uppercase">Nrupatunga Betta</h4>
                <p className="font-sans text-[11px] text-cream/50 mt-1 leading-relaxed font-light">
                  A serene hill-range sanctuary offering panoramic morning views over the entire Hubballi valleys. (5 km from Hotel)
                </p>
              </div>
            </div>

            {/* Attraction 03 */}
            <div className="general-reveal flex flex-col gap-4 transition-all duration-500 hover:scale-105 hover:z-20 group-hover/sightseeing:opacity-40 hover:!opacity-100">
              <div className="w-full h-[180px] md:h-[200px] overflow-hidden rounded-md border border-cream/10 relative shadow-md hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="/images/7.jpeg"
                  alt="Indira Glass House"
                  className="w-full h-full object-cover brightness-[0.7] transition-transform duration-500 origin-center"
                />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-lg text-cream uppercase">Indira Glass House</h4>
                <p className="font-sans text-[11px] text-cream/50 mt-1 leading-relaxed font-light">
                  A gorgeous glass house modeled after London's Crystal Palace, situated in a botanical garden. (3.2 km from Hotel)
                </p>
              </div>
            </div>

            {/* Attraction 04 */}
            <div className="general-reveal flex flex-col gap-4 transition-all duration-500 hover:scale-105 hover:z-20 group-hover/sightseeing:opacity-40 hover:!opacity-100">
              <div className="w-full h-[180px] md:h-[200px] overflow-hidden rounded-md border border-cream/10 relative shadow-md hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="/images/8.jpeg"
                  alt="ISKCON Temple"
                  className="w-full h-full object-cover brightness-[0.7] transition-transform duration-500 origin-center"
                />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-lg text-cream uppercase">ISKCON Temple</h4>
                <p className="font-sans text-[11px] text-cream/50 mt-1 leading-relaxed font-light">
                  A majestic Sri Krishna temple complex offering peaceful spiritual environments. (4.0 km from Hotel)
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 11 — BANQUETS LUXURY SEQUENCE (OFFICIAL BANQUETS) */}
      {/* ---------------------------------------------------- */}
      <section ref={banquetSectionRef} id="banquets" className="relative w-full bg-charcoal/20 py-16 md:py-24 px-6 md:px-16 border-b border-cream/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-4 block font-semibold">
              Venues
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream tracking-wide">
              Majestic Banquet Halls
            </h2>
          </div>

          {/* Banquet Cards Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Banquet 01 — Aura */}
            <div
              ref={(el) => { banquetCardRefs.current[0] = el; }}
              className="group overflow-hidden rounded-md border border-cream/10 relative h-[420px] flex flex-col justify-end p-6"
            >
              <img
                src="/images/10.jpeg"
                alt="Aura Banquet Hall"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out brightness-[0.5] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 text-left">
                <span className="font-sans text-[8px] tracking-[0.3em] text-gold uppercase mb-1 block font-semibold">
                  Aura / Majestic
                </span>
                <h3 className="font-serif text-xl text-cream tracking-wide mb-2 uppercase">
                  Aura Hall
                </h3>
                <p className="font-sans text-[11px] text-cream/70 leading-relaxed mb-4 font-light">
                  Our flagship luxury space, catering up to 600 guests. Equipped with central air-conditioning, custom green rooms, and connections to Amrith Hall.
                </p>
                <button 
                  onClick={() => openInquiryModal("banquet", "Request Layout for Aura Banquet Hall.")}
                  className="w-fit border-b border-gold/50 text-gold text-[10px] tracking-widest uppercase font-sans pb-1 hover:border-gold transition-colors duration-300 cursor-none"
                >
                  Request Layout
                </button>
              </div>
            </div>

            {/* Banquet 02 — Amrith */}
            <div
              ref={(el) => { banquetCardRefs.current[1] = el; }}
              className="group overflow-hidden rounded-md border border-cream/10 relative h-[420px] flex flex-col justify-end p-6"
            >
              <img
                src="/images/1.jpeg"
                alt="Amrith Banquet Hall"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out brightness-[0.5] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 text-left">
                <span className="font-sans text-[8px] tracking-[0.3em] text-gold uppercase mb-1 block font-semibold">
                  Amrith / Corporate
                </span>
                <h3 className="font-serif text-xl text-cream tracking-wide mb-2 uppercase">
                  Amrith Hall
                </h3>
                <p className="font-sans text-[11px] text-cream/70 leading-relaxed mb-4 font-light">
                  Optimized for premium corporate seminars, summits, and executive product unveilings. Supports integrated projection and digital acoustics.
                </p>
                <button 
                  onClick={() => openInquiryModal("banquet", "Request Layout for Amrith Banquet Hall.")}
                  className="w-fit border-b border-gold/50 text-gold text-[10px] tracking-widest uppercase font-sans pb-1 hover:border-gold transition-colors duration-300 cursor-none"
                >
                  Request Layout
                </button>
              </div>
            </div>

            {/* Banquet 03 — Abhinandan */}
            <div
              ref={(el) => { banquetCardRefs.current[2] = el; }}
              className="group overflow-hidden rounded-md border border-cream/10 relative h-[420px] flex flex-col justify-end p-6"
            >
              <img
                src="/images/2.jpeg"
                alt="Abhinandan Banquet Hall"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out brightness-[0.5] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 text-left">
                <span className="font-sans text-[8px] tracking-[0.3em] text-gold uppercase mb-1 block font-semibold">
                  Abhinandan / Intimate
                </span>
                <h3 className="font-serif text-xl text-cream tracking-wide mb-2 uppercase">
                  Abhinandan Hall
                </h3>
                <p className="font-sans text-[11px] text-cream/70 leading-relaxed mb-4 font-light">
                  Curated for intimate family gatherings, engagements, and private milestones. Spans two levels with dedicated staging and separate dining hall.
                </p>
                <button 
                  onClick={() => openInquiryModal("banquet", "Request Layout for Abhinandan Banquet Hall.")}
                  className="w-fit border-b border-gold/50 text-gold text-[10px] tracking-widest uppercase font-sans pb-1 hover:border-gold transition-colors duration-300 cursor-none"
                >
                  Request Layout
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SCENE 12 — MINIMAL LUXURY FOOTER */}
      {/* ---------------------------------------------------- */}
      <footer id="footer" className="relative w-full bg-charcoal border-t border-cream/5 py-12 px-6 md:px-16 overflow-hidden z-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start border-b border-cream/5 pb-16">
          
          {/* Logo & Vision Info */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-6">
            <h2 className="font-serif text-2xl text-cream tracking-[0.2em] font-semibold uppercase">
              Kratu Hotels
            </h2>
            <p className="font-sans text-[11px] text-cream/50 leading-relaxed max-w-sm font-light">
              Premium cinematic hospitality directly integrated with Laxmi Mall. Discover a seamless blend of luxury rooms, majestic banquets, and premier entertainment layouts in Hubballi, Karnataka.
            </p>
          </div>

          {/* Quick Coordinates & Social */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-4 text-left">
            <span className="font-sans text-[9px] tracking-[0.3em] text-gold uppercase font-semibold block mb-1">
              Coordinates
            </span>
            <div className="flex flex-col gap-3 font-sans text-[11px] text-cream/70 leading-relaxed font-light">
              <p>📍 Kratu Corporate Office, India</p>
              <p>📞 Phone: +91 8151889911</p>
              <p>✉️ Email: support@kratuchat.ai</p>
            </div>
            
            {/* Social Links */}
            <span className="font-sans text-[9px] tracking-[0.3em] text-gold uppercase font-semibold block mt-4 mb-1">
              Connect With Us
            </span>
            <div className="flex gap-4 items-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61573272047200" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-cream/50 hover:text-gold hover:-translate-y-1 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&amp;utm_medium=copy_link&amp;utm_content=ddnbfcm" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream/50 hover:text-gold hover:-translate-y-1 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.66 16.12 7.66"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg>
              </a>
              <a 
                href="https://youtube.com/@kratuchat?si=FirL5KapFd2DBZv2" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-cream/50 hover:text-gold hover:-translate-y-1 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a 
                href="https://wa.me/918151889911?text=Hotel" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-cream/50 hover:text-gold hover:-translate-y-1 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.265-.464-2.411-1.485-.893-.794-1.498-1.774-1.673-2.071-.173-.301-.019-.462.13-.611.135-.133.301-.351.452-.525.15-.175.2-.301.301-.502.1-.195.05-.371-.025-.521-.075-.15-.673-1.62-.922-2.216-.239-.582-.486-.502-.673-.51-.173-.008-.371-.008-.571-.008-.197 0-.525.075-.798.371-.273.301-1.048 1.025-1.048 2.499s1.073 2.894 1.223 3.094c.15.195 2.106 3.214 5.106 4.51.714.307 1.272.49 1.706.627.714.227 1.365.195 1.88.118.575-.084 1.767-.722 2.016-1.42.249-.697.249-1.294.173-1.42-.075-.125-.273-.195-.575-.344z"/><path d="M12 21.5c-1.579 0-3.088-.399-4.423-1.124L3 21.5l1.176-4.387A9.458 9.458 0 0 1 2.5 12c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Privilege Circle */}
          <div className="lg:col-span-3 flex flex-col justify-start gap-4 text-left">
            <span className="font-sans text-[9px] tracking-[0.3em] text-gold uppercase font-semibold block mb-1">
              Privilege Circle
            </span>
            {newsletterSubmitted ? (
              <div className="bg-gold/10 border border-gold/20 p-4 rounded-md text-xs text-gold uppercase tracking-wider text-center w-full">
                Welcome to the Privilege Circle
              </div>
            ) : (
              <>
                <p className="font-sans text-[10px] text-cream/50 leading-relaxed mb-2 font-light">
                  Subscribe to receive updates on private seasonal menus and privilege rates.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex border-b border-cream/20 pb-2 w-full">
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-transparent text-xs text-cream focus:outline-none w-full tracking-wider uppercase cursor-none"
                    required
                  />
                  <button type="submit" className="text-gold text-xs font-semibold cursor-none hover:text-cream transition-colors duration-300">
                    JOIN
                  </button>
                </form>
              </>
            )}
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="max-w-7xl mx-auto w-full pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[10px] tracking-widest text-cream/30">
            © 2026 Hotel Kratu Hotels. Crafted as a Cinematic Digital Experience.
          </p>
          <div className="flex gap-6 font-sans text-[10px] tracking-widest text-cream/40 uppercase">
            <a href="#" className="hover:text-gold transition-colors duration-300 cursor-none">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors duration-300 cursor-none">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* ---------------------------------------------------- */}
      {/* PREMIUM INQUIRY MODAL OVERLAY */}
      {/* ---------------------------------------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all duration-300">
          <div className="bg-charcoal border border-cream/10 w-full max-w-lg rounded-lg shadow-2xl relative overflow-hidden flex flex-col p-6 md:p-8">

            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors cursor-none"
            >
              <X size={20} />
            </button>

            {modalSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mb-6">
                  <Sparkles size={28} className="text-gold animate-pulse" />
                </div>
                <h3 className="font-serif text-3xl text-cream uppercase tracking-widest mb-4">
                  Request Received
                </h3>
                <p className="font-sans text-xs text-cream/65 leading-relaxed max-w-sm font-light mb-8">
                  Our Guest Experience Director will contact you within 2 hours to confirm your reservation details and coordinate any custom privilege requirements.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gold text-background hover:bg-cream hover:text-black font-sans text-[10px] tracking-widest uppercase font-semibold py-3 px-8 rounded-sm transition-colors duration-300 cursor-none"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="font-sans text-[9px] tracking-[0.3em] text-gold uppercase font-semibold block mb-1">
                    Direct Connection
                  </span>
                  <h3 className="font-serif text-2xl text-cream uppercase tracking-wide">
                    Luxury Enquiries
                  </h3>
                </div>

                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4 font-sans text-xs">
                  {/* Inquiry Type Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] tracking-widest uppercase text-cream/40">Request Category</label>
                    <select
                      value={modalType}
                      onChange={(e) => setModalType(e.target.value)}
                      className="bg-background border border-cream/10 p-3 rounded text-cream focus:outline-none focus:border-gold w-full cursor-none"
                    >
                      <option value="room">Room Reservation</option>
                      <option value="banquet">Banquet Event Space</option>
                      <option value="dining">Fine Dining Table</option>
                      <option value="general">General Enquiries</option>
                    </select>
                  </div>

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] tracking-widest uppercase text-cream/40">Full Name</label>
                    <input
                      type="text"
                      placeholder="YOUR NAME"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="bg-background border border-cream/10 p-3 rounded text-cream focus:outline-none focus:border-gold w-full uppercase tracking-wider cursor-none"
                      required
                    />
                  </div>

                  {/* Contact Info (Row) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] tracking-widest uppercase text-cream/40">Email Coordinates</label>
                      <input
                        type="email"
                        placeholder="EMAIL"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="bg-background border border-cream/10 p-3 rounded text-cream focus:outline-none focus:border-gold w-full uppercase tracking-wider cursor-none"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] tracking-widest uppercase text-cream/40">Phone Coordinates</label>
                      <input
                        type="tel"
                        placeholder="PHONE"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="bg-background border border-cream/10 p-3 rounded text-cream focus:outline-none focus:border-gold w-full uppercase tracking-wider cursor-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Date & Guests (Row) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] tracking-widest uppercase text-cream/40">Preferred Date</label>
                      <input
                        type="date"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                        className="bg-background border border-cream/10 p-3 rounded text-cream focus:outline-none focus:border-gold w-full cursor-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] tracking-widest uppercase text-cream/40">Guests</label>
                      <select
                        value={inquiryGuests}
                        onChange={(e) => setInquiryGuests(e.target.value)}
                        className="bg-background border border-cream/10 p-3 rounded text-cream focus:outline-none focus:border-gold w-full cursor-none"
                      >
                        {[1, 2, 3, 4, 5, 10, 20, 50, 100, 300, 600].map((num) => (
                          <option key={num} value={num}>
                            {num === 600 ? "300 - 600 Guests" : num === 300 ? "100 - 300 Guests" : num === 100 ? "50 - 100 Guests" : `${num} ${num === 1 ? "Guest" : "Guests"}`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] tracking-widest uppercase text-cream/40">Privilege Requests / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="ANY SPECIFIC DIETARY RESTRICTIONS, BANQUET PREFERENCES, OR CONFIGURATION NOTES..."
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      className="bg-background border border-cream/10 p-3 rounded text-cream focus:outline-none focus:border-gold w-full uppercase tracking-wider cursor-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="bg-gold text-background hover:bg-cream hover:text-black font-sans text-xs tracking-widest uppercase font-semibold py-3.5 mt-2 rounded transition-colors duration-300 cursor-none"
                  >
                    Submit Booking Request
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

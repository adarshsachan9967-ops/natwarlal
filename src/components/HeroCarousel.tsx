"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  eyebrowHi: string;
  eyebrowEn: string;
  headingHi: string;
  headingEn: string;
  subLabelHi: string;
  subLabelEn: string;
  descHi: string;
  descEn: string;
  primaryBtnTextHi: string;
  primaryBtnTextEn: string;
  primaryBtnHref: string;
  secondaryBtnTextHi: string;
  secondaryBtnTextEn: string;
  secondaryBtnHref: string;
  objectPosition?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-85/natwarlal/uploaded/IMG-20261015-WA0297.jpg",
    eyebrowHi: "चार दशकों का सांगठनिक समर्पण",
    eyebrowEn: "Four Decades of Organizational Leadership",
    headingHi: "वैश्य नटवर गोयल",
    headingEn: "Vaishya Natwar Goyal",
    subLabelHi: "उपाध्यक्ष, उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)",
    subLabelEn: "Vice Chairman, UP Small Industries Corporation (MoS Rank)",
    descHi: "व्यापारिक सशक्तिकरण, सामाजिक समरसता और औद्योगिक स्वावलंबन के लिए चार दशकों से अनवरत समर्पित जननेता।",
    descEn: "A veteran public leader dedicated for four decades to commercial empowerment, social harmony, and industrial self-reliance.",
    primaryBtnTextHi: "जीवन परिचय देखें",
    primaryBtnTextEn: "Read Biography",
    primaryBtnHref: "/biography",
    secondaryBtnTextHi: "फोटो गैलरी देखें",
    secondaryBtnTextEn: "View Photo Gallery",
    secondaryBtnHref: "/gallery",
    objectPosition: "center 25%",
  },
  {
    id: "slide-2",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-85/natwarlal/uploaded/IMG-20261015-WA0317.jpg",
    eyebrowHi: "राष्ट्रीय एवं प्रांतीय व्यापारिक मंच",
    eyebrowEn: "National & Provincial Commercial Forum",
    headingHi: "व्यापारिक हितों का प्रखर स्वर",
    headingEn: "Championing Merchant Rights & Welfare",
    subLabelHi: "राष्ट्रीय उपाध्यक्ष, भारतीय उद्योग व्यापार मण्डल",
    subLabelEn: "National Vice President, Bharatiya Udyog Vyapar Mandal",
    descHi: "उत्तर प्रदेश के 75 जनपदों में छोटे एवं मंझोले व्यापारियों के अधिकारों, जीएसटी सरलीकरण एवं सुरक्षा का मजबूत प्रतिनिधित्व।",
    descEn: "Steadfast advocacy for trade security, tax simplification, and fair business policy across all 75 districts of UP.",
    primaryBtnTextHi: "राजनीतिक यात्रा",
    primaryBtnTextEn: "Political Journey",
    primaryBtnHref: "/political-journey",
    secondaryBtnTextHi: "प्रेस समाचार",
    secondaryBtnTextEn: "Press & News",
    secondaryBtnHref: "/news",
    objectPosition: "center 20%",
  },
  {
    id: "slide-3",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-85/natwarlal/uploaded/IMG-20261015-WA0304.jpg",
    eyebrowHi: "सामाजिक समरसता एवं सामूहिक उत्थान",
    eyebrowEn: "Social Cohesion & Community Welfare",
    headingHi: "अखिल भारतीय वैश्य महासम्मेलन",
    headingEn: "All India Vaishya Mahasammelan",
    subLabelHi: "राष्ट्रीय उपाध्यक्ष एवं पूर्व प्रदेश अध्यक्ष (2013–2022)",
    subLabelEn: "National VP & Former UP State President (2013–2022)",
    descHi: "सामूहिक विवाह सम्मेलन, छात्रवृत्ति, नागरिक आपदा सहायता और समाज के अंतिम व्यक्ति तक सहायता का अनवरत अभियान।",
    descEn: "Continuous statewide campaigns for mass marriage sammelans, youth scholarships, and citizen welfare.",
    primaryBtnTextHi: "सामाजिक कार्य",
    primaryBtnTextEn: "Social Work",
    primaryBtnHref: "/social-work",
    secondaryBtnTextHi: "सम्मान एवं उपलब्धियां",
    secondaryBtnTextEn: "Awards & Honors",
    secondaryBtnHref: "/awards",
    objectPosition: "center 30%",
  },
  {
    id: "slide-4",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-85/natwarlal/uploaded/IMG-20261015-WA0313.jpg",
    eyebrowHi: "एमएसएमई एवं औद्योगिक विकास",
    eyebrowEn: "MSME Modernization & Industrial Growth",
    headingHi: "उत्तर प्रदेश लघु उद्योग निगम",
    headingEn: "UP Small Industries Corporation",
    subLabelHi: "राज्यमंत्री स्तर दायित्व | कानपुर मुख्यालय",
    subLabelEn: "MoS Rank Responsibility | Kanpur Headquarters",
    descHi: "प्रदेश के औद्योगिक आस्थानों का आधुनिकीकरण, स्थानीय कारीगरों को प्रोत्साहन और नए उद्यमियों को गति प्रदान करने की दिशा में कार्य।",
    descEn: "Upgrading district industrial estates, promoting local enterprise clusters, and advancing youth self-employment.",
    primaryBtnTextHi: "शासकीय दायित्व",
    primaryBtnTextEn: "Official Responsibilities",
    primaryBtnHref: "/about",
    secondaryBtnTextHi: "सीधा संपर्क",
    secondaryBtnTextEn: "Get in Touch",
    secondaryBtnHref: "/contact",
    objectPosition: "center 20%",
  },
  {
    id: "slide-5",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-85/natwarlal/uploaded/IMG-20261015-WA0330.jpg",
    eyebrowHi: "नागरिक सम्मान एवं अभिनंदन",
    eyebrowEn: "Civic Recognition & Honors",
    headingHi: "जनमानस का अटूट विश्वास",
    headingEn: "Unshakable Public Trust & Affection",
    subLabelHi: "व्यापारियों, समाजसेवियों एवं नागरिकों द्वारा भव्य अभिनंदन",
    subLabelEn: "Grand Felicitations by Trade Guilds & Civic Organizations",
    descHi: "ईमानदार लोकसेवा, सरलता और जनसुलभता के कारण पूरे उत्तर प्रदेश में सर्वसमाज का अपार स्नेह और सम्मान।",
    descEn: "Honored with deep affection and civic gratitude across all sections of society for accessible and humble public service.",
    primaryBtnTextHi: "वीडियो संदेश देखें",
    primaryBtnTextEn: "Watch Videos",
    primaryBtnHref: "/media",
    secondaryBtnTextHi: "अभिनंदन अभिलेखागार",
    secondaryBtnTextEn: "Honors Archive",
    secondaryBtnHref: "/awards",
    objectPosition: "center 25%",
  },
];

export default function HeroCarousel() {
  const { lang, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto transition every 6 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      role="region"
      aria-label={t("मुख्य बैनर स्लाइडर", "Hero Carousel")}
      className="relative w-full overflow-hidden bg-[#111827] text-white select-none focus:outline-none min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      {/* Slides Backgrounds */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
            }`}
          >
            {/* The Authentic Photograph */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt={lang === "hi" ? slide.headingHi : slide.headingEn}
              className="w-full h-full object-cover"
              style={{ objectPosition: slide.objectPosition || "center 25%" }}
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Asymmetrical Editorial Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#111827]/95 via-[#111827]/80 sm:via-[#111827]/70 to-[#111827]/30 lg:to-[#111827]/10" />
            <div className="absolute inset-0 bg-[#111827]/25" />
          </div>
        );
      })}

      {/* Slide Content Layer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F4] text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#F4510B]" />
            <span>{t(HERO_SLIDES[currentSlide].eyebrowHi, HERO_SLIDES[currentSlide].eyebrowEn)}</span>
          </div>

          {/* Heading & Sublabel */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif">
              {t(HERO_SLIDES[currentSlide].headingHi, HERO_SLIDES[currentSlide].headingEn)}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#C6A15B] font-semibold tracking-wide">
              {t(HERO_SLIDES[currentSlide].subLabelHi, HERO_SLIDES[currentSlide].subLabelEn)}
            </p>
          </div>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
            {t(HERO_SLIDES[currentSlide].descHi, HERO_SLIDES[currentSlide].descEn)}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={HERO_SLIDES[currentSlide].primaryBtnHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#F4510B] hover:bg-[#D94205] text-white font-semibold text-sm transition-all duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F4510B]"
            >
              <span>{t(HERO_SLIDES[currentSlide].primaryBtnTextHi, HERO_SLIDES[currentSlide].primaryBtnTextEn)}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={HERO_SLIDES[currentSlide].secondaryBtnHref}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/30 backdrop-blur-xs transition-all duration-150"
            >
              <span>{t(HERO_SLIDES[currentSlide].secondaryBtnTextHi, HERO_SLIDES[currentSlide].secondaryBtnTextEn)}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <div className="absolute inset-y-0 left-4 right-4 z-30 pointer-events-none flex items-center justify-between">
        <button
          type="button"
          onClick={prevSlide}
          aria-label={t("पिछली स्लाइड", "Previous Slide")}
          className="pointer-events-auto p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F4510B]"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label={t("अगली स्लाइड", "Next Slide")}
          className="pointer-events-auto p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F4510B]"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            aria-label={`${t("स्लाइड", "Slide")} ${i + 1}`}
            aria-current={i === currentSlide}
            className={`transition-all duration-200 rounded-full ${
              i === currentSlide
                ? "w-8 h-2 bg-[#F4510B]"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

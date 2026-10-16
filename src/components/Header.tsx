"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", labelHi: "होम", labelEn: "Home" },
    { href: "/about", labelHi: "परिचय", labelEn: "About" },
    { href: "/biography", labelHi: "जीवन-वृत्त", labelEn: "Biography" },
    { href: "/political-journey", labelHi: "राजनीतिक यात्रा", labelEn: "Political Journey" },
    { href: "/social-work", labelHi: "सामाजिक कार्य", labelEn: "Social Work" },
    { href: "/awards", labelHi: "सम्मान", labelEn: "Awards" },
    { href: "/gallery", labelHi: "फोटो गैलरी", labelEn: "Photo Gallery" },
    { href: "/news", labelHi: "समाचार", labelEn: "News" },
    { href: "/media", labelHi: "मीडिया", labelEn: "Media" },
    { href: "/contact", labelHi: "संपर्क", labelEn: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/98 shadow-xs border-b border-[#E7E5E4] py-2.5"
          : "bg-[#FAF8F4] border-b border-[#E7E5E4] py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Official Typographic Identity */}
          <Link href="/" className="group flex flex-col focus:outline-none">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] group-hover:text-[#F4510B] transition-colors leading-tight font-serif">
              {t("वैश्य नटवर गोयल", "Vaishya Natwar Goyal")}
            </span>
            <span className="text-[11px] sm:text-xs text-[#667085] font-medium tracking-normal mt-0.5">
              {t(
                "उपाध्यक्ष, उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)",
                "Vice Chairman, UP Small Industries Corporation (MoS Rank)"
              )}
            </span>
          </Link>

          {/* Right: Clean Horizontal Navigation Menu (Desktop) */}
          <div className="hidden xl:flex items-center gap-6">
            <nav className="flex items-center gap-1.5 2xl:gap-3" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 px-2 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "text-[#F4510B] font-semibold"
                        : "text-[#1F2937] hover:text-[#111827]"
                    }`}
                  >
                    <span>{t(link.labelHi, link.labelEn)}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#F4510B] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Language Switcher */}
            <div className="pl-2 border-l border-[#E7E5E4]">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Right Controls: Language & Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <LanguageToggle className="scale-95" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#111827] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#F4510B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E7E5E4] shadow-xl animate-lightbox">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <nav className="flex flex-col divide-y divide-[#E7E5E4]/60">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-2 text-sm flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-[#F4510B] font-semibold bg-orange-50/50 rounded-lg"
                        : "text-[#111827] hover:text-[#F4510B]"
                    }`}
                  >
                    <span>{t(link.labelHi, link.labelEn)}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4510B]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

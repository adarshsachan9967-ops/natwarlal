"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GALLERY_ITEMS, GalleryCategory } from "@/data/gallery";
import ImageLightbox from "@/components/ImageLightbox";
import {
  MapPin,
  Maximize2
} from "lucide-react";

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories: { id: GalleryCategory; labelHi: string; labelEn: string }[] = [
    { id: "all", labelHi: `समस्त चित्र (${GALLERY_ITEMS.length})`, labelEn: `All Photos (${GALLERY_ITEMS.length})` },
    { id: "trade", labelHi: "व्यापारिक संगठन एवं महासम्मेलन", labelEn: "Trade & Commerce Assemblies" },
    { id: "government", labelHi: "शासकीय दायित्व एवं एमएसएमई", labelEn: "Government & MSME Leadership" },
    { id: "community", labelHi: "सामाजिक कार्य एवं वैश्य महासम्मेलन", labelEn: "Community & Social Work" },
    { id: "ceremonies", labelHi: "नागरिक सम्मान एवं अभिनंदन", labelEn: "Civic Honors & Ceremonies" },
    { id: "national", labelHi: "वरिष्ठ नेतृत्व से संवाद", labelEn: "Leadership Deliberations" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="py-12 sm:py-16 space-y-10">
      {/* Centered & Bold Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("प्रामाणिक छायाचित्र संग्रह", "Verified Photographic Archive")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("आधिकारिक फोटो गैलरी", "Official Media & Photo Gallery")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "सार्वजनिक जीवन, सांगठनिक सम्मेलनों, नागरिक अभिनंदन और शासकीय दायित्वों के समस्त प्रामाणिक एवं उच्च-रिज़ॉल्यूशन छायाचित्र।",
              "Authentic, high-resolution photographs documenting statewide conventions, civic felicitations, government meetings, and four decades of grassroots public service."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white rounded-2xl border border-[#E7E5E4] shadow-xs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#111827] text-white shadow-xs"
                    : "text-[#667085] hover:text-[#111827] hover:bg-[#FAF8F4]"
                }`}
              >
                {t(cat.labelHi, cat.labelEn)}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid - Responsive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111827]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={lang === "hi" ? item.titleHi : item.titleEn}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  {item.dateStr && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 text-white text-[11px] font-medium backdrop-blur-xs">
                      {item.dateStr}
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-2">
                  {item.locationHi && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#F4510B] font-semibold">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{lang === "hi" ? item.locationHi : item.locationEn}</span>
                    </div>
                  )}

                  <h2 className="text-base font-bold text-[#111827] font-serif leading-snug group-hover:text-[#F4510B] transition-colors">
                    {lang === "hi" ? item.titleHi : item.titleEn}
                  </h2>

                  <p className="text-xs text-[#667085] leading-relaxed line-clamp-2">
                    {lang === "hi" ? item.captionHi : item.captionEn}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-4 pt-2 border-t border-[#E7E5E4]/60 text-right">
                <span className="text-xs font-semibold text-[#F4510B] group-hover:underline">
                  {t("बड़ा चित्र देखें →", "View Full Photo →")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        items={filteredItems}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActiveImageIndex((prev) => (prev + 1) % filteredItems.length)}
        onPrev={() => setActiveImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
      />
    </div>
  );
}

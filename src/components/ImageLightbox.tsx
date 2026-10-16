"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryItem } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Download, Share2 } from "lucide-react";

interface ImageLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  const { t } = useLanguage();
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !currentItem) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentItem.titleHi,
          text: currentItem.captionHi,
          url: window.location.href,
        });
      } catch (err) {
        // Ignored if cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t("लिंक कॉपी हो गया!", "Link copied to clipboard!"));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center gap-2 z-50">
        <button
          onClick={handleShare}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title={t("शेयर करें", "Share")}
        >
          <Share2 className="w-5 h-5" />
        </button>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title={t("बंद करें (Esc)", "Close (Esc)")}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all z-40 focus:outline-none focus:ring-2 focus:ring-orange-500"
        title={t("पिछला (Left Arrow)", "Previous (Left Arrow)")}
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all z-40 focus:outline-none focus:ring-2 focus:ring-orange-500"
        title={t("अगला (Right Arrow)", "Next (Right Arrow)")}
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Center Image Container */}
      <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center animate-lightbox">
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-t-xl bg-black/50">
          {/* Main Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentItem.src}
            alt={t(currentItem.titleHi, currentItem.titleEn)}
            className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {/* Captions and Info Bar */}
        <div className="w-full bg-slate-900/95 border-t border-slate-800 text-white p-4 sm:p-5 rounded-b-xl shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
            <div className="space-y-1.5 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {t(currentItem.titleHi, currentItem.titleEn)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t(currentItem.captionHi, currentItem.captionEn)}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
                {currentItem.dateStr && (
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span>{currentItem.dateStr}</span>
                  </span>
                )}
                {currentItem.locationHi && (
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>{t(currentItem.locationHi, currentItem.locationEn || "")}</span>
                  </span>
                )}
                {currentItem.dignitariesHi && currentItem.dignitariesHi.length > 0 && (
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md">
                    <Users className="w-3.5 h-3.5 text-orange-400" />
                    <span>
                      {t(
                        currentItem.dignitariesHi.join(", "),
                        currentItem.dignitariesEn?.join(", ") || ""
                      )}
                    </span>
                  </span>
                )}
              </div>
            </div>

            {/* Pagination indicator */}
            <div className="text-xs text-slate-400 self-end md:self-start bg-slate-800 px-3 py-1.5 rounded-full font-mono shrink-0">
              {currentIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

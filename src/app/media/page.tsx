"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { VIDEO_MEDIA_LIST, VideoMediaItem } from "@/data/videos";
import { Play, Clock, Sparkles } from "lucide-react";

export default function MediaVideoPage() {
  const { lang, t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<VideoMediaItem | null>(null);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Centered & Bold Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("ऑडियो-विजुअल मीडिया लाइब्रेरी", "Official Audio-Visual Archive")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("वीडियो संदेश एवं सार्वजनिक वक्तव्य", "Video Addresses & Media Archive")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "सार्वजनिक उद्बोधन, व्यापार सम्मेलनों में संबोधन, समाचार मीडिया संवाद एवं नागरिक सम्मान समारोहों की प्रामाणिक वीडियो रिकॉर्डिंग्स।",
              "Authentic video footage from key public addresses, trader assemblies, press interactions, and civic felicitation ceremonies."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Videos Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEO_MEDIA_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* HTML5 Native Video Preview or Click to Play */}
                <div 
                  onClick={() => setActiveVideo(item)}
                  className="relative aspect-[16/9] w-full bg-[#111827] flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  <video
                    src={item.videoSrc}
                    preload="metadata"
                    playsInline
                    muted
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full bg-[#F4510B] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                      aria-label="Play video"
                    >
                      <Play className="w-6 h-6 ml-0.5 fill-white text-white" />
                    </div>
                  </div>
                  {item.duration && (
                    <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono">
                      {item.duration}
                    </span>
                  )}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-[#F4510B] text-white text-[10px] font-bold tracking-wider uppercase">
                    {lang === "hi" ? "वीडियो रिकॉर्डिंग" : "Video"}
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[#667085]">
                    <span className="font-bold text-[#F4510B]">
                      {lang === "hi" ? item.sourceHi : item.sourceEn}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-[#111827] font-serif leading-snug group-hover:text-[#F4510B] transition-colors">
                    {lang === "hi" ? item.titleHi : item.titleEn}
                  </h2>

                  <p className="text-xs text-[#667085] line-clamp-3 leading-relaxed">
                    {lang === "hi" ? item.descriptionHi : item.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-[#E7E5E4]/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#667085] flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#F4510B]" />
                  <span>{item.duration}</span>
                </span>
                <button
                  onClick={() => setActiveVideo(item)}
                  className="font-bold text-[#F4510B] hover:text-[#D94205] text-xs flex items-center gap-1 cursor-pointer"
                >
                  <span>{t("पूरा वीडियो चलाएं", "Play Full Video")}</span>
                  <span>▶</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="bg-[#111827] rounded-3xl max-w-3xl w-full p-4 sm:p-6 space-y-4 shadow-2xl border border-white/20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-bold text-[#F4510B] uppercase tracking-wider">
                  {lang === "hi" ? activeVideo.sourceHi : activeVideo.sourceEn} • {activeVideo.date}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif leading-snug">
                  {lang === "hi" ? activeVideo.titleHi : activeVideo.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="aspect-[16/9] w-full bg-black rounded-2xl overflow-hidden shadow-inner">
              <video
                src={activeVideo.videoSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-2 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === "hi" ? activeVideo.descriptionHi : activeVideo.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

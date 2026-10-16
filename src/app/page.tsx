"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import HeroCarousel from "@/components/HeroCarousel";
import ImageLightbox from "@/components/ImageLightbox";
import { GALLERY_ITEMS } from "@/data/gallery";
import { NEWS_ARTICLES } from "@/data/news";
import { AWARDS_DATA } from "@/data/awards";
import { VIDEO_MEDIA_LIST, VideoMediaItem } from "@/data/videos";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Play,
  Clock,
  Download,
  Share2,
  Maximize2
} from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export default function HomePage() {
  const { lang, t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<VideoMediaItem | null>(null);

  // Gallery items for preview
  const galleryItems = GALLERY_ITEMS.slice(0, 8);

  // Latest uploaded photos strip
  const uploadedPhotosStrip = GALLERY_ITEMS.filter((item) => item.src.includes("/uploaded/")).slice(0, 10);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  // Selected 10 historical milestones documented in PDF
  const keyMilestones = [
    {
      year: "1984",
      titleHi: "काशी अग्रवाल समाज से संबंधित आजीवन सदस्यता",
      titleEn: "Life Membership, Kashi Agrawal Samaj",
      descHi: "युवावस्था में काशी के प्रतिष्ठित अग्रवाल समाज की आजीवन सदस्यता ग्रहण कर सामाजिक सेवा का संकल्प लिया।",
      descEn: "Enrolled as a Life Member of the prestigious Kashi Agrawal Samaj, commencing dedicated civic service.",
      orgHi: "काशी अग्रवाल समाज, वाराणसी",
      orgEn: "Kashi Agrawal Samaj, Varanasi",
    },
    {
      year: "1988–1992",
      titleHi: "काशी दवा व्यापार संघ में संगठनात्मक दायित्व",
      titleEn: "Organizational Responsibility, Kashi Pharma Trade Body",
      descHi: "दवा व्यापारियों के हितों के संरक्षण, प्रशासनिक समन्वय एवं स्थानीय व्यापारिक समस्याओं का निस्तारण।",
      descEn: "Organized local pharmaceutical merchants and addressed licensing and municipal trade issues.",
      orgHi: "काशी दवा व्यापार संघ",
      orgEn: "Kashi Pharma Trade Association",
    },
    {
      year: "1992–1996",
      titleHi: "काशी युवा व्यापार प्रतिनिधि मंडल में उपाध्यक्ष पद",
      titleEn: "Vice President, Kashi Youth Traders Representative Body",
      descHi: "युवा व्यापारियों एवं नए उद्यमियों के सशक्तिकरण हेतु संगठन का व्यापक विस्तार।",
      descEn: "Spearheaded youth merchant representation and entrepreneurial advocacy across Varanasi.",
      orgHi: "काशी युवा व्यापार प्रतिनिधि मंडल",
      orgEn: "Kashi Youth Traders Representative Body",
    },
    {
      year: "1993–1995",
      titleHi: "वैश्य महासभा में संगठन मंत्री का दायित्व",
      titleEn: "Organizational Secretary, Vaishya Mahasabha",
      descHi: "वैश्य समुदाय के विभिन्न घटकों में सांगठनिक समन्वय और सामाजिक समरसता को बढ़ावा।",
      descEn: "Coordinated inter-community initiatives and promoted educational and social solidarity.",
      orgHi: "वैश्य महासभा",
      orgEn: "Vaishya Mahasabha",
    },
    {
      year: "2007–2012",
      titleHi: "अखिल भारतीय उद्योग व्यापार मंडल की कार्य समिति में सदस्यता",
      titleEn: "Executive Committee Member, All India Trade Forum",
      descHi: "राष्ट्रीय एवं प्रांतीय स्तर पर व्यापारियों के वैधानिक अधिकारों व कर सुधारों पर सक्रिय भूमिका।",
      descEn: "Active participation in national state merchant forums addressing taxation and trade rights.",
      orgHi: "अखिल भारतीय उद्योग व्यापार मंडल",
      orgEn: "All India Traders Executive Body",
    },
    {
      year: "2009–2012",
      titleHi: "अखिल भारतीय वैश्य महासम्मेलन, उत्तर प्रदेश में कोषाध्यक्ष पद",
      titleEn: "State Treasurer, All India Vaishya Mahasammelan UP",
      descHi: "प्रांतीय संगठन के वित्तीय प्रबंधन, लेखांकन शुचिता एवं सामाजिक सहायता कोष का सुदृढ़ीकरण।",
      descEn: "Oversaw fiscal transparency, welfare funds, and district expansion across Uttar Pradesh.",
      orgHi: "अखिल भारतीय वैश्य महासम्मेलन उ०प्र०",
      orgEn: "All India Vaishya Mahasammelan UP",
    },
    {
      year: "2012",
      titleHi: "उत्तर प्रदेश खादी एवं ग्रामोद्योग बोर्ड में उपाध्यक्ष पद",
      titleEn: "Vice Chairman, UP Khadi & Village Industries Board",
      descHi: "उ०प्र० शासन द्वारा दर्जा प्राप्त राज्यमंत्री स्तर पर ग्रामीण कुटीर व खादी उद्योगों के संवर्धन का दायित्व।",
      descEn: "Appointed Vice Chairman (Minister of State Rank), advancing rural khadi and artisan enterprises.",
      orgHi: "उ०प्र० खादी एवं ग्रामोद्योग बोर्ड (राज्यमंत्री स्तर)",
      orgEn: "UP Khadi & Village Industries Board (MoS Rank)",
    },
    {
      year: "2013–2022",
      titleHi: "अखिल भारतीय वैश्य महासम्मेलन, उत्तर प्रदेश में प्रदेश अध्यक्ष पद",
      titleEn: "State President, All India Vaishya Mahasammelan UP",
      descHi: "लगातार 9 वर्षों तक 75 जनपदों में संगठन का नेतृत्व, सामूहिक विवाह सम्मेलन एवं मेधावी छात्र सम्मान।",
      descEn: "Led the state organization across 75 districts for nearly a decade, organizing community conventions.",
      orgHi: "अखिल भारतीय वैश्य महासम्मेलन",
      orgEn: "All India Vaishya Mahasammelan",
    },
    {
      year: "2013–2023",
      titleHi: "भारतीय उद्योग व्यापार मंडल में राष्ट्रीय उपाध्यक्ष पद",
      titleEn: "National Vice President, Bharatiya Udyog Vyapar Mandal",
      descHi: "राष्ट्रीय नेतृत्व में व्यापारियों के हितों का प्रतिनिधित्व, जीएसटी सरलीकरण व व्यापारी सुरक्षा पर कार्य।",
      descEn: "Served as National VP, representing business interests, GST simplification, and trader security.",
      orgHi: "भारतीय उद्योग व्यापार मंडल",
      orgEn: "Bharatiya Udyog Vyapar Mandal",
    },
    {
      year: "सितम्बर 2024",
      titleHi: "उत्तर प्रदेश लघु उद्योग निगम के उपाध्यक्ष पद का दायित्व",
      titleEn: "Vice Chairman, UP Small Industries Corporation (UPSIC)",
      descHi: "मुख्यमंत्री योगी आदित्यनाथ जी की सरकार द्वारा राज्यमंत्री स्तर पर एमएसएमई एवं औद्योगिक संवर्धन हेतु नियुक्ति।",
      descEn: "Appointed Vice Chairman with Minister of State rank to modernize state industrial estates and MSMEs.",
      orgHi: "उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)",
      orgEn: "UP Small Industries Corporation Ltd. (MoS Rank)",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* ========================================================= */}
      {/* SECTION 1: FULL-WIDTH CAROUSEL HERO BANNER                */}
      {/* ========================================================= */}
      <HeroCarousel />

      {/* ========================================================= */}
      {/* SECTION 2: ABOUT SHRI NATWAR GOYAL                        */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading - Centered and Bold */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("परिचय एवं नेतृत्व", "Introduction & Leadership")}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t(
              "सार्वजनिक जीवन, व्यापारिक सशक्तिकरण और जनसेवा",
              "Public Life, Commercial Empowerment & Dedicated Service"
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "काशी की सांस्कृतिक भूमि से निकलकर चार दशकों से पूरे उत्तर प्रदेश में समाज सेवा, व्यापारी सुरक्षा और एमएसएमई संवर्धन को समर्पित यात्रा।",
              "A celebrated four-decade trajectory rooted in Varanasi, championing commerce, social solidarity, and industrial modernization across Uttar Pradesh."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Authentic Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-md">
              <div className="aspect-[4/5] relative w-full overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0313.jpg"
                  alt={t("श्री वैश्य नटवर गोयल आधिकारिक दायित्व", "Shri Vaishya Natwar Goyal Official Address")}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-[#FAF8F4] border-t border-[#E7E5E4]">
                <p className="text-sm font-bold text-[#111827]">
                  {t("उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)", "UP Small Industries Corporation (MoS Rank)")}
                </p>
                <p className="text-xs text-[#667085] mt-1">
                  {t("कानपुर मुख्यालय से प्रदेश के एमएसएमई व औद्योगिक आस्थानों के आधुनिकीकरण का संकल्प।", "Steering statewide small-scale industries and micro-enterprise growth.")}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Detailed Text & Key Badges */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#1F2937] leading-relaxed">
              {t(
                "श्री वैश्य नटवर गोयल का सार्वजनिक जीवन चार दशकों से अधिक की अनवरत सांगठनिक एवं सामाजिक साधना का प्रतीक है। काशी की सांस्कृतिक व व्यापारिक पृष्ठभूमि में पले-बढ़े श्री गोयल ने युवावस्था से ही व्यापारिक हितों के संरक्षण, समाज सेवा और जनहित के मुद्दों को प्राथमिकता दी।",
                "The public life of Shri Vaishya Natwar Goyal embodies over four decades of steadfast organizational and civic service. Grounded in the cultural and mercantile traditions of Kashi (Varanasi), he has consistently championed trade welfare, industrial modernization, and community cohesion."
              )}
            </p>

            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              {t(
                "उत्तर प्रदेश लघु उद्योग निगम (UPSIC) के उपाध्यक्ष (दर्जा प्राप्त राज्यमंत्री) के रूप में वे प्रदेश के एमएसएमई क्षेत्र के आधुनिकीकरण और नए उद्यमियों के प्रोत्साहन में अग्रणी भूमिका निभा रहे हैं। साथ ही, अखिल भारतीय वैश्य महासम्मेलन और भारतीय उद्योग व्यापार मंडल के राष्ट्रीय उपाध्यक्ष के रूप में समाज के सभी वर्गों के साथ निरंतर संवाद बनाए हुए हैं।",
                "As Vice Chairman (Minister of State Rank) of the UP Small Industries Corporation, he steers initiatives to modernize industrial estates and empower budding entrepreneurs, while maintaining deep nationwide grassroots engagement as National VP of major trade and community federations."
              )}
            </p>

            {/* Quick 3-Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E7E5E4] shadow-2xs space-y-1">
                <span className="text-xs font-bold text-[#F4510B] uppercase">शासकीय दायित्व</span>
                <p className="text-xs font-semibold text-[#111827]">दर्जा प्राप्त राज्यमंत्री</p>
                <p className="text-[11px] text-[#667085]">उ०प्र० लघु उद्योग निगम</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E7E5E4] shadow-2xs space-y-1">
                <span className="text-xs font-bold text-[#F4510B] uppercase">व्यापारिक नेतृत्व</span>
                <p className="text-xs font-semibold text-[#111827]">राष्ट्रीय उपाध्यक्ष</p>
                <p className="text-[11px] text-[#667085]">भारतीय उद्योग व्यापार मंडल</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E7E5E4] shadow-2xs space-y-1">
                <span className="text-xs font-bold text-[#F4510B] uppercase">सामाजिक समरसता</span>
                <p className="text-xs font-semibold text-[#111827]">पूर्व प्रदेश अध्यक्ष (9 वर्ष)</p>
                <p className="text-[11px] text-[#667085]">अखिल भारतीय वैश्य महासम्मेलन</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/biography"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#111827] hover:bg-black text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <span>{t("विस्तृत जीवन परिचय पढ़ें", "Read Full Biography")}</span>
                <ArrowRight className="w-4 h-4 text-[#F4510B]" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white border border-[#E7E5E4] hover:bg-slate-50 text-[#111827] font-semibold text-sm transition-colors"
              >
                <span>{t("शासकीय जिम्मेदारियां", "Official Responsibilities")}</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: KEY LEADERSHIP PILLARS                         */}
      {/* ========================================================= */}
      <section className="border-y border-[#E7E5E4] bg-[#FAF8F4] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Centered Bold Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
              {t("सांगठनिक आधार", "Organizational Core")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
              {t("प्रमुख नेतृत्व एवं कार्यक्षेत्र स्तंभ", "Core Leadership & Functional Pillars")}
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
              {t(
                "शासकीय, व्यापारिक एवं सामाजिक उत्तरदायित्वों का सम्यक एवं निष्ठावान निर्वहन।",
                "Balanced and dedicated execution of administrative, commercial, and community responsibilities."
              )}
            </p>
            <div className="w-16 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E7E5E4] shadow-2xs space-y-3 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                {t("शासकीय दायित्व", "Official Function")}
              </span>
              <h3 className="text-base font-bold text-[#111827]">
                {t("उपाध्यक्ष, उ०प्र० लघु उद्योग निगम", "Vice Chairman, UPSIC")}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t("दर्जा प्राप्त राज्यमंत्री स्तर पर प्रदेश के एमएसएमई, सूक्ष्म उद्योगों और औद्योगिक शेड्स के आधुनिकीकरण का कार्य।", "Steering industrial sheds modernization, vendor facilitation, and MSME growth.")}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E5E4] shadow-2xs space-y-3 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                {t("सामुदायिक नेतृत्व", "Community Leadership")}
              </span>
              <h3 className="text-base font-bold text-[#111827]">
                {t("राष्ट्रीय उपाध्यक्ष, वैश्य महासम्मेलन", "National VP, Vaishya Mahasammelan")}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t("लगातार 9 वर्षों तक उ०प्र० के प्रदेश अध्यक्ष के रूप में सभी 75 जनपदों में सांगठनिक विस्तार एवं सामाजिक समरसता।", "9 years as UP State President, organizing conventions across all 75 districts.")}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E5E4] shadow-2xs space-y-3 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                {t("व्यापारिक मंच", "Trade Representation")}
              </span>
              <h3 className="text-base font-bold text-[#111827]">
                {t("राष्ट्रीय उपाध्यक्ष, व्यापार मंडल", "National VP, Vyapar Mandal")}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t("भारतीय उद्योग व्यापार मंडल में व्यापारियों के वैधानिक व सुरक्षा हितों का प्रतिनिधित्व।", "Championing trader security, fair taxation, and merchant rights nationally.")}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E5E4] shadow-2xs space-y-3 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                {t("लोक सेवा परंपरा", "Civic Heritage")}
              </span>
              <h3 className="text-base font-bold text-[#111827]">
                {t("40 वर्षों का अनुभव", "40 Years of Service")}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t("1984 से अविरल काशी, कानपुर एवं लखनऊ में जनकल्याण व व्यापारी कल्याण में संलग्न।", "Continuous documented public and merchant advocacy since 1984.")}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: PHOTO GALLERY PREVIEW                          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Centered Bold Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("छायाचित्र अभिलेखागार", "Photographic Archive")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("स्मृतियाँ एवं सार्वजनिक गतिविधियाँ", "Memories & Public Engagements")}
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "विभिन्न सार्वजनिक कार्यक्रमों, सम्मेलनों और संगठनात्मक गतिविधियों की चयनित उच्च-रिज़ॉल्यूशन झलकियाँ।",
              "Selected authentic moments from official state assemblies, civic receptions, and grassroots conventions."
            )}
          </p>
          <div className="w-16 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1 Large Featured Image (7 cols) */}
          <div
            onClick={() => openLightbox(0)}
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#E7E5E4] bg-[#111827] cursor-pointer aspect-[16/10] sm:aspect-[16/11]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryItems[0]?.src || "https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0297.jpg"}
              alt={lang === "hi" ? galleryItems[0]?.titleHi : galleryItems[0]?.titleEn}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-0 inset-x-0 p-6 space-y-1.5 text-white">
              <span className="text-[11px] font-bold text-[#F4510B] uppercase tracking-wider">
                {galleryItems[0]?.dateStr} • {lang === "hi" ? galleryItems[0]?.locationHi : galleryItems[0]?.locationEn}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold font-serif leading-snug">
                {lang === "hi" ? galleryItems[0]?.titleHi : galleryItems[0]?.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                {lang === "hi" ? galleryItems[0]?.captionHi : galleryItems[0]?.captionEn}
              </p>
            </div>
          </div>

          {/* 2 Medium Stacked Images (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            <div
              onClick={() => openLightbox(1)}
              className="group relative rounded-2xl overflow-hidden border border-[#E7E5E4] bg-[#111827] cursor-pointer aspect-[16/10]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryItems[1]?.src || "https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0298.jpg"}
                alt={lang === "hi" ? galleryItems[1]?.titleHi : galleryItems[1]?.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-0.5 text-white">
                <span className="text-[10px] font-bold text-[#F4510B]">
                  {galleryItems[1]?.dateStr}
                </span>
                <h4 className="text-sm font-bold leading-tight font-serif">
                  {lang === "hi" ? galleryItems[1]?.titleHi : galleryItems[1]?.titleEn}
                </h4>
              </div>
            </div>

            <div
              onClick={() => openLightbox(2)}
              className="group relative rounded-2xl overflow-hidden border border-[#E7E5E4] bg-[#111827] cursor-pointer aspect-[16/10]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryItems[2]?.src || "https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0299.jpg"}
                alt={lang === "hi" ? galleryItems[2]?.titleHi : galleryItems[2]?.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-0.5 text-white">
                <span className="text-[10px] font-bold text-[#F4510B]">
                  {galleryItems[2]?.dateStr}
                </span>
                <h4 className="text-sm font-bold leading-tight font-serif">
                  {lang === "hi" ? galleryItems[2]?.titleHi : galleryItems[2]?.titleEn}
                </h4>
              </div>
            </div>

          </div>

          {/* 3 Smaller Supporting Images in Row (Cols 4 + 4 + 4) */}
          {galleryItems.slice(3, 6).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx + 3)}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden border border-[#E7E5E4] bg-[#111827] cursor-pointer aspect-[16/10]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={lang === "hi" ? item.titleHi : item.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-0.5 text-white">
                <span className="text-[10px] font-bold text-[#F4510B]">
                  {item.dateStr}
                </span>
                <h4 className="text-xs sm:text-sm font-bold leading-tight line-clamp-1 font-serif">
                  {lang === "hi" ? item.titleHi : item.titleEn}
                </h4>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center pt-2">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <span>{t(`सभी ${GALLERY_ITEMS.length} प्रामाणिक छायाचित्र देखें`, `View All ${GALLERY_ITEMS.length} Authentic Photos`)}</span>
            <ArrowRight className="w-4 h-4 text-[#F4510B]" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: POLITICAL & SOCIAL JOURNEY TIMELINE            */}
      {/* (ADDRESSING 1st SCREENSHOT: RICH CONTENT ON RIGHT SIDE)    */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Centered Bold Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("ऐतिहासिक यात्रा", "Historical Trajectory")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("राजनीतिक एवं सामाजिक यात्रा के मुख्य पड़ाव", "Key Milestones of the Political & Social Journey")}
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "मूल संदर्भ दस्तावेज (PDF) एवं शासकीय अभिलेखों में दर्ज चार दशकों के प्रामाणिक सांगठनिक पड़ाव।",
              "Chronological milestones across 40 years as documented in official biographical records."
            )}
          </p>
          <div className="w-16 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>

        {/* 2-Column Responsive Layout: Left 7 cols for Milestones, Right 5 cols for Rich Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN (7 COLS): Chronological Milestones */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative border-l-2 border-[#E7E5E4] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
              {keyMilestones.map((ms, idx) => (
                <div key={idx} className="relative group">
                  {/* Year Marker Dot */}
                  <div className="absolute -left-[32px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#F4510B] group-hover:scale-125 transition-transform shadow-xs" />

                  <div className="space-y-1.5 bg-white p-5 rounded-2xl border border-[#E7E5E4] shadow-2xs hover:border-[#F4510B]/40 transition-all">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-0.5 rounded-md bg-[#111827] text-white text-xs font-bold tracking-wide">
                        {ms.year}
                      </span>
                      <span className="text-xs text-[#F4510B] font-semibold">
                        {lang === "hi" ? ms.orgHi : ms.orgEn}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#111827] font-serif group-hover:text-[#F4510B] transition-colors leading-snug">
                      {lang === "hi" ? ms.titleHi : ms.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {lang === "hi" ? ms.descHi : ms.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 pl-3 sm:pl-4">
              <Link
                href="/political-journey"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-[#E7E5E4] hover:bg-slate-50 text-xs sm:text-sm font-semibold text-[#111827] transition-colors shadow-2xs"
              >
                <span>{t("विस्तृत सांगठनिक यात्रा विवरण देखें", "Explore Full Journey Timeline")}</span>
                <ArrowRight className="w-4 h-4 text-[#F4510B]" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN (5 COLS): Sticky Leadership Spotlight & Impact Dossier (Fixes Empty Space!) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            
            {/* Leadership Spotlight Card */}
            <div className="bg-[#111827] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden border border-white/10">
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F4510B] text-white text-xs font-bold uppercase tracking-wider">
                  {t("सांगठनिक समर्पण का सार", "Leadership Overview")}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold font-serif leading-snug text-white">
                  {t("काशी से लखनऊ तक, अविरल जनसेवा के चार दशक", "Four Decades of Unbroken Public Stewardship")}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t(
                    "व्यापारी सुरक्षा, निष्पक्ष कर व्यवस्था, एमएसएमई का आधुनिकीकरण और सामाजिक समरसता ही हमारे सार्वजनिक जीवन का मूल मंत्र है।",
                    "Fair commerce, MSME empowerment, trader security, and community harmony have remained the bedrock of our public mission."
                  )}
                </p>

                {/* 4 Impact Number Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/15">
                  <div className="space-y-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#C6A15B]">40+</span>
                    <p className="text-[11px] text-slate-300 font-medium">वर्षों का निरंतर अनुभव</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#C6A15B]">75</span>
                    <p className="text-[11px] text-slate-300 font-medium">जनपदों में सघन प्रवास</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F4510B]">MoS</span>
                    <p className="text-[11px] text-slate-300 font-medium">दर्जा प्राप्त राज्यमंत्री स्तर</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F4510B]">100+</span>
                    <p className="text-[11px] text-slate-300 font-medium">सम्मेलन व जनसमारोह</p>
                  </div>
                </div>

                {/* Core Commitments Checklist */}
                <div className="space-y-2 pt-2 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                    <span>लघु एवं मध्यम उद्योगों (MSME) का सर्वांगीण आधुनिकीकरण</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                    <span>व्यापारियों के वैधानिक अधिकारों व सामाजिक सुरक्षा की रक्षा</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                    <span>सामूहिक विवाह एवं मेधावी छात्र-छात्रा प्रोत्साहन योजनाएं</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F4510B] hover:bg-[#D94205] text-white font-semibold text-xs transition-colors shadow-md"
                  >
                    <span>{t("कार्यालय से संवाद स्थापित करें", "Connect with Camp Office")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#F4510B]/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Authentic Secondary Photo Card */}
            <div className="bg-white rounded-3xl p-5 border border-[#E7E5E4] shadow-xs space-y-4">
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0317.jpg"
                  alt="Dignitaries on Stage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xs font-bold text-[#111827]">
                  {t("प्रांतीय व्यापारी एवं सामाजिक अधिवेशन", "Provincial Trade & Civic Convention")}
                </p>
                <p className="text-[11px] text-[#667085]">
                  {t("समस्त जनपदों के प्रतिनिधियों की उपस्थिति में संगठन के आगामी संकल्पों की रूपरेखा।", "Guiding delegates from across Uttar Pradesh on socio-economic advancement.")}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: VIDEO MESSAGE & MEDIA SHOWCASE (REAL VIDEOS!)   */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Centered Bold Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("ऑडियो-विजुअल मीडिया", "Official Video Library")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("वीडियो संदेश एवं सार्वजनिक वक्तव्य", "Video Messages & Addresses")}
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "व्यापारी सम्मेलन, शासकीय पदभार ग्रहण, नागरिक सम्मान एवं सामाजिक समरसता की प्रामाणिक वीडियो रिकॉर्डिंग्स।",
              "Watch authentic video footage covering state assemblies, public felicitations, and policy keynote speeches."
            )}
          </p>
          <div className="w-16 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>

        {/* Video Grid with HTML5 Players */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VIDEO_MEDIA_LIST.slice(0, 3).map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  onClick={() => setActiveVideoModal(video)}
                  className="relative aspect-[16/9] w-full bg-[#111827] flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  <video
                    src={video.videoSrc}
                    preload="metadata"
                    playsInline
                    muted
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#F4510B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-white text-white" />
                    </div>
                  </div>
                  {video.duration && (
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono">
                      {video.duration}
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#667085]">
                    <span className="font-bold text-[#F4510B]">
                      {lang === "hi" ? video.sourceHi : video.sourceEn}
                    </span>
                    <span>{video.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#111827] font-serif leading-snug group-hover:text-[#F4510B] transition-colors">
                    {lang === "hi" ? video.titleHi : video.titleEn}
                  </h3>

                  <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed">
                    {lang === "hi" ? video.descriptionHi : video.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-4 pt-2 border-t border-[#E7E5E4]/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#667085] flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#F4510B]" />
                  <span>{video.duration}</span>
                </span>
                <button
                  onClick={() => setActiveVideoModal(video)}
                  className="font-bold text-[#F4510B] hover:text-[#D94205] text-xs cursor-pointer"
                >
                  {t("वीडियो चलाएं ▶", "Play Video ▶")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <span>{t("समस्त वीडियो लाइब्रेरी देखें (6 वीडियो)", "View Full Video Archive (6 Videos)")}</span>
            <ArrowRight className="w-4 h-4 text-[#F4510B]" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: RECENT AUTHENTIC EVENTS STRIP                  */}
      {/* ========================================================= */}
      <section className="border-y border-[#E7E5E4] bg-[#FAF8F4] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Centered Bold Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
              {t("सत्यापित छायाचित्र दीर्घा", "Verified Photographic Glimpses")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
              {t("नवीनतम सार्वजनिक एवं संगठनात्मक झलकियाँ", "Latest Civic & Public Assembly Moments")}
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
              {t(
                "प्रदेश के विभिन्न अंचलों में आयोजित व्यापारिक महापंचायतों, नागरिक अभिनंदनों और सामाजिक सम्मेलनों के वास्तविक चित्र।",
                "Authentic photographs from recent statewide assemblies, civic receptions, and organizational programs."
              )}
            </p>
            <div className="w-16 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
          </div>

          {/* Responsive Masonry / Card Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {uploadedPhotosStrip.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-xl overflow-hidden border border-[#E7E5E4] bg-white shadow-2xs cursor-pointer aspect-[3/4] hover:shadow-md transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={lang === "hi" ? item.titleHi : item.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                  <span className="text-[10px] text-[#F4510B] font-bold uppercase">{item.dateStr}</span>
                  <p className="text-xs font-bold leading-tight line-clamp-2 font-serif">{lang === "hi" ? item.titleHi : item.titleEn}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: PRESS COVERAGE AND MEDIA RECOGNITION           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Centered Bold Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("समाचार एवं विज्ञप्ति", "News & Media Coverage")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("प्रेस एवं समाचार पत्रों में", "In Press & Media Coverage")}
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "शासकीय दायित्व, सांगठनिक सम्मेलनों और उद्योग-संवर्धन से जुड़े प्रकाशित समाचार।",
              "Verified press statements, newspaper reports, and public coverage."
            )}
          </p>
          <div className="w-16 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>

        {/* Asymmetrical Layout: 1 Featured Story + 2 Smaller Supporting Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Article (7 cols) */}
          {NEWS_ARTICLES[0] && (
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-xs group">
              <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={NEWS_ARTICLES[0].image}
                  alt={lang === "hi" ? NEWS_ARTICLES[0].titleHi : NEWS_ARTICLES[0].titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#667085]">
                  <span className="px-2.5 py-0.5 rounded bg-orange-50 text-[#F4510B] font-bold">
                    {lang === "hi" ? NEWS_ARTICLES[0].sourceNameHi : NEWS_ARTICLES[0].sourceNameEn}
                  </span>
                  <span>•</span>
                  <span>{NEWS_ARTICLES[0].date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-serif group-hover:text-[#F4510B] transition-colors leading-snug">
                  <Link href={`/news/${NEWS_ARTICLES[0].slug}`}>
                    {lang === "hi" ? NEWS_ARTICLES[0].titleHi : NEWS_ARTICLES[0].titleEn}
                  </Link>
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {lang === "hi" ? NEWS_ARTICLES[0].excerptHi : NEWS_ARTICLES[0].excerptEn}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/news/${NEWS_ARTICLES[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4510B] hover:underline"
                  >
                    <span>{t("पूरा समाचार पढ़ें", "Read Full Article")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Supporting Articles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {NEWS_ARTICLES.slice(1, 3).map((article) => (
              <div
                key={article.slug}
                className="p-5 rounded-2xl border border-[#E7E5E4] bg-white shadow-2xs group space-y-2.5"
              >
                <div className="flex items-center gap-2 text-[11px] text-[#667085]">
                  <span className="font-bold text-[#111827]">
                    {lang === "hi" ? article.sourceNameHi : article.sourceNameEn}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#111827] font-serif group-hover:text-[#F4510B] transition-colors leading-snug">
                  <Link href={`/news/${article.slug}`}>
                    {lang === "hi" ? article.titleHi : article.titleEn}
                  </Link>
                </h4>
                <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed">
                  {lang === "hi" ? article.excerptHi : article.excerptEn}
                </p>
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#111827] group-hover:text-[#F4510B]"
                >
                  <span>{t("विस्तार से देखें", "Read More")}</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

        </div>

        <div className="text-center pt-2">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-[#E7E5E4] hover:bg-slate-50 text-[#111827] text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
          >
            <span>{t("समस्त समाचार एवं प्रेस विज्ञप्तियां देखें", "View All Press Releases")}</span>
            <ArrowRight className="w-4 h-4 text-[#F4510B]" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: SOCIAL & COMMUNITY ACTIVITIES                  */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Centered Bold Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("जनकल्याण एवं समरसता", "Civic Harmony")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("सामाजिक एवं संगठनात्मक गतिविधियाँ", "Social & Community Initiatives")}
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "व्यापारियों के अधिकार, सामाजिक समरसता, नागरिक आपदा सहायता एवं सामूहिक विवाह सम्मेलन।",
              "Trade rights advocacy, community welfare, crisis relief, and matrimonial sammelans."
            )}
          </p>
          <div className="w-16 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-[#E7E5E4] bg-white space-y-3 text-center sm:text-left shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#F4510B] flex items-center justify-center font-bold mx-auto sm:mx-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111827] font-serif">
              {t("व्यापारिक संगठन", "Merchant Advocacy")}
            </h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              {t("काशी दवा व्यापार संघ, युवा व्यापार मंडल व भारतीय उद्योग व्यापार मंडल के माध्यम से व्यापारियों की सुरक्षा।", "Advocating for merchant security, transparent taxation, and business welfare.")}
            </p>
            <Link href="/social-work" className="inline-flex items-center gap-1 text-xs font-semibold text-[#F4510B]">
              <span>{t("विवरण पढ़ें", "Learn More")}</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl border border-[#E7E5E4] bg-white space-y-3 text-center sm:text-left shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#111827] flex items-center justify-center font-bold mx-auto sm:mx-0">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111827] font-serif">
              {t("वैश्य महासम्मेलन", "Vaishya Mahasammelan")}
            </h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              {t("प्रदेश अध्यक्ष के रूप में 75 जनपदों में संगठन का विस्तार और वैवाहिक परिचय सम्मेलनों का सफल आयोजन।", "Spearheaded statewide unity, matrimony conventions, and grassroots networking.")}
            </p>
            <Link href="/social-work" className="inline-flex items-center gap-1 text-xs font-semibold text-[#111827]">
              <span>{t("विवरण पढ़ें", "Learn More")}</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl border border-[#E7E5E4] bg-white space-y-3 text-center sm:text-left shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#F4510B] flex items-center justify-center font-bold mx-auto sm:mx-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111827] font-serif">
              {t("नागरिक राहत कार्य", "Disaster & Crisis Relief")}
            </h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              {t("1992 लोहता दंगा पीड़ितों हेतु नागरिक राहत समिति के माध्यम से अन्न, वस्त्र व दवाइयों की आपात व्यवस्था।", "Provided food supplies and healthcare assistance during crisis in affected areas.")}
            </p>
            <Link href="/social-work" className="inline-flex items-center gap-1 text-xs font-semibold text-[#F4510B]">
              <span>{t("विवरण पढ़ें", "Learn More")}</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl border border-[#E7E5E4] bg-white space-y-3 text-center sm:text-left shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#111827] flex items-center justify-center font-bold mx-auto sm:mx-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111827] font-serif">
              {t("मेधावी छात्र प्रोत्साहन", "Youth & Education")}
            </h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              {t("प्रतिभावान छात्र-छात्राओं को छात्रवृत्ति, शैक्षिक सामग्री एवं उच्च शिक्षा मार्गदर्शन में निरंतर योगदान।", "Providing merit scholarships and youth mentorship for higher education.")}
            </p>
            <Link href="/social-work" className="inline-flex items-center gap-1 text-xs font-semibold text-[#111827]">
              <span>{t("विवरण पढ़ें", "Learn More")}</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: AWARDS & HONORS                               */}
      {/* ========================================================= */}
      <section className="border-y border-[#E7E5E4] bg-[#FAF8F4] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Centered Bold Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A15B] px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
              {t("अलंकरण एवं सम्मान", "Honors & Recognitions")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
              {t("प्रमुख नागरिक एवं सांगठनिक सम्मान", "Awards & Commendations")}
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
              {t("सार्वजनिक जीवन एवं व्यापारिक समाज द्वारा प्रदत्त प्रमुख सम्मान।", "Notable state and community recognitions conferred over decades.")}
            </p>
            <div className="w-16 h-1 bg-[#C6A15B] rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARDS_DATA.slice(0, 3).map((award) => (
              <div
                key={award.id}
                className="p-6 rounded-2xl border border-[#E7E5E4] bg-white space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#C6A15B] font-bold border border-amber-200">
                    {award.year}
                  </span>
                  <Award className="w-4 h-4 text-[#C6A15B]" />
                </div>
                <h3 className="text-base font-bold text-[#111827] font-serif">
                  {lang === "hi" ? award.titleHi : award.titleEn}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {lang === "hi" ? award.conferredByHi : award.conferredByEn}
                </p>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {lang === "hi" ? award.descriptionHi : award.descriptionEn}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/awards"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-[#E7E5E4] hover:bg-slate-50 text-[#111827] text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
            >
              <span>{t("समस्त सम्मान एवं अलंकरण देखें", "View All Awards & Honors")}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: CONTACT & PUBLIC ENGAGEMENT                   */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E7E5E4] bg-white p-8 sm:p-12 shadow-xs space-y-8">
          
          {/* Centered Bold Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
              {t("जनसंवाद एवं कार्यालय", "Public Dialogue")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-serif tracking-tight">
              {t("कार्यालय से संपर्क एवं संवाद", "Get in Touch with the Camp Office")}
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
              {t(
                "शासकीय दायित्वों, व्यापारिक संगठनों के ज्ञापन अथवा सामाजिक कार्यक्रमों के आमंत्रण हेतु आधिकारिक संपर्क माध्यम।",
                "Direct channels for official representations, memoranda, or invitations to public and business forums."
              )}
            </p>
            <div className="w-16 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-[#F4510B] hover:bg-[#D94205] text-white font-semibold text-sm transition-colors shadow-xs"
            >
              <span>{t("सम्पर्क प्रपत्र भरें", "Fill Contact Form")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.instagram.com/natwargoyal4bjp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-white border border-[#E7E5E4] hover:bg-slate-50 text-[#111827] font-medium text-sm transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#F4510B]" />
              <span>@natwargoyal4bjp</span>
            </a>
          </div>

          {/* Approved Public Office Badges */}
          <div className="pt-8 border-t border-[#E7E5E4] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#667085] text-center md:text-left">
            <div className="space-y-1">
              <p className="font-bold text-[#111827]">{t("सम्पर्क केंद्र (Camp Office)", "Camp Office")}</p>
              <p>{t("गोमती नगर, लखनऊ, उत्तर प्रदेश", "Gomti Nagar, Lucknow, Uttar Pradesh")}</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-[#111827]">{t("निगम मुख्यालय (UPSIC HQ)", "UPSIC Headquarters")}</p>
              <p>{t("फजलगंज, कानपुर, उत्तर प्रदेश (ho.upsic.in)", "Fazalganj, Kanpur, Uttar Pradesh")}</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-[#111827]">{t("गृह संपर्क (Home Representation)", "Home District Representation")}</p>
              <p>{t("वाराणसी (काशी), उत्तर प्रदेश", "Varanasi (Kashi), Uttar Pradesh")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 12: FULL-WIDTH CLOSING BANNER                     */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#111827] text-white py-16 sm:py-24">
        <div className="absolute inset-0 opacity-15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0317.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F4510B]">
            {t("आधिकारिक सार्वजनिक पोर्टल", "Official Public Portal")}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif max-w-3xl mx-auto leading-tight">
            {t(
              "सार्वजनिक जीवन और संगठनात्मक यात्रा से जुड़ी जानकारी",
              "Public Life, Industry Welfare & Dedicated Organizational Journey"
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t(
              "उत्तर प्रदेश के व्यापारिक सशक्तिकरण, लघु उद्योग प्रोत्साहन एवं सामाजिक समरसता को समर्पित चार दशकों का आधिकारिक विवरण।",
              "Four decades dedicated to trade advocacy, small-scale industrial advancement, and civic welfare in Uttar Pradesh."
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/biography"
              className="px-6 py-3 rounded-md bg-[#F4510B] hover:bg-[#D94205] text-white font-semibold text-sm transition-colors shadow-sm"
            >
              {t("जीवन परिचय", "Read Biography")}
            </Link>
            <Link
              href="/news"
              className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 backdrop-blur-xs transition-colors"
            >
              {t("समाचार एवं गतिविधियाँ", "News & Updates")}
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        items={GALLERY_ITEMS}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActiveImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length)}
        onPrev={() => setActiveImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
      />

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="bg-[#111827] rounded-3xl max-w-3xl w-full p-4 sm:p-6 space-y-4 shadow-2xl border border-white/20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-bold text-[#F4510B] uppercase tracking-wider">
                  {lang === "hi" ? activeVideoModal.sourceHi : activeVideoModal.sourceEn} • {activeVideoModal.date}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif leading-snug">
                  {lang === "hi" ? activeVideoModal.titleHi : activeVideoModal.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="aspect-[16/9] w-full bg-black rounded-2xl overflow-hidden shadow-inner">
              <video
                src={activeVideoModal.videoSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-2 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === "hi" ? activeVideoModal.descriptionHi : activeVideoModal.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

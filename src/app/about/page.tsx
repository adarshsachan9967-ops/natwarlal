"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PROFILE_FACTS } from "@/data/biography";
import {
  Building2,
  Briefcase,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Centered & Bold Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("सार्वजनिक व्यक्तित्व", "Public Profile")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("जीवन परिचय: वैश्य नटवर गोयल", "About Shri Vaishya Natwar Goyal")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "उत्तर प्रदेश लघु उद्योग निगम के उपाध्यक्ष (राज्यमंत्री स्तर) एवं चार दशकों से व्यापार व समाज सेवा में सक्रिय वरिष्ठ नेतृत्व।",
              "Vice Chairman of Uttar Pradesh Small Industries Corporation (Minister of State Rank) with four decades of trade and civic service."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Main Content & Visual Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#1F2937] leading-relaxed text-sm sm:text-base">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-serif">
              {t("सार्वजनिक जीवन एवं पृष्ठभूमि", "Public Life & Background")}
            </h2>
            <p>
              {t(
                "श्री वैश्य नटवर गोयल उत्तर प्रदेश के प्रतिष्ठित सार्वजनिक, व्यापारिक एवं सामाजिक व्यक्तित्व हैं। उनका जन्म 17 अगस्त 1967 को आध्यात्मिक और व्यापारिक नगरी वाराणसी में स्व० श्री जगन्नाथ दास गोयल के प्रतिष्ठित परिवार में हुआ। वाणिज्य में स्नातक (बी०कॉम०) की शिक्षा पूर्ण करने के उपरांत उन्होंने स्वयं को समाज, व्यापारिक संगठन और लोक कल्याण के कार्यों में समर्पित कर दिया।",
                "Shri Vaishya Natwar Goyal is a prominent public figure associated with commerce, small industries, and community welfare in Uttar Pradesh. Born on 17 August 1967 in Varanasi to Late Shri Jagannath Das Goyal, he graduated in Commerce (B.Com) before dedicating his life to grassroots advocacy and organizational leadership."
              )}
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-serif pt-2">
              {t("व्यापारिक नेतृत्व एवं एमएसएमई संवर्धन", "Trade Advocacy & MSME Advancement")}
            </h2>
            <p>
              {t(
                "व्यापारियों के अधिकारों और हितों की रक्षा के लिए उनका संघर्ष 1988 में काशी दवा व्यापार संघ से प्रारंभ हुआ। आगे चलकर वे अखिल भारतीय उद्योग व्यापार मण्डल और भारतीय उद्योग व्यापार मण्डल (BJP समर्थक) के शीर्ष नेतृत्व में पहुंचे, जहां वे 2013 से 2023 तक लगातार तीन बार निर्विरोध प्रदेश अध्यक्ष चुने गए।",
                "Beginning with the Kashi Pharmaceutical Trade Association in 1988, his advocacy for retail merchants expanded across districts. He rose to lead Bharatiya Udyog Vyapar Mandal (BJP-aligned), being unanimously elected State President for three consecutive terms (2013–2023)."
              )}
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E7E5E4] space-y-2 shadow-2xs">
              <h3 className="font-bold text-[#111827] text-sm flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#F4510B]" />
                <span>{t("वर्तमान शासकीय दायित्व", "Current State Government Appointment")}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {t(
                  "13 सितम्बर 2024 को उत्तर प्रदेश के माननीय मुख्यमंत्री योगी आदित्यनाथ जी की सरकार द्वारा उन्हें 'उत्तर प्रदेश लघु उद्योग निगम लिमिटेड' (UPSIC) का उपाध्यक्ष (दर्जा प्राप्त राज्यमंत्री) नियुक्त किया गया। इस पद पर वे प्रदेश के सूक्ष्म, लघु एवं मध्यम उद्योगों (MSME) की अवस्थापना, औद्योगिक क्षेत्रों के पुनरुद्धार और युवा उद्यमियों को प्रोत्साहन देने हेतु सक्रिय हैं।",
                  "On 13 September 2024, the Government of Uttar Pradesh under Chief Minister Yogi Adityanath appointed him Vice Chairman of Uttar Pradesh Small Industries Corporation Ltd. (UPSIC) with Minister of State status to accelerate industrial modernization and MSME entrepreneurship."
                )}
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-serif pt-2">
              {t("सामाजिक एवं शैक्षिक सरोकार", "Civic & Educational Initiatives")}
            </h2>
            <p>
              {t(
                "अखिल भारतीय वैश्य महासम्मेलन के प्रदेश अध्यक्ष (2013-2022) और वर्तमान में राष्ट्रीय उपाध्यक्ष के रूप में उन्होंने समाज के वंचितों की सहायता, सामूहिक विवाह, और शिक्षा के प्रचार-प्रसार में उल्लेखनीय योगदान दिया है। वे जय खाकीबाबा इण्टर कालेज, सुल्तानपुर के अध्यक्ष रहे हैं तथा सकलडीहा पी०जी० कालेज व बनारस मुगल एकेडमी के आजीवन सदस्य हैं।",
                "As State President (2013–2022) and current National Vice President of All India Vaishya Mahasammelan, he has steered educational scholarships, community welfare drives, and civic harmony. He has previously served as President of Jai Khakibaba Inter College (Sultanpur) and is a life member of multiple educational institutions."
              )}
            </p>

            {/* Quick Links */}
            <div className="pt-4 border-t border-[#E7E5E4] flex flex-wrap gap-4">
              <Link
                href="/biography"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#111827] hover:bg-black text-white text-xs font-semibold transition-colors shadow-xs"
              >
                <span>{t("सम्पूर्ण जीवन-वृत्त पढ़ें", "Read Detailed Long-form Biography")}</span>
                <ArrowRight className="w-4 h-4 text-[#F4510B]" />
              </Link>
              <Link
                href="/political-journey"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#F4510B] hover:bg-[#D94205] text-white text-xs font-semibold transition-colors shadow-xs"
              >
                <span>{t("राजनैतिक व सांगठनिक कालक्रम", "Explore Political Journey Timeline")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Profile Card & Photo Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E7E5E4] overflow-hidden shadow-xs">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0303.jpg"
                  alt="High-Level Official Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-sm font-bold text-[#111827] uppercase tracking-wider border-b border-[#E7E5E4] pb-2">
                  {t("सत्यापित परिचय पत्रक", "Verified Profile Summary")}
                </h3>
                <div className="space-y-2.5 text-xs">
                  {PROFILE_FACTS.map((fact) => (
                    <div key={fact.id} className="flex justify-between py-1 border-b border-slate-50">
                      <span className="font-semibold text-[#667085]">
                        {t(fact.labelHi, fact.labelEn)}:
                      </span>
                      <span className="font-bold text-[#111827] text-right">
                        {t(fact.valueHi, fact.valueEn)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Portal Reference */}
            <div className="p-6 rounded-2xl bg-[#111827] text-white space-y-3">
              <span className="text-[11px] font-bold text-[#C6A15B] uppercase tracking-widest">
                {t("आधिकारिक निगम संपर्क", "Official Corporation Portal")}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t(
                  "उत्तर प्रदेश लघु उद्योग निगम लिमिटेड की आधिकारिक वेबसाइट पर निगम के बोर्ड, योजनाओं और गतिविधियों का अवलोकन किया जा सकता है।",
                  "Visit the official portal of U.P. Small Industries Corporation Ltd. for official notifications, industrial schemes, and board details."
                )}
              </p>
              <a
                href="https://ho.upsic.in/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4510B] hover:underline"
              >
                <span>https://ho.upsic.in/about</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

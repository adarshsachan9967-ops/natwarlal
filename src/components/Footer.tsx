"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { Building2, MapPin, ExternalLink, Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export default function Footer() {
  const { lang, t } = useLanguage();
  const currentYear = 2026;

  return (
    <footer className="bg-[#111827] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Logo, Name & Verified Introduction */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white font-serif tracking-tight">
                {t("वैश्य नटवर गोयल", "Vaishya Natwar Goyal")}
              </h3>
              <p className="text-xs text-[#C6A15B] font-medium">
                {t(
                  "उपाध्यक्ष, उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)",
                  "Vice Chairman, UP Small Industries Corp (MoS Rank)"
                )}
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t(
                "उत्तर प्रदेश में लघु उद्योगों के आधुनिकीकरण, व्यापारी हितों के संरक्षण एवं सामाजिक समरसता को समर्पित चार दशकों की अनवरत सार्वजनिक सेवा।",
                "Four decades of dedicated public leadership in small industries modernization, merchant welfare, and community development across Uttar Pradesh."
              )}
            </p>
            <div className="pt-1">
              <a
                href="https://www.instagram.com/natwargoyal4bjp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 hover:text-white hover:border-[#F4510B]/50 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#F4510B]" />
                <span>@natwargoyal4bjp</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Column 2: Important Pages */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider border-l-2 border-[#F4510B] pl-2.5">
              {t("महत्वपूर्ण पृष्ठ", "Important Pages")}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t("जीवन परिचय (About Profile)", "Executive Profile")}
                </Link>
              </li>
              <li>
                <Link href="/biography" className="hover:text-white transition-colors">
                  {t("विस्तृत जीवन-वृत्त (Detailed Biography)", "Detailed Biography")}
                </Link>
              </li>
              <li>
                <Link href="/political-journey" className="hover:text-white transition-colors">
                  {t("राजनीतिक यात्रा (Political Journey)", "Political & Public Journey")}
                </Link>
              </li>
              <li>
                <Link href="/social-work" className="hover:text-white transition-colors">
                  {t("सामाजिक कार्य (Social Work)", "Social & Community Work")}
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-white transition-colors">
                  {t("सम्मान एवं उपलब्धियाँ (Awards)", "Honors & Recognitions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Gallery, News, Media, and Timeline */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider border-l-2 border-[#C6A15B] pl-2.5">
              {t("छायाचित्र एवं मीडिया", "Media & Archives")}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  {t("फोटो गैलरी (Photo Gallery)", "Authentic Photo Gallery")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  {t("प्रेस विज्ञप्ति एवं समाचार (News)", "Press & Media Coverage")}
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-white transition-colors">
                  {t("वीडियो एवं मीडिया संग्रह (Media)", "Video & Media Assets")}
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-white transition-colors">
                  {t("नवीनतम अद्यतन (Updates)", "Public Updates Bulletin")}
                </Link>
              </li>
              <li>
                <Link href="/political-journey" className="hover:text-white transition-colors">
                  {t("सांगठनिक टाइमलाइन (Timeline)", "Chronological Timeline")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Approved Office Channels & Public Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider border-l-2 border-[#F4510B] pl-2.5">
              {t("शासकीय कार्यालय एवं संवाद", "Camp Office & Representation")}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">
                    {t("उ०प्र० लघु उद्योग निगम (UPSIC)", "UP Small Industries Corporation")}
                  </p>
                  <p>{t("मुख्यालय: फजलगंज, कानपुर, उत्तर प्रदेश", "Headquarters: Fazalganj, Kanpur, UP")}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4510B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">
                    {t("सम्पर्क केंद्र (Camp Office)", "Camp Office")}
                  </p>
                  <p>{t("गोमती नगर, लखनऊ / वाराणसी", "Gomti Nagar, Lucknow / Varanasi")}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md bg-[#F4510B] hover:bg-[#D94205] text-white text-xs font-semibold transition-colors shadow-2xs"
              >
                {t("सम्पर्क प्रपत्र भरें (Contact Form)", "Open Contact Form")}
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Policies, Accessibility, Language Selection & CMS */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {t("कार्यालय श्री वैश्य नटवर गोयल। सर्वाधिकार सुरक्षित।", "Office of Shri Vaishya Natwar Goyal. All rights reserved.")}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              {t("गोपनीयता नीति", "Privacy Policy")}
            </Link>
            <span>•</span>
            <Link href="/accessibility" className="hover:text-slate-200 transition-colors">
              {t("अभिगम्यता कथन", "Accessibility")}
            </Link>
            <span>•</span>
            <Link href="/admin/login" className="hover:text-slate-200 transition-colors">
              {t("प्रशासन (CMS Login)", "CMS Login")}
            </Link>
            <span>•</span>
            <LanguageToggle className="scale-90 bg-slate-900 border-slate-800 text-slate-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AdminLayout from "@/components/AdminLayout";
import { GALLERY_ITEMS } from "@/data/gallery";
import { NEWS_ARTICLES } from "@/data/news";
import { TIMELINE_MILESTONES } from "@/data/timeline";
import { OFFICIAL_UPDATES } from "@/data/updates";
import {
  FileText,
  Image as ImageIcon,
  Newspaper,
  Calendar,
  Mail,
  ShieldCheck,
  PlusCircle,
  Clock,
  ArrowRight,
  ExternalLink,
  Layers
} from "lucide-react";

export default function AdminDashboardPage() {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("admin_contact_messages") || "[]");
      const unread = stored.filter((m: any) => !m.read).length;
      setUnreadCount(unread);
    } catch (e) {}
  }, []);

  const stats = [
    {
      title: "प्रकाशित छायाचित्र (Gallery Photos)",
      value: GALLERY_ITEMS.length.toString(),
      href: "/admin/gallery",
      icon: ImageIcon,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      title: "समाचार व प्रेस विज्ञप्ति (News & Press)",
      value: NEWS_ARTICLES.length.toString(),
      href: "/admin/news",
      icon: Newspaper,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      title: "सांगठनिक टाइमलाइन (Timeline Milestones)",
      value: TIMELINE_MILESTONES.length.toString(),
      href: "/admin/timeline",
      icon: Calendar,
      color: "text-orange-600 bg-orange-50 border-orange-200",
    },
    {
      title: "नए सम्पर्क संदेश (Unread Messages)",
      value: unreadCount.toString(),
      href: "/admin/contact-messages",
      icon: Mail,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  const publishedPages = [
    { title: "मुख्य पृष्ठ (Homepage)", path: "/" },
    { title: "परिचय (About Public Profile)", path: "/about" },
    { title: "विस्तृत जीवन-वृत्त (Detailed Biography)", path: "/biography" },
    { title: "राजनैतिक व सांगठनिक यात्रा (Journey)", path: "/political-journey" },
    { title: "सामाजिक एवं सामुदायिक कार्य (Social Work)", path: "/social-work" },
    { title: "सम्मान एवं अलंकरण (Awards & Honors)", path: "/awards" },
    { title: "फोटो गैलरी (Photo Gallery)", path: "/gallery" },
    { title: "समाचार एवं प्रेस कवरेज (News & Media)", path: "/news" },
    { title: "शासकीय अद्यतन एवं घोषणाएं (Updates)", path: "/updates" },
    { title: "वीडियो एवं भाषण मीडिया (Media)", path: "/media" },
    { title: "सम्पर्क एवं संवाद प्रपत्र (Contact)", path: "/contact" },
    { title: "गोपनीयता नीति (Privacy Policy)", path: "/privacy-policy" },
    { title: "अभिगम्यता कथन (Accessibility)", path: "/accessibility" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              कंटेंट मैनेजमेंट एवं प्रशासनिक डैशबोर्ड
            </h1>
            <p className="text-xs text-slate-500">
              श्री वैश्य नटवर गोयल • आधिकारिक सार्वजनिक सूचना एवं मीडिया प्रबंधन
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span>लाइव वेबसाइट देखें</span>
            </Link>
          </div>
        </div>

        {/* Real Content Metrics (No fabricated traffic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link
                key={idx}
                href={s.href}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-semibold">{s.title}</p>
                  <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                </div>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${s.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Content Management Quick Action Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Published Pages Directory */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-orange-600" />
                <span>प्रकाशित सार्वजनिक पृष्ठ (Published System Pages)</span>
              </h3>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                13 पृष्ठ सक्रिय (Active)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {publishedPages.map((page, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-medium text-slate-800 truncate pr-2">
                    {page.title}
                  </span>
                  <Link
                    href={page.path}
                    target="_blank"
                    className="text-orange-700 hover:underline shrink-0 text-[11px] font-semibold"
                  >
                    देखें ↗
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick CMS Shortcuts */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
              त्वरित संपादन विकल्प (Quick Actions)
            </h3>

            <div className="space-y-2.5 text-xs">
              <Link
                href="/admin/gallery"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-orange-50/60 border border-slate-200/80 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <ImageIcon className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-800 group-hover:text-orange-700">
                    छायाचित्र जोड़ें / कैप्शन संपादित करें
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/admin/news"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-orange-50/60 border border-slate-200/80 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Newspaper className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-slate-800 group-hover:text-orange-700">
                    नया समाचार अथवा प्रेस विज्ञप्ति बनाएं
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/admin/timeline"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-orange-50/60 border border-slate-200/80 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  <span className="font-semibold text-slate-800 group-hover:text-orange-700">
                    राजनैतिक पड़ाव एवं पदभार अद्यतन करें
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/admin/contact-messages"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-orange-50/60 border border-slate-200/80 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-slate-800 group-hover:text-orange-700">
                    नागरिक सम्पर्क संदेश व ज्ञापन देखें
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500">
              <p>
                <strong className="text-slate-800">सूचना:</strong> सभी प्रकाशित सामग्रियां 'Natwargoyal New11.pdf' और आधिकारिक स्रोतों के आधार पर सत्यापित हैं।
              </p>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}

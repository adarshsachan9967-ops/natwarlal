"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Image as ImageIcon,
  Newspaper,
  Calendar,
  Mail,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  UserCheck
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const isAuthed = sessionStorage.getItem("admin_session") === "true";
    setAuthenticated(isAuthed);
    if (!isAuthed && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (authenticated === null || !authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111827] text-white">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-4 h-4 border-2 border-white/20 border-t-[#F4510B] rounded-full animate-spin" />
          <span>सत्यापन किया जा रहा है... / Verifying session...</span>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    sessionStorage.removeItem("admin_session");
    sessionStorage.removeItem("admin_user");
    router.push("/admin/login");
  };

  const navItems = [
    { href: "/admin/dashboard", label: "डैशबोर्ड / Dashboard", icon: LayoutDashboard },
    { href: "/admin/gallery", label: "फोटो गैलरी / Gallery", icon: ImageIcon },
    { href: "/admin/news", label: "समाचार / News & Press", icon: Newspaper },
    { href: "/admin/timeline", label: "टाइमलाइन / Timeline", icon: Calendar },
    { href: "/admin/contact-messages", label: "सम्पर्क संदेश / Inquiries", icon: Mail },
    { href: "/admin/settings", label: "सेटिंग्स / Settings", icon: Settings },
  ];

  const currentNav = navItems.find((item) => item.href === pathname) || { label: "Admin Workspace" };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row text-slate-800">
      
      {/* Mobile Top Navbar with Hamburger */}
      <div className="md:hidden bg-[#111827] text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#F4510B] flex items-center justify-center font-bold text-xs">
            CMS
          </div>
          <span className="font-bold text-sm tracking-tight">प्रशासन पोर्टल</span>
        </div>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar for Desktop & Collapsible Mobile */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:flex md:w-64 bg-[#111827] text-white flex-col justify-between p-4 border-r border-slate-800 shrink-0 z-30`}
      >
        <div className="space-y-6">
          {/* Logo / Header */}
          <div className="hidden md:flex items-center gap-2.5 px-2 py-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-[#F4510B] flex items-center justify-center font-bold text-sm text-white shadow-xs">
              CMS
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">प्रशासन पोर्टल</h2>
              <p className="text-[11px] text-slate-400">Natwar Goyal Official</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#F4510B] text-white font-bold shadow-xs"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>वेबसाइट देखें (Live Site)</span>
            </span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-red-400 hover:bg-red-950/30 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>लॉगआउट (Logout)</span>
          </button>
        </div>
      </aside>

      {/* Main Content Workspace with Top Toolbar */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Workspace Toolbar */}
        <header className="hidden md:flex items-center justify-between h-14 px-8 bg-white border-b border-[#E7E5E4]">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/admin/dashboard" className="hover:text-slate-800">
              Admin
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">{currentNav.label.split("/")[0]}</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>प्रशासन सत्र सक्रिय (Logged In)</span>
            </span>
          </div>
        </header>

        {/* Workspace Body */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Mail, Check, Trash2, Calendar, Phone, User, MessageSquare, AlertCircle } from "lucide-react";

interface MessageItem {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

export default function AdminContactMessagesPage() {
  const [messages, setMessages] = useState<MessageItem[]>([]);

  useEffect(() => {
    async function loadMessages() {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        if (data.success && Array.isArray(data.messages) && data.messages.length > 0) {
          const mapped = data.messages.map((m: any) => ({
            id: m._id || m.id,
            name: m.name,
            email: m.email,
            phone: m.phone || "N/A",
            subject: m.subject || "General Inquiry",
            message: m.message,
            date: m.createdAt ? new Date(m.createdAt).toLocaleDateString("en-IN") : new Date().toLocaleDateString("en-IN"),
            read: Boolean(m.read),
          }));
          setMessages(mapped);
          return;
        }
      } catch (e) {
        console.error("Failed to fetch from MongoDB API, using local fallback", e);
      }

      try {
        const stored = JSON.parse(localStorage.getItem("admin_contact_messages") || "[]");
        setMessages(stored);
      } catch (e) {}
    }
    loadMessages();
  }, []);

  const markAsRead = async (id: string) => {
    const updated = messages.map((m) => (m.id === id ? { ...m, read: true } : m));
    setMessages(updated);
    localStorage.setItem("admin_contact_messages", JSON.stringify(updated));

    try {
      await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, read: true }),
      });
    } catch (e) {}
  };

  const deleteMessage = (id: string) => {
    if (!confirm("क्या आप इस संदेश को हटाना चाहते हैं?")) return;
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem("admin_contact_messages", JSON.stringify(updated));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            नागरिक सम्पर्क संदेश एवं ज्ञापन (Public Inquiries)
          </h1>
          <p className="text-xs text-slate-500">
            सार्वजनिक संपर्क प्रपत्र द्वारा प्राप्त सभी ज्ञापन एवं संदेश यहां सुरक्षित संग्रहीत हैं।
          </p>
        </div>

        {messages.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 space-y-2">
            <Mail className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">अभी कोई नया संदेश नहीं है</h3>
            <p className="text-xs text-slate-500">
              वेबसाइट के 'सम्पर्क' प्रपत्र से प्राप्त होने वाले संदेश यहां प्रदर्शित होंगे।
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-5 rounded-2xl border transition-all ${
                  m.read ? "bg-white border-slate-200" : "bg-orange-50/50 border-orange-200 shadow-sm"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{m.name}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{m.email}</span>
                    {m.phone && m.phone !== "N/A" && (
                      <>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-600">{m.phone}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{m.date}</span>
                  </div>
                </div>

                <div className="py-2.5 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">{m.subject}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                    {m.message}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  {!m.read ? (
                    <button
                      onClick={() => markAsRead(m.id)}
                      className="inline-flex items-center gap-1 font-semibold text-orange-700 hover:text-orange-900"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>पढ़ा गया मार्क करें</span>
                    </button>
                  ) : (
                    <span className="text-slate-400 font-medium">समीक्षित (Reviewed)</span>
                  )}

                  <button
                    onClick={() => deleteMessage(m.id)}
                    className="p-1 rounded text-slate-400 hover:text-red-600"
                    title="हटाएं"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

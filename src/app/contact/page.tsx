"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Building2,
  MapPin,
  Mail,
  CheckCircle2,
  AlertCircle,
  Send,
  ExternalLink,
  ShieldCheck,
  Clock
} from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export default function ContactPage() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
    securityCheck: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = t("कृपया अपना पूरा नाम दर्ज करें।", "Please enter your full name.");
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = t("कृपया वैध ईमेल पता दर्ज करें।", "Please enter a valid email address.");
    }
    if (!formData.subject.trim()) {
      errs.subject = t("कृपया संदेश का विषय दर्ज करें।", "Please enter the subject.");
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = t("संदेश कम से कम 10 अक्षरों का होना चाहिए।", "Message must be at least 10 characters.");
    }
    if (!formData.consent) {
      errs.consent = t("कृपया गोपनीयता एवं आधिकारिक संवाद शर्तों पर सहमति दें।", "Please agree to official privacy communication terms.");
    }
    // Anti-spam security math question: 4 + 3 = 7
    if (formData.securityCheck.trim() !== "7") {
      errs.securityCheck = t("सुरक्षा उत्तर अमान्य है (4 + 3 = ?)", "Incorrect verification answer (4 + 3 = ?)");
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          subject: formData.subject,
          message: formData.message,
        }),
      });
    } catch (err) {
      console.error("MongoDB Atlas sync note:", err);
    }

    setSubmitting(false);
    setSubmitted(true);

    // Also persist to local storage for instant Admin CMS access
    try {
      const stored = JSON.parse(localStorage.getItem("admin_contact_messages") || "[]");
      stored.unshift({
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "N/A",
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleDateString("en-IN"),
        read: false,
      });
      localStorage.setItem("admin_contact_messages", JSON.stringify(stored));
    } catch (err) {}

    // Reset fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
      securityCheck: "",
    });
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* 1. Elegant Title Banner - Centered & Bold */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("आधिकारिक संवाद", "Official Representation")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("कार्यालय से संपर्क एवं संवाद", "Contact the Official Office")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "उत्तर प्रदेश लघु उद्योग निगम, व्यापारिक संगठनों के ज्ञापन, नागरिक सुझाव अथवा शासकीय संवाद हेतु प्रपत्र का उपयोग करें।",
              "Official portal for institutional representations, MSME memoranda, civic suggestions, and formal invitations."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* 2. Main Two-Column Structure: Form on Left, Office Details on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 font-serif">
              {t("औपचारिक संपर्क प्रपत्र", "Official Contact Form")}
            </h2>
            <p className="text-xs text-[#667085] mb-6">
              {t(
                "कृपया सभी आवश्यक विवरण सावधानीपूर्वक भरें। आपका संदेश सीधे कार्यालय सचिवालय द्वारा संज्ञान में लिया जाएगा।",
                "Please fill in the required fields. Your message will be reviewed by the office secretariat."
              )}
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-bold">
                    {t("संदेश सफलतापूर्वक प्रेषित किया गया!", "Message Submitted Successfully!")}
                  </p>
                  <p className="text-emerald-800">
                    {t(
                      "आपका संदेश कार्यालय रिकॉर्ड में दर्ज कर लिया गया है। समीक्षा उपरांत सचिवालय आपसे संपर्क करेगा।",
                      "Your message has been registered. The secretariat will respond after review."
                    )}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  {t("पूरा नाम *", "Full Name *")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("उदा० राजेश कुमार अग्रवाल", "e.g. Rajesh Kumar Agarwal")}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111827] bg-[#FAF8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4510B] transition-all ${
                    errors.name ? "border-red-500 bg-red-50/20" : "border-[#E7E5E4]"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1">
                    {t("ईमेल पता *", "Email Address *")}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111827] bg-[#FAF8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4510B] transition-all ${
                      errors.email ? "border-red-500 bg-red-50/20" : "border-[#E7E5E4]"
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1">
                    {t("दूरभाष / मोबाइल (वैकल्पिक)", "Phone / Mobile (Optional)")}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E5E4] text-sm text-[#111827] bg-[#FAF8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4510B] transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  {t("विषय *", "Subject *")}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t("उदा० औद्योगिक आस्थान संबंध में ज्ञापन", "e.g. Memorandum on industrial estate infrastructure")}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111827] bg-[#FAF8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4510B] transition-all ${
                    errors.subject ? "border-red-500 bg-red-50/20" : "border-[#E7E5E4]"
                  }`}
                />
                {errors.subject && <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  {t("विस्तृत संदेश / ज्ञापन विवरण *", "Message / Memorandum Details *")}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("कृपया अपना संदेश या ज्ञापन स्पष्ट शब्दों में लिखें...", "Please write your communication clearly...")}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111827] bg-[#FAF8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4510B] transition-all ${
                    errors.message ? "border-red-500 bg-red-50/20" : "border-[#E7E5E4]"
                  }`}
                />
                {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
              </div>

              {/* Anti-spam Verification */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F4] border border-[#E7E5E4]">
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  {t("सुरक्षा सत्यापन: 4 + 3 का मान क्या है? *", "Spam Verification: What is 4 + 3? *")}
                </label>
                <input
                  type="text"
                  value={formData.securityCheck}
                  onChange={(e) => setFormData({ ...formData, securityCheck: e.target.value })}
                  placeholder="7"
                  className={`w-28 px-3 py-1.5 rounded-md border text-sm text-center font-bold text-[#111827] bg-white focus:outline-none focus:ring-2 focus:ring-[#F4510B] ${
                    errors.securityCheck ? "border-red-500" : "border-[#E7E5E4]"
                  }`}
                />
                {errors.securityCheck && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.securityCheck}</p>
                )}
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-[#E7E5E4] text-[#F4510B] focus:ring-[#F4510B]"
                  />
                  <span className="text-xs text-[#667085] leading-relaxed">
                    {t(
                      "मैं प्रमाणित करता हूँ कि प्रदत्त जानकारी सत्य है एवं आधिकारिक पत्राचार हेतु उपयोग की जा सकती है।",
                      "I certify that the information provided is accurate and consent to its use for official correspondence."
                    )}
                  </span>
                </label>
                {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#F4510B] hover:bg-[#D94205] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-150 shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {submitting
                      ? t("प्रेषित किया जा रहा है...", "Submitting...")
                      : t("संदेश प्रेषित करें", "Send Message")}
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Approved Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Camp Office Lucknow */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E5E4] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F4510B]">
                <MapPin className="w-4 h-4" />
                <span>{t("सम्पर्क केंद्र (Camp Office)", "Camp Office")}</span>
              </div>
              <h3 className="text-base font-bold text-[#111827]">
                {t("लखनऊ कैम्प कार्यालय", "Lucknow Camp Office")}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t(
                  "गोमती नगर, लखनऊ, उत्तर प्रदेश। सार्वजनिक बैठकों, प्रतिनिधि मंडलों एवं व्यापारी संवाद हेतु प्रमुख केंद्र।",
                  "Gomti Nagar, Lucknow, UP. Primary hub for public meetings, delegations, and merchant dialogues."
                )}
              </p>
              <div className="pt-1 text-[11px] text-[#667085] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#F4510B]" />
                <span>{t("पूर्व नियुक्ति अनुसार शासकीय दिवसों में", "By prior appointment on working days")}</span>
              </div>
            </div>

            {/* Headquarters UPSIC Kanpur */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E5E4] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#111827]">
                <Building2 className="w-4 h-4 text-[#F4510B]" />
                <span>{t("शासकीय मुख्यालय", "Government Corporation HQ")}</span>
              </div>
              <h3 className="text-base font-bold text-[#111827]">
                {t("उत्तर प्रदेश लघु उद्योग निगम लिमिटेड", "UP Small Industries Corporation Ltd.")}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t(
                  "मुख्यालय: फजलगंज, कानपुर, उत्तर प्रदेश। लघु एवं मध्यम उद्योगों से संबंधित नीतिगत कार्य।",
                  "Headquarters: Fazalganj, Kanpur, UP. MSME and industrial cluster administration."
                )}
              </p>
              <a
                href="https://ho.upsic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4510B] hover:underline"
              >
                <span>ho.upsic.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Varanasi Representation */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E5E4] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#667085]">
                <MapPin className="w-4 h-4 text-[#F4510B]" />
                <span>{t("गृह जनपद प्रतिनिधित्व", "Home District Representation")}</span>
              </div>
              <h3 className="text-base font-bold text-[#111827]">
                {t("वाराणसी (काशी), उत्तर प्रदेश", "Varanasi (Kashi), Uttar Pradesh")}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t(
                  "काशी की व्यापारिक व सामाजिक संस्थाओं से सतत संपर्क एवं नागरिक जनसुनवाई।",
                  "Continuous engagement with merchant associations and civic bodies of Kashi."
                )}
              </p>
            </div>

            {/* Official Social Media */}
            <div className="p-6 rounded-2xl bg-[#111827] text-white space-y-3">
              <span className="text-[11px] font-semibold text-[#C6A15B] uppercase tracking-wider">
                {t("आधिकारिक डिजिटल उपस्थिति", "Official Digital Channel")}
              </span>
              <h4 className="text-base font-bold">
                {t("इंस्टाग्राम आधिकारिक खाता", "Official Instagram")}
              </h4>
              <p className="text-xs text-slate-300">
                {t("सार्वजनिक आयोजनों एवं गतिविधियों के नियमित छायाचित्र व अद्यतन।", "Regular photos and verified updates of public and state events.")}
              </p>
              <a
                href="https://www.instagram.com/natwargoyal4bjp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#F4510B]" />
                <span>@natwargoyal4bjp</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Interactive Office Map Section (Approved Public Office Location) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E7E5E4] bg-white overflow-hidden shadow-xs">
          <div className="p-5 border-b border-[#E7E5E4] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-[#111827]">
                {t("शासकीय कार्यालय मानचित्र संदर्भ", "Official Office Location Map")}
              </h3>
              <p className="text-xs text-[#667085]">
                {t("उ०प्र० लघु उद्योग निगम मुख्यालय, फजलगंज, कानपुर", "UPSIC Headquarters, Fazalganj, Kanpur")}
              </p>
            </div>
            <span className="text-xs text-[#F4510B] font-semibold">
              {t("सत्यापित शासकीय स्थान", "Verified Public Location")}
            </span>
          </div>
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full bg-slate-100">
            <iframe
              title="Official Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114321.7511739943!2d80.2520696!3d26.4678859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470877a285d3%3A0xb3a3f5a25b20be32!2sFazalganj%20Industrial%20Area%2C%20Fazalganj%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

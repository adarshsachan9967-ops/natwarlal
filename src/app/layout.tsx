import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://natwargoyal.in"),
  title: {
    default: "वैश्य नटवर गोयल | आधिकारिक वेबसाइट | Shri Vaishya Natwar Goyal Official",
    template: "%s | वैश्य नटवर गोयल (Vaishya Natwar Goyal)",
  },
  description:
    "श्री वैश्य नटवर गोयल - उपाध्यक्ष, उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)। राष्ट्रीय उपाध्यक्ष, अखिल भारतीय वैश्य महासम्मेलन एवं भारतीय उद्योग व्यापार मण्डल। सार्वजनिक जीवन, व्यापारिक नेतृत्व एवं सामाजिक सेवा का आधिकारिक परिचय।",
  keywords: [
    "वैश्य नटवर गोयल",
    "नटवर गोयल",
    "Natwar Goyal",
    "Vaishya Natwar Goyal",
    "उपाध्यक्ष उत्तर प्रदेश लघु उद्योग निगम",
    "UPSIC Vice Chairman",
    "भारतीय उद्योग व्यापार मण्डल",
    "अखिल भारतीय वैश्य महासम्मेलन",
    "BJP Uttar Pradesh",
    "लखनऊ",
    "वाराणसी",
    "व्यापारी नेता उत्तर प्रदेश"
  ],
  authors: [{ name: "Office of Shri Vaishya Natwar Goyal" }],
  creator: "Office of Shri Vaishya Natwar Goyal",
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: "en_IN",
    url: "https://natwargoyal.in",
    siteName: "Shri Vaishya Natwar Goyal Official Website",
    title: "वैश्य नटवर गोयल | आधिकारिक वेबसाइट | Shri Vaishya Natwar Goyal",
    description:
      "उपाध्यक्ष, उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)। 40 वर्षों का व्यापारिक, सांगठनिक एवं सामाजिक नेतृत्व।",
    images: [
      {
        url: "/images/profile/natwar-goyal-portrait.jpg",
        width: 800,
        height: 1000,
        alt: "वैश्य नटवर गोयल - उपाध्यक्ष, उ०प्र० लघु उद्योग निगम",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "वैश्य नटवर गोयल | आधिकारिक वेबसाइट",
    description:
      "उपाध्यक्ष, उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)। सार्वजनिक जीवन और सामाजिक गतिविधियां।",
    images: ["/images/profile/natwar-goyal-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vaishya Natwar Goyal",
    alternateName: ["वैश्य नटवर गोयल", "Natwar Goyal", "नटवर गोयल"],
    birthDate: "1967-08-17",
    birthPlace: {
      "@type": "Place",
      name: "Varanasi, Uttar Pradesh, India",
    },
    jobTitle: "Vice Chairman, Uttar Pradesh Small Industries Corporation (UPSIC)",
    worksFor: {
      "@type": "GovernmentOrganization",
      name: "Uttar Pradesh Small Industries Corporation Ltd.",
      url: "https://ho.upsic.in",
    },
    alumniOf: "Bachelor of Commerce (B.Com)",
    nationality: "Indian",
    url: "https://natwargoyal.in",
    sameAs: [
      "https://instagram.com/natwargoyal4bjp",
      "https://ho.upsic.in/about"
    ],
  };

  return (
    <html lang="hi" className={`${inter.variable} ${notoDevanagari.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F4] text-[#111827] antialiased selection:bg-[#F4510B]/10 selection:text-[#F4510B]">
        <LanguageProvider>
          <Suspense fallback={<div className="h-20 bg-white border-b border-[#E7E5E4]" />}>
            <Header />
          </Suspense>
          <main id="main-content" className="flex-1">
            <Suspense fallback={<div className="min-h-96" />}>
              {children}
            </Suspense>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}

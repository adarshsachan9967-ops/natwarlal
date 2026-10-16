"use client";

import AboutPage from "@/app/about/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function EnAboutPage() {
  return (
    <>
      <LocaleSetter targetLang="en" />
      <AboutPage />
    </>
  );
}

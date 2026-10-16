"use client";

import AboutPage from "@/app/about/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function HiAboutPage() {
  return (
    <>
      <LocaleSetter targetLang="hi" />
      <AboutPage />
    </>
  );
}

"use client";

import ContactPage from "@/app/contact/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function HiContactPage() {
  return (
    <>
      <LocaleSetter targetLang="hi" />
      <ContactPage />
    </>
  );
}

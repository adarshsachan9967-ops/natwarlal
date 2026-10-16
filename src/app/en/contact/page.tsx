"use client";

import ContactPage from "@/app/contact/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function EnContactPage() {
  return (
    <>
      <LocaleSetter targetLang="en" />
      <ContactPage />
    </>
  );
}

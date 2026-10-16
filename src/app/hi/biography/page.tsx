"use client";

import BiographyPage from "@/app/biography/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function HiBiographyPage() {
  return (
    <>
      <LocaleSetter targetLang="hi" />
      <BiographyPage />
    </>
  );
}

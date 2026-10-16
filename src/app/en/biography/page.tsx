"use client";

import BiographyPage from "@/app/biography/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function EnBiographyPage() {
  return (
    <>
      <LocaleSetter targetLang="en" />
      <BiographyPage />
    </>
  );
}

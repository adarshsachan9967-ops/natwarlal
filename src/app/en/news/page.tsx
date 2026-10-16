"use client";

import NewsPage from "@/app/news/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function EnNewsPage() {
  return (
    <>
      <LocaleSetter targetLang="en" />
      <NewsPage />
    </>
  );
}

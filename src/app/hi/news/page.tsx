"use client";

import NewsPage from "@/app/news/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function HiNewsPage() {
  return (
    <>
      <LocaleSetter targetLang="hi" />
      <NewsPage />
    </>
  );
}

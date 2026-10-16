"use client";

import GalleryPage from "@/app/gallery/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function HiGalleryPage() {
  return (
    <>
      <LocaleSetter targetLang="hi" />
      <GalleryPage />
    </>
  );
}

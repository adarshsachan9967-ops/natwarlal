"use client";

import GalleryPage from "@/app/gallery/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function EnGalleryPage() {
  return (
    <>
      <LocaleSetter targetLang="en" />
      <GalleryPage />
    </>
  );
}

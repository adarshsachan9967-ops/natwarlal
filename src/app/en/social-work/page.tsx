"use client";

import SocialWorkPage from "@/app/social-work/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function EnSocialWorkPage() {
  return (
    <>
      <LocaleSetter targetLang="en" />
      <SocialWorkPage />
    </>
  );
}

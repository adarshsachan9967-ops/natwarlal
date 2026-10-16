"use client";

import SocialWorkPage from "@/app/social-work/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function HiSocialWorkPage() {
  return (
    <>
      <LocaleSetter targetLang="hi" />
      <SocialWorkPage />
    </>
  );
}

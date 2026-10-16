"use client";

import PoliticalJourneyPage from "@/app/political-journey/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function HiPoliticalJourneyPage() {
  return (
    <>
      <LocaleSetter targetLang="hi" />
      <PoliticalJourneyPage />
    </>
  );
}

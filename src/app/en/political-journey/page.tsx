"use client";

import PoliticalJourneyPage from "@/app/political-journey/page";
import LocaleSetter from "@/components/LocaleSetter";

export default function EnPoliticalJourneyPage() {
  return (
    <>
      <LocaleSetter targetLang="en" />
      <PoliticalJourneyPage />
    </>
  );
}

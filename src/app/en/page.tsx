"use client";

import HomePage from "../page";
import LocaleSetter from "@/components/LocaleSetter";

export default function EnHomePage() {
  return (
    <>
      <LocaleSetter targetLang="en" />
      <HomePage />
    </>
  );
}

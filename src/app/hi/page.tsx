"use client";

import HomePage from "../page";
import LocaleSetter from "@/components/LocaleSetter";

export default function HiHomePage() {
  return (
    <>
      <LocaleSetter targetLang="hi" />
      <HomePage />
    </>
  );
}

"use client";

import { useTranslations } from "next-intl";
import TextWithMarkdown from "./ui/TextWithMarkdown";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="w-full bg-[#0A0B1E] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold! text-white mb-8! md:mb-12!">
            {t("title")}
          </h2>

          {/* Description */}
          <TextWithMarkdown className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed space-y-4 md:space-y-6">
            {t("content1")}
          </TextWithMarkdown>
          <TextWithMarkdown className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed space-y-4 md:space-y-6">
            {t("content2")}
          </TextWithMarkdown>
        </div>
      </div>
    </section>
  );
}

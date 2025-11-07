"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AudienceSection() {
  const t = useTranslations("audience");

  const audiences = [
    {
      image: "/audience-1.png",
      descKey: "student.description",
    },
    {
      image: "/audience-2.png",
      descKey: "business.description",
    },
    {
      image: "/audience-3.png",
      descKey: "youth.description",
    },
    {
      image: "/audience-4.png",
      descKey: "creator.description",
    },
  ];

  return (
    <section
      id="participants"
      className="w-full bg-[#0A0B1E] py-16 md:py-20 lg:py-24 scroll-mt-[40px]"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold! text-white text-center mb-8! md:mb-12! uppercase">
            {t("title")}
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-6 md:p-8 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                {/* Image Circle */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-blue-500/40 group-hover:border-blue-400/60 transition-all duration-300">
                    <Image
                      src={audience.image}
                      alt={t(audience.descKey)}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {t(audience.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

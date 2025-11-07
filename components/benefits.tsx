"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BenefitsSection() {
  const t = useTranslations("benefits");

  const benefits = [
    {
      textKey: "benefit1",
    },
    {
      textKey: "benefit2",
    },
    {
      textKey: "benefit3",
    },
    {
      textKey: "benefit4",
    },
    {
      textKey: "benefit5",
    },
    {
      textKey: "benefit6",
    },
  ];

  return (
    <section
      id="benefits"
      className="w-full bg-[#0A0B1E] py-16 md:py-20 lg:py-24 scroll-mt-[40px]"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold! text-white text-center mb-8! md:mb-12! uppercase">
            {t("title")}
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-transparent backdrop-blur-sm border border-blue-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-45">
                      <Image
                        src="/star-icon.svg"
                        alt="Star icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex items-center">
                    <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-0!">
                      {t(benefit.textKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

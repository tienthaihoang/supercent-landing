"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PartnersSection() {
  const t = useTranslations("partners");

  const partners = [
    {
      name: "KOSME",
      logo: "/kosme-logo.svg",
      width: 180,
      height: 60,
    },
    {
      name: "Shinhan Bank",
      logo: "/shinhan-logo.svg",
      width: 120,
      height: 60,
    },
    {
      name: "Likelion",
      logo: "/likelion-logo.svg",
      width: 180,
      height: 60,
    },
    {
      name: "JobKorea",
      logo: "/jobkorea-logo.svg",
      width: 180,
      height: 60,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0A0B1E] via-[#1a1b3e] to-[#0A0B1E] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-8! md:mb-12!">
              {t("title")}
            </h2>

            {/* Partner logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 md:gap-x-20 md:gap-y-12 max-w-3xl mx-auto">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className={`w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert ${
                      index < 2
                        ? "h-12 md:h-14 lg:h-16" // Top row (index 0, 1)
                        : "h-6 md:h-8 lg:h-10"  // Bottom row (index 2, 3)
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

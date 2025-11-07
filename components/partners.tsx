"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PartnersSection() {
  const t = useTranslations("partners");

  const partners = [
    {
      name: "Ministry of SMEs and Startups",
      logo: "/mss-logo.svg",
      width: 180,
      height: 60,
    },
    {
      name: "KOSME",
      logo: "/kosme-logo.svg",
      width: 180,
      height: 60,
    },
    {
      name: "Supercent",
      logo: "/supercent-logo.svg",
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
        {/* Border wrapper */}
        <div className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold! text-white text-center mb-8! md:mb-12! uppercase">
              {t("title")}
            </h2>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="w-auto h-12 md:h-14 lg:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
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

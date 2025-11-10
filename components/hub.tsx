"use client";

import { Briefcase, Globe, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import AutoCarousel from "./ui/Carousel";
import GradientButton from "./ui/GradientButton";

const carouselImages = [
  "/carousel-1.png",
  "/carousel-2.png",
  "/carousel-3.png",
  "/carousel-4.png",
  "/carousel-5.png",
  "/carousel-6.png",
];

export default function HubSection() {
  const t = useTranslations("hub");

  const companies = [
    {
      id: 1,
      name: "SUPERCENT",
      logo: "/supercent-logo.png",
      description: t("companies.supercent"),
      positions: [
        "Mobile Game QA",
        "Game 3D Artist",
        "Mobile Game Developer",
        "Video Editor",
      ],
      slots: 80,
      website:
        "https://likelion.notion.site/K-Tech-Connect-Job-Matching-2a244860a4f48055bd34ccbc6ccadf48",
    },
    {
      id: 2,
      name: "FPT Software Korea",
      logo: "/fpt-logo.png",
      description: t("companies.fpt"),
      positions: [
        "Full-stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "AI Developer",
      ],
      slots: 20,
      website:
        "https://likelion.notion.site/K-Tech-Connect-Job-Matching-2a244860a4f48055bd34ccbc6ccadf48",
    },
    {
      id: 3,
      name: "Guideway Consulting (Matchably)",
      logo: "/matchably-logo.png",
      description: t("companies.matchably"),
      positions: ["Full-stack Developer", "Frontend Developer", "AI Developer"],
      slots: 4,
      website:
        "https://likelion.notion.site/K-Tech-Connect-Job-Matching-2a244860a4f48055bd34ccbc6ccadf48",
    },
    {
      id: 4,
      name: "Camon Social",
      logo: "/camon-logo.png",
      description: t("companies.camon"),
      positions: ["Full-stack Developer", "QA"],
      slots: 2,
      website:
        "https://likelion.notion.site/K-Tech-Connect-Job-Matching-2a244860a4f48055bd34ccbc6ccadf48",
    },
    {
      id: 5,
      name: "Jinochem",
      logo: "/jino-logo.png",
      description: t("companies.jinochem"),
      positions: [
        "Full-stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "AI Developer",
      ],
      slots: 2,
      website:
        "https://likelion.notion.site/K-Tech-Connect-Job-Matching-2a244860a4f48055bd34ccbc6ccadf48",
    },
    {
      id: 6,
      name: "Logfi",
      logo: "/logfi-logo.png",
      description: t("companies.logfi"),
      positions: [
        "App Developer",
        "UI/UX Designer",
        "Project Manager",
        "AI Developer",
      ],
      slots: 4,
      website:
        "https://likelion.notion.site/K-Tech-Connect-Job-Matching-2a244860a4f48055bd34ccbc6ccadf48",
    },
    {
      id: 7,
      name: "Lumicraft",
      logo: "/lumicraft-logo.png",
      description: t("companies.lumicraft"),
      positions: [
        "Full-stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "App Developer",
      ],
      slots: 4,
      website:
        "https://likelion.notion.site/K-Tech-Connect-Job-Matching-2a244860a4f48055bd34ccbc6ccadf48",
    },
    {
      id: 8,
      name: "BOS Semiconductor",
      logo: "/bos-logo.png",
      description: t("companies.bos"),
      positions: [
        "AI Complier Engineer",
        "IT Helpdesk",
        "Senior Embedded SW",
        "Senior SW Security",
      ],
      slots: "30 - 40",
      website: "https://bossemiconductors.jobday.vn/",
    },
    {
      id: 9,
      name: "Smarter Build",
      logo: "/smartbuild-logo.png",
      description: t("companies.smartbuild"),
      positions: ["Đang cập nhật"],
      slots: "",
      website:
        "https://smarterbuild.net/",
    },
  ];

  return (
    <section
      id="activities"
      className="w-full bg-[#0A0B1E] py-16 md:py-20 lg:py-24 scroll-mt-[40px]"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8! md:mb-12!">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold! text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/80">{t("subtitle")}</p>
          </div>
          <div className="rounded-3xl p-6 md:p-10 lg:p-12 bg-gradient-to-b from-[#0C97EB40] via-[#1A1F54] to-[#0F0A3340]">
            {/* Main Card with Logo and Carousel */}
            <div className="py-6 mb-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Logo and Info */}
                <div>
                  <div className="mb-2">
                    <Image
                      src="/k-tech-connect.png"
                      alt="K-Tech Connect Job Matching"
                      width={400}
                      height={120}
                      className="w-full max-w-md"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t("mainTitle")}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 flex items-center h-[1.5em]">
                        <div className="relative w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-45">
                          <Image
                            src="/star-icon.svg"
                            alt="Star icon"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        {t("bullet1")}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 flex items-center h-[1.5em]">
                        <div className="relative w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-45">
                          <Image
                            src="/star-icon.svg"
                            alt="Star icon"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        {t("bullet2")}
                      </p>
                    </div>
                  </div>

                  <GradientButton
                    onClick={() => {
                      const formEl =
                        document.getElementById("registration-form");
                      formEl?.scrollIntoView({ behavior: "smooth" });
                    }}
                    title={t("registerBtn")}
                  />
                </div>

                {/* Right Side - Image Carousel */}
                <AutoCarousel images={carouselImages} />
              </div>
            </div>

            {/* Companies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="bg-gradient-to-b from-[#0C97EB40] via-[#1A1F54] to-[#0F0A3340] rounded-3xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Side - Logo and Company Info */}
                    <div className="flex-shrink-0 w-full md:w-[180px]">
                      <div className="w-full aspect-video bg-white rounded-2xl p-3 flex items-center justify-center mb-4">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={160}
                          height={90}
                          className="object-contain w-full h-full"
                        />
                      </div>

                      {/* Company Name and Description */}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {company.name}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {company.description}
                      </p>
                    </div>

                    {/* Vertical Divider - Hidden on mobile */}
                    <div className="hidden md:block w-px bg-[#7250EF]"></div>

                    {/* Horizontal Divider - Visible on mobile */}
                    <div className="md:hidden h-px bg-[#7250EF]"></div>

                    {/* Right Side - Three Rows */}
                    <div className="flex-1 flex flex-col justify-between gap-6">
                      {/* Row 1: Vi tri Badge + Positions (vertical list) */}
                      <div className="flex items-start gap-4">
                        <span className="inline-flex items-center gap-2 bg-blue-600/30 text-white px-5 py-2.5 rounded-full text-sm font-medium w-[140px] justify-center flex-shrink-0">
                          <Briefcase className="w-4 h-4" />
                          {t("position")}
                        </span>
                        <div className="flex-1">
                          <ul className="space-y-2">
                            {company.positions.map((position, idx) => (
                              <li
                                key={idx}
                                className="text-white/90 text-sm leading-relaxed"
                              >
                                {position}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 bg-blue-600/30 text-white px-5 py-2.5 rounded-full text-sm font-medium w-[140px] justify-center flex-shrink-0">
                          <Users className="w-4 h-4" />
                          {t("companySlots")}
                        </span>
                        <span className="text-white text-xl font-bold">
                          {company.slots}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 bg-blue-600/30 text-white px-5 py-2.5 rounded-full text-sm font-medium w-[140px] justify-center flex-shrink-0">
                          <Globe className="w-4 h-4" />
                          {t("website")}
                        </span>

                        {company.website ? (
                          <Link
                            href={company.website}
                            target="_blank"
                            className="text-white hover:text-white/80 transition-colors text-base font-medium underline underline-offset-4"
                          >
                            {t("viewMore")}
                          </Link>
                        ) : (
                          <span className="text-white/50 text-base font-medium">
                            --
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

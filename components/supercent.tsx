"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import GradientButton from "./ui/GradientButton";

export default function SupercentSection() {
  const t = useTranslations("supercent");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sections = [
    {
      titleKey: "topic.title",
      contentType: "topic",
    },
    {
      titleKey: "prizes.title",
      contentType: "prizes",
    },
    {
      titleKey: "timeline.title",
      contentType: "timeline",
    },
    {
      titleKey: "organizer.title",
      contentType: "organizer",
    },
  ];

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const games = [
    { name: "Pizza Ready", image: "/pizza-ready-game.png" },
    { name: "Snack Clash", image: "/snack-clash-game.png" },
    { name: "XP Here", image: "/xp-here-game.png" },
    { name: "Lumber Chopper", image: "/lumber-chopper-game.png" },
  ];

  const timelineEvents = [
    { date: "29.10.2025", titleKey: "timeline.event1" },
    { date: "17.11.2025", titleKey: "timeline.event2" },
    { date: "19.11.2025", titleKey: "timeline.event3" },
    { date: "25.11.2025", titleKey: "timeline.event4" },
  ];

  return (
    <section className="w-full bg-[#0A0B1E] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-6 md:p-10 lg:p-12 bg-gradient-to-b from-[#0C97EB40] via-[#1A1F54] to-[#0F0A3340]">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row items-stretch justify-between mb-12 gap-8">
              {/* Left block: logo + title + subtitle */}
              <div className="flex flex-col items-start justify-center gap-3 md:gap-6 md:w-1/2">
                <Image
                  src="/supercent-likelion-logo.svg"
                  alt="Supercent x Likelion"
                  width={180}
                  height={40}
                  className="h-7 md:h-9 w-auto opacity-90"
                />

                <Image
                  src="/creative-lab.png"
                  alt="Supercent Creative Lab"
                  width={480}
                  height={140}
                  className="w-[300px] md:w-[400px] lg:w-[480px] h-auto drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]"
                />

                <p className="text-white/85 text-base md:text-lg tracking-wide">
                  AI Game Video Challenge
                </p>
              </div>

              {/* Right block: banner image, same height */}
              <div className="md:w-1/2 flex items-center justify-end">
                <div className="relative w-full max-w-[480px] aspect-[16/9]">
                  <Image
                    src="/powered-by-ai.png"
                    alt="Powered by AI"
                    fill
                    className="object-contain rounded-2xl border border-[#A067FF]/30 shadow-[0_0_35px_rgba(168,99,255,0.35)]"
                  />
                </div>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-3 md:space-y-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#0C97EB40] via-[#1A1F54] to-[#0F0A3340] border border-[#5C45F0]/50 hover:border-[#A76CFF]/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(166,99,255,0.3)]"
                >
                  {/* Section Button */}
                  <button
                    onClick={() => toggleSection(index)}
                    className="cursor-pointer w-full flex items-center justify-center gap-3 p-4 md:p-5 lg:p-6 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src="/star-icon.svg"
                        alt="Star"
                        width={18}
                        height={18}
                        className="w-5 h-5 md:w-10 md:h-10 opacity-90 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-white font-bold text-base md:text-2xl uppercase tracking-wide drop-shadow-[0_0_6px_rgba(255,0,255,0.6)]">
                        {t(section.titleKey)}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-white/70 transition-transform duration-500 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Section Content - Expandable */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 md:px-6 lg:px-8 pb-6 pt-2">
                        {/* TOPIC Content */}
                        {section.contentType === "topic" && (
                          <div className="rounded-xl p-4 backdrop-blur-sm flex flex-col items-center justify-center text-center">
                            <p className="text-white/90 text-sm md:text-base mb-8">
                              {t("topic.description")}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                              {games.map((game, idx) => (
                                <div
                                  key={idx}
                                  className="text-center transition-transform hover:scale-105"
                                >
                                  <Image
                                    src={game.image}
                                    alt={game.name}
                                    width={100}
                                    height={100}
                                    className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-xl object-contain"
                                  />
                                  <p className="text-white text-sm md:text-base font-medium pt-2">
                                    {game.name}
                                  </p>
                                </div>
                              ))}
                            </div>
                            {/* Participants */}
                            <div className="mb-6">
                              <h4 className="text-white font-bold! text-base md:text-lg mb-2">
                                {t("topic.participantTitle")}
                              </h4>
                              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                                {t("topic.participantDescription")}
                              </p>
                            </div>

                            <div className="flex justify-center gap-3 md:gap-4">
                              <GradientButton
                                onClick={() => {
                                  const formEl =
                                    document.getElementById(
                                      "registration-form"
                                    );
                                  formEl?.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }}
                                title={t("topic.joinNow")}
                              />

                              <button className="cursor-pointer px-6 py-2 md:px-8 md:py-3 rounded-full bg-white/90 text-[#2b1b5b] text-sm md:text-base font-medium hover:bg-white transition">
                                {t("topic.learnMore")}
                              </button>
                            </div>
                          </div>
                        )}

                        {/* PRIZES Content */}
                        {section.contentType === "prizes" && (
                          <div className="rounded-xl p-4 flex flex-col items-center justify-center text-center">
                            <Image
                              src="/prizes.png"
                              alt="Prizes"
                              width={800}
                              height={400}
                              className="w-full max-w-xl h-auto mb-8"
                            />
                            <h4 className="text-white font-bold! mb-3">
                              {t("prizes.specialTitle")}
                            </h4>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed">
                              {t("prizes.specialDescription")}
                            </p>
                          </div>
                        )}

                        {/* TIMELINE Content */}
                        {section.contentType === "timeline" && (
                          <div className="rounded-xl p-6 text-center">
                            <div className="relative w-full max-w-5xl mx-auto">
                              <div className="hidden md:block absolute w-[75%] top-[53px] left-1/2 -translate-x-1/2 h-[2px] bg-cyan-400/50"></div>

                              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
                                {timelineEvents.map((event, idx) => (
                                  <div
                                    key={idx}
                                    className="flex flex-col items-center justify-start relative"
                                  >
                                    {/* Mobile vertical line */}
                                    {idx !== timelineEvents.length - 1 && (
                                      <div className="md:hidden absolute top-[60px] md:top-[95px] left-1/2 -translate-x-1/2 w-[2px] h-[30px] md:h-[60px] bg-cyan-400/40"></div>
                                    )}

                                    {/* Date */}
                                    <div className="text-[#FF69FF] font-bold text-sm md:text-lg mb-3 md:mb-4">
                                      {event.date}
                                    </div>

                                    {/* Circle on line */}
                                    <div className="hidden md:block w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-400 ring-4 ring-cyan-400/30 mb-3 md:mb-4"></div>

                                    {/* Vertical line + small dot (desktop only) */}
                                    <div className="hidden md:flex flex-col items-center">
                                      <div className="h-[60px] w-[2px] bg-cyan-400/50"></div>
                                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-[-3px] shadow-md shadow-cyan-300/40 mb-4"></div>
                                    </div>

                                    {/* Title */}
                                    <p className="text-white/90 text-xs md:text-sm text-center leading-snug max-w-[200px]">
                                      {t(event.titleKey)}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ORGANIZER Content */}
                        {section.contentType === "organizer" && (
                          <div className="rounded-xl p-4 text-center">
                            <div className="space-y-8">
                              {/* Likelion */}
                              <div className="text-center">
                                <div className="flex justify-center mb-4">
                                  <Image
                                    src="/likelion-orange-logo.svg"
                                    alt="Likelion"
                                    width={150}
                                    height={40}
                                    className="h-6 md:h-8 w-auto"
                                  />
                                </div>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
                                  {t("organizer.likelionDesc1")}
                                </p>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-5xl mx-auto mt-4">
                                  {t("organizer.likelionDesc2")}
                                </p>
                              </div>

                              {/* Supercent */}
                              <div className="text-center">
                                <div className="flex justify-center mb-4">
                                  <Image
                                    src="/supercent-logo.svg"
                                    alt="Supercent"
                                    width={180}
                                    height={50}
                                    className="h-10 md:h-14 w-auto"
                                  />
                                </div>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
                                  {t("organizer.supercentDesc1")}
                                </p>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-5xl mx-auto mt-4">
                                  {t("organizer.supercentDesc2")}
                                </p>
                              </div>
                            </div>
                          </div>
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

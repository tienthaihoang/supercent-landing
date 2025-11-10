"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type EventStatus = "upcoming" | "live" | "ended";

export default function HeroSection() {
  const t = useTranslations("hero");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStatus, setEventStatus] = useState<EventStatus>("upcoming");

  const listImage = [
    "/kosme-logo.svg",
    "/likelion-logo.svg",
    "/jobkorea-logo.svg",
    "/shinhan-bank-logo.svg",
  ];

  useEffect(() => {
    // Event start: November 25, 2025, 9:00 AM
    const startDate = new Date("2025-11-25T09:00:00").getTime();
    // Event end: November 25, 2025, 5:00 PM (17:00)
    const endDate = new Date("2025-11-25T17:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const differenceToStart = startDate - now;
      const differenceToEnd = endDate - now;

      if (differenceToStart > 0) {
        // Event hasn't started yet - show countdown
        setEventStatus("upcoming");
        setTimeLeft({
          days: Math.floor(differenceToStart / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (differenceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (differenceToStart % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((differenceToStart % (1000 * 60)) / 1000),
        });
      } else if (differenceToEnd > 0) {
        // Event is live
        setEventStatus("live");
      } else {
        // Event has ended
        setEventStatus("ended");
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen w-full overflow-hidden bg-[#0A0B1E] pt-16 sm:pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E]/50 via-transparent to-[#0A0B1E]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Sponsors Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-9 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {listImage.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Sponsor ${index + 1}`}
              width={100}
              height={28}
              className="h-5 sm:h-6 md:h-7 lg:h-[28px] w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>

        {/* Main Title - Large Image */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
          <Image
            src="/main-hero.svg"
            alt="K+-Tech Hub Innovation"
            width={800}
            height={250}
            className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl h-auto"
            style={{ maxHeight: "280px", objectFit: "contain" }}
            priority
          />
        </div>

        {/* Info Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#006DB8]/50 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 hover:bg-[#006DB8]/60 transition-all duration-300">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">
              {t("date")}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#006DB8]/50 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 hover:bg-[#006DB8]/60 transition-all duration-300">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">
              {t("time")}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#006DB8]/50 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 hover:bg-[#006DB8]/60 transition-all duration-300">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">
              {t("location")}
            </span>
          </div>
        </div>

        {/* Countdown Timer or Live Event Badge - Hidden when ended */}
        {eventStatus !== "ended" && (
          <div className="flex items-center justify-center mb-8 md:mb-12 px-2">
            {eventStatus === "upcoming" ? (
              // Countdown Timer
              <div className="flex items-center gap-0 bg-gradient-to-b from-[#7250EF33] to-[#0F0A3333] backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border border-white/20 shadow-[0_0_36px_rgba(0,109,184,0.25)]">
                {/* Days */}
                <div className="flex flex-col items-center px-2 sm:px-3 md:px-4 lg:px-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-0.5 sm:mb-1 tabular-nums">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium uppercase tracking-wider">
                    {t("days")}
                  </div>
                </div>

                <div className="h-8 sm:h-10 md:h-12 w-px bg-white/30 mx-1 sm:mx-1.5 md:mx-2"></div>

                {/* Hours */}
                <div className="flex flex-col items-center px-2 sm:px-3 md:px-4 lg:px-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-0.5 sm:mb-1 tabular-nums">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium uppercase tracking-wider">
                    {t("hours")}
                  </div>
                </div>

                <div className="h-8 sm:h-10 md:h-12 w-px bg-white/30 mx-1 sm:mx-1.5 md:mx-2"></div>

                {/* Minutes */}
                <div className="flex flex-col items-center px-2 sm:px-3 md:px-4 lg:px-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-0.5 sm:mb-1 tabular-nums">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium uppercase tracking-wider">
                    {t("minutes")}
                  </div>
                </div>

                <div className="h-8 sm:h-10 md:h-12 w-px bg-white/30 mx-1 sm:mx-1.5 md:mx-2"></div>

                {/* Seconds */}
                <div className="flex flex-col items-center px-2 sm:px-3 md:px-4 lg:px-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-0.5 sm:mb-1 tabular-nums">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium uppercase tracking-wider">
                    {t("seconds")}
                  </div>
                </div>
              </div>
            ) : (
              // Event is Live Badge
              <div className="bg-gradient-to-r from-[#FF0080] via-[#FF4500] to-[#FF0080] backdrop-blur-md rounded-full px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 border border-white/30 shadow-[0_0_40px_rgba(255,0,128,0.5)] animate-pulse">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Live indicator dot */}
                  <div className="relative flex h-3 w-3 sm:h-4 sm:w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-white"></span>
                  </div>

                  {/* Text */}
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide">
                    {t("eventLive")}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-t from-[#0A0B1E] to-transparent pointer-events-none" />
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";

export default function AgendaSection() {
  const t = useTranslations("agenda");

  const allDayEvents = [
    {
      time: "09:00 - 17:00",
      titleKey: "allDay.event1.title",
      descKey: "allDay.event1.description",
    },
    {
      time: "09:00 - 15:00",
      titleKey: "allDay.event2.title",
      descKey: "allDay.event2.description",
    },
  ];

  const morningEvents = [
    {
      time: "8:30 - 9:00",
      titleKey: "morning.event1.title",
      descKey: "morning.event1.description",
    },
    {
      time: "09:00 - 09:15",
      titleKey: "morning.event2.title",
      descKey: "morning.event2.description",
    },
    {
      time: "09:15 - 09:30",
      titleKey: "morning.event3.title",
      descKey: "morning.event3.description",
    },
    {
      time: "11:30 - 13:00",
      titleKey: "morning.event4.title",
      descKey: "morning.event4.description",
    },
    {
      time: "09:30 - 11:30",
      titleKey: "morning.event5.title",
      descKey: "morning.event5.description",
    },
  ];

  const afternoonEvents = [
    {
      time: "13:00 - 13:30",
      titleKey: "afternoon.event1.title",
      descKey: "afternoon.event1.description",
    },
    {
      time: "13:30 - 15:30",
      titleKey: "afternoon.event2.title",
      descKey: "afternoon.event2.description",
    },
    {
      time: "15:30 - 16:15",
      titleKey: "afternoon.event3.title",
      descKey: "afternoon.event3.description",
    },
    {
      time: "16:15 - 16:30",
      titleKey: "afternoon.event4.title",
      descKey: "afternoon.event4.description",
    },
    {
      time: "16:30 - 17:00",
      titleKey: "afternoon.event5.title",
      descKey: "afternoon.event5.description",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TimelineItem = ({ time, titleKey, descKey }: any) => (
    <div className="flex gap-4 md:gap-6 group">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center pt-[7px]">
        <div className="w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/30 group-hover:ring-8 transition-all duration-300 flex-shrink-0"></div>
        <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="text-[#FF69FF] font-bold text-base md:text-lg mb-1">
          {time}
        </div>
        <div className="text-white font-bold text-base md:text-lg mb-1">
          {t(titleKey)}
        </div>
        {descKey && (
          <div className="text-white font-normal text-base">{t(descKey)}</div>
        )}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#0A0B1E] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold! text-white text-center mb-8! md:mb-12! uppercase tracking-tight">
            {t("title")}
          </h2>

          {/* All Day Events */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-extrabold! text-white mb-6! uppercase tracking-wide">
              {t("allDayTitle")}
            </h3>
            <div className="space-y-0">
              {allDayEvents.map((event, index) => (
                <TimelineItem key={index} {...event} />
              ))}
            </div>
          </div>

          {/* Morning and Afternoon in Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Morning Events */}
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold! text-white mb-6! uppercase tracking-wide">
                {t("morningTitle")}
              </h3>
              <div className="space-y-0">
                {morningEvents.map((event, index) => (
                  <TimelineItem key={index} {...event} />
                ))}
              </div>
            </div>

            {/* Afternoon Events */}
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold! text-white mb-6! uppercase tracking-wide">
                {t("afternoonTitle")}
              </h3>
              <div className="space-y-0">
                {afternoonEvents.map((event, index) => (
                  <TimelineItem key={index} {...event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

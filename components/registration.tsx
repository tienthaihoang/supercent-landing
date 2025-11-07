"use client";

import { FileText, Gift, ListChecks, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import RegistrationForm from "./form/registrationForm";
import GradientButton from "./ui/GradientButton";

export default function RegistrationSection() {
  const t = useTranslations("registration");

  const steps = [
    {
      icon: FileText,
      number: 1,
      titleKey: "step1.title",
      descKey: "step1.description",
    },
    {
      icon: Mail,
      number: 2,
      titleKey: "step2.title",
      descKey: "step2.description",
    },
    {
      icon: ListChecks,
      number: 3,
      titleKey: "step3.title",
      descKey: "step3.description",
    },
    {
      icon: Gift,
      number: 4,
      titleKey: "step4.title",
      descKey: "step4.description",
    },
  ];

  return (
    <section className="w-full bg-[#0A0B1E] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold! text-white text-center mb-8 md:mb-12 uppercase">
            {t("title")}
          </h2>

          {/* Steps */}
          <div className="relative mb-16 md:mb-20">
            <div className="hidden md:block absolute top-10 left-0 right-0 mx-auto w-[80%] h-0.5 border-t-2 border-dashed border-purple-400/40"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 flex items-center justify-center shadow-xl mb-6">
                      <IconComponent
                        className="w-10 h-10 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="w-full bg-white/95 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[130px]">
                      <h3 className="text-gray-900 font-bold text-base md:text-lg mb-3">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="relative bg-gradient-to-r from-purple-900/60 via-purple-800/50 to-pink-900/60 border-2 border-purple-500/50 rounded-3xl mb-12 md:mb-16 overflow-hidden">
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="p-8 md:p-12 lg:p-16">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 uppercase">
                  {t("cta.title")}
                </h3>
                <p className="text-white/90 text-base md:text-lg font-semibold mb-4 md:mb-6">
                  {t("cta.subtitle")}
                </p>
                <div className="space-y-3 mb-6 md:mb-8">
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {t("cta.description1")}
                  </p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {t("cta.description2")}
                  </p>
                </div>
                <GradientButton
                  onClick={() => {
                    const formEl = document.getElementById("registration-form");
                    formEl?.scrollIntoView({ behavior: "smooth" });
                  }}
                  title={t("cta.button")}
                />
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-xl aspect-square">
                  <Image
                    src="/registration.png"
                    alt="Registration"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}

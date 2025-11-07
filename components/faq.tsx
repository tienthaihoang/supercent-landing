"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      questionKey: "faq1.question",
      answerKey: "faq1.answer",
    },
    {
      questionKey: "faq2.question",
      answerKey: "faq2.answer",
    },
    {
      questionKey: "faq3.question",
      answerKey: "faq3.answer",
    },
    {
      questionKey: "faq4.question",
      answerKey: "faq4.answer",
    },
    {
      questionKey: "faq5.question",
      answerKey: "faq5.answer",
    },
    {
      questionKey: "faq6.question",
      answerKey: "faq6.answer",
    },
    {
      questionKey: "faq7.question",
      answerKey: "faq7.answer",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#0A0B1E] py-16 md:py-20 lg:py-24 scroll-mt-[40px]"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Container with gradient background */}
          <div className="backdrop-blur-[64px] rounded-3xl p-8 md:p-12 lg:p-16 bg-gradient-to-b from-[#0C97EB40] via-[#1A1F54] to-[#0F0A3340]">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold! text-white text-center mb-8! md:mb-12! tracking-tight">
              {t("title")}
            </h2>

            {/* FAQ Items */}
            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-400/60"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="cursor-pointer w-full flex items-center justify-between p-4 md:p-5 lg:p-6 text-left group"
                  >
                    <span className="text-white font-semibold text-sm md:text-base lg:text-lg pr-4">
                      {t(faq.questionKey)}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 text-white/70 flex-shrink-0 transition-transform duration-500 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer - Expandable */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 pt-2">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-5 transform transition-transform duration-300">
                          <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                            {t(faq.answerKey)}
                          </p>
                        </div>
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

"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ThankYouPage() {
  const t = useTranslations("thankYou");

  return (
    <>
      {/* Facebook Pixel Lead tracking */}
      <Script id="fbq-lead" strategy="afterInteractive">
        {`fbq('track', 'Lead');`}
      </Script>
      <div className="min-h-screen bg-[#0A0B1E] flex items-center justify-center p-4">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Main Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
          {/* Image */}
          <Image
            src="/thank-you.png"
            alt="Thank you"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />

          {/* Message */}
          <div className="space-y-4 mb-8">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {t("message1")}
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-semibold">
              {t("message2")}
            </p>
          </div>

          {/* Button */}
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-[#5B4FC0] to-[#7C3AED] hover:from-[#4F44A8] hover:to-[#6D28D9] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t("backButton")}
          </Link>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </>
  );
}

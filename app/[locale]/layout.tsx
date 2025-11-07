import { routing } from "@/i18n/routing";
import IntlProviderClient from "@/provider/IntlProviderClient";
import "antd/dist/reset.css";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { Mulish } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ReactNode } from "react";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "KTC College Hackathon 2025",
  description:
    "K-Tech Innovation Hub 2025 – Sự kiện kết nối công nghệ & việc làm Việt–Hàn, phỏng vấn trực tiếp với doanh nghiệp Hàn Quốc và khám phá cơ hội nghề nghiệp toàn cầu.",
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={mulish.variable}>
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({‘gtm.start’:
              new Date().getTime(),event:‘gtm.js’});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!=‘dataLayer’?‘&l=‘+l:‘’;j.async=true;j.src=
              ’https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,‘script’,‘dataLayer’,‘GTM-P7FDJ4FK’);
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        {/* ✅ Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7FDJ4FK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <IntlProviderClient locale={locale} messages={messages}>
          {children}
        </IntlProviderClient>
      </body>
    </html>
  );
}

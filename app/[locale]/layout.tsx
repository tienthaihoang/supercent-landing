/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

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
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P7FDJ4FK');
            `,
          }}
        />

        {/* ✅ Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '865110215480975'); 
              fbq('track', 'PageView');
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

        {/* ✅ Facebook Pixel (noscript fallback) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=865110215480975&ev=PageView&noscript=1"
          />
        </noscript>
        <IntlProviderClient locale={locale} messages={messages}>
          {children}
        </IntlProviderClient>
      </body>
    </html>
  );
}

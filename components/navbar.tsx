"use client";

import { site } from "@/config/site";
import { Select } from "antd";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import GradientButton from "./ui/GradientButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");

  const onLanguageChange = (newLocale: string) => {
    startTransition(() => {
      const segments = pathname.split("/");
      segments[1] = newLocale;
      const newPath = segments.join("/") || "/";
      router.replace(newPath);
    });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[99] w-[95%] max-w-7xl bg-[#1C1B1A]/50 backdrop-blur-[4px] shadow-[0_0_36px_rgba(0,109,184,0.25)] border border-white/10 rounded-2xl md:rounded-full">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-9 lg:px-12 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={128}
            height={40}
            className="h-7 w-auto sm:h-8 md:h-10"
          />
        </Link>

        {/* Menu desktop */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {site.routes.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className="text-white/80 hover:text-white font-medium transition-all duration-200 hover:scale-105 text-sm xl:text-base whitespace-nowrap"
            >
              {t(item.title)}
            </Link>
          ))}

          <Select
            value={locale}
            onChange={onLanguageChange}
            options={[
              { value: "vi", label: "🇻🇳 VI" },
              { value: "en", label: "🇺🇸 EN" },
            ]}
            className="language-select w-24"
            size="large"
            disabled={isPending}
            classNames={{
              popup: {
                root: "language-select-dropdown",
              },
            }}
          />

          <GradientButton
            title={t("register")}
            onClick={() => {
              const formEl = document.getElementById("registration-form");
              formEl?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>

        {/* Language + Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <Select
            value={locale}
            onChange={onLanguageChange}
            options={[
              { value: "vi", label: "VI" },
              { value: "en", label: "EN" },
            ]}
            className="language-select w-16"
            size="middle"
            disabled={isPending}
            classNames={{
              popup: {
                root: "language-select-dropdown",
              },
            }}
          />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-white! hover:scale-110 transition-transform p-1"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden animate-slideDown">
          <div className="flex flex-col space-y-3 sm:space-y-4 px-4 sm:px-6 md:px-9 pb-5 sm:pb-6 border-t border-white/10 pt-3 sm:pt-4">
            {site.routes.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-all font-medium text-sm sm:text-base py-1"
                style={{
                  animation: `fadeInUp 0.3s ease-out ${idx * 0.05}s both`,
                }}
              >
                {t(item.title)}
              </Link>
            ))}
            <Link
              href="#register"
              onClick={() => setOpen(false)}
              className="
                h-10 sm:h-11 px-6 sm:px-9
                rounded-full text-white font-semibold
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                shadow-[0_0_20px_rgba(122,92,255,0.6)]
                hover:scale-105
                bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500
                text-sm sm:text-base
                mt-1
              "
              style={{
                animation: `fadeInUp 0.3s ease-out ${
                  site.routes.length * 0.05
                }s both`,
              }}
            >
              {t("register")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

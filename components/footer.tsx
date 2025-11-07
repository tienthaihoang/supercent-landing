"use client";

import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  const navigationLinks = [
    { titleKey: "nav.participants", path: "#participants" },
    { titleKey: "nav.benefits", path: "#benefits" },
    { titleKey: "nav.activities", path: "#activities" },
    { titleKey: "nav.faq", path: "#faq" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/likelionvietnam",
      label: "Facebook",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/likelionvn",
      label: "Instagram",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@likelionvietnam",
      label: "Youtube",
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@likelionvietnam",
      label: "TikTok",
    },
  ];

  return (
    <footer className="w-full bg-[#0A0B1E] border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
                {t("contact.title")}
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+84867133779"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    (+84) 86 713 3779
                  </span>
                </a>
                <a
                  href="mailto:recruitment@likelion.net"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    recruitment@likelion.net
                  </span>
                </a>
              </div>

              {/* Logo & Description */}
              <div className="mt-8">
                <Image
                  src="/logo.svg"
                  alt="K-Tech College Hackathon 2025"
                  width={200}
                  height={60}
                  className="h-12 md:h-14 w-auto mb-4"
                />
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {t("contact.description")}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
                {t("nav.title")}
              </h3>
              <nav className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="block text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {t(link.titleKey)}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
                {t("location.title")}
              </h3>
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4940.1138041047625!2d106.7142123!3d10.7784078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2d6178c421%3A0x849d850bcbbadd48!2sThe%20METT%20-%20Grade%20A%20Office%20Building!5e1!3m2!1sen!2s!4v1762417030199!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="container mx-auto py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-white/60 text-sm">{t("copyright")}</p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");

  return (
    <div className="min-h-screen bg-[#0A0B1E] pt-10 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("backButton")}
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          {t("title")}
        </h1>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("section1.title")}
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              {t("section1.content1")}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t("section1.content2")}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("section2.title")}
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              {t("section2.intro")}
            </p>

            <div className="ml-4 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("section2.subsectionA.title")}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t("section2.subsectionA.content")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("section2.subsectionB.title")}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t("section2.subsectionB.content")}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("section3.title")}
            </h2>

            <div className="ml-4 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("section3.subsectionA.title")}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  <li>{t("section3.subsectionA.item1")}</li>
                  <li>{t("section3.subsectionA.item2")}</li>
                  <li>{t("section3.subsectionA.item3")}</li>
                  <li>{t("section3.subsectionA.item4")}</li>
                  <li>{t("section3.subsectionA.item5")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("section3.subsectionB.title")}
                </h3>
                <p className="text-white/80 leading-relaxed mb-3">
                  {t("section3.subsectionB.intro")}
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="text-white/80">
                    <span className="font-semibold text-white">
                      {t("section3.subsectionB.provider.title")}
                    </span>{" "}
                    {t("section3.subsectionB.provider.content")}
                  </li>
                  <li className="text-white/80">
                    <span className="font-semibold text-white">
                      {t("section3.subsectionB.employer.title")}
                    </span>{" "}
                    {t("section3.subsectionB.employer.content")}
                  </li>
                  <li className="text-white/80">
                    <span className="font-semibold text-white">
                      {t("section3.subsectionB.law.title")}
                    </span>{" "}
                    {t("section3.subsectionB.law.content")}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("section4.title")}
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              {t("section4.content1")}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t("section4.content2")}
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("section5.title")}
            </h2>
            <p className="text-white/80 leading-relaxed">
              {t("section5.content")}
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("section6.title")}
            </h2>
            <p className="text-white/80 leading-relaxed">
              {t("section6.content")}
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("section7.title")}
            </h2>
            <p className="text-white/80 leading-relaxed">
              {t("section7.content")}{" "}
              <a
                href="mailto:recruitment@likelion.net"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                recruitment@likelion.net
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ThankYouContent from "./thank-you-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("thankYou");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function ThankYouPage() {
  return <ThankYouContent />;
}

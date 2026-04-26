"use client";

import { usePathname, useRouter } from "../i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const t = useTranslations();

  const toggleLang = () => {
    const nextLocale = locale === "en" ? "pt" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLang}
      className="btn btn-outline"
      style={{
        padding: "0.45rem 0.8rem",
        borderRadius: "0.6rem",
        fontSize: "0.85rem",
        fontWeight: 600,
        textTransform: "uppercase"
      }}
      aria-label={t("aria.switch_lang")}
    >
      {locale === "en" ? "PT" : "EN"}
    </button>
  );
}

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("hero_title")}</h1>
      <p>{t("hero_desc")}</p>
    </div>
  );
}

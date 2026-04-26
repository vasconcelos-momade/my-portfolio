import { Link } from "../../../i18n/routing";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <section className="section container">
      <div className="glass-strong" style={{ padding: "1.75rem" }}>
        <p className="section-kicker">{t("about_page.kicker")}</p>
        <h1 className="section-title" style={{ fontSize: "2rem" }}>
          {t("about_page.title")}
        </h1>
        <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
          {t("about_page.subtitle")}
        </p>
        <ul className="feature-list" style={{ marginTop: "1.25rem", maxWidth: 520 }}>
          <li>{t("about_page.features.erp")}</li>
          <li>{t("about_page.features.backend")}</li>
          <li>{t("about_page.features.web_mobile")}</li>
          <li>{t("about_page.features.infra")}</li>
        </ul>
        <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
          <Link href="/#produtos" className="btn btn-primary">
            {t("about_page.cta_products")}
          </Link>
          <Link href="/#contact" className="btn btn-outline">
            {t("about_page.cta_commercial")}
          </Link>
        </div>
      </div>
    </section>
  );
}

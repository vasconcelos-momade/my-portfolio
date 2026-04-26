import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <section className="section container">
      <div className="glass-strong" style={{ padding: "1.75rem" }}>
        <p className="section-kicker">{t("contact_page.kicker")}</p>
        <h1 className="section-title" style={{ fontSize: "2rem" }}>
          {t("contact_page.title")}
        </h1>
        <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
          {t("contact_page.subtitle")}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "1.35rem" }}>
          <a className="btn btn-primary" href="mailto:hello@vxcode.dev">
            {t("contact_cta_email")}
          </a>
          <a
            className="btn btn-outline"
            href="https://wa.me/258878131994"
            target="_blank"
            rel="noreferrer"
          >
            {t("contact_cta_whatsapp")}
          </a>
          <a
            className="btn btn-outline"
            href="https://linkedin.com/in/momadevasconcelos"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-outline"
            href="https://github.com/momadevasconcelos"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

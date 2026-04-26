import { Link } from "../../../i18n/routing";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations();

  const line = [
    {
      name: "Skalway Gastro",
      status: t("products_list.gastro_status"),
      href: "/demo/gastro",
      cta: t("projects_page.cta_dashboard")
    },
    {
      name: "Skalway Pharm",
      status: t("products_list.pharm_status"),
      href: "/demo/pharm",
      cta: t("projects_page.cta_erp")
    }
  ];

  return (
    <section className="section container">
      <div className="glass-strong" style={{ padding: "1.75rem" }}>
        <p className="section-kicker">{t("projects_page.kicker")}</p>
        <h1 className="section-title" style={{ fontSize: "2rem" }}>
          {t("projects_page.title")}
        </h1>
        <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
          {t("projects_page.subtitle")}
        </p>
        <div className="grid-2" style={{ marginTop: "1.35rem" }}>
          {line.map((p) => (
            <article key={p.name} className="glass metric-card" style={{ padding: "1.2rem" }}>
              <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{p.name}</h2>
              <p style={{ color: "var(--text-muted)", marginTop: "0.4rem" }}>{p.status}</p>
              <Link href={p.href} className="btn btn-primary" style={{ marginTop: "1rem" }}>
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

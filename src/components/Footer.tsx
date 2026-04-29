import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="container-nav" style={{ padding: "4rem 0", marginBottom: "1.5rem" }}>
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2.5rem", paddingLeft: "1rem", paddingRight: "1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1.25rem" }}>
          <div>
            <p style={{ margin: 0, fontWeight: 800, letterSpacing: "-0.02em", fontSize: "1.1rem" }}>mvasconcelos.dev</p>
            <p style={{ margin: "0.5rem 0 0", color: "var(--text-muted)", maxWidth: 360, lineHeight: 1.6, fontSize: "0.9375rem" }}>
              {t("footer_desc")}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.875rem" }}>
              {t("footer_copyright")}
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.875rem", fontWeight: 500 }}>
              <span className="dot" style={{ background: "var(--success)", marginRight: "0.4rem" }} />
              {t("hero_badge")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

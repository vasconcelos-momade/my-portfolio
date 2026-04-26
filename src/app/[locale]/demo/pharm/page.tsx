"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PharmDemoPage() {
  const t = useTranslations();

  const metrics = [
    { label: t("demo_pharm.metrics.sales"), value: "AOA 1.930.000", status: "🟢 online" },
    { label: t("demo_pharm.metrics.stock"), value: "5.482 SKUs", status: "🔄 sincronizando" },
    { label: t("demo_pharm.metrics.receivables"), value: "AOA 3.280.000", status: "📡 conectado" },
    { label: t("demo_pharm.metrics.prescriptions"), value: "187", status: "🟢 online" }
  ];

  const modules = [
    `🧾 ${t("demo_pharm.modules.sales")}`,
    `💊 ${t("demo_pharm.modules.meds")}`,
    `📦 ${t("demo_pharm.modules.stock")}`,
    `🛒 ${t("demo_pharm.modules.purchases")}`,
    `💰 ${t("demo_pharm.modules.receivables")}`,
    `📄 ${t("demo_pharm.modules.docs")}`
  ];

  const stockRows = [
    ["Paracetamol 500mg", "Lote 2026-04", "08/2027", "312"],
    ["Amoxicilina", "Lote 2026-02", "03/2027", "112"],
    ["Insulina R", "Lote 2026-05", "11/2026", "48"],
    ["Ibuprofeno 400mg", "Lote 2026-03", "12/2027", "274"]
  ];

  return (
    <section className="container section">
      <div className="glass-strong" style={{ padding: "1.1rem" }}>
        <div className="dashboard-layout">
          <aside className="glass" style={{ padding: "1rem", height: "fit-content" }}>
            <p style={{ marginTop: 0, fontWeight: 700 }}>Skalway Pharm ERP</p>
            <p style={{ color: "var(--text-muted)", marginTop: 0, fontSize: "0.82rem" }}>SoTech</p>
            <p style={{ color: "var(--text-muted)", marginTop: "0.25rem" }}>{t("products_list.pharm_status")}</p>
            <div style={{ display: "grid", gap: "0.4rem" }}>
              {modules.map((item) => (
                <div key={item} className="status-pill">
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <main>
            <div
              className="glass"
              style={{
                padding: "0.9rem 1rem",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <strong>{t("demo_pharm.header_demo")}</strong>
              <span className="status-pill">
                <span className="dot" style={{ background: "var(--warning)" }} />
                {t("products_list.pharm_status")}
              </span>
            </div>

            <div className="grid-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="glass metric-card"
                >
                  <p style={{ margin: 0, color: "var(--text-muted)" }}>{metric.label}</p>
                  <h3 style={{ margin: "0.4rem 0" }}>{metric.value}</h3>
                  <span className="status-pill">{metric.status}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid-2" style={{ marginTop: "1rem" }}>
              <article className="glass" style={{ padding: "1rem" }}>
                <h3 style={{ marginTop: 0 }}>{t("demo_pharm.stock_title")}</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t("demo_pharm.table_headers.med")}</th>
                      <th>{t("demo_pharm.table_headers.batch")}</th>
                      <th>{t("demo_pharm.table_headers.expiry")}</th>
                      <th>{t("demo_pharm.table_headers.qty")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockRows.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>

              <article className="glass" style={{ padding: "1rem" }}>
                <h3 style={{ marginTop: 0 }}>Pipeline de implementacao</h3>
                <div style={{ display: "grid", gap: "0.7rem" }}>
                  {[
                    ["POS Balcao", 100],
                    ["Stock e Inventario", 92],
                    ["Compras", 87],
                    ["Contas a Receber", 81],
                    ["Documentos Clinicos", 68]
                  ].map((item) => (
                    <div key={item[0]}>
                      <p style={{ margin: "0 0 0.3rem" }}>{item[0]}</p>
                      <div className="glass" style={{ padding: "0.2rem" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item[1]}%` }}
                          style={{
                            height: 10,
                            borderRadius: 999,
                            background:
                              "linear-gradient(90deg, var(--primary), rgba(59,130,246,0.35))"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

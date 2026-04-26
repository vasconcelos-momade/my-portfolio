"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function GastroDemoPage() {
  const t = useTranslations();

  const metrics = [
    { label: t("demo_gastro.metrics.sales"), value: "AOA 2.480.000", status: "🟢 online" },
    { label: t("demo_gastro.metrics.stock"), value: "1.942 itens", status: "🔄 sincronizando" },
    { label: t("demo_gastro.metrics.billing"), value: "AOA 48.300.000", status: "📡 conectado" },
    { label: t("demo_gastro.metrics.customers"), value: "326", status: "🟢 online" }
  ];

  const tableRows = [
    ["Mesa 04", "2x Picanha, 1x Sumo", t("demo_gastro.order_status.preparing"), "14:38"],
    ["Mesa 07", "1x Pizza, 2x Cola", t("demo_gastro.order_status.ready"), "14:36"],
    ["Delivery #192", "3x Burger Classic", t("demo_gastro.order_status.delivering"), "14:35"],
    ["Mesa 01", "1x Bacalhau", t("demo_gastro.order_status.closed"), "14:31"]
  ];

  return (
    <section className="container section">
      <div className="glass-strong" style={{ padding: "1.1rem" }}>
        <div className="dashboard-layout">
          <aside className="glass" style={{ padding: "1rem", height: "fit-content" }}>
            <p style={{ marginTop: 0, fontWeight: 700 }}>Skalway Gastro</p>
            <p style={{ color: "var(--text-muted)", marginTop: 0, fontSize: "0.82rem" }}>SoTech</p>
            <p style={{ color: "var(--text-muted)", marginTop: "0.25rem" }}>ERP + POS Restaurantes</p>
            <div style={{ display: "grid", gap: "0.4rem" }}>
              {[
                t("demo_gastro.menu.dashboard"),
                t("demo_gastro.menu.orders"),
                t("demo_gastro.menu.kds"),
                t("demo_gastro.menu.tables"),
                t("demo_gastro.menu.cashier"),
                t("demo_gastro.menu.reports")
              ].map((item) => (
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
              <strong>{t("demo_gastro.header_simulated")}</strong>
              <span style={{ color: "var(--text-muted)" }}>SoTech · Skalway</span>
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
                <h3 style={{ marginTop: 0 }}>{t("demo_gastro.realtime_orders")}</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t("demo_gastro.table_headers.table")}</th>
                      <th>{t("demo_gastro.table_headers.order")}</th>
                      <th>{t("demo_gastro.table_headers.status")}</th>
                      <th>{t("demo_gastro.table_headers.time")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
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
                <h3 style={{ marginTop: 0 }}>{t("demo_gastro.weekly_billing")}</h3>
                <div style={{ display: "flex", alignItems: "end", gap: "0.6rem", height: 190 }}>
                  {[32, 48, 53, 44, 62, 70, 66].map((v, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${v * 2}px` }}
                      transition={{ delay: idx * 0.06, duration: 0.45 }}
                      style={{
                        flex: 1,
                        borderRadius: "0.7rem",
                        background: "linear-gradient(180deg, var(--primary), rgba(59,130,246,0.35))"
                      }}
                    />
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

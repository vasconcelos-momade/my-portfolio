"use client";

import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import foto from "../../assets/images/foto.png";
import { Linkedin, Github, Mail, Rocket, FileText, Globe, Cpu, Smartphone, Code, Layout, Palette, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const t = useTranslations();
  const fullGreeting = t("hero_greeting");
  const [displayedGreeting, setDisplayedGreeting] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedGreeting("");
    setIsDone(false);
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedGreeting(fullGreeting.slice(0, i));
      i++;
      if (i > fullGreeting.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 40); // Fast speed

    return () => clearInterval(interval);
  }, [fullGreeting]);

  const workspaceSignals = [
    { icon: <CheckCircle2 size={20} className="text-success" />, label: t("workspace_signals.uptime") },
    { icon: <Cpu size={20} className="text-primary" />, label: t("workspace_signals.scalable") },
    { icon: <Rocket size={20} className="text-warning" />, label: t("workspace_signals.performance") }
  ];

  const versionCards = [
    {
      title: t("workspace_cards.v1_title"),
      subtitle: t("workspace_cards.v1_subtitle"),
      body: t("workspace_cards.v1_body")
    },
    {
      title: t("workspace_cards.v2_title"),
      subtitle: t("workspace_cards.v2_subtitle"),
      body: t("workspace_cards.v2_body")
    },
    {
      title: t("workspace_cards.v3_title"),
      subtitle: t("workspace_cards.v3_subtitle"),
      body: t("workspace_cards.v3_body")
    }
  ];

  const services = [
    {
      title: t("services_list.web_title"),
      desc: t("services_list.web_desc"),
      icon: <Globe size={32} />
    },
    {
      title: t("services_list.backend_title"),
      desc: t("services_list.backend_desc"),
      icon: <Cpu size={32} />
    },
    {
      title: t("services_list.mobile_title"),
      desc: t("services_list.mobile_desc"),
      icon: <Smartphone size={32} />
    },
    {
      title: t("services_list.api_title"),
      desc: t("services_list.api_desc"),
      icon: <Code size={32} />
    },
    {
      title: t("services_list.erp_title"),
      desc: t("services_list.erp_desc"),
      icon: <Layout size={32} />
    },
    {
      title: t("services_list.uiux_title"),
      desc: t("services_list.uiux_desc"),
      icon: <Palette size={32} />
    }
  ];

  const products = [
    {
      name: "Skalway Gastro",
      status: t("products_list.gastro_status"),
      badgeColor: "var(--success)",
      type: t("products_list.gastro_type"),
      href: "https://gastro.skalway.com",
      cta: t("products_list.gastro_cta"),
      features: [
        t("products_list.gastro_features.realtime"),
        t("products_list.gastro_features.kds"),
        t("products_list.gastro_features.tables"),
        t("products_list.gastro_features.stock"),
        t("products_list.gastro_features.billing"),
        t("products_list.gastro_features.reports")
      ]
    },
    {
      name: "Skalway Pharm",
      status: t("products_list.pharm_status"),
      badgeColor: "var(--warning)",
      type: t("products_list.pharm_type"),
      href: "#contact",
      cta: t("products_list.pharm_cta"),
      features: [
        t("products_list.pharm_features.pos"),
        t("products_list.pharm_features.meds"),
        t("products_list.pharm_features.stock"),
        t("products_list.pharm_features.purchases"),
        t("products_list.pharm_features.receivables"),
        t("products_list.pharm_features.clinical")
      ]
    }
  ];

  const tech = [
    "Next.js (App Router)",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Laravel",
    "Flutter",
    "Bun",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "REST APIs"
  ];

  const differentiators = [
     t("diff_list.product"),
     t("diff_list.scalable"),
     t("diff_list.performance"),
     t("diff_list.uiux"),
     t("diff_list.support"),
     t("diff_list.enterprise")
   ];

  const experience = [
    {
      role: t("experience_section.jobs.0.role"),
      company: t("experience_section.jobs.0.company"),
      date: t("experience_section.jobs.0.date"),
      tasks: [
        t("experience_section.jobs.0.tasks.0"),
        t("experience_section.jobs.0.tasks.1"),
        t("experience_section.jobs.0.tasks.2"),
        t("experience_section.jobs.0.tasks.3")
      ]
    }
  ];

  const education = [
    {
      degree: t("education_section.items.0.degree"),
      school: t("education_section.items.0.school"),
      date: t("education_section.items.0.date")
    },
    {
      degree: t("education_section.items.1.degree"),
      school: t("education_section.items.1.school"),
      date: t("education_section.items.1.date")
    }
  ];

   const fadeUp = {
     initial: { opacity: 0, y: 20 },
     whileInView: { opacity: 1, y: 0 },
     viewport: { once: true, margin: "-40px" }
   };

  return (
    <>
      {/* Hero */}
      <section className="hero-section container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hero-shell"
        >
          <div className="hero-grid-bg" aria-hidden />

          <div className="hero-content">
            {/* Left side: Info + Social */}
            <div className="hero-info-wrapper">
              <div className="social-links">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com/in/momadevasconcelos" 
                  target="_blank" 
                  className="social-icon" 
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/momadevasconcelos" 
                  target="_blank" 
                  className="social-icon" 
                  title="GitHub"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="mailto:hello@vxcode.dev" 
                  className="social-icon" 
                  title="Email"
                >
                  <Mail size={20} />
                </motion.a>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="status-pill"
                  style={{ marginBottom: "1rem" }}
                >
                  <span className="dot" style={{ background: "var(--success)" }} />
                  {t("hero_badge")}
                </motion.div>
                
                <h1 className="section-title" style={{ minHeight: "1.2em" }}>
                  {displayedGreeting}
                  {!isDone && <span className="typewriter-cursor">|</span>}
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isDone ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="section-subtitle" 
                  style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--text)", marginBottom: "1rem" }}
                >
                  {t("hero_title")}
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isDone ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="section-subtitle"
                >
                  {t("hero_desc")}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isDone ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2.5rem" }}
                >
                  <motion.a 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact" 
                    className="btn btn-primary" 
                    style={{ padding: "1rem 2rem", fontSize: "1rem" }}
                  >
                    <Rocket size={18} />
                    Iniciar projeto
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="/cv.pdf" 
                    className="btn btn-outline" 
                    style={{ padding: "1rem 2rem", fontSize: "1rem" }}
                  >
                    <FileText size={18} />
                    Baixar CV
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Right side: Image */}
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              {/* Floating Animation */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ position: "relative", zIndex: 2 }}
              >
                <div className="decorative-pill" />
                
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 15,
                    rotateX: -10,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1200px",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ position: "relative", transformStyle: "preserve-3d" }}>
                    {/* Floating border/frame effect */}
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: "-10px",
                        border: "2px solid var(--primary)",
                        borderRadius: "2.75rem",
                        opacity: 0,
                        zIndex: 1,
                        transform: "translateZ(-20px)"
                      }}
                      whileHover={{ opacity: 0.3, scale: 1.02 }}
                    />

                    <motion.div style={{ transform: "translateZ(30px)" }}>
                      <Image 
                        src={foto}
                        alt="Momade Vasconcelos"
                        className="hero-image"
                        priority
                        placeholder="blur"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Workspace */}
      <section id="workspace" className="section container">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <p className="section-kicker">{t("workspace_kicker")}</p>
          <h2 className="section-title">{t("workspace_title")}</h2>
          <p className="section-subtitle">
            {t("workspace_desc")}
          </p>
        </motion.div>
        <div className="grid-3" style={{ marginTop: "2rem" }}>
          {workspaceSignals.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="glass"
              style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <p style={{ margin: 0, fontWeight: 600, fontSize: "1rem" }}>{item.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid-3" style={{ marginTop: "1.5rem" }}>
          {versionCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              className="glass"
              style={{ padding: "1.5rem" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>{card.title}</h3>
                <span className="status-pill">{card.subtitle}</span>
              </div>
              <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.9375rem" }}>
                {card.body}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section container">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <p className="section-kicker">{t("services_kicker")}</p>
          <h2 className="section-title">{t("services_title")}</h2>
          <p className="section-subtitle">
            {t("services_desc")}
          </p>
        </motion.div>
        
        <div className="services-grid" style={{ marginTop: "3rem" }}>
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass service-card"
            >
              <div className="service-icon">{s.icon}</div>
              <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>{s.title}</h3>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="section container">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <p className="section-kicker">{t("products_kicker")}</p>
          <h2 className="section-title">{t("products_title")}</h2>
          <p className="section-subtitle">
            {t("products_desc")}
          </p>
        </motion.div>
        <div className="grid-2" style={{ marginTop: "3rem" }}>
          {products.map((product, idx) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "0.5rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>{product.name}</h3>
                <span className="status-pill">
                  <span className="dot" style={{ background: product.badgeColor }} />
                  {product.status}
                </span>
              </div>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "1rem" }}>{product.type}</p>
              
              <div style={{ flex: 1 }}>
                <ul className="feature-list">
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <Link 
                href={product.href} 
                className="btn btn-primary" 
                style={{ marginTop: "1.5rem", width: "fit-content" }}
                target={product.href.startsWith("http") ? "_blank" : undefined}
                rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {product.cta}
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* About Me */}
      <section id="about-me" className="section container">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <p className="section-kicker">{t("about_me_section.title")}</p>
          <div className="glass" style={{ padding: "2rem", marginTop: "1rem", width: "100%", boxSizing: "border-box" }}>
            <p className="section-subtitle" style={{ fontSize: "1.1rem", marginBottom: "1.5rem", maxWidth: "100%", lineHeight: "1.6" }}>
              {t("about_me_section.p1")}
            </p>
            <p className="section-subtitle" style={{ fontSize: "1.1rem", marginBottom: "1.5rem", maxWidth: "100%", lineHeight: "1.6" }}>
              {t("about_me_section.p2")}
            </p>
            <p className="section-subtitle" style={{ fontSize: "1.1rem", maxWidth: "100%", lineHeight: "1.6" }}>
              {t("about_me_section.p3")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="section container">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <p className="section-kicker">{t("experience_section.title")}</p>
          <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
            {experience.map((job, idx) => (
              <motion.article
                key={job.role + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass metric-card"
                style={{ padding: "1.75rem" }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.3rem", fontWeight: 700 }}>{job.role}</h3>
                    <p style={{ margin: "0.25rem 0 0", color: "var(--primary)", fontWeight: 600 }}>{job.company}</p>
                  </div>
                  <span className="status-pill">{job.date}</span>
                </div>
                <ul className="feature-list">
                  {job.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="section container">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <p className="section-kicker">{t("education_section.title")}</p>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            {education.map((edu, idx) => (
              <motion.article
                key={edu.degree + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass metric-card"
                style={{ padding: "1.5rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem", gap: "1rem" }}>
                  <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700 }}>{edu.degree}</h3>
                  <span className="status-pill" style={{ whiteSpace: "nowrap" }}>{edu.date}</span>
                </div>
                <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.9375rem" }}>{edu.school}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About + Stack */}
      <section id="sobre" className="section container">
        <div className="grid-2">
          <motion.article {...fadeUp}>
            <p className="section-kicker">{t("about_company_kicker")}</p>
            <div className="glass" style={{ padding: "1.75rem", marginTop: "1rem" }}>
              <h2 className="section-title" style={{ fontSize: "1.5rem" }}>{t("about_company_title")}</h2>
              <p className="section-subtitle" style={{ marginTop: "0.5rem" }}>
                {t("about_company_desc")}
              </p>
            </div>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <p className="section-kicker">Stack</p>
            <div className="glass metric-card" style={{ padding: "1.35rem", marginTop: "1rem" }}>
              <h2 className="section-title" style={{ fontSize: "1.65rem" }}>
                {t("stack_title")}
              </h2>
              <div className="stack-chips" style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", 
                gap: "0.75rem", 
                marginTop: "1.5rem" 
              }}>
                {tech.map((item, idx) => (
                  <motion.div 
                    key={item} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    whileHover={{ x: 10, backgroundColor: "var(--primary-light)", color: "var(--primary)" }}
                    className="status-pill" 
                    style={{ 
                      width: "100%", 
                      justifyContent: "flex-start", 
                      padding: "0.75rem 1.25rem",
                      fontSize: "1rem",
                      cursor: "default"
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Diferencial */}
      <section className="section container">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <p className="section-kicker">{t("diff_kicker")}</p>
          <div className="glass" style={{ padding: "1.35rem", marginTop: "1rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.65rem" }}>
              {t("diff_title")}
            </h2>
            <div className="grid-2" style={{ marginTop: "1rem" }}>
              {differentiators.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass metric-card"
                  style={{ padding: "0.85rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <span className="dot" style={{ background: "var(--primary)", flexShrink: 0 }} />
                  <span>{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contacto */}
      <section id="contact" className="section container">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }} className="glass" style={{ padding: "1.45rem" }}>
          <p className="section-kicker">{t("contact_kicker")}</p>
          <h2 className="section-title" style={{ fontSize: "1.65rem" }}>
            {t("contact_title")}
          </h2>
          <p className="section-subtitle">
            {t("contact_desc")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "1.1rem" }}>
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
        </motion.div>
      </section>

      <motion.a
        href="https://wa.me/SEU_NUMERO_AQUI"
        target="_blank"
        rel="noreferrer"
        className="btn fab-founder"
        style={{ 
          background: "#25D366", 
          color: "#fff", 
          borderRadius: "50%", 
          width: "3.5rem", 
          height: "3.5rem", 
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)"
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </>
  );
}

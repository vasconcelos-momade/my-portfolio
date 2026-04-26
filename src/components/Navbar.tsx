"use client";

import { Link } from "../i18n/routing";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const navLinks = [
  { label: "nav_home", href: "/#workspace" },
  { label: "nav_projects", href: "/#produtos" },
  { label: "experience_section.title", href: "/#experience" },
  { label: "education_section.title", href: "/#education" },
  { label: "nav_about", href: "/#about-me" },
  { label: "nav_contact", href: "/#contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    // Disable transitions temporarily
    const css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode(`* {
       -webkit-transition: none !important;
       -moz-transition: none !important;
       -o-transition: none !important;
       -ms-transition: none !important;
       transition: none !important;
    }`));
    document.head.appendChild(css);

    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    // Force a reflow
    window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="nav-header">
      <div className="nav-blur" aria-hidden />
      <div className="container-nav" style={{ position: "relative" }}>
        <nav
          className="glass navbar-glass"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.6rem 1rem",
            position: "relative",
            zIndex: 10
          }}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="nav-link" 
            style={{ fontWeight: 800, letterSpacing: "-0.04em", fontSize: "1.1rem", color: "var(--text)" }}
            onClick={closeMobileMenu}
          >
            vasconcelos.dev
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    const id = link.href.replace("/#", "");
                    const element = document.getElementById(id);
                    if (element) {
                      const offset = 80; // Adjust for navbar height
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                      
                      // Update URL without hash
                      window.history.pushState({}, "", window.location.pathname);
                    }
                  }
                  closeMobileMenu();
                }}
              >
                {t(link.label)}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <LanguageSwitcher />
            
            <button 
              onClick={toggleTheme} 
              className="btn btn-outline" 
              type="button" 
              style={{ padding: "0.45rem", borderRadius: "0.6rem" }}
              aria-label={t("aria.toggle_theme")}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={toggleMobileMenu}
              aria-label={t("aria.toggle_menu")}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="mobile-dropdown"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 5,
                padding: "0 inherit" // Let it inherit container padding
              }}
            >
              <div 
                className="glass" 
                style={{ 
                  padding: "0.75rem", 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "0.15rem",
                  boxShadow: "var(--shadow-md)",
                  maxHeight: "80vh",
                  overflowY: "auto",
                  width: "100%",
                  borderRadius: "1rem",
                  marginTop: "0.5rem"
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link"
                    style={{ fontSize: "1.1rem", padding: "0.8rem 1rem", width: "100%" }}
                    onClick={(e) => {
                      if (link.href.startsWith("/#")) {
                        e.preventDefault();
                        const id = link.href.replace("/#", "");
                        const element = document.getElementById(id);
                        if (element) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                          window.history.pushState({}, "", window.location.pathname);
                        }
                      }
                      closeMobileMenu();
                    }}
                  >
                    {t(link.label)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import styles from "./Nav.module.css";

const SECTIONS = [
  { id: "why-me", label: "Why me" },
  { id: "audiences", label: "Audiences" },
  { id: "plan", label: "90-day plan" },
  { id: "measurement", label: "Measurement" },
  { id: "campaigns", label: "Campaigns" },
  { id: "channel-mix", label: "Channel mix" },
];

const DEMOS = [
  { href: "/demo/legal", label: "Legal teams" },
  { href: "/demo/startups", label: "Startups" },
  { href: "/demo/media", label: "Newsrooms" },
  { href: "/demo/compare", label: "vs Google Workspace" },
];

/**
 * `variant="home"` gets in-page anchors and scroll-spy; the demo landing pages
 * get a simpler bar that links back to the pitch.
 */
export default function Nav({ variant = "home" }: { variant?: "home" | "demo" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the last section whose top has passed the nav wins.
  useEffect(() => {
    if (variant !== "home") return;
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (n): n is HTMLElement => Boolean(n)
    );
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -55% 0px", threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [variant]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Wordmark />
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.context}>B2B Pitch</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          {variant === "home" ? (
            <ul className={styles.navList}>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`${styles.navLink} ${
                      active === s.id ? styles.navLinkActive : ""
                    }`}
                    aria-current={active === s.id ? "true" : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li className={styles.hasMenu}>
                <button className={styles.navLink} aria-haspopup="true">
                  Landing pages
                  <svg
                    className={styles.chevron}
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 4.5 6 7.5 9 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className={styles.menu} role="menu">
                  {DEMOS.map((d) => (
                    <Link key={d.href} href={d.href} className={styles.menuItem}>
                      {d.label}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          ) : (
            <ul className={styles.navList}>
              {DEMOS.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className={styles.navLink}>
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>

        <div className={styles.actions}>
          <a
            className={`btn btnPrimary ${styles.cta}`}
            href="mailto:thomasgermain5@proton.me?subject=Performance%20Marketing%20Manager%20B2B"
          >
            Contact Thomas
          </a>
          <button
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={open ? styles.burgerOpen : ""} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.sheet}>
          <ul className={styles.sheetList}>
            {variant === "home" &&
              SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={() => setOpen(false)}>
                    {s.label}
                  </a>
                </li>
              ))}
            <li className={styles.sheetLabel}>Demo landing pages</li>
            {DEMOS.map((d) => (
              <li key={d.href}>
                <Link href={d.href} onClick={() => setOpen(false)}>
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import Wordmark from "./Wordmark";
import styles from "./Footer.module.css";

const LINKS = [
  { href: "https://adsfellow.app", label: "adsfellow.app", external: true },
  { href: "https://b2blast.com", label: "b2blast.com", external: true },
  {
    href: "https://linkedin.com/in/thomasgermain5",
    label: "linkedin.com/in/thomasgermain5",
    external: true,
  },
];

const PAGES = [
  { href: "/demo/legal", label: "Proton Mail for Legal Teams" },
  { href: "/demo/startups", label: "Proton Workspace for Startups" },
  { href: "/demo/media", label: "Proton VPN for Newsrooms" },
  { href: "/demo/compare", label: "Proton vs Google Workspace" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <Wordmark />
            <p className={styles.tagline}>
              A B2B performance marketing pitch, built for the Performance
              Marketing Manager B2B role in Barcelona.
            </p>
            <a
              className={styles.email}
              href="mailto:thomasgermain5@proton.me?subject=Performance%20Marketing%20Manager%20B2B"
            >
              thomasgermain5@proton.me
            </a>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Demo landing pages</h2>
            <ul>
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Built by Thomas</h2>
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Thomas Germain — Barcelona, 2026</p>
          <p className={styles.disclaimer}>
            An independent pitch by a job applicant. Not affiliated with,
            endorsed by, or published by Proton AG. Product names, pricing and
            positioning were verified against proton.me in July 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}

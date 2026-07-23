import { PROTON_FACTS } from "@/lib/content";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>
          Performance Marketing Manager B2B · Barcelona
        </p>

        <h1 className={styles.title}>
          Proton B2B performance marketing strategy
        </h1>

        <p className={styles.subtitle}>A hands-on pitch by Thomas Germain</p>

        <p className={styles.baseline}>
          How I would acquire, convert and retain B2B customers for Proton
          Workspace — while practicing what we preach on privacy.
        </p>

        <div className={styles.actions}>
          <a href="#why-me" className="btn btnPrimary">
            See the strategy
            <svg viewBox="0 0 16 16" className={styles.arrow} aria-hidden="true">
              <path
                d="M8 3v10M3.5 8.5 8 13l4.5-4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="mailto:thomasgermain5@proton.me?subject=Performance%20Marketing%20Manager%20B2B"
            className="btn btnSecondary"
          >
            thomasgermain5@proton.me
          </a>
        </div>

        <p className={styles.note}>
          Built in Next.js with no third-party trackers, no cookie banner and no
          analytics scripts. Every Proton price and feature on this site was
          verified against proton.me in July 2026.
        </p>
      </div>

      <div className={styles.ticker}>
        <div className={`container ${styles.tickerInner}`}>
          <span>{PROTON_FACTS.businesses} businesses</span>
          <span aria-hidden="true">·</span>
          <span>{PROTON_FACTS.accounts} accounts</span>
          <span aria-hidden="true">·</span>
          <span>{PROTON_FACTS.jurisdiction}</span>
          <span aria-hidden="true">·</span>
          <span>{PROTON_FACTS.seats}</span>
        </div>
      </div>
    </section>
  );
}

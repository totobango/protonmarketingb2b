import styles from "./Wordmark.module.css";

/**
 * A homage to Proton's wordmark, set in the site's own type rather than using
 * Proton's trademarked logo asset. This is a candidate's pitch site, not a
 * Proton property, and the footer says so explicitly.
 */
export default function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className={`${styles.mark} ${tone === "dark" ? styles.dark : ""}`}>
      <span className={styles.glyph} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" role="presentation">
          <path
            d="M4 20V6.4A2.4 2.4 0 0 1 6.4 4h7.3a5.6 5.6 0 0 1 0 11.2H8.6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={styles.text}>Proton</span>
    </span>
  );
}

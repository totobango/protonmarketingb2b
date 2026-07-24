import styles from "./DataFlow.module.css";

const STAGES = [
  {
    where: "Visitor's browser",
    what: "Consented event",
    detail: "No third-party pixel loads. Nothing fires before consent.",
  },
  {
    where: "proton.me subdomain",
    what: "Strip, hash, minimise",
    detail: "Proton's own server decides field by field what may leave.",
    pivot: true,
  },
  {
    where: "HubSpot",
    what: "System of record",
    detail: "First-touch UTMs on the contact, lifecycle stage to closed-won.",
  },
  {
    where: "Google · LinkedIn · Meta",
    what: "Conversion APIs",
    detail: "SHA-256 hashed identifiers only, deduplicated against the browser.",
  },
];

const NEVER = [
  "Raw email addresses",
  "Third-party cookies",
  "Fingerprinting signals",
  "Bought audience data",
];

/**
 * The measurement stack drawn rather than described. Laid out in HTML so the
 * labels reflow and stay selectable; SVG is used only for the connectors.
 */
export default function DataFlow() {
  return (
    <figure className={styles.figure}>
      <div className={styles.flow} role="group" aria-label="Privacy-first measurement data flow">
        {STAGES.map((s, i) => (
          <div className={styles.stageWrap} key={s.where}>
            <div className={`${styles.stage} ${s.pivot ? styles.pivot : ""}`}>
              <span className={styles.where}>{s.where}</span>
              <span className={styles.what}>{s.what}</span>
              <span className={styles.detail}>{s.detail}</span>
            </div>
            {i < STAGES.length - 1 && (
              <svg
                className={styles.arrow}
                viewBox="0 0 32 16"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M1 8h27m-5.5-5.5L28 8l-5.5 5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className={styles.never}>
        <span className={styles.neverLabel}>Never leaves Proton</span>
        <ul>
          {NEVER.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>

      <figcaption className={styles.caption}>
        Every field that crosses the second box has to justify itself. That
        boundary is the whole design.
      </figcaption>
    </figure>
  );
}

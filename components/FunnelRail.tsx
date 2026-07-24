import styles from "./FunnelRail.module.css";

const STEPS = [
  { stage: "Impression", metric: "CPM", source: "platform" },
  { stage: "Click", metric: "CPC", source: "platform" },
  { stage: "Lead", metric: "CPL", source: "platform" },
  { stage: "MQL", metric: "Cost per MQL", source: "crm" },
  { stage: "SQL", metric: "MQL to SQL rate", source: "crm", callout: "13%" },
  { stage: "Closed won", metric: "CAC payback", source: "crm" },
] as const;

/**
 * Where each metric actually governs, and where the source of truth changes
 * hands from the ad platform to the CRM. The only rate shown is the one that
 * survived sourcing; the rest are deliberately unquantified.
 */
export default function FunnelRail() {
  return (
    <figure className={styles.figure}>
      <ol className={styles.rail}>
        {STEPS.map((s) => (
          <li key={s.stage} className={styles[s.source]}>
            <span className={styles.stage}>{s.stage}</span>
            <span className={styles.metric}>{s.metric}</span>
            {"callout" in s && s.callout && (
              <span className={styles.callout}>{s.callout}</span>
            )}
          </li>
        ))}
      </ol>

      <div className={styles.keys}>
        <span className={styles.keyPlatform}>Ad platform reports it</span>
        <span className={styles.keyCrm}>HubSpot is the source of truth</span>
      </div>

      <figcaption className={styles.caption}>
        The handover point is where most B2B reporting breaks. Everything left
        of it is cheap to optimise and easy to fake; everything right of it is
        what the business actually pays for. The 13% is the only conversion
        rate on this page I could trace to a named source (First Page Sage,
        2026), and it is roughly half what most B2B decks assume.
      </figcaption>
    </figure>
  );
}

import Reveal from "./Reveal";
import styles from "./SectionHead.module.css";

type Props = {
  title: string;
  lead?: string;
  align?: "left" | "center";
};

/**
 * Deliberately has no eyebrow slot. Proton's own sections lead with the serif
 * heading and let whitespace plus the alternating background do the separating;
 * a tracked uppercase kicker above every section is the tell we are avoiding.
 */
export default function SectionHead({ title, lead, align = "left" }: Props) {
  return (
    <Reveal
      className={`${styles.head} ${align === "center" ? styles.center : ""}`}
    >
      <h2 className={styles.title}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </Reveal>
  );
}

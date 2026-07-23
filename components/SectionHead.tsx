import Reveal from "./Reveal";
import styles from "./SectionHead.module.css";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
}: Props) {
  return (
    <Reveal className={`${styles.head} ${align === "center" ? styles.center : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`h2 ${styles.title}`}>{title}</h2>
      {lead && <p className={`lead ${styles.lead}`}>{lead}</p>}
    </Reveal>
  );
}

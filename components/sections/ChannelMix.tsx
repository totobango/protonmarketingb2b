import { CHANNELS } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import styles from "./ChannelMix.module.css";

export default function ChannelMix() {
  return (
    <section id="channel-mix" className="section sectionAlt">
      <div className="container">
        <SectionHead
          eyebrow="Channel mix"
          title="Where I would put the first euro, and why"
          lead="A starting allocation, not a conclusion. The whole point of the 90-day plan is to earn the right to change these numbers — the split at day 90 should look different from the split at day 1, and I would expect to defend why."
        />

        <Reveal className={styles.barWrap}>
          <div
            className={styles.bar}
            role="img"
            aria-label={CHANNELS.map((c) => `${c.name} ${c.share}%`).join(", ")}
          >
            {CHANNELS.map((c) => (
              <span
                key={c.name}
                className={styles.barSeg}
                style={{ flexGrow: c.share, background: c.accent }}
              >
                <span className={styles.barPct}>{c.share}%</span>
              </span>
            ))}
          </div>
        </Reveal>

        <div className={styles.list}>
          {CHANNELS.map((c, i) => (
            <Reveal
              as="article"
              key={c.name}
              delay={i * 60}
              className={styles.row}
            >
              <div className={styles.rowHead}>
                <span
                  className={styles.swatch}
                  style={{ background: c.accent }}
                  aria-hidden="true"
                />
                <h3 className={styles.name}>{c.name}</h3>
                <span className={styles.share}>{c.share}%</span>
              </div>
              <p className={styles.role}>{c.role}</p>
              <p className={styles.why}>{c.why}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.caveat}>
          <p>
            <strong>What would change this split.</strong> If the geo holdout in
            phase three shows Google Search is largely harvesting demand Proton
            already earned through brand and press, that 40% is too high and the
            money belongs in demand creation. If LinkedIn produces leads that
            never reach SQL, its 30% is buying job titles rather than buyers. I
            would rather present that finding in month three than defend the
            original slide.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { PHASES } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import styles from "./Plan.module.css";

export default function Plan() {
  return (
    <section id="plan" className="section">
      <div className="container">
        <SectionHead
          title="Audit before rebuilding. Rebuild before scaling."
          lead="Spending more on a funnel you cannot measure is how B2B budgets disappear. This order is deliberate: I want a baseline nobody can dispute before I touch a single campaign."
        />

        <ol className={styles.timeline}>
          {PHASES.map((p, i) => (
            <Reveal as="li" key={p.window} delay={i * 90} className={styles.phase}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.dot} />
                {i < PHASES.length - 1 && <span className={styles.line} />}
              </div>

              <div className={styles.content}>
                <header className={styles.header}>
                  <span className={styles.window}>{p.window}</span>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.thesis}>{p.thesis}</p>
                </header>

                <div className={styles.streams}>
                  {p.workstreams.map((w) => (
                    <div key={w.label} className={styles.stream}>
                      <h4 className={styles.streamLabel}>{w.label}</h4>
                      <ul>
                        {w.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className={styles.deliverable}>
                  <span>Deliverable</span>
                  {p.deliverable}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

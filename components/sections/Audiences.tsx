import { AUDIENCES, SEGMENT_STATS, TIMELINE } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import styles from "./Audiences.module.css";

export default function Audiences() {
  return (
    <section id="audiences" className="section sectionAlt">
      <div className="container">
        <SectionHead
          title="Six products, six buyers, one funnel each"
          lead="Proton for Business is not one audience. A managing partner buying Mail Essentials at €7.99 and a CTO evaluating Workspace Premium at €24.99 need different proof, different channels and different landing pages."
        />

        <Reveal className={styles.context}>
          <ul className={styles.stats}>
            {SEGMENT_STATS.map((s) => (
              <li key={s.label}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.releases}>
            <h3 className={styles.releasesTitle}>Recent releases</h3>
            <ul>
              {TIMELINE.map((t) => (
                <li key={t.date}>
                  <time>{t.date}</time>
                  {t.event}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className={styles.contextNote}>
          Proton&apos;s own published customer mix and shipping cadence. The
          segments below follow where the customers already are.
        </p>

        <div className={styles.list}>
          {AUDIENCES.map((a, i) => (
            <Reveal
              as="article"
              key={a.product}
              delay={Math.min(i, 2) * 60}
              className={styles.row}
            >
              <div className={styles.ident}>
                <span
                  className={styles.bar}
                  style={{ background: a.accent }}
                  aria-hidden="true"
                />
                <h3 className={styles.product}>{a.product}</h3>
                <p className={styles.plan}>{a.plan}</p>
                <p className={styles.price}>{a.price}</p>
                <p className={styles.priceNote}>{a.priceNote}</p>
              </div>

              <div className={styles.body}>
                <p className={styles.pain}>{a.pain}</p>
                <p className={styles.message}>{a.message}</p>

                <dl className={styles.meta}>
                  <div>
                    <dt>Buying committee</dt>
                    <dd>{a.personas.join(", ")}</dd>
                  </div>
                  <div>
                    <dt>Industries</dt>
                    <dd>{a.industries.join(", ")}</dd>
                  </div>
                  <div>
                    <dt>Company size</dt>
                    <dd>{a.size}</dd>
                  </div>
                  <div>
                    <dt>Best channels</dt>
                    <dd>{a.channels.join(" · ")}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

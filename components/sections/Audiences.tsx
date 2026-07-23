import { AUDIENCES, SEGMENT_STATS, TIMELINE } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import styles from "./Audiences.module.css";

export default function Audiences() {
  return (
    <section id="audiences" className="section sectionAlt">
      <div className="container">
        <SectionHead
          eyebrow="Audience mapping"
          title="Six products, six buyers, one funnel each"
          lead="Proton for Business is not one audience. A managing partner buying Mail Essentials at €7.99 and a CTO evaluating Workspace Premium at €24.99 need different proof, different channels and different landing pages."
        />

        <div className={styles.stats}>
          {SEGMENT_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </Reveal>
          ))}
        </div>
        <p className={styles.statsNote}>
          Proton&apos;s own published customer mix — the segments below follow
          where the customers already are.
        </p>

        <Reveal className={styles.timeline}>
          <span className={styles.timelineLabel}>Recent releases</span>
          <ul>
            {TIMELINE.map((t) => (
              <li key={t.date}>
                <time>{t.date}</time>
                {t.event}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.grid}>
          {AUDIENCES.map((a, i) => (
            <Reveal
              as="article"
              key={a.product}
              delay={(i % 3) * 70}
              className={styles.card}
            >
              <header className={styles.head}>
                <span
                  className={styles.dot}
                  style={{ background: a.accent }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className={styles.product}>{a.product}</h3>
                  <p className={styles.plan}>{a.plan}</p>
                </div>
              </header>

              <div className={styles.price}>
                <span className={styles.priceValue}>{a.price}</span>
                <span className={styles.priceNote}>{a.priceNote}</span>
              </div>

              <dl className={styles.meta}>
                <div>
                  <dt>Personas</dt>
                  <dd>
                    <ul className={styles.tags}>
                      {a.personas.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>Industries</dt>
                  <dd>{a.industries.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Company size</dt>
                  <dd>{a.size}</dd>
                </div>
                <div>
                  <dt>Pain point</dt>
                  <dd>{a.pain}</dd>
                </div>
              </dl>

              <blockquote
                className={styles.message}
                style={{ borderColor: a.accent }}
              >
                {a.message}
              </blockquote>

              <footer className={styles.channels}>
                <span className={styles.channelsLabel}>Best channels</span>
                <ul>
                  {a.channels.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

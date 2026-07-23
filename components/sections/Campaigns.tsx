import Link from "next/link";
import { CAMPAIGNS } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import styles from "./Campaigns.module.css";

export default function Campaigns() {
  return (
    <section id="campaigns" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Campaign concepts"
          title="Four campaigns I would brief in week one"
          lead="Each one starts from something the buyer already half-believes and makes it specific. Four of them have a working landing page on this site — built, not mocked up."
        />

        <div className={styles.grid}>
          {CAMPAIGNS.map((c, i) => (
            <Reveal
              as="article"
              key={c.n}
              delay={(i % 2) * 80}
              className={styles.card}
            >
              <div className={styles.top}>
                <span className={styles.n} style={{ color: c.accent }}>
                  {c.n}
                </span>
                <h3 className={styles.headline}>{c.headline}</h3>
              </div>

              <p className={styles.audience}>{c.audience}</p>

              <p className={styles.insight}>{c.insight}</p>

              <blockquote
                className={styles.message}
                style={{ borderColor: c.accent }}
              >
                {c.message}
              </blockquote>

              <dl className={styles.meta}>
                <div>
                  <dt>Call to action</dt>
                  <dd>{c.cta}</dd>
                </div>
                <div>
                  <dt>Channels</dt>
                  <dd>{c.channels.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Primary KPI</dt>
                  <dd>{c.kpi}</dd>
                </div>
              </dl>

              {c.demo && (
                <Link href={c.demo.href} className={styles.demoLink}>
                  {c.demo.label}
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M3.5 8h9M8.5 4l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CREDENTIALS } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import styles from "./WhyMe.module.css";

export default function WhyMe() {
  return (
    <section id="why-me" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Why me"
          title="Six years inside the platforms Proton buys on"
          lead="I have sold ads at Google, LinkedIn and Pinterest, managed the agency on both sides of the brief, and built products of my own. Here is the relevant part."
        />

        <div className={styles.grid}>
          {CREDENTIALS.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={i * 70}
              className={styles.card}
            >
              <span
                className={styles.rule}
                style={{ background: c.accent }}
                aria-hidden="true"
              />
              <p className={styles.claim} style={{ color: c.accentInk }}>
                {c.claim}
              </p>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.body}>{c.body}</p>
              <ul className={styles.proof}>
                {c.proof.map((p) => (
                  <li key={p}>
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        d="m3.5 8.5 3 3 6-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

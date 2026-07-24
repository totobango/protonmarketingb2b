import { CREDENTIALS } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import styles from "./WhyMe.module.css";

export default function WhyMe() {
  return (
    <section id="why-me" className="section">
      <div className="container">
        <SectionHead
          title="Six years inside the platforms Proton buys on"
          lead="I have sold ads at Google, LinkedIn and Pinterest, managed the agency on both sides of the brief, and built products of my own. Here is the relevant part."
        />

        <dl className={styles.list}>
          {CREDENTIALS.map((c, i) => (
            <Reveal as="div" key={c.title} delay={i * 60} className={styles.row}>
              <dt className={styles.term}>
                <span className={styles.claim} style={{ color: c.accentInk }}>
                  {c.claim}
                </span>
                <span className={styles.title}>{c.title}</span>
              </dt>

              <dd className={styles.detail}>
                <p className={styles.body}>{c.body}</p>
                <ul className={styles.proof}>
                  {c.proof.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

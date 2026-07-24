import { BENCHMARKS } from "@/lib/content";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import FunnelRail from "../FunnelRail";
import styles from "./Benchmarks.module.css";

const CONFIDENCE_LABEL: Record<string, string> = {
  strong: "Well sourced",
  medium: "Directional",
  weak: "Treat with caution",
};

export default function Benchmarks() {
  return (
    <section id="benchmarks" className="section">
      <div className="container">
        <SectionHead
          title="The numbers I would forecast against, and how far I trust each one"
          lead="Most B2B benchmark decks quote figures that trace back to a blog post citing another blog post. I checked these. Where a number is shaky I have said so, because a forecast built on a bad benchmark fails in month two, in public."
        />

        <FunnelRail />

        <Reveal className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className={styles.caption}>
              Reference benchmarks for B2B SaaS paid acquisition
            </caption>
            <thead>
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">Reference range</th>
                <th scope="col">Source</th>
                <th scope="col">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {BENCHMARKS.map((b) => (
                <tr key={b.metric}>
                  <th scope="row">{b.metric}</th>
                  <td className={styles.value}>{b.value}</td>
                  <td className={styles.source}>{b.source}</td>
                  <td>
                    <span
                      className={`${styles.badge} ${styles[b.confidence]}`}
                    >
                      {CONFIDENCE_LABEL[b.confidence]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className={styles.note}>
          <h3 className={styles.noteTitle}>How I would actually use these</h3>
          <p>
            Not as targets. External benchmarks are for sanity-checking a
            forecast before Proton has its own data, and for spotting when
            something is off by an order of magnitude rather than a few percent.
            Once the first full quarter of CRM-attributed pipeline exists, Proton
            benchmarks against Proton, segmented by product and seat band,
            because a €4.99 Pass seat and a €24.99 Workspace Premium seat should
            never share a CPL target.
          </p>
          <p>
            The number I would defend hardest is <strong>CAC payback</strong>,
            not CPL. CPL rewards whoever buys the cheapest form fill; payback
            keeps the whole funnel honest, and it is the one the Performance
            Marketing Lead has to take upward.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

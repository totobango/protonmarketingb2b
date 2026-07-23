import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import styles from "./Measurement.module.css";

const LAYERS = [
  {
    n: "01",
    title: "First-party server-side tagging",
    what:
      "Tags fire from a server endpoint on a Proton-owned subdomain instead of from the visitor's browser. Proton decides what leaves that server, field by field, before any platform sees it.",
    fixes: [
      "Ad blockers and tracking-prevention stop removing legitimate conversion data",
      "One controlled place to strip, hash or drop a field before it reaches a vendor",
      "Page weight drops — no vendor scripts loading in the browser",
    ],
    limit:
      "It does not create immortal cookies. Chrome caps any cookie at 400 days, and Safari still limits script-set cookies to 7 days — and treats CNAME-cloaked server endpoints the same way. A genuinely first-party server-set cookie helps; claiming server-side tagging alone buys 400-day identity on every browser is wrong, and Proton's Ad Tech team would spot it immediately.",
  },
  {
    n: "02",
    title: "Conversion APIs, sending less on purpose",
    what:
      "Server-to-server conversion events to Google, LinkedIn and Meta: hashed identifiers only, deduplicated against browser events, sent only for users who consented.",
    fixes: [
      "Recovers signal the browser drops, without a third-party cookie",
      "Email is SHA-256 hashed and normalised before it leaves Proton's infrastructure",
      "Offline conversion import lets the platforms optimise toward qualified pipeline, not raw form fills",
    ],
    limit:
      "Match rates are never 100%, and a hash is a pseudonym rather than anonymity. The discipline is to send the minimum field set that still lets bidding work — and to be able to explain, in one sentence, why every field is there.",
  },
  {
    n: "03",
    title: "CRM as the single source of truth",
    what:
      "HubSpot holds the record, not the ad platforms. UTMs are captured on first touch and persisted on the contact; lifecycle stages carry the lead from MQL through SQL to closed-won.",
    fixes: [
      "One number per channel that finance and the Lead both recognise",
      "Reporting on pipeline and revenue instead of platform-claimed conversions",
      "Kills the double-counting where three platforms all claim the same deal",
    ],
    limit:
      "Last-touch and first-touch both lie in a B2B cycle with a buying committee and a multi-month consideration window. The CRM tells you what is real; it does not by itself tell you what was causal.",
  },
  {
    n: "04",
    title: "Incrementality as the tiebreaker",
    what:
      "Geo holdouts, conversion lift tests and clean A/B splits to answer the only question that matters: would this pipeline have existed without the spend?",
    fixes: [
      "Separates demand Proton created from demand it merely harvested",
      "Settles brand-versus-competitor bidding arguments with evidence",
      "Gives a defensible basis for moving budget between channels",
    ],
    limit:
      "Tests need real spend and enough time to clear the sales cycle — a four-week holdout on a three-month cycle measures leads, not revenue. I would run few tests, on the largest line items, and treat the rest as directional.",
  },
];

export default function Measurement() {
  return (
    <section id="measurement" className="section sectionAlt">
      <div className="container">
        <SectionHead
          eyebrow="Privacy-first measurement"
          title="The marketing has to practice what the product preaches"
          lead="Proton cannot run its funnel on the surveillance stack it sells against. That is a constraint, and it is also the most interesting part of this job — it forces measurement that is designed rather than installed."
        />

        <div className={styles.stack}>
          {LAYERS.map((l, i) => (
            <Reveal
              as="article"
              key={l.n}
              delay={i * 70}
              className={styles.layer}
            >
              <div className={styles.layerHead}>
                <span className={styles.n}>{l.n}</span>
                <h3 className={styles.title}>{l.title}</h3>
              </div>

              <div className={styles.layerBody}>
                <p className={styles.what}>{l.what}</p>

                <ul className={styles.fixes}>
                  {l.fixes.map((f) => (
                    <li key={f}>
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
                      {f}
                    </li>
                  ))}
                </ul>

                <p className={styles.limit}>
                  <span>Honest limitation</span>
                  {l.limit}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.test}>
          <h3 className={styles.testTitle}>The hypocrisy test</h3>
          <p className={styles.testLead}>
            Before any tag ships, one question: could Proton publish exactly what
            this does on its own blog without embarrassment? If not, it does not
            ship. In practice that rules out four things most B2B teams do by
            default.
          </p>
          <ul className={styles.testList}>
            <li>
              <strong>No fingerprinting vendors.</strong> Several
              &ldquo;cookieless&rdquo; tools are simply harder to opt out of than
              cookies. That is worse, not better.
            </li>
            <li>
              <strong>No firing before consent.</strong> A banner that technically
              collects consent while nudging people through it is a dark pattern,
              and Proton has criticised them in public.
            </li>
            <li>
              <strong>No bought third-party audiences.</strong> Data-broker
              enrichment would be indefensible for this company at any CPL.
            </li>
            <li>
              <strong>No unhashed personal data leaving Proton.</strong> Hash,
              minimise, and drop every field that cannot justify itself.
            </li>
          </ul>
          <p className={styles.testClose}>
            The honest trade-off: this stack measures with less granularity than
            a conventional one. You give up some attribution precision and buy it
            back with experiment design. For Proton that is not a compromise —
            it is the only version of the job that is credible.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

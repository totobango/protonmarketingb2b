import { CONTACT } from "@/lib/content";
import Reveal from "../Reveal";
import styles from "./Closing.module.css";

export default function Closing() {
  return (
    <section className={styles.closing}>
      <div className="container">
        <Reveal className={styles.inner}>
          <p className="eyebrow">One last thing</p>
          <h2 className={styles.title}>
            I built this instead of writing a cover letter
          </h2>
          <p className={styles.body}>
            Everything here is checkable. The prices and features came from
            proton.me in July 2026, the design tokens were read out of
            Proton&apos;s own stylesheets, and the four landing pages are real
            pages with working forms rather than screenshots. If a number on this
            site is wrong, I would genuinely like to know which one.
          </p>
          <p className={styles.body}>
            The role asks for someone who is comfortable in the campaign manager
            and the budget spreadsheet, and who pushes back on funnels that
            don&apos;t convert. This site is my argument that I am that person,
            and that I would rather show the work than describe it.
          </p>

          <div className={styles.actions}>
            <a
              className="btn btnPrimary"
              href={`mailto:${CONTACT.email}?subject=Performance%20Marketing%20Manager%20B2B`}
            >
              {CONTACT.email}
            </a>
            <a
              className="btn btnSecondary"
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>

          <p className={styles.sig}>
            Thomas Germain, {CONTACT.location}, already here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";
import LeadForm, { type Field } from "./LeadForm";
import styles from "./DemoPage.module.css";

export type SellingPoint = {
  title: string;
  body: string;
};

type Props = {
  kicker: string;
  title: string;
  message: string;
  formTitle: string;
  formLead: string;
  fields: Field[];
  submitLabel: string;
  points: SellingPoint[];
  /** Which campaign concept on the pitch page this page belongs to. */
  campaign: string;
  children?: React.ReactNode;
};

export default function DemoPage({
  kicker,
  title,
  message,
  formTitle,
  formLead,
  fields,
  submitLabel,
  points,
  campaign,
  children,
}: Props) {
  return (
    <>
      <Nav variant="demo" />

      <div className={styles.banner}>
        <div className={`container ${styles.bannerInner}`}>
          <span className={styles.bannerTag}>Demo landing page</span>
          <p>
            Built as part of the campaign concept{" "}
            <strong>{campaign}</strong>.{" "}
            <Link href="/#campaigns" className={styles.bannerLink}>
              Back to the pitch
            </Link>
          </p>
        </div>
      </div>

      <main>
        <section className={styles.hero}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>{kicker}</p>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.message}>{message}</p>

              <ul className={styles.trust}>
                <li>Swiss jurisdiction</li>
                <li>ISO 27001 certified</li>
                <li>SOC 2 Type II audited</li>
                <li>100,000+ businesses</li>
              </ul>
            </div>

            <div className={styles.formWrap}>
              <div className={styles.formHead}>
                <h2 className={styles.formTitle}>{formTitle}</h2>
                <p className={styles.formLead}>{formLead}</p>
              </div>
              <LeadForm fields={fields} submitLabel={submitLabel} />
            </div>
          </div>
        </section>

        <section className={`section ${styles.points}`}>
          <div className="container">
            <div className={styles.pointsGrid}>
              {points.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.title}
                  delay={i * 80}
                  className={styles.point}
                >
                  <span className={styles.pointN} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.pointTitle}>{p.title}</h3>
                  <p className={styles.pointBody}>{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {children}
      </main>

      <Footer />
    </>
  );
}

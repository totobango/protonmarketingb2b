import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import Reveal from "@/components/Reveal";
import styles from "./compare.module.css";

export const metadata: Metadata = {
  title: "Proton vs Google Workspace",
  description:
    "Same productivity. Zero data mining. A feature comparison of Proton Workspace against Google and Microsoft 365 — a demo landing page from Thomas Germain's Proton B2B pitch.",
};

/**
 * These seven rows are Proton's own published comparison, reproduced verbatim
 * from proton.me/business (July 2026) rather than rewritten — including their
 * column labels, "Google" and "Microsoft 365".
 */
const ROWS: { feature: string; proton: boolean; google: boolean; ms: boolean }[] =
  [
    { feature: "End-to-end encrypted by default", proton: true, google: false, ms: false },
    { feature: "Fully open-source", proton: true, google: false, ms: false },
    { feature: "Outside of US-jurisdiction", proton: true, google: false, ms: false },
    { feature: "Ad-free business model", proton: true, google: false, ms: false },
    { feature: "Not controlled by investors", proton: true, google: false, ms: false },
    { feature: "Virtual Private Network (VPN)", proton: true, google: false, ms: false },
    { feature: "Password manager", proton: true, google: false, ms: false },
  ];

const FACTS = [
  { label: "Workspace Standard", value: "€14.99 / user / month", note: "1 TB per user · 15 custom domains" },
  { label: "Workspace Premium", value: "€24.99 / user / month", note: "3 TB per user · Lumo AI included" },
  { label: "Annual billing", value: "20% off", note: "€12.99 and €19.99 per user / month" },
  { label: "Free trial", value: "14 days", note: "30-day money-back guarantee" },
];

function Mark({ on }: { on: boolean }) {
  return on ? (
    <span className={`${styles.mark} ${styles.yes}`} aria-label="Yes">
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="m3.5 8.5 3 3 6-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ) : (
    <span className={`${styles.mark} ${styles.no}`} aria-label="No">
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M4.5 4.5l7 7m0-7l-7 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function CompareDemo() {
  return (
    <DemoPage
      campaign="The Google Workspace alternative"
      kicker="Proton vs Google Workspace"
      title="Same productivity. Zero data mining."
      message="Your team keeps the mail, calendar, files, docs and meetings they already know how to use. What changes is who else can read them — and Easy Switch moves you across with guided live support at no extra cost."
      formTitle="Get a migration plan"
      formLead="Tell us your setup and we'll map the switch, seat by seat."
      submitLabel="Get migration plan"
      fields={[
        { name: "name", label: "Full name", type: "text", placeholder: "Morgan Lee" },
        {
          name: "email",
          label: "Work email",
          type: "email",
          placeholder: "morgan@company.com",
        },
        { name: "company", label: "Company", type: "text", placeholder: "Company Ltd." },
        {
          name: "seats",
          label: "Google Workspace users",
          type: "select",
          options: ["1–9", "10–49", "50–199", "200–999", "1,000+"],
        },
        {
          name: "concern",
          label: "Biggest concern about switching",
          type: "select",
          options: [
            "Migrating our data",
            "Team retraining",
            "Feature parity",
            "Cost",
            "Compliance sign-off",
          ],
        },
      ]}
      points={[
        {
          title: "Encrypted so we can't read it",
          body:
            "Proton Workspace protects your data from breaches, AI training and surveillance with end-to-end encryption. Not even Proton can see it — which is a materially different promise from 'we won't look'.",
        },
        {
          title: "Migration is the easy part",
          body:
            "Easy Switch moves your data from Google Workspace, Microsoft 365 or other providers, with guided live support at no extra cost. Your team keeps working through the change.",
        },
        {
          title: "One suite, one bill",
          body:
            "Mail, Calendar, Drive, Docs, Sheets and Meet — plus a VPN and a password manager that Google and Microsoft simply do not include at any tier.",
        },
      ]}
    >
      <section className={`section ${styles.section}`}>
        <div className="container">
          <Reveal className={styles.head}>
            <p className="eyebrow">Feature comparison</p>
            <h2 className={`h2 ${styles.title}`}>
              What you actually get, side by side
            </h2>
            <p className={`lead ${styles.lead}`}>
              These are Proton&apos;s own published comparison points, reproduced
              as they appear on proton.me — not a rewrite designed to flatter.
            </p>
          </Reveal>

          <Reveal className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className={styles.caption}>
                Proton Workspace compared with Google and Microsoft 365
              </caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className={styles.protonCol}>
                    Proton Workspace
                  </th>
                  <th scope="col">Google</th>
                  <th scope="col">Microsoft 365</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.feature}>
                    <th scope="row">{r.feature}</th>
                    <td className={styles.protonCol}>
                      <Mark on={r.proton} />
                    </td>
                    <td>
                      <Mark on={r.google} />
                    </td>
                    <td>
                      <Mark on={r.ms} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <div className={styles.facts}>
            {FACTS.map((f, i) => (
              <Reveal key={f.label} delay={i * 60} className={styles.fact}>
                <span className={styles.factLabel}>{f.label}</span>
                <span className={styles.factValue}>{f.value}</span>
                <span className={styles.factNote}>{f.note}</span>
              </Reveal>
            ))}
          </div>

          <p className={styles.footnote}>
            Proton pricing verified on proton.me/business/plans, July 2026.
            Google and Microsoft pricing is not shown here because it varies by
            plan and region — and quoting a competitor&apos;s price you
            haven&apos;t verified is how a comparison page loses its credibility.
          </p>
        </div>
      </section>
    </DemoPage>
  );
}

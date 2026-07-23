"use client";

import { useId, useState } from "react";
import styles from "./LeadForm.module.css";

export type Field =
  | { name: string; label: string; type: "text" | "email"; placeholder?: string }
  | { name: string; label: string; type: "select"; options: string[] };

type Props = {
  fields: Field[];
  submitLabel: string;
  /** Shown under the button — the honest version of a privacy notice. */
  footnote?: string;
};

type Errors = Record<string, string>;

/**
 * Client-side only: there is no backend, by design. This is a demo of the form
 * experience, not a live lead capture — so nothing is transmitted anywhere.
 */
export default function LeadForm({ fields, submitLabel, footnote }: Props) {
  const uid = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    for (const f of fields) {
      const v = (values[f.name] ?? "").trim();
      if (!v) {
        next[f.name] = "Required";
        continue;
      }
      if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        next[f.name] = "Enter a valid work email address";
      }
    }
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const set = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => {
      if (!e[name]) return e;
      const { [name]: _removed, ...rest } = e;
      return rest;
    });
  };

  if (sent) {
    return (
      <div className={styles.card}>
        <div className={styles.done} role="status">
          <span className={styles.tick} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                d="m5 12.5 4.5 4.5L19 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className={styles.doneTitle}>Thank you</h3>
          <p className={styles.doneBody}>
            In a live campaign this would create a contact in HubSpot, stamp the
            first-touch UTMs onto the record, and fire a server-side conversion
            with a hashed email — no third-party pixel involved.
          </p>
          <p className={styles.doneNote}>
            This is a demo page. Nothing was submitted or stored.
          </p>
          <button className={styles.reset} onClick={() => setSent(false)}>
            Show the form again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        {fields.map((f) => {
          const id = `${uid}-${f.name}`;
          const err = errors[f.name];
          return (
            <div key={f.name} className={styles.field}>
              <label htmlFor={id} className={styles.label}>
                {f.label}
              </label>

              {f.type === "select" ? (
                <select
                  id={id}
                  className={`${styles.input} ${err ? styles.invalid : ""}`}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  aria-invalid={Boolean(err)}
                  aria-describedby={err ? `${id}-err` : undefined}
                >
                  <option value="">Select…</option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  type={f.type}
                  className={`${styles.input} ${err ? styles.invalid : ""}`}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  autoComplete={f.type === "email" ? "email" : "off"}
                  aria-invalid={Boolean(err)}
                  aria-describedby={err ? `${id}-err` : undefined}
                />
              )}

              {err && (
                <p id={`${id}-err`} className={styles.error}>
                  {err}
                </p>
              )}
            </div>
          );
        })}

        <button type="submit" className={`btn btnLight ${styles.submit}`}>
          {submitLabel}
        </button>

        <p className={styles.footnote}>
          {footnote ??
            "Demo form — nothing is sent or stored. No tracking pixels on this page."}
        </p>
      </form>
    </div>
  );
}

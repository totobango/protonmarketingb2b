import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";

export const metadata: Metadata = {
  title: "Proton Mail for Legal Teams",
  description:
    "Attorney-client privilege starts in your inbox. Zero-access encryption, Swiss jurisdiction, ISO 27001 and SOC 2 Type II — a demo landing page from Thomas Germain's Proton B2B pitch.",
};

export default function LegalDemo() {
  return (
    <DemoPage
      campaign="Your inbox is not private"
      kicker="Proton Mail for legal teams"
      title="Attorney-client privilege starts in your inbox"
      message="If your email provider can read your emails, so can anyone who compels, subpoenas or breaches them. Zero-access encryption means Proton cannot read your mail — so there is nothing to hand over."
      formTitle="Request a demo"
      formLead="A 20-minute walkthrough with a specialist who has onboarded law firms before."
      submitLabel="Request demo"
      fields={[
        { name: "name", label: "Full name", type: "text", placeholder: "Jane Doe" },
        {
          name: "email",
          label: "Work email",
          type: "email",
          placeholder: "jane@firm.com",
        },
        {
          name: "firm",
          label: "Firm name",
          type: "text",
          placeholder: "Doe & Partners",
        },
        {
          name: "users",
          label: "Number of users",
          type: "select",
          options: ["1–9", "10–49", "50–199", "200–999", "1,000+"],
        },
      ]}
      points={[
        {
          title: "Zero-access encryption",
          body:
            "Your mailbox is encrypted with keys Proton does not hold. Not as a policy commitment that could change with new management — as an architecture that makes reading your mail technically impossible for us.",
        },
        {
          title: "Swiss jurisdiction",
          body:
            "Proton AG is based in Geneva, outside US and EU jurisdiction, under some of the world's strictest privacy law. Foreign data requests must clear Swiss courts before they go anywhere.",
        },
        {
          title: "ISO 27001 and SOC 2 Type II",
          body:
            "Proton's encrypted suite is ISO 27001 certified and SOC 2 Type II audited, and supports compliance with HIPAA, CCPA and GDPR — the evidence your risk committee will ask for.",
        },
      ]}
    />
  );
}

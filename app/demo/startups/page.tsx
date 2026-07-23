import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";

export const metadata: Metadata = {
  title: "Proton Workspace for Startups",
  description:
    "The modern workspace for privacy-conscious startups: a fully encrypted suite, Easy Switch from Google Workspace, built by CERN scientists. A demo landing page from Thomas Germain's Proton B2B pitch.",
};

export default function StartupsDemo() {
  return (
    <DemoPage
      campaign="Your AI sees everything"
      kicker="Proton Workspace for startups"
      title="Your investors trust you with their money. Trust them back with their data."
      message="The modern workspace for privacy-conscious startups — mail, calendar, drive, docs, meetings, VPN, password manager and a private AI assistant, in one encrypted subscription from €14.99 per user."
      formTitle="Start a free trial"
      formLead="14 days free. 30-day money-back guarantee if you stay."
      submitLabel="Start free trial"
      fields={[
        { name: "name", label: "Full name", type: "text", placeholder: "Alex Kim" },
        {
          name: "email",
          label: "Work email",
          type: "email",
          placeholder: "alex@startup.com",
        },
        {
          name: "company",
          label: "Company",
          type: "text",
          placeholder: "Startup Inc.",
        },
        {
          name: "team",
          label: "Team size",
          type: "select",
          options: ["1–9", "10–24", "25–49", "50–199", "200+"],
        },
        {
          name: "provider",
          label: "Current provider",
          type: "select",
          options: [
            "Google Workspace",
            "Microsoft 365",
            "Zoho",
            "Self-hosted",
            "Something else",
          ],
        },
      ]}
      points={[
        {
          title: "The full encrypted suite",
          body:
            "Mail, Calendar, Drive, Docs, Sheets, Meet, VPN and Pass in one subscription — with 1 TB per user on Standard and 3 TB on Premium. One vendor, one bill, one security model.",
        },
        {
          title: "Easy Switch from Google",
          body:
            "Move mail, contacts and calendars from Google Workspace or Microsoft 365 with Proton's Easy Switch tool, with guided live support at no extra cost. Migration is the objection; this removes it.",
        },
        {
          title: "Built by CERN scientists",
          body:
            "Proton was founded in 2014 by scientists who met at CERN, is majority-owned by the non-profit Proton Foundation, and takes no venture capital. Nobody can pressure a pivot away from privacy.",
        },
      ]}
    />
  );
}

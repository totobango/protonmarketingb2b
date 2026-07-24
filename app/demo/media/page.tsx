import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";

export const metadata: Metadata = {
  title: "Proton VPN for Newsrooms",
  description:
    "If your sources trust you, protect their identity. No-logs VPN, servers in 140+ countries, private gateways and NetShield. A demo landing page from Thomas Germain's Proton B2B pitch.",
};

export default function MediaDemo() {
  return (
    <DemoPage
      campaign="Built for those who can't afford leaks"
      kicker="Proton VPN for newsrooms"
      title="If your sources trust you, protect their identity"
      message="A source's anonymity is only as strong as the network your reporters file from. Proton VPN secures the connection between your newsroom and the people who risk everything to talk to it."
      formTitle="Request access"
      formLead="Proton offers discounted access for media organizations. Tell us about your newsroom."
      submitLabel="Request access"
      fields={[
        {
          name: "name",
          label: "Full name",
          type: "text",
          placeholder: "Sam Rivera",
        },
        {
          name: "email",
          label: "Work email",
          type: "email",
          placeholder: "sam@newsroom.org",
        },
        {
          name: "org",
          label: "Media organization",
          type: "text",
          placeholder: "The Daily Record",
        },
        {
          name: "journalists",
          label: "Number of journalists",
          type: "select",
          options: ["1 to 9", "10 to 49", "50 to 199", "200 to 999", "1,000+"],
        },
      ]}
      points={[
        {
          title: "No-logs, by policy and by audit",
          body:
            "Proton VPN keeps no logs of your browsing activity, operates under Swiss jurisdiction, and publishes its apps as open source so the claim can be checked rather than trusted.",
        },
        {
          title: "Servers in 140+ countries",
          body:
            "Reporters file from wherever the story is. Business plans add private gateways for network segmentation, dedicated servers and IPs in 20+ countries, and Stealth protocol for restrictive networks.",
        },
        {
          title: "NetShield and central control",
          body:
            "NetShield blocks malware, phishing, scams and ads at the DNS level, while a central admin panel lets your IT lead enforce 2FA and manage access across the whole newsroom.",
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import SkillsClient from "./SkillsClient";

export const metadata: Metadata = {
  title: "Cybersecurity Skills Matrix",
  description:
    "Explore cybersecurity skills, tools, and project-based evidence across SIEM, detection engineering, cloud security, API security, and risk assessment.",
  openGraph: {
    title: "Cybersecurity Skills Matrix | Wayne Howlett",
    description:
      "Detailed breakdown of cybersecurity skills, tools, and real project experience.",
    url: "/skills",
  },
  twitter: {
    title: "Cybersecurity Skills Matrix | Wayne Howlett",
    description:
      "Skills, tools, and hands-on cybersecurity experience across multiple domains.",
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}

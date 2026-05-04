import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Cybersecurity Projects",
  description:
    "Explore hands-on cybersecurity projects including Wazuh SIEM detection engineering, security architecture design, and lab-based threat simulation.",
  openGraph: {
    title: "Cybersecurity Projects | Wayne Howlett",
    description:
      "Hands-on cybersecurity projects covering detection engineering, security architecture, and real lab environments.",
    url: "/projects",
  },
  twitter: {
    title: "Cybersecurity Projects | Wayne Howlett",
    description:
      "Detection engineering, Wazuh SIEM labs, and security architecture projects.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

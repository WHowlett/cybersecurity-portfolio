import type { Metadata } from "next";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume & Cybersecurity Experience",
  description:
    "View Wayne Howlett’s cybersecurity resume, background, technical experience, and detailed FAQ covering skills, tools, and real-world lab work.",
  openGraph: {
    title: "Resume & Cybersecurity Experience | Wayne Howlett",
    description:
      "Cybersecurity resume, hands-on experience, and detailed answers to technical and career questions.",
    url: "/resume",
  },
  twitter: {
    title: "Resume & Cybersecurity Experience | Wayne Howlett",
    description:
      "Cybersecurity resume, experience, and technical background.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}

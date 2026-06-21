import type { Metadata } from "next";
import Link from "next/link";
import ProjectShareActions from "@/components/ProjectShareActions";

const projectUrl = "https://www.ihowlett.com/projects/incident-response-capstone-hss";
const videoUrl = "https://youtu.be/0NSW7-e8O6U";
const reportPath = "/docs/HSS_Incident_Response_Report.pdf";
const pitchPath = "/docs/HSS_Incident_Response_Project_Pitch.pdf";
const presentationPath = "/docs/HSS_Incident_Response_Presentation.pdf";
const ogImage = "/og-image.png";

export const metadata: Metadata = {
  title: "Incident Response Capstone: Phishing & Lateral Movement",
  description:
    "Wayne Howlett case study: incident response investigation for a phishing-driven healthcare breach involving malicious PowerShell execution, credential harvesting indicators, C2 activity, and lateral movement attempts.",
  keywords: [
    "Wayne Howlett",
    "incident response capstone",
    "phishing analysis",
    "PowerShell malware",
    "lateral movement",
    "credential harvesting",
    "Snort IDS",
    "Zeek",
    "MITRE ATT&CK",
    "SOC analyst portfolio",
    "cybersecurity portfolio",
  ],
  alternates: {
    canonical: projectUrl,
  },
  openGraph: {
    type: "article",
    url: projectUrl,
    title: "Incident Response Capstone: Phishing & Lateral Movement | Wayne Howlett",
    description:
      "Professional incident response case study covering detection, containment, eradication, recovery, IoCs, MITRE ATT&CK mapping, and long-term security improvements.",
    siteName: "Wayne Howlett Cybersecurity Portfolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Incident Response Capstone case study by Wayne Howlett",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Incident Response Capstone: Phishing & Lateral Movement | Wayne Howlett",
    description:
      "Incident response capstone investigating phishing, malicious PowerShell, credential harvesting, C2 activity, and lateral movement attempts.",
    images: [ogImage],
  },
};

const stats = [
  ["Status", "Completed Case Study"],
  ["Role", "Incident Response Analyst"],
  ["Severity", "High Severity"],
  ["Incident ID", "2025-HSS-IR-002"],
];

const tools = [
  "Snort IDS",
  "Zeek Network Monitoring",
  "Windows Event Logs",
  "Bitdefender EDR",
  "Honeypot Telemetry",
  "Forensic Memory Analysis",
  "MITRE ATT&CK",
  "Incident Response Reporting",
];

const attackChain = [
  "Payroll-themed phishing email delivered to a Finance employee.",
  "Victim accessed a malicious payroll update link hosted under secure-download.com infrastructure.",
  "Workstation-23 executed an Invoke-WebRequest PowerShell command to download payload.ps1.",
  "The payload showed credential harvesting indicators and generated outbound traffic to 45.77.33.88.",
  "The attacker attempted SMB and RDP access toward HR-SQL01 payroll infrastructure.",
  "The attacker attempted SSH access toward DevAppServer in the Development DMZ using stale jcampbell credentials.",
  "Honeypot telemetry confirmed unauthorized access attempts and helped validate lateral movement behavior.",
];

const timeline = [
  ["Apr 11, 2025 - 10:05 PM", "Phishing email delivered to Finance employee."],
  ["Apr 12, 2025 - 01:24 AM", "Successful logon and suspicious activity observed on Workstation-23."],
  ["01:24:18", "PsExec service installation detected."],
  ["01:24:39", "Malicious PowerShell Invoke-WebRequest command executed."],
  ["01:24:41", "SMB connection toward HR-SQL01 identified."],
  ["01:24:55", "RDP session initiated toward HR-SQL01."],
  ["01:25:03", "Outbound HTTP communication to 45.77.33.88."],
  ["01:25:30", "DNS query to secure-download.com."],
  ["01:26:09", "SSH attempt toward DevAppServer detected."],
  ["02:11:34", "Honeypot alert triggered using jcampbell credentials."],
];

const iocs = [
  ["Malicious domains", "maliciousdomain.xyz, secure-download.com, hss-payroll.secure-download.com"],
  ["External IP", "45.77.33.88"],
  ["Commands / artifacts", "Invoke-WebRequest, payload.ps1, PsExecsvc, cmd.exe /c whoami"],
  ["Affected or targeted systems", "Workstation-23, HR-SQL01, DevAppServer"],
  ["Accounts", "finance_user, jcampbell"],
  ["Protocols", "SMB 445, RDP 3389, SSH 22, HTTP 80"],
];

const responseActions = [
  {
    title: "Containment",
    items: [
      "Isolated Workstation-23 from the network.",
      "Blocked malicious domains and external IP infrastructure.",
      "Restricted SMB, RDP, and SSH traffic between network zones.",
      "Reset affected credentials and disabled stale employee accounts.",
    ],
  },
  {
    title: "Eradication",
    items: [
      "Preserved forensic evidence before remediation.",
      "Removed malicious PowerShell artifacts and suspicious services.",
      "Reimaged the compromised workstation from a trusted baseline.",
      "Performed enterprise-wide IoC scans and corrected logging gaps.",
    ],
  },
  {
    title: "Recovery",
    items: [
      "Validated endpoint integrity before reconnecting systems.",
      "Reviewed HR-SQL01 and DevAppServer for unauthorized access.",
      "Maintained heightened monitoring across critical systems.",
      "Verified no confirmed widespread compromise or ransomware deployment was identified.",
    ],
  },
];

const recommendations = [
  "Deploy centralized SIEM monitoring and log correlation.",
  "Enforce MFA across privileged accounts and critical systems.",
  "Automate employee offboarding and stale account deprovisioning.",
  "Standardize PowerShell logging and endpoint telemetry.",
  "Expand Linux EDR and SSH monitoring coverage.",
  "Improve segmentation between Finance, HR, IT, and Development DMZ systems.",
  "Conduct recurring phishing simulations and quarterly tabletop exercises.",
];

const mitre = [
  ["Initial Access", "Phishing email"],
  ["Execution", "PowerShell Invoke-WebRequest"],
  ["Credential Access", "Cached credential harvesting indicators"],
  ["Discovery", "Internal reconnaissance activity"],
  ["Lateral Movement", "SMB, RDP, and SSH attempts"],
  ["Command and Control", "Outbound HTTP communication"],
];

function Card({ children }: { children: React.ReactNode }) {
  return <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">{children}</section>;
}

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold">{title}</h2>
    </div>
  );
}

export default function IncidentResponseCapstonePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link href="/projects" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
        ← Back to Projects
      </Link>

      <section className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study — Incident Response / SOC Analysis
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Incident Response Capstone: Phishing & Lateral Movement Investigation
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          This capstone investigates a simulated high-severity incident at HealthSecure Systems, a healthcare software provider.
          The case study follows the full incident response lifecycle from detection and scoping through containment,
          eradication, recovery, post-incident review, and long-term security improvement planning.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Watch Video Walkthrough
          </a>
          <a href={reportPath} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400">
            View Incident Report
          </a>
          <a href={pitchPath} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400">
            View Pitch Deck
          </a>
        </div>
      </section>

      <ProjectShareActions
        title="Incident Response Capstone: Phishing & Lateral Movement"
        url={projectUrl}
        description="Incident response case study covering phishing, PowerShell malware, credential harvesting, C2 activity, lateral movement, containment, recovery, and security improvements."
      />

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="card-glow rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">{label}</p>
            <p className="mt-3 font-semibold text-white">{value}</p>
          </div>
        ))}
      </section>

      <Card>
        <SectionHeading eyebrow="Executive Summary" title="What happened" />
        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            The incident began when a Finance employee interacted with a payroll-themed phishing email. The malicious link led to
            PowerShell execution on Workstation-23, followed by outbound communication to suspicious infrastructure and attempted
            lateral movement toward HR payroll and Development DMZ systems.
          </p>
          <p>
            The investigation classified the event as a high-severity security breach because the attacker demonstrated credential
            harvesting indicators, command-and-control activity, and attempts to access systems containing sensitive payroll data,
            Active Directory credentials, and proprietary healthcare application assets.
          </p>
        </div>
      </Card>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <SectionHeading eyebrow="Evidence Sources" title="Tools and telemetry reviewed" />
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {tools.map((tool) => (
            <div key={tool} className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-300">
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
        <SectionHeading eyebrow="Video Walkthrough" title="Capstone presentation" />
        <p className="mt-4 leading-8 text-slate-300">
          The walkthrough video explains the investigation, evidence, attack flow, response actions, and recommendations.
        </p>
        <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/0NSW7-e8O6U"
            title="Incident Response Capstone walkthrough"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading eyebrow="Attack Chain" title="Phishing to attempted lateral movement" />
        <div className="mt-6 space-y-4">
          {attackChain.map((item, index) => (
            <div key={item} className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                {index + 1}
              </span>
              <p className="leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <SectionHeading eyebrow="Timeline" title="Attack timeline reconstruction" />
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950 text-slate-200">
              <tr>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Event</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {timeline.map(([time, event]) => (
                <tr key={`${time}-${event}`}>
                  <td className="px-4 py-3 font-semibold text-white">{time}</td>
                  <td className="px-4 py-3 leading-6">{event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <Card>
          <SectionHeading eyebrow="IoCs" title="Indicators of compromise" />
          <div className="mt-6 space-y-5">
            {iocs.map(([label, value]) => (
              <div key={label}>
                <h3 className="font-semibold text-cyan-300">{label}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">{value}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeading eyebrow="MITRE ATT&CK" title="Technique mapping" />
          <div className="mt-6 space-y-4">
            {mitre.map(([tactic, activity]) => (
              <div key={tactic} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-300">{tactic}</p>
                <p className="mt-1 text-sm text-slate-300">{activity}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {responseActions.map((phase) => (
          <Card key={phase.title}>
            <h2 className="text-2xl font-bold">{phase.title}</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-300">
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <SectionHeading eyebrow="Evidence Downloads" title="Project artifacts" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Incident Response Report", reportPath],
            ["Project Pitch Deck", pitchPath],
            ["Presentation Deck", presentationPath],
          ].map(([label, href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-400 hover:text-cyan-400">
              <p className="text-sm font-semibold text-white">{label}</p>
              <p className="mt-2 text-xs text-slate-400">Open PDF →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <SectionHeading eyebrow="Recommendations" title="Strategic security improvements" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {recommendations.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading eyebrow="Skills Demonstrated" title="What this project shows" />
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Incident Response",
            "SOC Analysis",
            "Phishing Analysis",
            "PowerShell Investigation",
            "Credential Security",
            "Lateral Movement Analysis",
            "IoC Development",
            "MITRE ATT&CK Mapping",
            "Executive Reporting",
            "Security Roadmap Planning",
          ].map((skill) => (
            <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

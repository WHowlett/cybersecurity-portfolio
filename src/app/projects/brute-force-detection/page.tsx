import type { Metadata } from "next";
import Link from "next/link";
import ProjectShareActions from "@/components/ProjectShareActions";

const projectUrl = "https://www.ihowlett.com/projects/brute-force-detection";
const reportPath = "/docs/SSH_Brute_Force_Report.pdf";
const githubUrl = "https://github.com/WHowlett/wazuh-ssh-bruteforce-detection.git";
const ogImage = "/og-image.png";

export const metadata: Metadata = {
  title: "SSH Brute Force Detection with Wazuh SIEM",
  description:
    "Wayne Howlett case study: layered Wazuh SIEM detection for SSH brute-force attacks using Hydra, Kali Linux, Linux auth logs, custom correlation rules, alert escalation, and MITRE ATT&CK T1110 mapping.",
  keywords: [
    "Wayne Howlett",
    "SSH brute force detection",
    "Wazuh SIEM",
    "detection engineering",
    "SOC analyst portfolio",
    "Hydra brute force",
    "Kali Linux",
    "Linux auth logs",
    "MITRE ATT&CK T1110",
    "SIEM correlation rules",
    "cybersecurity portfolio",
  ],
  alternates: {
    canonical: projectUrl,
  },
  openGraph: {
    type: "article",
    url: projectUrl,
    title: "SSH Brute Force Detection with Wazuh SIEM | Wayne Howlett",
    description:
      "Layered detection engineering case study using Wazuh SIEM, Hydra, Kali Linux, custom correlation rules, early-warning alerts, high-severity escalation, and MITRE ATT&CK T1110 mapping.",
    siteName: "Wayne Howlett Cybersecurity Portfolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SSH Brute Force Detection with Wazuh SIEM case study by Wayne Howlett",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSH Brute Force Detection with Wazuh SIEM | Wayne Howlett",
    description:
      "Layered Wazuh SIEM detection for SSH brute-force attacks using Hydra, custom correlation rules, alert escalation, and MITRE ATT&CK T1110 mapping.",
    images: [ogImage],
  },
};

export default function BruteForceDetectionPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link href="/projects" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
        ← Back to Projects
      </Link>

      <section className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study — Detection Engineering
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          SSH Brute Force Detection with Layered Wazuh Rules
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          This project extends my SIEM lab by implementing layered detection logic for SSH brute-force attacks. Instead of relying only on default Wazuh alerts, I built custom correlation rules that identify suspicious activity early and escalate to high-severity alerts as attack behavior continues.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            View GitHub Repo
          </a>
          <a href={reportPath} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400">
            View Full Report
          </a>
        </div>
      </section>

      <ProjectShareActions title="SSH Brute Force Detection Case Study" url={projectUrl} />

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        <div className="card-glow rounded-2xl p-5"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Status</p><p className="mt-3 font-semibold text-white">Completed Case Study</p></div>
        <div className="card-glow rounded-2xl p-5"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Focus</p><p className="mt-3 font-semibold text-white">Layered Detection</p></div>
        <div className="card-glow rounded-2xl p-5"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">MITRE</p><p className="mt-3 font-semibold text-white">T1110 — Brute Force</p></div>
        <div className="card-glow rounded-2xl p-5"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Tools</p><p className="mt-3 font-semibold text-white">Wazuh • Hydra • Kali</p></div>
      </section>

      <section className="mt-14 rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8">
        <h2 className="text-3xl font-bold">What This Project Shows</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Built layered SIEM detection logic from early warning to high severity.",
            "Simulated SSH brute-force activity with Hydra in a safe lab.",
            "Correlated repeated authentication failures into actionable Wazuh alerts.",
            "Troubleshot broken Wazuh XML rule configuration and restored service stability.",
            "Mapped detection logic to MITRE ATT&CK T1110 for brute-force behavior.",
            "Documented evidence across attack execution, logs, rules, and validation results.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Objective</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>The objective was to design and implement layered detection logic for SSH brute-force attacks inside a controlled Wazuh SIEM lab. The project focused on moving beyond basic log monitoring and creating custom correlation-based rules that identify suspicious authentication behavior as it develops.</p><p>The goal was not only to generate alerts, but to better understand how SIEM rules operate, how multiple events can be correlated into meaningful patterns, and how threshold-based logic can be tuned to reflect realistic attack scenarios.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Scenario</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>SSH brute-force attacks attempt to gain unauthorized access by repeatedly trying password combinations against a remote login service. A single failed login may not be meaningful by itself, but repeated failures from the same source can indicate automated attack behavior.</p><p>In this lab, Kali Linux was used to simulate a controlled brute-force attack against a Linux server running SSH. Wazuh collected authentication logs and analyzed the behavior so the detection logic could identify both early suspicious activity and confirmed brute-force behavior.</p></div></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">Environment and Tools</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>The environment was built in VirtualBox using an isolated internal network. A dedicated Wazuh SIEM server collected logs from a Linux target machine, while Kali Linux acted as the attacker system.</p><p>The Linux server generated SSH authentication logs, and Wazuh processed those logs through its built-in ruleset and custom correlation rules. This created a realistic but safe environment for validating attack simulation, log ingestion, detection, and alert escalation.</p><div className="grid gap-3 md:grid-cols-2">{["Wazuh SIEM — log ingestion, rules, alerts, and correlation","Kali Linux — attacker system used for controlled simulation","Hydra — automated SSH brute-force activity generation","Linux Server — SSH target and authentication log source","VirtualBox — isolated internal lab network","MITRE ATT&CK — T1110 mapping and reporting context"].map((tool) => (<div key={tool} className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-300">{tool}</div>))}</div></div></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">Attack Simulation</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>Hydra was executed from the Kali Linux machine against the SSH service on the Linux server. Before running the automated attack, manual failed login attempts were performed to confirm that authentication logging was working correctly and to establish a baseline of normal failed login behavior.</p><p>The Hydra command generated repeated failed authentication attempts in a short timeframe, creating the activity needed to test thresholds, frequency logic, and correlation-based detection. This mirrors the type of high-volume authentication behavior analysts may see during real brute-force attempts.</p><pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-cyan-300"><code>hydra -l securityadmin -P passwords.txt ssh://192.168.100.20</code></pre></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Detection and Logs</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>The Linux server recorded authentication activity in <span className="font-mono text-cyan-300">/var/log/auth.log</span>, including timestamps, usernames, and source IP addresses. Wazuh ingested those logs through its agent and processed each failed login attempt.</p><p>Default Wazuh rule ID 5503 provided visibility into individual PAM authentication failures. However, single-event detection did not fully explain whether those failures were part of a larger attack pattern. Reviewing the logs showed repeated failures from the same source IP, which justified a stronger correlation-based approach.</p><p>From an analyst perspective, repeated failures from one source IP represent a clear deviation from normal user behavior and provide a strong signal for automated attack activity.</p></div></section>

      <section className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8"><h2 className="text-3xl font-bold">Layered Detection Engineering</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>To improve detection quality, I implemented a layered detection strategy using custom Wazuh rules. The first rule acted as an early warning mechanism by triggering when multiple failed login attempts were detected from the same source within a short timeframe.</p><p>The second rule confirmed brute-force activity by triggering after a higher threshold of failed attempts. This generated a high-severity alert and showed that the behavior had progressed beyond normal user error.</p><p>This approach shifted detection from single-event alerting to behavior-based correlation, which is closer to how real SIEM detection engineering works in security operations. It also makes the alert flow easier for an analyst to understand: suspicious behavior first, confirmed attack behavior second.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Challenges and Troubleshooting</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>During implementation, the Wazuh manager failed to restart because of an XML configuration error in the custom rule file. A <span className="font-mono text-cyan-300">rule</span> element was incorrectly placed outside a <span className="font-mono text-cyan-300">group</span> block, causing the rule parser to fail.</p><p>I reviewed the service logs, identified the syntax issue, corrected the rule structure, and verified proper nesting. I also checked the use of <span className="font-mono text-cyan-300">if_matched_sid</span>, frequency, and timeframe logic to confirm the custom rules behaved correctly.</p><p>This was one of the most useful parts of the project because it showed the real troubleshooting process behind detection engineering. Detection work is not just writing rules — it also requires validating syntax, service behavior, rule logic, and alert output.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Mitigation and Response</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>In a real-world environment, repeated authentication failures could trigger response actions such as temporarily blocking the source IP address, enforcing account lockout policies, applying rate limiting, or disabling password-based SSH authentication in favor of SSH keys.</p><p>Although this project focused on detection, it shows how detection logic can support broader incident response by identifying suspicious behavior early and escalating confirmed attack patterns for analyst review.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Validation and Results</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>After correcting the rule configuration, I ran the attack simulation again and confirmed that both detection stages worked as intended. The early warning rule triggered at a lower threshold, and the high-severity rule triggered after continued attack activity.</p><p>The results showed clear visibility into the progression of the brute-force attempt and confirmed that the layered rules accurately reflected attacker behavior. The final detection flow transformed raw authentication failures into meaningful, prioritized alerts.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Evidence</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>The report includes evidence from the full attack and detection lifecycle, including Hydra output, Linux authentication logs, Wazuh authentication events, custom rule configuration, Wazuh manager troubleshooting, and layered alerts showing both early warning and high-severity detection stages.</p><p>The evidence supports the full workflow: attack simulation, log generation, SIEM ingestion, default alerting, custom rule configuration, service troubleshooting, and final validation.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">MITRE ATT&CK Mapping</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>This project maps to MITRE ATT&CK Credential Access technique <span className="font-semibold text-cyan-300">T1110 — Brute Force</span>. The simulated Hydra activity generated repeated SSH authentication attempts against the target system.</p><p>The layered detection approach supports this mapping by identifying both early suspicious activity and confirmed sustained brute-force behavior, which helps turn raw log data into standardized security reporting.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Skills and Concepts Demonstrated</h2><div className="mt-6 flex flex-wrap gap-3">{["Wazuh SIEM","Hydra","Kali Linux","SSH","Linux Auth Logs","Layered Detection","Correlation Rules","Alert Escalation","MITRE T1110","Troubleshooting","Incident Analysis","Detection Validation","Security Documentation"].map((skill) => (<span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">{skill}</span>))}</div></section>

      <section className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8"><h2 className="text-3xl font-bold">Why This Project Matters</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>This project shows growth from basic alert validation into more advanced detection engineering. Instead of simply observing default alerts, I built a layered detection strategy that tracks suspicious behavior as it escalates.</p><p>It demonstrates the ability to simulate attack activity, interpret logs, troubleshoot SIEM rule issues, validate detection logic, and map the work to a recognized threat framework.</p></div></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">Resume Bullet</h2><p className="mt-4 leading-7 text-slate-300">Designed and implemented layered Wazuh SIEM detection rules to identify SSH brute-force attacks, correlating authentication failures into early warning and high-severity alerts through simulated attack activity using Hydra.</p></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">GitHub Repository</h2><p className="mt-4 leading-7 text-slate-300">The GitHub repository contains the project materials and supporting technical work for this detection engineering case study.</p><a href={githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">Open Repository</a></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">Full Report and Supporting Documentation</h2><p className="mt-4 leading-7 text-slate-300">The full report includes the project objective, lab environment, Hydra attack simulation, Wazuh log analysis, custom layered detection rules, troubleshooting notes, validation evidence, MITRE ATT&CK mapping, and future improvements.</p><div className="mt-6 flex flex-wrap gap-4"><a href={reportPath} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">View Report</a><a href={reportPath} download className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400">Download PDF</a></div><div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"><iframe src={reportPath} className="h-[700px] w-full bg-white" title="SSH Brute Force Detection Report PDF" /></div></section>
    </main>
  );
}

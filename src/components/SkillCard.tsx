"use client";

import Link from "next/link";

const projectLabels: Record<string, string> = {
  "incident-response-capstone-hss": "Incident Response Capstone",
  "security-lab-architecture": "Security Lab Architecture",
  "secure-network-architecture": "Secure Network Architecture",
  "wazuh-detection-engineering": "Wazuh Detection Engineering",
  "brute-force-detection": "SSH Brute Force Detection",
  "api-security-assessment-hardening": "API Security Assessment",
  "phishing-analysis": "Phishing Analysis",
  "powershell-threat-hunt": "PowerShell Threat Hunt",
  "lateral-movement-detection": "Lateral Movement Detection",
  "ioc-threat-intel": "IOC Threat Intel",
  "malware-alert-triage": "Malware Alert Triage",
  "siem-alert-tuning": "SIEM Alert Tuning",
  "linux-hardening": "Linux Hardening",
  "windows-hardening": "Windows Hardening",
  "firewall-review": "Firewall Review",
  "nginx-security": "Nginx Security",
  "vulnerability-scan": "Vulnerability Scan",
  "cloud-misconfiguration": "Cloud Misconfiguration",
  "iam-review": "IAM Review",
  "zero-trust-architecture": "Zero Trust Architecture",
  "logging-strategy": "Logging Strategy",
};

const completedEvidenceProjects = [
  "incident-response-capstone-hss",
  "security-lab-architecture",
  "secure-network-architecture",
  "wazuh-detection-engineering",
  "brute-force-detection",
  "api-security-assessment-hardening",
];

type Skill = {
  name: string;
  level: string;
  keywords?: string[];
  whatItIs: string;
  whatItMeans: string;
  howIUseIt: string;
  projects: string[];
};

type Props = {
  skill: Skill;
  isOpen: boolean;
  onToggle: () => void;
};

function formatProjectName(project: string) {
  return projectLabels[project] ?? project;
}

export default function SkillCard({ skill, isOpen, onToggle }: Props) {
  const evidenceProjects = skill.projects.slice(0, 3);
  const remainingEvidence = Math.max(skill.projects.length - evidenceProjects.length, 0);
  const completedEvidenceCount = skill.projects.filter((project) => completedEvidenceProjects.includes(project)).length;
  const roadmapEvidenceCount = Math.max(skill.projects.length - completedEvidenceCount, 0);
  const isEvidenceBacked = completedEvidenceCount > 0;
  const strengthenedByCapstone = skill.projects.includes("incident-response-capstone-hss");

  return (
    <div
      className={`rounded-2xl border bg-slate-900 p-5 transition-all duration-300 ${
        isOpen
          ? "border-cyan-400 shadow-lg shadow-cyan-400/10"
          : "border-slate-800 hover:border-cyan-400"
      }`}
    >
      <button onClick={onToggle} className="w-full text-left">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            <p className="mt-2 text-sm text-slate-400">
              {isEvidenceBacked
                ? "Evidence-backed skill with project work attached."
                : "Planned or developing skill connected to the roadmap."}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-2">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-400">
              {skill.level}
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-400">
              {completedEvidenceCount} evidence project{completedEvidenceCount === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        {strengthenedByCapstone && (
          <div className="mt-4 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300">
            Strengthened June 2026 by the Incident Response Capstone
          </div>
        )}

        <div className="mt-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Evidence
            </p>
            {roadmapEvidenceCount > 0 && (
              <p className="text-xs text-slate-500">
                +{roadmapEvidenceCount} roadmap item{roadmapEvidenceCount === 1 ? "" : "s"}
              </p>
            )}
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {evidenceProjects.map((project) => (
              <span
                key={project}
                className={`rounded-lg border px-2 py-1 text-xs ${
                  completedEvidenceProjects.includes(project)
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                    : "border-slate-700 bg-slate-950 text-slate-400"
                }`}
              >
                {formatProjectName(project)}
              </span>
            ))}

            {remainingEvidence > 0 && (
              <span className="rounded-lg border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-400">
                +{remainingEvidence} more
              </span>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-400 transition">
          {isOpen ? "Viewing details" : "Click to expand for explanation and related project links"}
        </p>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div>
              <p className="font-semibold text-white">What it is</p>
              <p className="mt-1">{skill.whatItIs}</p>
            </div>

            <div>
              <p className="font-semibold text-white">What it means</p>
              <p className="mt-1">{skill.whatItMeans}</p>
            </div>

            <div>
              <p className="font-semibold text-white">How I use it</p>
              <p className="mt-1">{skill.howIUseIt}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Related Projects
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {skill.projects.map((project) => (
                  <Link
                    key={project}
                    href={`/projects/${project}`}
                    className="rounded-lg bg-slate-800 px-2 py-1 text-xs text-slate-300 hover:bg-slate-700 hover:text-cyan-300"
                  >
                    {formatProjectName(project)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

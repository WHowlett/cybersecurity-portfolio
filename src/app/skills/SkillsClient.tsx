"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { skills } from "@/data/skills";
import SkillCard from "@/components/SkillCard";

const completedEvidenceProjects = [
  "incident-response-capstone-hss",
  "security-lab-architecture",
  "secure-network-architecture",
  "wazuh-detection-engineering",
  "brute-force-detection",
  "api-security-assessment-hardening",
];

const recentlyStrengthenedSkills = [
  "Incident Response Lifecycle",
  "Phishing Analysis",
  "PowerShell Investigation",
  "Lateral Movement Analysis",
  "MITRE ATT&CK Mapping",
  "Executive Security Reporting",
];

const recentUpdateProject = {
  title: "Incident Response Capstone",
  href: "/projects/incident-response-capstone-hss",
  description:
    "June 2026 update: new HSS capstone evidence strengthened incident response, SOC analysis, phishing analysis, PowerShell investigation, lateral movement analysis, MITRE ATT&CK mapping, and executive reporting.",
};

export default function SkillsClient() {
  const [openSkillId, setOpenSkillId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const allSkills = skills.flatMap((group) => group.items);
  const totalSkills = allSkills.length;
  const evidenceBackedSkills = allSkills.filter((skill) =>
    skill.projects.some((project) => completedEvidenceProjects.includes(project))
  ).length;
  const completedProjectCount = completedEvidenceProjects.length;
  const capstoneStrengthenedCount = allSkills.filter((skill) =>
    skill.projects.includes("incident-response-capstone-hss")
  ).length;

  const filteredSkills = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return skills;

    return skills
      .map((group) => {
        const filteredItems = group.items.filter((skill) => {
          const searchableText = [
            group.category,
            skill.name,
            skill.level,
            skill.whatItIs,
            skill.whatItMeans,
            skill.howIUseIt,
            skill.projects.join(" "),
            Array.isArray((skill as any).keywords)
              ? (skill as any).keywords.join(" ")
              : "",
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(query);
        });

        return {
          ...group,
          items: filteredItems,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [search]);

  const totalResults = filteredSkills.reduce(
    (total, group) => total + group.items.length,
    0
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Skills Matrix
      </p>

      <h1 className="mt-4 text-4xl font-bold">
        Cybersecurity Skills & Project Evidence
      </h1>

      <p className="mt-6 max-w-3xl text-slate-300">
        Search skills by topic, tool, project, attack type, or cybersecurity
        concept. Each skill explains what it is, what it means, how I use it,
        and which projects support it.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          ["Skills Documented", totalSkills],
          ["Evidence-Backed Skills", evidenceBackedSkills],
          ["Completed Security Projects", completedProjectCount],
          ["Strengthened June 2026", capstoneStrengthenedCount],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-3xl font-bold text-white">{value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              {label}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Recently Strengthened Skills
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              New incident response evidence added
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
              {recentUpdateProject.description}
            </p>
          </div>

          <Link
            href={recentUpdateProject.href}
            className="shrink-0 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            View {recentUpdateProject.title}
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {recentlyStrengthenedSkills.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => {
                setSearch(skill);
                setOpenSkillId(null);
              }}
              className="rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-2 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100"
            >
              {skill}
            </button>
          ))}
        </div>
      </section>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <label
          htmlFor="skill-search"
          className="text-sm font-semibold text-white"
        >
          Search skills
        </label>

        <input
          id="skill-search"
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setOpenSkillId(null);
          }}
          placeholder="Try: Incident Response, MITRE, PowerShell, Wazuh, access, API, cloud, detection, risk..."
          className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
        />

        <p className="mt-3 text-sm text-slate-400">
          Showing {totalResults} skill{totalResults === 1 ? "" : "s"}
          {search ? ` for "${search}"` : ""}
        </p>
      </div>

      {totalResults === 0 ? (
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">No skills found</h2>
          <p className="mt-3 text-slate-300">
            Try a broader term like incident response, security, logs, cloud,
            access, detection, architecture, or monitoring.
          </p>
        </div>
      ) : (
        <div className="mt-12 space-y-12">
          {filteredSkills.map((group) => (
            <section key={group.category}>
              <h2 className="text-2xl font-bold">{group.category}</h2>

              <div className="mt-6 grid items-start gap-5 md:grid-cols-2">
                {group.items.map((skill) => {
                  const skillId = `${group.category}-${skill.name}`;

                  return (
                    <SkillCard
                      key={skillId}
                      skill={skill}
                      isOpen={openSkillId === skillId}
                      onToggle={() =>
                        setOpenSkillId(
                          openSkillId === skillId ? null : skillId
                        )
                      }
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}

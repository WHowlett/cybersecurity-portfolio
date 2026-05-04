"use client";

import { useMemo, useState } from "react";
import { skills } from "@/data/skills";
import SkillCard from "@/components/SkillCard";

export default function SkillsClient() {
  const [openSkillId, setOpenSkillId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

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
          placeholder="Try: Wazuh, logs, access, API, cloud, detection, risk..."
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
            Try a broader term like security, logs, cloud, access, detection,
            architecture, or monitoring.
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

"use client";

import Link from "next/link";

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

export default function SkillCard({ skill, isOpen, onToggle }: Props) {
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
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-400">
            {skill.level}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-400 transition">
  {isOpen
    ? "Viewing details"
    : "Click to expand — see how I actually use this skill"}
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
                    className="rounded-lg bg-slate-800 px-2 py-1 text-xs text-slate-300 hover:bg-slate-700"
                  >
                    {project}
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
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { Search, FolderKanban, Clock, CheckCircle2, Share2, Facebook, Mail, Copy } from "lucide-react";

const categories = [
  "All",
  "Security Lab",
  "Security Architecture",
  "Detection Engineering",
  "SOC / Security Analyst",
  "Security Engineering",
  "Cloud / Architecture",
];

const statuses = ["All", "completed", "planned"];
const siteUrl = "https://www.ihowlett.com";

function shareLinks(title: string, url: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(`Check out this cybersecurity project: ${url}`)}`,
  };
}

export default function ProjectsClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [copiedProjectId, setCopiedProjectId] = useState<string | null>(null);

  const handleCopy = async (projectId: string, url: string) => {
    await navigator.clipboard.writeText(url);
    setCopiedProjectId(projectId);
    window.setTimeout(() => setCopiedProjectId(null), 2200);
  };

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesStatus =
        activeStatus === "All" || project.status === activeStatus;

      const searchableText = [
        project.title,
        project.status,
        project.category,
        project.roleFocus,
        project.description,
        project.skills.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = query ? searchableText.includes(query) : true;

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [search, activeCategory, activeStatus]);

  const completedCount = projects.filter(
    (project) => project.status === "completed"
  ).length;

  const plannedCount = projects.filter(
    (project) => project.status === "planned"
  ).length;

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Cybersecurity Projects
      </p>

      <section className="mt-4 max-w-4xl">
        <h1 className="text-4xl font-bold md:text-5xl">
          Completed cybersecurity projects and the roadmap I’m building next.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          This page includes completed case studies and planned projects across
          SOC analysis, detection engineering, security architecture, system
          hardening, cloud security, and API security.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <CheckCircle2 className="h-6 w-6 text-cyan-400" />
          <p className="mt-4 text-3xl font-bold">{completedCount}</p>
          <p className="mt-2 text-sm text-slate-400">Completed Projects</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <Clock className="h-6 w-6 text-yellow-300" />
          <p className="mt-4 text-3xl font-bold">{plannedCount}</p>
          <p className="mt-2 text-sm text-slate-400">Planned Projects</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <FolderKanban className="h-6 w-6 text-cyan-400" />
          <p className="mt-4 text-3xl font-bold">{projects.length}</p>
          <p className="mt-2 text-sm text-slate-400">Total Portfolio Roadmap</p>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <label
          htmlFor="project-search"
          className="text-sm font-semibold text-white"
        >
          Search projects
        </label>

        <div className="relative mt-3">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

          <input
            id="project-search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try: Wazuh, SOC, cloud, API, Linux, logs, detection..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-white">Category</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-white">Status</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setActiveStatus(status)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                  activeStatus === status
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Showing {filteredProjects.length} project
          {filteredProjects.length === 1 ? "" : "s"}
          {search ? ` for "${search}"` : ""}
        </p>
      </section>

      {filteredProjects.length === 0 ? (
        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-bold">No projects found</h2>
          <p className="mt-3 text-slate-300">
            Try a broader search like Wazuh, logs, cloud, API, SOC, Linux, or
            architecture.
          </p>
        </section>
      ) : (
        <section className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const isCompleted = project.status === "completed";
            const projectUrl = project.href ? `${siteUrl}${project.href}` : `${siteUrl}/projects`;
            const links = shareLinks(project.title, projectUrl);

            const card = (
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border bg-slate-900/70 p-6 transition-all duration-300 ${
                  isCompleted
                    ? "border-slate-800 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-950/30"
                    : "cursor-not-allowed border-slate-800 opacity-80 hover:border-yellow-400"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/70 to-cyan-400/0 opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {project.category}
                  </p>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                      isCompleted
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "bg-yellow-400/10 text-yellow-300"
                    }`}
                  >
                    {isCompleted ? "Completed" : "Coming Soon"}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold transition group-hover:text-cyan-400">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm font-semibold text-slate-400">
                  {project.roleFocus}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-800 px-2 py-1 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm font-semibold">
                  {isCompleted ? (
                    <span className="text-cyan-400">View case study →</span>
                  ) : (
                    <span className="text-yellow-300">Project page coming soon</span>
                  )}
                </div>

                {isCompleted && project.href && (
                  <div className="mt-5 border-t border-slate-800 pt-4">
                    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      <Share2 className="h-3.5 w-3.5" /> Share project
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                        aria-label={`Share ${project.title} on Facebook`}
                      >
                        <Facebook className="h-3.5 w-3.5" /> Facebook
                      </a>
                      <a
                        href={links.email}
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                        aria-label={`Share ${project.title} by email`}
                      >
                        <Mail className="h-3.5 w-3.5" /> Email
                      </a>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          handleCopy(project.id, projectUrl);
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                        aria-label={`Copy link to ${project.title}`}
                      >
                        <Copy className="h-3.5 w-3.5" />
                        {copiedProjectId === project.id ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>
                )}

                {!isCompleted && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-slate-950/85 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                      Coming soon — no project page yet
                    </span>
                  </div>
                )}
              </article>
            );

            return isCompleted && project.href ? (
              <Link key={project.id} href={project.href}>
                {card}
              </Link>
            ) : (
              <div key={project.id}>{card}</div>
            );
          })}
        </section>
      )}

      <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <h2 className="text-3xl font-bold">A quick note on this page</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            I didn’t want this to be just a list of projects. Each completed
            case study represents the full process: setting up the environment,
            testing the scenario, collecting evidence, troubleshooting problems,
            and explaining what I learned from it. The projects marked as coming soon are part of my roadmap. They give
            me a clear direction instead of jumping between random topics, and
            as each one is completed, it will become a full case study with
            evidence and documentation.
          </p>

          <p>
            My goal is for this page to show progression over time. I am not
            trying to rush through projects just to add more cards. I want each
            project to help me become better at the work and make that growth
            visible.
          </p>
        </div>
      </section>
    </main>
  );
}

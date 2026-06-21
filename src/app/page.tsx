import Link from "next/link";

const highlights = [
  "Incident Response",
  "Security Architecture",
  "Detection Engineering",
  "Risk Assessment",
  "Cloud & API Security",
];

const latestUpdate = {
  eyebrow: "Latest Portfolio Update",
  title: "Incident Response Capstone: Phishing & Lateral Movement",
  description:
    "New completed case study covering a simulated healthcare breach investigation: phishing-driven compromise, malicious PowerShell execution, credential harvesting indicators, C2 activity, attempted lateral movement, MITRE ATT&CK mapping, and executive-ready reporting.",
  href: "/projects/incident-response-capstone-hss",
  evidence: "Includes full IR report, presentation deck, expanded pitch deck, and video walkthrough.",
};

const featuredProjects = [
  {
    label: "Latest Completed Project",
    title: "Incident Response Capstone: Phishing & Lateral Movement",
    description:
      "Investigated a simulated high-severity healthcare breach involving phishing, PowerShell malware, credential harvesting indicators, C2 activity, and lateral movement attempts toward payroll and development systems.",
    href: "/projects/incident-response-capstone-hss",
  },
  {
    label: "Completed Project",
    title: "Security Lab Architecture and Setup",
    description:
      "Built a virtualized lab with Wazuh, Kali Linux, Linux Server, Windows Endpoint, Sysmon, and isolated networking for threat simulation and detection.",
    href: "/projects/security-lab-architecture",
  },
  {
    label: "Completed Project",
    title: "Secure Network Architecture Design & Risk Assessment",
    description:
      "Designed a segmented network architecture using a DMZ, VLANs, controlled access, and risk-based security decisions.",
    href: "/projects/secure-network-architecture",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-8 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Open to Opportunities
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Seeking entry-level SOC Analyst, Security Analyst, Junior Security Engineer,
              Detection Engineering Support, Cloud Security Support, and API Security Support roles.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
            <Link
              href="/resume"
              className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              View Resume
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Cybersecurity Portfolio
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
          Security-focused thinking backed by real lab work, detection
          engineering, and risk-driven design.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I’m an entry-level cybersecurity professional with advanced hands-on
          experience in security architecture, SIEM detection, and lab-based
          security operations. This portfolio shows how I approach real
          problems, from designing secure environments to validating detections
          and documenting evidence.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          I may be early in my career, but I focus on building practical skills
          the same way security teams operate: structured thinking, real
          testing, and clear results.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            View Projects
          </Link>

          <Link
            href="/skills"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Explore Skills
          </Link>

          <Link
            href="/about"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            About Me
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Link
          href={latestUpdate.href}
          className="group block overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/15 via-slate-900/80 to-slate-950 p-8 shadow-2xl shadow-cyan-950/20 transition hover:-translate-y-1 hover:border-cyan-300"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                {latestUpdate.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white md:text-4xl">
                {latestUpdate.title}
              </h2>
              <p className="mt-5 max-w-4xl leading-7 text-slate-300">
                {latestUpdate.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-cyan-300">
                {latestUpdate.evidence}
              </p>
            </div>

            <div className="shrink-0 rounded-2xl border border-cyan-400/40 bg-slate-950/70 px-5 py-4 text-sm font-bold text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
              View latest case study →
            </div>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            What this portfolio shows
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Not just what I know - how I apply it.
          </h2>

          <p className="mt-5 max-w-4xl leading-7 text-slate-300">
            This portfolio is built to show how I approach cybersecurity as an
            entry-level professional with strong hands-on knowledge. Instead of
            only listing tools or certifications, I use projects to demonstrate
            how I analyze risk, design secure environments, build lab
            infrastructure, collect evidence, test detections, troubleshoot
            problems, and communicate findings clearly.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            Some projects are completed, while others are planned as part of a
            long-term learning roadmap. The goal is to show progression,
            consistency, and the ability to turn cybersecurity concepts into
            practical work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Featured Work
            </p>
            <h2 className="mt-4 text-3xl font-bold">Completed Projects</h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-semibold text-cyan-400 hover:text-cyan-300 md:block"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="card-glow rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                {project.label}
              </p>

              <h3 className="mt-4 text-xl font-bold">{project.title}</h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Core Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            How I approach cybersecurity work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            These are the areas I focus on when building, analyzing, and
            improving security environments.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card-glow rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white">
              Security Architecture & Risk
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              I design secure environments using segmentation, DMZ concepts,
              least privilege, and risk-based thinking to reduce attack surface
              and limit lateral movement.
            </p>
          </div>

          <div className="card-glow rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white">
              Detection Engineering & SIEM
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              I build and test detection logic using Wazuh, simulate attacks,
              validate alerts, and analyze logs to turn raw data into meaningful
              security signals.
            </p>
          </div>

          <div className="card-glow rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white">
              Documentation & Evidence
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              I document projects with clear structure, screenshots, logs, and
              findings to show not just results, but how I think and solve
              problems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

const highlights = [
  "Security Architecture",
  "Detection Engineering",
  "Risk Assessment",
  "Cloud & API Security",
];

const featuredProjects = [
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
  {
    label: "Completed Project",
    title: "Wazuh Custom Detection Engineering",
    description:
      "Created and validated a custom Wazuh detection rule for SSH brute-force activity using Kali Linux and Hydra.",
    href: "/projects/wazuh-detection-engineering",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Cybersecurity Portfolio
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
  Security-focused thinking backed by real lab work, detection engineering,
  and risk-driven design.
</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
  I’m an entry-level cybersecurity professional with advanced hands-on
  experience in security architecture, SIEM detection, and lab-based security
  operations. This portfolio shows how I approach real problems, from
  designing secure environments to validating detections and documenting
  evidence.
</p>

<p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
  I may be early in my career, but I focus on building practical skills the
  same way security teams operate: structured thinking, real testing, and
  clear results.
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
      entry-level professional with strong hands-on knowledge. Instead of only
      listing tools or certifications, I use projects to demonstrate how I
      analyze risk, design secure environments, build lab infrastructure,
      collect evidence, test detections, troubleshoot problems, and communicate
      findings clearly.
    </p>

    <p className="mt-4 max-w-4xl leading-7 text-slate-300">
      Some projects are completed, while others are planned as part of a
      long-term learning roadmap. The goal is to show progression, consistency,
      and the ability to turn cybersecurity concepts into practical work.
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
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:-translate-y-1"
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

    <p className="mt-4 mx-auto max-w-2xl text-slate-300">
      These are the areas I focus on when building, analyzing, and improving
      security environments.
    </p>
  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-3">
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:-translate-y-1">
      <h3 className="text-xl font-bold group-hover:text-cyan-400">
        Security Architecture & Risk
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        I design secure environments using segmentation, DMZ concepts, least
        privilege, and risk-based thinking to reduce attack surface and limit
        lateral movement.
      </p>
    </div>

    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:-translate-y-1">
      <h3 className="text-xl font-bold group-hover:text-cyan-400">
        Detection Engineering & SIEM
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        I build and test detection logic using Wazuh, simulate attacks, validate
        alerts, and analyze logs to turn raw data into meaningful security
        signals.
      </p>
    </div>

    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:-translate-y-1">
      <h3 className="text-xl font-bold group-hover:text-cyan-400">
        Documentation & Evidence
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        I document projects with clear structure, screenshots, logs, and
        findings to show not just results, but how I think and solve problems.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}
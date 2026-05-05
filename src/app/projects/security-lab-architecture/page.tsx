import type { Metadata } from "next";
import Link from "next/link";
import ProjectShareActions from "@/components/ProjectShareActions";

export const metadata: Metadata = {
  title: "Security Lab Architecture Case Study",
  description:
    "Case study covering Wayne Howlett’s cybersecurity lab architecture using Wazuh SIEM, Kali Linux, Linux, Windows, VirtualBox, log collection, and detection validation.",
  openGraph: {
    title: "Security Lab Architecture Case Study | Wayne Howlett",
    description:
      "A hands-on cybersecurity lab built for detection testing, threat simulation, and SIEM analysis.",
    url: "/projects/security-lab-architecture",
  },
  twitter: {
    title: "Security Lab Architecture Case Study | Wayne Howlett",
    description:
      "Wazuh SIEM lab architecture, threat simulation, log collection, and detection validation.",
  },
};

export default function SecurityLabArchitecturePage() {
  const url = "https://www.ihowlett.com/projects/security-lab-architecture";

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link
        href="/projects"
        className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
      >
        ← Back to Projects
      </Link>

      <section className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study — Security Lab
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Building a Cybersecurity Lab for Detection, Simulation, and Analysis
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          This project focuses on designing and building a controlled lab
          environment that can be used to simulate security scenarios, generate
          realistic system activity, and validate detection capabilities using a
          SIEM platform.
        </p>
      </section>

      {/* SHARE */}
      <ProjectShareActions
        title="Security Lab Architecture Case Study"
        url={url}
      />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="card-glow rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Status
          </p>
          <p className="mt-3 font-semibold text-white">Completed Case Study</p>
        </div>
        <div className="card-glow rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Focus
          </p>
          <p className="mt-3 font-semibold text-white">SIEM Lab & Detection</p>
        </div>
        <div className="card-glow rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Last Updated
          </p>
          <p className="mt-3 font-semibold text-white">May 2026</p>
        </div>
      </section>

      {/* rest unchanged */}
    </main>
  );
}

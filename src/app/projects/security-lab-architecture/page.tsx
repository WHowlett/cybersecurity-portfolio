import type { Metadata } from "next";
import Link from "next/link";

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

      <section className="mt-14">
        <h2 className="text-3xl font-bold">Context and Objective</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            When learning cybersecurity, one of the biggest gaps is the
            difference between theory and real system behavior. Reading about
            attacks, logs, or detection logic is useful, but it does not fully
            show how these elements interact in a real environment.
          </p>

          <p>
            The objective of this project was to close that gap by creating a
            self-contained lab where I could safely simulate activity, collect
            logs, analyze behavior, and validate detections without relying on
            external systems or assumptions.
          </p>

          <p>
            Instead of focusing on a single tool or concept, the goal was to
            build an environment that supports continuous learning — a place
            where multiple scenarios can be tested, observed, and improved over
            time.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold">Approach</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            I approached this project by treating the lab as a small network
            rather than a single machine. This made it possible to simulate
            interactions between systems, which is critical for understanding
            real-world security events.
          </p>

          <p>
            The lab was built using VirtualBox and configured as an isolated
            internal network. This allowed multiple systems to communicate with
            each other while keeping all activity contained and safe from
            external exposure.
          </p>

          <p>
            At the center of the environment is a Wazuh SIEM server, responsible
            for collecting logs, processing events, and generating alerts. Around
            that, I deployed systems that serve different roles in the lab,
            including a Linux server, a Windows endpoint, and a Kali Linux
            machine used to simulate attacker behavior.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold">Environment Design</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            The environment was designed to represent a simplified but realistic
            network. Each system plays a role in generating or monitoring
            activity, which allows me to observe how events move through the
            environment and how they are captured by the SIEM.
          </p>

          <p>
            The Linux server is used for authentication testing, service
            interaction, and log generation. The Windows endpoint is included to
            support future work involving endpoint telemetry, logging, and
            detection using tools like Sysmon.
          </p>

          <p>
            The Kali Linux machine acts as a controlled attacker system. It is
            used to generate activity such as brute-force attempts and other test
            scenarios, which can then be analyzed through logs and alerts in
            Wazuh.
          </p>

          <p>
            By combining these systems, the lab creates a closed environment
            where both normal and suspicious behavior can be observed and
            understood in a practical way.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold">Execution and Validation</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            After setting up the systems, the next step was validating that logs
            were being generated, collected, and processed correctly. This
            involved configuring Wazuh agents, confirming connectivity between
            systems, and verifying that activity appeared in the SIEM dashboard.
          </p>

          <p>
            I tested different types of system activity to ensure that logs were
            captured consistently. This included authentication events, service
            interactions, and simulated attack behavior generated from the Kali
            system.
          </p>

          <p>
            During this phase, troubleshooting played a major role. Not all
            configurations worked as expected on the first attempt, which
            required reviewing logs, adjusting configurations, and validating
            results until the system behaved as intended.
          </p>

          <p>
            This process was important because it reinforced the idea that
            security work is not just about setup, but about validation and
            understanding how systems behave under different conditions.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold">Skills and Concepts Demonstrated</h2>

        <p className="mt-6 leading-8 text-slate-300">
          This project demonstrates practical experience across multiple areas,
          including SIEM deployment, log collection, system interaction,
          environment design, and troubleshooting. It also reflects how
          detection-focused thinking is developed by observing how activity is
          generated and how it appears in logs.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Wazuh SIEM",
            "VirtualBox",
            "Linux",
            "Windows",
            "Kali Linux",
            "Log Analysis",
            "Threat Simulation",
            "Detection Thinking",
            "Troubleshooting",
            "System Interaction",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold">Why This Project Matters</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            This lab is the foundation for all future projects in my portfolio.
            It provides a consistent environment where scenarios can be tested,
            detections can be validated, and findings can be documented in a way
            that reflects real security workflows.
          </p>

          <p>
            More importantly, it allows me to move beyond theoretical knowledge
            and develop a practical understanding of how systems behave, how
            events are captured, and how detection logic can be applied in
            real-world situations.
          </p>

          <p>
            Every future project builds on this foundation, which helps show
            progression over time rather than isolated exercises.
          </p>
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <h2 className="text-3xl font-bold">
          Full Report and Supporting Documentation
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          The full report includes detailed setup steps, configuration, system
          diagrams, validation process, and supporting evidence.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/docs/security-lab-architecture.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            View Report
          </a>

          <a
            href="/docs/security-lab-architecture.pdf"
            download
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Download PDF
          </a>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
          <iframe
            src="/docs/security-lab-architecture.pdf"
            className="h-[700px] w-full bg-white"
            title="Security Lab Architecture Report PDF"
          />
        </div>
      </section>
    </main>
  );
}

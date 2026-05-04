import Link from "next/link";

export default function SecureNetworkArchitecturePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link
        href="/projects"
        className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
      >
        ← Back to Projects
      </Link>

      {/* HERO */}
      <section className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Capstone Project — Security Architecture
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Designing a Secure Network Architecture and Performing Risk Assessment
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          This project focuses on designing a secure network architecture for a
          simulated organization, identifying risks, and implementing controls
          such as segmentation, firewall rules, and least privilege to reduce
          attack surface and limit lateral movement.
        </p>
      </section>

      {/* CONTEXT */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold">Context and Objective</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            Many organizations operate with flat networks or poorly structured
            segmentation, which increases the risk of lateral movement once an
            attacker gains access. This project was designed to address that
            problem by building a more secure and structured network model.
          </p>

          <p>
            The objective was to design a network for a fictional company that
            supports business operations while also reducing risk through proper
            segmentation, controlled access, and visibility into traffic between
            systems.
          </p>

          <p>
            Instead of focusing only on diagram creation, this project also
            includes risk assessment, control justification, and explanation of
            how each decision improves the overall security posture.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold">Approach</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            I approached this project by thinking through how an organization’s
            systems should be separated based on function and risk. This led to
            designing multiple network segments rather than placing everything
            on a single network.
          </p>

          <p>
            The architecture includes internal systems, external-facing services,
            and protected zones, all separated using VLANs and controlled
            communication paths. Firewall rules are used to restrict traffic
            between these segments based on necessity.
          </p>

          <p>
            Each design decision was made with a specific goal: reduce attack
            surface, limit unnecessary access, and make it more difficult for an
            attacker to move freely within the network.
          </p>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold">Architecture Design</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            The network is divided into multiple segments, including internal
            user systems, servers, and a demilitarized zone (DMZ) for
            externally-facing services. This separation helps control how traffic
            flows between systems and reduces exposure.
          </p>

          <p>
            The DMZ is designed to host public-facing services while isolating
            them from critical internal systems. If a service in the DMZ is
            compromised, segmentation helps prevent direct access to sensitive
            internal resources.
          </p>

          <p>
            Firewall rules enforce strict communication paths between segments,
            allowing only necessary traffic while blocking unnecessary or risky
            connections. This reduces the ability for unauthorized movement
            across the network.
          </p>

          <p>
            This design follows core security principles such as least privilege,
            segmentation, and controlled access, all of which contribute to a
            stronger and more resilient network.
          </p>
        </div>
      </section>

      {/* RISK */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold">Risk Assessment</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            A key part of this project was identifying potential risks within the
            network and evaluating how they could impact the organization. This
            included risks such as unauthorized access, lateral movement,
            exposed services, and misconfigured permissions.
          </p>

          <p>
            Each identified risk was analyzed and paired with recommended
            controls. These controls included segmentation, firewall rules,
            restricted access, and improved monitoring.
          </p>

          <p>
            The goal was not just to list risks, but to understand how they
            connect to real systems and how design decisions can reduce their
            impact.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold">Skills and Concepts Demonstrated</h2>

        <p className="mt-6 leading-8 text-slate-300">
          This project demonstrates security architecture thinking, risk-based
          decision making, and understanding of how network design impacts
          security. It also reflects the ability to translate technical concepts
          into structured documentation.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Network Segmentation",
            "VLANs",
            "DMZ Design",
            "Firewall Rules",
            "Risk Assessment",
            "Least Privilege",
            "Security Architecture",
            "Threat Modeling Concepts",
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

      {/* WHY IT MATTERS */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold">Why This Project Matters</h2>

        <div className="mt-6 space-y-6 leading-8 text-slate-300">
          <p>
            This project demonstrates the ability to think beyond individual
            systems and understand how an entire network should be structured to
            reduce risk. It shows how design decisions affect security outcomes.
          </p>

          <p>
            It also highlights the importance of planning and architecture in
            cybersecurity. Many security issues originate from poor design, and
            this project focuses on addressing those issues at the foundation
            level.
          </p>

          <p>
            Combined with hands-on lab work, this project shows both sides of
            security: building secure systems and detecting issues within them.
          </p>
        </div>
      </section>
<section className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
  <h2 className="text-3xl font-bold">Reflection and Improvements</h2>

  <div className="mt-6 space-y-6 leading-8 text-slate-300">
    <p>
      One area I would improve in this project is the inclusion of cloud-based
      storage and services. While the architecture focuses on on-premise-style
      segmentation and control, modern environments often rely on cloud
      platforms for storage, logging, and system integration.
    </p>

    <p>
      Adding cloud storage would introduce additional considerations such as
      access control, identity management, logging visibility, and secure data
      handling. It would also allow the architecture to better reflect hybrid
      or cloud-integrated environments, which are more common in real-world
      organizations.
    </p>

    <p>
      This is something I plan to incorporate into future projects as I expand
      further into cloud security and architecture design.
    </p>
  </div>
</section>
<section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
  <h2 className="text-3xl font-bold">Project Walkthrough</h2>

  <p className="mt-4 leading-7 text-slate-300">
    This walkthrough provides a high-level explanation of the architecture,
    design decisions, and how the environment was structured. It complements
    the written report by showing the reasoning and thought process behind the
    implementation.
  </p>

  <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-black">
    <iframe
      className="aspect-video w-full"
      src="https://www.youtube.com/embed/iDs2_2rH0fE"
      title="Secure Network Architecture Project Walkthrough"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>

  <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-4">
    <p className="text-sm leading-6 text-slate-400">
      Note: This video was recorded using voice-to-text assistance due to a
      noisy environment and a speech impairment. The goal was to ensure clarity
      while still explaining the project effectively.
    </p>
  </div>
</section>

      {/* PDF */}
      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <h2 className="text-3xl font-bold">
          Full Report and Supporting Documentation
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          The full report includes network diagrams, architecture decisions,
          risk analysis, and detailed explanations of the controls used.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/docs/secure-network-architecture.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            View Report
          </a>

          <a
            href="/docs/secure-network-architecture.pdf"
            download
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Download PDF
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
          <iframe
            src="/docs/secure-network-architecture.pdf"
            className="h-[700px] w-full bg-white"
            title="Secure Network Architecture Report"
          />
        </div>
      </section>
    </main>
  );
}

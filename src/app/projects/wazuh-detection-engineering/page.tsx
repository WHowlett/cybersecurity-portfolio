import Link from "next/link";
import ProjectShareActions from "@/components/ProjectShareActions";

export default function WazuhDetectionEngineeringPage() {
  const url = "https://www.ihowlett.com/projects/wazuh-detection-engineering";

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link href="/projects" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
        ← Back to Projects
      </Link>

      <section className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study — Detection Engineering
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Custom Detection Engineering and Incident Analysis Using Wazuh SIEM
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          This project focused on creating and validating a custom Wazuh detection rule for SSH brute-force activity.
        </p>
      </section>

      <ProjectShareActions title="Wazuh Detection Engineering Case Study" url={url} />

      {/* rest unchanged */}
    </main>
  );
}

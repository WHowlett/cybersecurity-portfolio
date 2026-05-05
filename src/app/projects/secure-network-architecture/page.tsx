import Link from "next/link";
import ProjectShareActions from "@/components/ProjectShareActions";

export default function SecureNetworkArchitecturePage() {
  const url = "https://www.ihowlett.com/projects/secure-network-architecture";

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link href="/projects" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
        ← Back to Projects
      </Link>

      <section className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Capstone Project — Security Architecture
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Designing a Secure Network Architecture and Performing Risk Assessment
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          This project focuses on designing a secure network architecture for a simulated organization.
        </p>
      </section>

      <ProjectShareActions title="Secure Network Architecture Case Study" url={url} />

      {/* rest unchanged */}
    </main>
  );
}

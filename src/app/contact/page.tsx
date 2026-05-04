import { Mail, Globe, FileText, FolderKanban, Link as LinkIcon, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    title: "Connect Card",
    text: "Quick access to my links and contact options.",
    href: "https://connect.ihowlett.com",
    icon: Globe,
    external: true,
  },
  {
    title: "Email",
    text: "wayne@ihowlett.com",
    href: "mailto:wayne@ihowlett.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    text: "Connect professionally.",
    href: "https://www.linkedin.com/in/wayne-howlett/",
    icon: LinkIcon,
    external: true,
  },
  {
  title: "GitHub",
  text: "View code and technical work.",
  href: "https://github.com",
  icon: ExternalLink,
  external: true,
},
];

const openRoles = [
  "SOC Analyst",
  "Security Analyst",
  "Junior Security Engineer",
  "Detection Engineering Support",
  "Cloud Security Support",
  "API Security Support",
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Contact
      </p>

      <section className="mt-4 max-w-3xl">
        <h1 className="text-4xl font-bold md:text-5xl">
          Let’s connect.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          I’m Wayne Howlett, an early-career security-focused engineer building
          hands-on experience in API security, cloud security, security
          architecture, and detection engineering.
        </p>

        <p className="mt-4 leading-7 text-slate-400">
          The fastest way to reach me is through my connect card, email, or
          LinkedIn.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {contactLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="flex items-start gap-4">
                <Icon className="mt-1 h-5 w-5 text-cyan-400" />

                <div>
                  <h2 className="text-lg font-bold group-hover:text-cyan-400">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              </div>
            </a>
          );
        })}
      </section>

      <section className="mt-10 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
  <h2 className="text-2xl font-bold">What I’m open to</h2>

  <p className="mt-3 leading-7 text-slate-300">
    I’m open to entry-level cybersecurity opportunities where I can contribute,
    learn, and grow with a security-focused team.
  </p>

  <div className="mt-5 flex flex-wrap gap-3">
    {openRoles.map((role) => (
      <span
        key={role}
        className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200"
      >
        {role}
      </span>
    ))}
  </div>

  <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-4">
    <h3 className="font-semibold text-white">Accessibility note</h3>

    <p className="mt-2 text-sm leading-6 text-slate-400">
      I have hearing loss, so written communication, clear meeting notes, and
      accessible communication tools are helpful. I communicate well through
      documentation, email, chat, and structured follow-up.
    </p>
  </div>

  <div className="mt-6 flex flex-wrap gap-3">
    <a
      href="/resume"
      className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
    >
      View Resume
    </a>

    <a
      href="/projects"
      className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
    >
      View Projects
    </a>
  </div>
</section>
    </main>
  );
}
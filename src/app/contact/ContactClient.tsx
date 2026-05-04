"use client";

import { Mail, Globe, Link as LinkIcon, ExternalLink } from "lucide-react";

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

export default function ContactClient() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Contact
      </p>

      <section className="mt-4 max-w-3xl">
        <h1 className="text-4xl font-bold md:text-5xl">Let’s connect.</h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          I’m Wayne Howlett, an early-career security-focused engineer building
          hands-on experience in API security, cloud security, security
          architecture, and detection engineering.
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
    </main>
  );
}

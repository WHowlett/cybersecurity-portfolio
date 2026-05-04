"use client";

import { Mail, Globe, Link as LinkIcon, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    title: "Connect Card",
    text: "Quick access to all links and contact options.",
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
          I’m Wayne Howlett, an early-career cybersecurity-focused engineer
          building hands-on experience in security architecture, detection
          engineering, SIEM (Wazuh), API security, and cloud security.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="card-glow rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Availability
          </p>
          <p className="mt-3 font-semibold text-white">
            Open to Entry-Level Roles
          </p>
        </div>

        <div className="card-glow rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Focus
          </p>
          <p className="mt-3 font-semibold text-white">
            SOC · Security Analyst · Junior Security Engineer
          </p>
        </div>

        <div className="card-glow rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Response Time
          </p>
          <p className="mt-3 font-semibold text-white">24–48 Hours</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Best ways to reach me</h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          The fastest way to reach me is by email or LinkedIn. I actively check
          both and respond as quickly as possible. You can also use my connect
          page for quick access to all platforms.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="card-glow rounded-2xl p-5"
              >
                <div className="flex items-start gap-4">
                  <Icon className="mt-1 h-5 w-5 text-cyan-400" />

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <h2 className="text-2xl font-bold">A quick note</h2>

        <p className="mt-4 leading-7 text-slate-300">
          Due to hearing loss, I may prefer written communication (email or
          messaging) when possible. This helps ensure clear communication,
          especially in technical discussions. I’m fully comfortable working in
          team environments and using collaboration tools to stay aligned.
        </p>

        <p className="mt-4 leading-7 text-slate-300">
          I’m looking for opportunities where I can contribute, continue
          learning, and grow into a stronger security professional over time.
        </p>
      </section>
    </main>
  );
}

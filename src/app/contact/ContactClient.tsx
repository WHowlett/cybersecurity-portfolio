"use client";

import { FormEvent, useState } from "react";
import { Mail, Globe, Link as LinkIcon, ExternalLink, Send } from "lucide-react";

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
    href: "https://github.com/WHowlett",
    icon: ExternalLink,
    external: true,
  },
  {
    title: "X / Twitter",
    text: "Follow short updates and cybersecurity learning notes.",
    href: "https://x.com/waynehowlettsec",
    icon: ExternalLink,
    external: true,
  },
  {
    title: "Facebook Page",
    text: "Follow my professional cybersecurity page.",
    href: "https://facebook.com/whowlettsecurity",
    icon: ExternalLink,
    external: true,
  },
];

const contactTopics = [
  "Recruiting / Job Opportunity",
  "Cybersecurity Collaboration",
  "Portfolio / Project Question",
  "Networking",
  "Other",
];

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(contactTopics[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Portfolio Contact: ${topic}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:wayne@ihowlett.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("Opening your email app with a prefilled message. If it does not open, email me directly at wayne@ihowlett.com.");
    window.location.href = mailto;
  }

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
          engineering, SIEM (Wazuh), API security, cloud security, and incident response.
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

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-cyan-400 p-3 text-slate-950">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Send a message</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                This form opens a prefilled email draft so your message goes directly through your email app. No message is stored on the website.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-white">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="topic" className="text-sm font-semibold text-white">
                Topic
              </label>
              <select
                id="topic"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                {contactTopics.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold text-white">
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={7}
                className="mt-2 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                placeholder="Share the role, opportunity, collaboration idea, or question you would like to discuss."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Send className="h-4 w-4" />
              Open Email Draft
            </button>

            {status && <p className="text-sm leading-6 text-cyan-200">{status}</p>}
          </form>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-bold">Best ways to reach me</h2>

          <p className="mt-4 leading-7 text-slate-300">
            The fastest way to reach me is by email or LinkedIn. I actively check both and respond as quickly as possible.
          </p>

          <div className="mt-6 grid gap-4">
            {contactLinks.slice(0, 3).map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-4 transition hover:border-cyan-400"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 h-5 w-5 text-cyan-400" />

                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">More ways to connect</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contactLinks.slice(3).map((item) => {
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
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
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
          Due to hearing loss, I may prefer written communication (email or messaging) when possible. This helps ensure clear communication, especially in technical discussions. I’m fully comfortable working in team environments and using collaboration tools to stay aligned.
        </p>

        <p className="mt-4 leading-7 text-slate-300">
          I’m looking for opportunities where I can contribute, continue learning, and grow into a stronger security professional over time.
        </p>
      </section>
    </main>
  );
}

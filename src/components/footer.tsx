import Link from "next/link";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold text-white">Wayne Howlett</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Cybersecurity portfolio focused on security architecture, detection
            engineering, Wazuh SIEM labs, API security, cloud security, and
            evidence-based project work.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Actively maintained · Last updated June 2026
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Explore
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Connect
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <a className="text-slate-400 hover:text-cyan-400" href="mailto:wayne@ihowlett.com">
              wayne@ihowlett.com
            </a>
            <a
              className="text-slate-400 hover:text-cyan-400"
              href="https://www.linkedin.com/in/wayne-howlett/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-slate-400 hover:text-cyan-400"
              href="https://x.com/waynehowlettsec"
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter
            </a>
            <a
              className="text-slate-400 hover:text-cyan-400"
              href="https://facebook.com/whowlettsecurity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Page
            </a>
            <a
              className="text-slate-400 hover:text-cyan-400"
              href="https://connect.ihowlett.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect Hub
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-500">
        © 2026 Wayne Howlett. Built to show practical cybersecurity work,
        documentation, and growth.
      </div>
    </footer>
  );
}

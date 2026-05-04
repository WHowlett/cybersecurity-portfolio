"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "../data/navigation";

const projectLinks = [
  {
    name: "Security Lab Architecture",
    href: "/projects/security-lab-architecture",
  },
  {
    name: "Secure Network Architecture",
    href: "/projects/secure-network-architecture",
  },
  {
    name: "Wazuh Detection Engineering",
    href: "/projects/wazuh-detection-engineering",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group">
          <div className="text-lg font-bold tracking-tight text-white">
            Wayne Howlett
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Cybersecurity Portfolio
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) =>
            item.name === "Projects" ? (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-slate-400 hover:text-cyan-400"
                  }`}
                >
                  Projects

                  {isActive(item.href) && (
                    <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                  )}
                </Link>

                <div className="invisible absolute left-0 top-full mt-4 w-80 translate-y-2 rounded-2xl border border-slate-800 bg-slate-900/95 p-3 opacity-0 shadow-2xl shadow-cyan-950/30 backdrop-blur transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    Project Case Studies
                  </p>

                  {projectLinks.map((project) => (
                    <Link
                      key={project.href}
                      href={project.href}
                      className="block rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {item.name}

                {isActive(item.href) && (
                  <span className="absolute -bottom-3 left-0 h-[2px] w-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                )}
              </Link>
            )
          )}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-base font-medium transition ${
                  isActive(item.href)
                    ? "bg-slate-900 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-3 border-t border-slate-800 pt-4">
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Project Pages
              </p>

              {projectLinks.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  {project.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import { useState } from "react";
import { Copy, Mail, Share2 } from "lucide-react";

type ProjectShareActionsProps = {
  title: string;
  url: string;
  description?: string;
};

export default function ProjectShareActions({
  title,
  url,
  description = "Check out this cybersecurity case study from Wayne Howlett.",
}: ProjectShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const emailUrl = `mailto:?subject=${encodeURIComponent(
    `${title} | Wayne Howlett`
  )}&body=${encodeURIComponent(`${description}\n\n${url}`)}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  const shareProject = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `${title} | Wayne Howlett`,
        text: description,
        url,
      });
      return;
    }

    await copyLink();
  };

  return (
    <section className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 shadow-lg shadow-cyan-950/20">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <Share2 className="h-4 w-4" /> Share case study
          </p>
          <h2 className="mt-3 text-2xl font-bold">Found this useful?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Share this project with a recruiter, teammate, mentor, or anyone reviewing hands-on cybersecurity work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={shareProject}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            aria-label={`Share ${title}`}
          >
            <Share2 className="h-4 w-4" /> Share
          </button>

          <a
            href={emailUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            aria-label={`Share ${title} by email`}
          >
            <Mail className="h-4 w-4" /> Email
          </a>

          <button
            type="button"
            onClick={copyLink}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            aria-label={`Copy link to ${title}`}
          >
            <Copy className="h-4 w-4" /> {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </section>
  );
}

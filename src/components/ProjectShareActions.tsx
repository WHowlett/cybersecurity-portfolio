"use client";

import { useState } from "react";
import { Check, Copy, Mail, Share2 } from "lucide-react";

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

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`${title} | Wayne Howlett`);
  const encodedText = encodeURIComponent(description);

  const emailUrl = `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(`${description}\n\n${url}`)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
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
    <section className="relative mt-14 overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/12 via-slate-900/80 to-slate-950 p-6 shadow-2xl shadow-cyan-950/20">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <Share2 className="h-4 w-4" /> Share case study
          </p>
          <h2 className="mt-3 text-2xl font-bold">Found this useful?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Share this project with a recruiter, teammate, mentor, or anyone reviewing hands-on cybersecurity work.
          </p>
          {copied && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              <Check className="h-3.5 w-3.5" /> Link copied to clipboard
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
          <button
            type="button"
            onClick={shareProject}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            aria-label={`Share ${title}`}
          >
            <Share2 className="h-4 w-4" /> Share
          </button>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
            aria-label={`Share ${title} on LinkedIn`}
          >
            LinkedIn
          </a>

          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
            aria-label={`Share ${title} on X`}
          >
            X
          </a>

          <a
            href={emailUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
            aria-label={`Share ${title} by email`}
          >
            <Mail className="h-4 w-4" /> Email
          </a>

          <button
            type="button"
            onClick={copyLink}
            className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400 sm:col-span-1"
            aria-label={`Copy link to ${title}`}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </section>
  );
}

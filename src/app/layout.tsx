import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const siteUrl = "https://cybersecurity-portfolio-seven-nu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wayne Howlett | Cybersecurity Portfolio",
    template: "%s | Wayne Howlett",
  },
  description:
    "Cybersecurity portfolio for Wayne Howlett, focused on security architecture, SIEM detection engineering, risk assessment, cloud and API security, and hands-on lab projects.",
  keywords: [
    "Wayne Howlett",
    "cybersecurity portfolio",
    "SOC analyst",
    "security analyst",
    "junior security engineer",
    "Wazuh SIEM",
    "detection engineering",
    "security architecture",
    "cloud security",
    "API security",
  ],
  authors: [{ name: "Wayne Howlett", url: siteUrl }],
  creator: "Wayne Howlett",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wayne Howlett | Cybersecurity Portfolio",
    description:
      "Hands-on cybersecurity portfolio featuring security architecture, Wazuh SIEM detection engineering, risk assessment, and practical lab projects.",
    siteName: "Wayne Howlett Cybersecurity Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayne Howlett | Cybersecurity Portfolio",
    description:
      "Hands-on cybersecurity portfolio featuring security architecture, Wazuh SIEM detection engineering, risk assessment, and practical lab projects.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-white">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.10),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.08),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
        </div>

        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

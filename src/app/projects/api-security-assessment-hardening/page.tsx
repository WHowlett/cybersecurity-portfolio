import type { Metadata } from "next";
import Link from "next/link";
import ProjectShareActions from "@/components/ProjectShareActions";

const projectUrl = "https://www.ihowlett.com/projects/api-security-assessment-hardening";
const reportPath = "/docs/API_Security_Assessment_and_Hardening_Report.pdf";
const githubUrl = "https://github.com/WHowlett/api-security-assessment-hardening.git";
const ogImage = "/og-image.png";

export const metadata: Metadata = {
  title: "API Security Assessment & Hardening",
  description:
    "Wayne Howlett case study: secured a Node.js/Express REST API by identifying broken authentication and authorization risks, then implementing JWT authentication, RBAC, rate limiting, input validation, and security logging.",
  keywords: [
    "Wayne Howlett",
    "API security",
    "application security",
    "Node.js security",
    "Express security",
    "JWT authentication",
    "role based access control",
    "RBAC",
    "rate limiting",
    "input validation",
    "Zod validation",
    "security logging",
    "cybersecurity portfolio",
  ],
  alternates: {
    canonical: projectUrl,
  },
  openGraph: {
    type: "article",
    url: projectUrl,
    title: "API Security Assessment & Hardening | Wayne Howlett",
    description:
      "Application security case study showing how a REST API was tested and hardened with JWT authentication, RBAC, rate limiting, input validation, and security logging.",
    siteName: "Wayne Howlett Cybersecurity Portfolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "API Security Assessment and Hardening case study by Wayne Howlett",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Security Assessment & Hardening | Wayne Howlett",
    description:
      "Node.js/Express API security case study covering JWT authentication, RBAC, rate limiting, input validation, and security logging.",
    images: [ogImage],
  },
};

export default function ApiSecurityAssessmentHardeningPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link href="/projects" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
        ← Back to Projects
      </Link>

      <section className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Case Study — API Security / Application Security
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          API Security Assessment & Hardening Using Node.js
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          This project demonstrates the process of identifying common API security weaknesses and applying layered controls to harden a REST API. The API was built with Node.js and Express, tested with Thunder Client, and secured using JWT authentication, role-based access control, rate limiting, input validation, and security logging.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            View GitHub Repo
          </a>
          <a href={reportPath} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400">
            View Full Report
          </a>
        </div>
      </section>

      <ProjectShareActions title="API Security Assessment & Hardening Case Study" url={projectUrl} />

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        <div className="card-glow rounded-2xl p-5"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Status</p><p className="mt-3 font-semibold text-white">Completed Case Study</p></div>
        <div className="card-glow rounded-2xl p-5"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Focus</p><p className="mt-3 font-semibold text-white">API Security</p></div>
        <div className="card-glow rounded-2xl p-5"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Stack</p><p className="mt-3 font-semibold text-white">Node.js • Express</p></div>
        <div className="card-glow rounded-2xl p-5"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Controls</p><p className="mt-3 font-semibold text-white">JWT • RBAC • Zod</p></div>
      </section>

      <section className="mt-14 rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8">
        <h2 className="text-3xl font-bold">What This Project Shows</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Identified exposed API routes and missing authentication controls.",
            "Implemented JWT-based authentication for protected endpoints.",
            "Applied role-based access control to restrict admin functionality.",
            "Added login rate limiting to reduce brute-force abuse risk.",
            "Used Zod to reject malformed or weak request input.",
            "Logged security events for failed logins, missing tokens, and unauthorized access attempts.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Objective</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>The objective of this project was to demonstrate the identification, exploitation, and mitigation of common API security vulnerabilities within a modern web application environment. Rather than focusing only on building a functional API, this project examined how insecure design decisions can expose sensitive data and then applied layered controls to reduce risk.</p><p>The project provided hands-on practice with authentication, authorization, input validation, abuse prevention, and security logging. These are core areas of API security because modern applications often depend on APIs to process sensitive user and business data.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Scenario</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>APIs are frequently targeted by attackers because they expose application logic and data through structured endpoints. Weak authentication, missing authorization checks, and poor input validation can lead to data exposure, privilege abuse, or service disruption.</p><p>In this scenario, a REST API was intentionally developed with limited security controls to simulate a vulnerable environment. The API was then tested to identify exposed routes and access control weaknesses before security controls were added and validated.</p></div></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">Environment and Tools</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>The project was built in a local development environment using Node.js and Express. Thunder Client was used to send API requests, validate responses, and capture testing evidence.</p><p>JSON Web Tokens were used to support authentication, Zod was used for input validation, and Express Rate Limit was used to limit repeated login attempts. The project also included security event logging to show how suspicious behavior can be recorded for later review.</p><div className="grid gap-3 md:grid-cols-2">{["Node.js / Express — REST API development","Thunder Client — request testing and evidence capture","JWT — token-based authentication","RBAC — role-based admin route protection","Express Rate Limit — login abuse prevention","Zod — input validation and request structure enforcement","Security Logging — event visibility for failed and unauthorized actions"].map((tool) => (<div key={tool} className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-300">{tool}</div>))}</div></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Vulnerability Simulation</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>During the initial phase, the API included an exposed profile endpoint that returned sensitive user information without requiring authentication. This demonstrated how missing authentication can expose data to anyone who knows or discovers an endpoint.</p><p>This type of issue is common in poorly secured APIs because developers may focus on functionality first and delay access control until later. The test showed why authentication and authorization must be enforced as part of the API design, not added as an afterthought.</p></div></section>

      <section className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8"><h2 className="text-3xl font-bold">Security Controls Implemented</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>The first major improvement was adding JWT authentication. After a successful login, the API returns a token that must be included in the Authorization header to access protected endpoints. This prevents unauthenticated access to sensitive routes.</p><p>Role-based access control was then added to protect administrative functionality. Standard users can access normal protected routes, but only users with the admin role can access the admin endpoint. This helps prevent privilege abuse and unauthorized access to sensitive functionality.</p><p>Additional controls included login rate limiting to reduce brute-force attempts, Zod input validation to reject malformed requests, and security logging to record failed login attempts, missing token attempts, invalid token attempts, and unauthorized admin access attempts.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Validation and Results</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>Testing confirmed that the hardened API behaved as intended. The profile endpoint required a valid JWT token, the admin endpoint denied access to standard users, and admin users were able to access restricted functionality only after successful authentication.</p><p>Rate limiting blocked repeated failed login attempts, and input validation rejected malformed requests before they reached the authentication logic. Security logs also showed evidence of invalid inputs, missing tokens, failed logins, and unauthorized access attempts.</p><p>The results show that the API moved from an insecure implementation to a layered security model with multiple controls working together.</p></div></section>

      <section className="mt-14"><h2 className="text-3xl font-bold">Skills and Concepts Demonstrated</h2><div className="mt-6 flex flex-wrap gap-3">{["API Security","Application Security","Node.js","Express","JWT Authentication","Role-Based Access Control","Rate Limiting","Input Validation","Zod","Thunder Client","Security Logging","Secure Coding","Access Control Testing"].map((skill) => (<span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">{skill}</span>))}</div></section>

      <section className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8"><h2 className="text-3xl font-bold">Why This Project Matters</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>API security is important because APIs often provide direct access to application data and business logic. If authentication, authorization, validation, and abuse prevention are weak, attackers may be able to access data, perform unauthorized actions, or overwhelm services.</p><p>This project matters because it shows practical application security thinking: identify insecure behavior, understand the risk, implement controls, and validate the outcome with evidence. It also expands the portfolio beyond SIEM and network architecture into secure application design.</p></div></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">What Could Be Improved</h2><div className="mt-6 space-y-6 leading-8 text-slate-300"><p>Future improvements could include integrating API security logs with a SIEM platform such as Wazuh, adding persistent database storage, improving token handling with refresh tokens, and deploying the API behind a cloud API gateway or reverse proxy.</p><p>Additional enhancements could include automated security testing, OWASP API Security Top 10 mapping, Docker containerization, and expanded logging for detection engineering use cases.</p></div></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">Resume Bullet</h2><p className="mt-4 leading-7 text-slate-300">Designed and secured a Node.js API by identifying vulnerabilities and implementing JWT authentication, role-based access control, rate limiting, input validation, and security logging to protect against real-world API attacks.</p></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">GitHub Repository</h2><p className="mt-4 leading-7 text-slate-300">The GitHub repository contains the API source code, screenshots, report, and supporting documentation for this application security case study.</p><a href={githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">Open Repository</a></section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"><h2 className="text-3xl font-bold">Full Report and Supporting Documentation</h2><p className="mt-4 leading-7 text-slate-300">The full report includes the project objective, scenario, environment, vulnerability simulation, authentication and access control implementation, rate limiting, input validation, security logging, validation results, and future improvements.</p><div className="mt-6 flex flex-wrap gap-4"><a href={reportPath} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">View Report</a><a href={reportPath} download className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400">Download PDF</a></div><div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"><iframe src={reportPath} className="h-[700px] w-full bg-white" title="API Security Assessment and Hardening Report PDF" /></div></section>
    </main>
  );
}

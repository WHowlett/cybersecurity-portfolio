"use client";

import { useMemo, useState } from "react";
import { Lightbulb, Target, Wrench } from "lucide-react";

const faqGroups = [
  {
    category: "General",
    questions: [
      {
        question: "Tell me about yourself.",
        answer:
          "I’m building my cybersecurity career through hands-on labs, structured projects, and clear documentation. My background includes full-stack development, business intelligence, and systems troubleshooting, which helps me understand cybersecurity from both a builder’s and defender’s perspective.",
      },
      {
        question: "Are you entry-level?",
        answer:
          "Yes, I’m early in my cybersecurity career. At the same time, I have been focused on building real experience through labs, SIEM work, detection testing, architecture projects, and documentation instead of only studying theory.",
      },
      {
        question: "Why did you choose cybersecurity?",
        answer:
          "Cybersecurity fits how I naturally think. I like understanding how systems work, where they can fail, how attackers take advantage of weaknesses, and how defenders can improve visibility, controls, and response.",
      },
      {
        question: "What makes your portfolio different?",
        answer:
          "My portfolio is built around evidence. I show the lab setup, the tools used, what I tested, what worked, what broke, how I fixed it, and what I learned from the process.",
      },
      {
        question: "Why should a team take a chance on you?",
        answer:
          "Because I take the work seriously. I’m coachable, consistent, and willing to put in the effort to learn. I may be early in the field, but I already practice the habits that matter: testing, troubleshooting, documenting, and improving.",
      },
    ],
  },
  {
    category: "Roles",
    questions: [
      {
        question: "What kind of roles are you looking for?",
        answer:
          "I’m looking for entry-level roles such as SOC Analyst, Security Analyst, Junior Security Engineer, Detection Engineering Support, Cloud Security Support, API Security Support, Vulnerability Management Support, and security documentation or GRC-related roles.",
      },
      {
        question: "How would you fit into a SOC Analyst role?",
        answer:
          "I can support alert review, log analysis, evidence collection, basic triage, and investigation workflows. My Wazuh lab work helped me understand how suspicious activity appears in logs and how alerts should be validated.",
      },
      {
        question: "How would you fit into a Junior Security Engineer role?",
        answer:
          "I bring a builder’s mindset. I’m comfortable setting up systems, troubleshooting issues, reviewing configurations, documenting controls, and thinking through how security decisions affect real environments.",
      },
      {
        question: "How would you fit into a detection engineering support role?",
        answer:
          "I have practiced writing and testing detection logic in Wazuh, simulating attack activity, validating alerts, and troubleshooting rule issues. I understand that detection work requires testing, tuning, and clear evidence.",
      },
      {
        question: "How would you fit into a cloud or API security support role?",
        answer:
          "My development background helps me understand applications, APIs, authentication, authorization, logging, and data flow. I’m continuing to build cloud and API security knowledge around access control, misconfiguration, and secure design.",
      },
      {
        question: "How would you fit into a GRC or security documentation role?",
        answer:
          "I’m comfortable documenting risk, controls, evidence, findings, and recommendations. I care about making technical work understandable to both technical and non-technical readers.",
      },
      {
        question: "What would you do in your first 30–60 days on a team?",
        answer:
          "I would focus on learning the environment, understanding the tools, asking good questions, reviewing existing processes, and helping wherever I can. My goal would be to become useful while learning from the team.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What security tools and platforms have you worked with?",
        answer:
          "I have worked with Wazuh, Kali Linux, Hydra, VirtualBox, Linux, Windows endpoints, Nmap, Wireshark concepts, Sysmon concepts, GitHub, Next.js, TypeScript, and documentation/reporting workflows.",
      },
      {
        question: "What security areas are you focused on?",
        answer:
          "My focus areas include SOC analysis, SIEM monitoring, detection engineering, security architecture, risk assessment, cloud security fundamentals, API security, vulnerability management, IAM, logging strategy, and secure software development.",
      },
      {
        question: "What is your strongest area right now?",
        answer:
          "My strongest areas right now are hands-on lab building, Wazuh SIEM work, detection thinking, log analysis, security documentation, and risk-based architecture thinking.",
      },
      {
        question: "Do you work more on offense or defense?",
        answer:
          "My main focus is defense: detection, monitoring, hardening, architecture, and investigation. I use offensive techniques in controlled labs so I can understand what defenders should detect and how attacks appear in logs.",
      },
      {
        question: "Do you have API or web security knowledge?",
        answer:
          "Yes. My full-stack development background helps me understand how web applications and APIs are built. I’m focused on authentication, authorization, input validation, logging, secure design, and common API weaknesses.",
      },
      {
        question: "Do you have cloud security knowledge?",
        answer:
          "I’m building cloud security knowledge around IAM, least privilege, logging, secure configuration, misconfiguration review, and how cloud architecture decisions affect security risk.",
      },
      {
        question: "Do you understand Windows security concepts?",
        answer:
          "I’m building knowledge around Windows endpoint security, event logs, Sysmon telemetry, account hygiene, Active Directory concepts, Microsoft 365 security basics, and endpoint visibility.",
      },
      {
        question: "Do you understand Linux security concepts?",
        answer:
          "Yes. I’ve worked with Linux in lab environments, including SSH, authentication logs, services, basic hardening ideas, and how Linux activity can be monitored through Wazuh.",
      },
      {
        question: "Do you use MITRE ATT&CK?",
        answer:
          "I use MITRE ATT&CK to connect attacker behavior to detection ideas. For example, SSH brute-force activity maps to brute-force behavior, which helps explain what a detection is designed to identify.",
      },
      {
        question: "Do you have vulnerability management knowledge?",
        answer:
          "I’m building vulnerability management knowledge around identifying weaknesses, validating findings, understanding risk, prioritizing remediation, and documenting recommendations clearly.",
      },
    ],
  },
  {
    category: "Tools & Skills",
    questions: [
      {
        question: "How have you used Wazuh?",
        answer:
          "I used Wazuh as a SIEM in my lab to collect logs, review authentication activity, validate alerts, and test custom detection logic for SSH brute-force behavior.",
      },
      {
        question: "How have you used Kali Linux?",
        answer:
          "I use Kali Linux as a controlled attacker machine in lab scenarios. It helps me simulate activity safely so I can understand what should be detected on the defensive side.",
      },
      {
        question: "How have you used Hydra?",
        answer:
          "I used Hydra to simulate SSH brute-force activity against a Linux server in my lab. That activity generated authentication failures that were reviewed and detected through Wazuh.",
      },
      {
        question: "How have you used VirtualBox?",
        answer:
          "I use VirtualBox to build isolated lab environments with systems like Wazuh, Kali Linux, Linux servers, and Windows endpoints. It gives me a safe place to test and document security scenarios.",
      },
      {
        question: "How do your programming skills help your cybersecurity work?",
        answer:
          "Programming helps me understand how applications are built, how APIs work, where security issues can appear, and how automation or dashboards can support security workflows.",
      },
      {
        question: "How does business intelligence help you in cybersecurity?",
        answer:
          "Business intelligence helps me think about data, reporting, patterns, dashboards, and communicating information clearly. Those skills translate well into log analysis, alert reporting, and security documentation.",
      },
      {
        question: "What tools are you still improving with?",
        answer:
          "I’m continuing to improve with Wazuh, Sysmon, Windows logs, cloud security tooling, API security testing tools, vulnerability scanning, and MITRE ATT&CK mapping.",
      },
    ],
  },
  {
    category: "Work Style",
    questions: [
      {
        question: "How do you approach a problem you haven’t seen before?",
        answer:
          "I break it down step by step. I try to understand what is happening, review logs or errors, test one thing at a time, and document what I learn along the way.",
      },
      {
        question: "How do you handle mistakes or things not working?",
        answer:
          "I treat it as part of the process. If something does not work, I slow down, review the error, test possible causes, fix the issue, and document what happened so I can learn from it.",
      },
      {
        question: "How do you document your work?",
        answer:
          "I document setup steps, tools used, commands, screenshots, logs, alerts, findings, issues, fixes, and lessons learned. Good documentation helps me learn and helps others understand the work.",
      },
      {
        question: "How do you handle pressure or time constraints?",
        answer:
          "I try to stay structured. I focus on the most important issue first, avoid rushing blindly, and work step by step so I do not miss key details.",
      },
      {
        question: "Do you prefer working independently or on a team?",
        answer:
          "I can work independently when building and troubleshooting, but I also want to work with a team where I can learn from others, ask questions, and contribute to shared goals.",
      },
      {
        question: "What kind of team environment are you looking for?",
        answer:
          "I’m looking for a team that values learning, clear communication, practical problem-solving, documentation, and steady growth.",
      },
    ],
  },
  {
    category: "Growth",
    questions: [
      {
        question: "How do you learn cybersecurity?",
        answer:
          "I learn by building and testing. I set up labs, try scenarios, review what happens, troubleshoot problems, and document the process so I understand the work at a deeper level.",
      },
      {
        question: "What are you currently working on?",
        answer:
          "I’m continuing to improve my portfolio, build out security projects, strengthen detection engineering skills, and expand into cloud security, API security, vulnerability management, and Windows monitoring.",
      },
      {
        question: "What are you trying to improve right now?",
        answer:
          "I’m working on going deeper with logs, detection logic, SIEM workflows, Windows telemetry, cloud security concepts, and explaining technical work clearly.",
      },
      {
        question: "How do you stay consistent while learning?",
        answer:
          "I focus on finishing small but complete pieces of work. Completing projects, documenting them, and improving them over time helps me stay consistent.",
      },
      {
        question: "What motivates you to keep going in cybersecurity?",
        answer:
          "Progress motivates me. Every project teaches me something new, and I like seeing how each step builds toward a stronger understanding of security.",
      },
      {
        question: "How do you measure your own progress?",
        answer:
          "I measure progress by whether I can explain things more clearly, troubleshoot faster, build better projects, and understand the security impact of what I’m doing.",
      },
      {
        question: "Do you plan to keep learning after getting hired?",
        answer:
          "Yes. Cybersecurity changes constantly, so learning cannot stop. I want to keep building, training, improving, and growing into higher-level responsibilities over time.",
      },
    ],
  },
  {
    category: "Personality",
    questions: [
      {
        question: "What would you want a team to know about you early on?",
        answer:
          "I take the work seriously, I ask questions, I document what I learn, and I stay consistent. I do not expect to know everything, but I do expect myself to keep improving.",
      },
      {
        question: "What part of cybersecurity do you enjoy the most?",
        answer:
          "I enjoy the investigative side: looking at logs, understanding behavior, figuring out what happened, and connecting technical evidence to a clear explanation.",
      },
      {
        question: "If you were a programming language, what would you be and why?",
        answer:
          "I would probably be Python. It is practical, flexible, readable, and useful across many areas. That fits how I like to work: keep things clear, solve the problem, and improve over time.",
      },
      {
        question: "How would you describe your learning style?",
        answer:
          "Hands-on and persistent. I learn best when I build something, test it, break it, fix it, and then explain what happened.",
      },
      {
        question: "What do you want your portfolio to say about you?",
        answer:
          "I want it to show that I am serious, organized, hands-on, and always improving. I want someone to see not just the result, but the way I think through the work.",
      },
    ],
  },
];

export default function ResumeClient() {
  const [faqSearch, setFaqSearch] = useState("");
  const [activeFaqCategory, setActiveFaqCategory] = useState("All");

  const faqCategories = ["All", ...faqGroups.map((group) => group.category)];

  const filteredFaqGroups = useMemo(() => {
    const query = faqSearch.toLowerCase().trim();

    return faqGroups
      .filter((group) =>
        activeFaqCategory === "All"
          ? true
          : group.category === activeFaqCategory
      )
      .map((group) => {
        const filteredQuestions = group.questions.filter((faq) => {
          const searchableText =
            `${group.category} ${faq.question} ${faq.answer}`.toLowerCase();

          return query ? searchableText.includes(query) : true;
        });

        return {
          ...group,
          questions: filteredQuestions,
        };
      })
      .filter((group) => group.questions.length > 0);
  }, [faqSearch, activeFaqCategory]);

  const totalFaqResults = filteredFaqGroups.reduce(
    (total, group) => total + group.questions.length,
    0
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Resume & Career Overview
      </p>

      <section className="mt-4 max-w-4xl">
        <h1 className="text-4xl font-bold md:text-5xl">
          Cybersecurity Background and Experience
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          I am building a cybersecurity career by doing practical work: creating
          labs, simulating attacks, writing detection logic, analyzing risk,
          collecting evidence, and documenting results clearly.
        </p>
      </section>

      <section className="mt-12 space-y-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-bold">Professional Introduction</h2>

          <div className="mt-6 space-y-5 text-slate-300 leading-7">
            <p>
              I am an entry-level cybersecurity professional building my experience
              through hands-on labs, structured projects, and consistent documentation.
              My focus is on understanding how systems work in real environments, how
              they are designed, how they can be attacked, and how they can be monitored
              and improved.
            </p>

            <p>
              Rather than relying only on theory, I’ve been learning by doing. I build lab
              environments, simulate activity, work with logs, test detection logic, and
              document the full process from setup to results. This approach has helped me
              develop a practical understanding of security that goes beyond basic
              concepts. My background in full-stack development and business intelligence gives me
              a strong technical foundation. I am comfortable working through problems,
              troubleshooting issues, understanding systems at a deeper level, and clearly
              explaining what I find.
            </p>

            <p>
              I am especially interested in roles such as SOC Analyst, Security Analyst,
              and Junior Security Engineer, where I can contribute to detection,
              investigation, and security operations while continuing to grow and take on
              more responsibility over time. While I am early in my cybersecurity career, I approach the work seriously.
              I focus on building real experience, improving with each project, and
              developing the habits needed to grow into a strong security professional.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-bold">Resume PDF</h2>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            View or download my current cybersecurity resume.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
            <iframe
              src="/docs/wayne-howlett-resume.pdf"
              className="h-[520px] w-full"
              title="Wayne Howlett Resume PDF"
            />
          </div>

          <a
            href="/docs/wayne-howlett-resume.pdf"
            download
            className="mt-5 inline-flex w-full justify-center rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Cover Letter
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Early in my career, but already doing the work
        </h2>

        <div className="mt-6 space-y-5 text-slate-300">
          <p>
            I’m at the beginning of my cybersecurity career, but I’ve been focused on
            building real experience instead of just learning theory. I’ve spent my
            time setting up labs, testing scenarios, breaking things, fixing them, and
            documenting what actually happens.
          </p>

          <p>
            My projects show how I think through problems, whether it’s designing a
            secure network, detecting SSH brute-force activity in Wazuh, or figuring
            out why something didn’t work the first time. I enjoy the process of
            digging into logs, understanding behavior, and improving systems step by
            step.
          </p>

          <p>
            I’m especially interested in roles like SOC Analyst, Security Analyst, or
            Junior Security Engineer. I’ve already started working with SIEM tools,
            alert validation, log analysis, and risk-based thinking, and I want to keep
            building on that in a real team environment.
          </p>

          <p>
            I don’t expect to know everything, but I do take the work seriously. I
            show my process, I document clearly, and I keep improving each time I build
            something new.
          </p>

          <p>
            I’m looking for an opportunity where I can contribute, learn from others,
            and continue growing into a strong cybersecurity professional.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-cyan-400" />
            <h3 className="text-xl font-bold group-hover:text-cyan-400">
              What I bring
            </h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            I bring curiosity, consistency, and a strong focus on doing the work the
            right way. I take time to understand systems, document clearly, and keep
            improving with each project I build.
          </p>
        </div>

        <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-cyan-400" />
            <h3 className="text-xl font-bold group-hover:text-cyan-400">
              Where I fit
            </h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            I’m a strong fit for SOC Analyst, Security Analyst, or Junior Security
            Engineer roles where I can support detection, analysis, and security
            operations while continuing to grow.
          </p>
        </div>

        <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <Wrench className="h-6 w-6 text-cyan-400" />
            <h3 className="text-xl font-bold group-hover:text-cyan-400">
              How I work
            </h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            I learn by building. I test ideas, break things, troubleshoot issues, and
            document everything so I can improve and clearly show my thinking.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Interview FAQ
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Common questions and honest answers
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          These answers are written to give a clearer picture of how I think, how I
          learn, and how I approach cybersecurity work.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <label
            htmlFor="faq-search"
            className="text-sm font-semibold text-white"
          >
            Search questions
          </label>

          <input
            id="faq-search"
            type="text"
            value={faqSearch}
            onChange={(event) => setFaqSearch(event.target.value)}
            placeholder="Try: SOC, Wazuh, tools, mistakes, team, Python..."
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />

          <div className="mt-5 flex flex-wrap gap-2">
            {faqCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFaqCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFaqCategory === category
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Showing {totalFaqResults} question
            {totalFaqResults === 1 ? "" : "s"}
            {faqSearch ? ` for "${faqSearch}"` : ""}
          </p>
        </div>

        {totalFaqResults === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-xl font-bold">No questions found</h3>
            <p className="mt-3 text-slate-300">
              Try a broader term like tools, SOC, Wazuh, team, learning, or security.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-10">
            {filteredFaqGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-2xl font-bold">{group.category}</h3>

                <div className="mt-5 space-y-4">
                  {group.questions.map((faq) => (
                    <details
                      key={faq.question}
                      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 open:border-cyan-400"
                    >
                      <summary className="cursor-pointer text-lg font-semibold">
                        {faq.question}
                      </summary>

                      <p className="mt-4 leading-7 text-slate-300">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mt-12 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
        <h2 className="text-3xl font-bold">Let’s connect</h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          I’m open to entry-level cybersecurity opportunities where I can contribute,
          learn, and grow with a security-focused team. If you’d like to reach out,
          here are the best ways to get in touch.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Contact Page
          </a>

          <a
            href="https://connect.ihowlett.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Connect Hub
          </a>

          <a
            href="https://www.linkedin.com/in/wayne-howlett/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          I typically respond within 24–48 hours.
        </p>
      </section>
    </main>
  );
}

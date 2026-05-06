export const skills = [
  {
    category: "Security Architecture",
    items: [
      {
        name: "Security Architecture",
        level: "Strong",
        keywords: ["architecture", "design", "controls", "secure design", "systems", "network design", "resilient"],
        whatItIs:
          "The practice of designing systems, networks, applications, and controls so they are secure, resilient, and easier to monitor.",
        whatItMeans:
          "It helps organizations reduce risk by planning security into the environment instead of adding it later.",
        howIUseIt:
          "I use architecture diagrams, segmentation, control mapping, API controls, and risk notes to explain how systems should be protected.",
        projects: ["secure-network-architecture", "api-security-assessment-hardening"],
      },
      {
        name: "Risk Assessment",
        level: "Strong",
        keywords: ["risk", "impact", "likelihood", "mitigation", "controls", "assessment", "business impact"],
        whatItIs:
          "A process for identifying threats, weaknesses, impact, likelihood, and recommended mitigations.",
        whatItMeans:
          "It helps prioritize the most important security problems instead of treating every issue the same.",
        howIUseIt:
          "I document risks, explain business impact, and recommend practical controls in architecture and API security projects.",
        projects: ["secure-network-architecture", "api-security-assessment-hardening"],
      },
      {
        name: "Threat Modeling",
        level: "Good",
        keywords: ["threats", "attack paths", "trust boundaries", "abuse cases", "STRIDE", "assets", "defensive controls"],
        whatItIs:
          "A structured way to think through how a system could be attacked.",
        whatItMeans:
          "It helps security teams identify abuse cases before attackers do.",
        howIUseIt:
          "I use it to think through assets, trust boundaries, attack paths, and defensive controls for networks and APIs.",
        projects: ["secure-network-architecture", "api-security-assessment-hardening"],
      },
      {
        name: "Network Segmentation",
        level: "Strong",
        keywords: ["segmentation", "zones", "network", "blast radius", "isolation", "access control", "servers"],
        whatItIs:
          "The practice of separating systems into zones so access can be controlled and limited.",
        whatItMeans:
          "It reduces blast radius if one system is compromised.",
        howIUseIt:
          "I use segmentation concepts when designing secure network layouts and separating users, servers, and monitoring systems.",
        projects: ["secure-network-architecture", "zero-trust-architecture"],
      },
      {
        name: "Zero Trust Architecture",
        level: "Planned",
        keywords: ["zero trust", "identity", "least privilege", "verify", "never trust", "access control", "segmentation"],
        whatItIs:
          "A security model based on never automatically trusting users, devices, or networks.",
        whatItMeans:
          "It requires verification, least privilege, monitoring, and strong access control.",
        howIUseIt:
          "I plan to build a project showing identity-aware access, segmentation, and logging strategy.",
        projects: ["zero-trust-architecture"],
      },
    ],
  },

  {
    category: "SIEM & Detection Engineering",
    items: [
      {
        name: "Wazuh SIEM",
        level: "Strong",
        keywords: ["wazuh", "siem", "logs", "alerts", "monitoring", "intrusion detection", "security monitoring"],
        whatItIs:
          "An open-source security monitoring platform for log collection, alerting, intrusion detection, and compliance monitoring.",
        whatItMeans:
          "It helps detect suspicious activity and gives analysts visibility across systems.",
        howIUseIt:
          "I use Wazuh in my lab to collect logs, write custom rules, validate alerts, and document SSH brute-force activity.",
        projects: ["wazuh-detection-engineering", "brute-force-detection"],
      },
      {
        name: "Detection Engineering",
        level: "Strong",
        keywords: ["detection", "rules", "alerts", "attack behavior", "logic", "tuning", "validation"],
        whatItIs:
          "The process of creating, testing, and improving logic that detects attacker behavior.",
        whatItMeans:
          "It turns raw logs and security events into useful alerts and investigation signals.",
        howIUseIt:
          "I create custom Wazuh rules, simulate attacks, test alert behavior, tune detection logic, and capture security events from applications.",
        projects: ["wazuh-detection-engineering", "brute-force-detection", "api-security-assessment-hardening"],
      },
      {
        name: "Custom Rule Development",
        level: "Strong",
        keywords: ["custom rules", "wazuh rules", "detection logic", "XML rules", "alerts", "brute force", "thresholds"],
        whatItIs:
          "Writing detection logic that identifies specific suspicious events or patterns.",
        whatItMeans:
          "Custom rules help detect activity that default tools may miss.",
        howIUseIt:
          "I write and test custom Wazuh rules for attack scenarios such as SSH brute-force attempts.",
        projects: ["wazuh-detection-engineering", "brute-force-detection"],
      },
      {
        name: "Alert Analysis",
        level: "Strong",
        keywords: ["alerts", "triage", "analysis", "false positive", "investigation", "logs", "findings"],
        whatItIs:
          "Reviewing security alerts to understand what happened, why it triggered, and what action is needed.",
        whatItMeans:
          "It helps separate real threats from noise.",
        howIUseIt:
          "I analyze Wazuh alerts, confirm source activity, review logs, and document findings.",
        projects: ["wazuh-detection-engineering", "brute-force-detection", "malware-alert-triage"],
      },
      {
        name: "SIEM Alert Tuning",
        level: "Planned",
        keywords: ["tuning", "false positives", "severity", "thresholds", "siem", "alerts", "noise reduction"],
        whatItIs:
          "Improving alert rules to reduce false positives and make detections more useful.",
        whatItMeans:
          "Good tuning helps analysts focus on meaningful alerts.",
        howIUseIt:
          "I plan to tune Wazuh alerts by adjusting rules, severity, thresholds, and expected behavior.",
        projects: ["siem-alert-tuning"],
      },
      {
        name: "Log Analysis",
        level: "Strong",
        keywords: ["logs", "auth logs", "events", "timeline", "investigation", "wazuh", "evidence", "application logs", "security logs"],
        whatItIs:
          "Reviewing system, application, and security logs to understand activity.",
        whatItMeans:
          "Logs are the evidence behind detection, investigation, and incident response.",
        howIUseIt:
          "I review authentication logs, Wazuh alerts, API security logs, command output, and timelines to explain what happened.",
        projects: ["wazuh-detection-engineering", "brute-force-detection", "api-security-assessment-hardening", "web-log-analysis"],
      },
    ],
  },

  {
    category: "SOC & Threat Analysis",
    items: [
      {
        name: "Brute Force Detection",
        level: "Strong",
        keywords: ["brute force", "ssh", "hydra", "login attempts", "password attacks", "authentication", "unauthorized access"],
        whatItIs:
          "Identifying repeated login attempts that may indicate password guessing or credential attacks.",
        whatItMeans:
          "It helps detect unauthorized access attempts early.",
        howIUseIt:
          "I simulated SSH brute-force activity with Hydra and validated detection through Wazuh alerts. I also implemented API login rate limiting to reduce brute-force abuse risk.",
        projects: ["wazuh-detection-engineering", "brute-force-detection", "api-security-assessment-hardening"],
      },
      {
        name: "Phishing Analysis",
        level: "Planned",
        keywords: ["phishing", "email", "headers", "links", "attachments", "sender", "ioc"],
        whatItIs:
          "Investigating suspicious emails, links, senders, headers, attachments, and indicators.",
        whatItMeans:
          "Phishing is one of the most common entry points for attackers.",
        howIUseIt:
          "I plan to build a project analyzing phishing artifacts and documenting indicators of compromise.",
        projects: ["phishing-analysis"],
      },
      {
        name: "PowerShell Threat Hunting",
        level: "Planned",
        keywords: ["powershell", "threat hunting", "windows logs", "sysmon", "execution", "persistence", "defense evasion"],
        whatItIs:
          "Searching for suspicious PowerShell activity that may indicate malicious behavior.",
        whatItMeans:
          "Attackers often use PowerShell for execution, persistence, and defense evasion.",
        howIUseIt:
          "I plan to use Windows logs, Sysmon, and SIEM alerts to hunt for suspicious PowerShell patterns.",
        projects: ["powershell-threat-hunt"],
      },
      {
        name: "Lateral Movement Detection",
        level: "Planned",
        keywords: ["lateral movement", "internal movement", "network", "compromise", "attack path", "windows", "siem"],
        whatItIs:
          "Detecting when an attacker moves from one system to another inside a network.",
        whatItMeans:
          "It is important because many breaches expand after the first compromise.",
        howIUseIt:
          "I plan to simulate movement activity and document detection opportunities in logs and SIEM alerts.",
        projects: ["lateral-movement-detection"],
      },
      {
        name: "IOC Threat Intelligence",
        level: "Planned",
        keywords: ["ioc", "threat intel", "ip", "domain", "hash", "indicators", "enrichment"],
        whatItIs:
          "Using indicators of compromise such as IPs, domains, hashes, and file names to investigate threats.",
        whatItMeans:
          "IOCs help analysts connect activity to known suspicious behavior.",
        howIUseIt:
          "I plan to enrich suspicious activity with threat intelligence and document investigation steps.",
        projects: ["ioc-threat-intel"],
      },
      {
        name: "Malware Alert Triage",
        level: "Planned",
        keywords: ["malware", "triage", "alerts", "containment", "severity", "incident", "analysis"],
        whatItIs:
          "Reviewing malware-related alerts to decide severity, scope, and next steps.",
        whatItMeans:
          "Triage helps determine whether an alert is benign, suspicious, or a real incident.",
        howIUseIt:
          "I plan to document alert review, evidence collection, and recommended containment steps.",
        projects: ["malware-alert-triage"],
      },
    ],
  },

  {
    category: "System Hardening",
    items: [
      {
        name: "Linux Hardening",
        level: "Planned",
        keywords: ["linux", "hardening", "ssh", "permissions", "firewall", "updates", "audit"],
        whatItIs:
          "Securing Linux systems by reducing unnecessary services, improving access control, and reviewing configurations.",
        whatItMeans:
          "Hardening reduces attack surface and makes systems more resistant to compromise.",
        howIUseIt:
          "I plan to document SSH security, user permissions, firewall settings, updates, and audit checks.",
        projects: ["linux-hardening"],
      },
      {
        name: "Windows Hardening",
        level: "Planned",
        keywords: ["windows", "hardening", "sysmon", "policies", "baselines", "endpoint", "logging"],
        whatItIs:
          "Securing Windows systems through account controls, logging, policies, and defensive configuration.",
        whatItMeans:
          "It reduces common weaknesses attackers use on endpoints and servers.",
        howIUseIt:
          "I plan to review Windows settings, Sysmon logging, local policies, and security baselines.",
        projects: ["windows-hardening"],
      },
      {
        name: "SSH Security",
        level: "Strong",
        keywords: ["ssh", "authentication", "remote access", "brute force", "linux", "wazuh", "logs"],
        whatItIs:
          "Protecting SSH access through secure configuration, monitoring, and authentication controls.",
        whatItMeans:
          "SSH is commonly targeted, so it needs strong protection and monitoring.",
        howIUseIt:
          "I use SSH logs in my Wazuh lab to detect brute-force attempts and validate alerts.",
        projects: ["wazuh-detection-engineering", "brute-force-detection", "linux-hardening"],
      },
      {
        name: "Firewall Review",
        level: "Planned",
        keywords: ["firewall", "rules", "ports", "traffic", "network boundaries", "exposure", "access"],
        whatItIs:
          "Reviewing firewall rules to ensure only necessary traffic is allowed.",
        whatItMeans:
          "Firewall reviews help reduce exposure and enforce network boundaries.",
        howIUseIt:
          "I plan to document rule purpose, risk, allowed services, and recommended changes.",
        projects: ["firewall-review"],
      },
      {
        name: "Nginx Security",
        level: "Planned",
        keywords: ["nginx", "web server", "tls", "headers", "logging", "access controls", "web security"],
        whatItIs:
          "Securing an Nginx web server through configuration, headers, TLS, logging, and access controls.",
        whatItMeans:
          "Web servers are exposed to the internet and need careful configuration.",
        howIUseIt:
          "I plan to review Nginx security settings and document hardening recommendations.",
        projects: ["nginx-security"],
      },
      {
        name: "Vulnerability Scanning",
        level: "Planned",
        keywords: ["vulnerability", "scan", "nmap", "weaknesses", "misconfiguration", "remediation", "patching"],
        whatItIs:
          "Using tools to identify known weaknesses, outdated software, and misconfigurations.",
        whatItMeans:
          "It helps prioritize remediation before attackers exploit weaknesses.",
        howIUseIt:
          "I plan to run scans, validate results, rank risk, and document remediation steps.",
        projects: ["vulnerability-scan"],
      },
    ],
  },

  {
    category: "Cloud, API & Identity",
    items: [
      {
        name: "API Security Testing",
        level: "Strong",
        keywords: ["api", "api security", "authentication", "authorization", "input validation", "data exposure", "owasp", "jwt", "rbac", "rate limiting"],
        whatItIs:
          "Testing APIs for authentication, authorization, input validation, abuse prevention, and data exposure issues.",
        whatItMeans:
          "APIs often expose sensitive business logic and data, so they must be tested and hardened carefully.",
        howIUseIt:
          "I built and tested a Node.js/Express API, identified exposed routes, and implemented JWT authentication, RBAC, rate limiting, Zod validation, and security logging.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Authentication & Authorization",
        level: "Strong",
        keywords: ["authentication", "authorization", "jwt", "tokens", "rbac", "access control", "login", "admin", "permissions"],
        whatItIs:
          "Authentication verifies identity, while authorization controls what an authenticated user is allowed to access.",
        whatItMeans:
          "Strong auth and access control help prevent unauthorized data exposure, privilege abuse, and insecure endpoint access.",
        howIUseIt:
          "I implemented JWT-based login and protected API routes, then used role-based access control to restrict an admin endpoint to authorized users only.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "JWT Authentication",
        level: "Strong",
        keywords: ["jwt", "json web token", "bearer token", "token", "login", "session", "authorization header"],
        whatItIs:
          "A token-based authentication method used to prove a user has successfully logged in and can access protected API routes.",
        whatItMeans:
          "JWTs help APIs avoid exposing protected data without a valid token, but they must be validated carefully.",
        howIUseIt:
          "I configured login to issue JWTs and required a Bearer token in the Authorization header before allowing access to protected routes.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Role-Based Access Control",
        level: "Strong",
        keywords: ["rbac", "roles", "admin", "authorization", "access control", "least privilege", "permissions"],
        whatItIs:
          "A method for controlling access based on assigned user roles.",
        whatItMeans:
          "RBAC helps enforce least privilege by making sure users only access functions appropriate to their role.",
        howIUseIt:
          "I created an admin-only route and validated that a standard user was denied while an admin user was allowed.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Input Validation",
        level: "Strong",
        keywords: ["input validation", "zod", "schema", "malformed input", "api", "request body", "validation"],
        whatItIs:
          "Checking request data before the application processes it.",
        whatItMeans:
          "Input validation reduces unexpected behavior and helps protect APIs from malformed or risky requests.",
        howIUseIt:
          "I used Zod schemas to validate login requests and reject weak or malformed input before authentication logic processed the request.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Rate Limiting",
        level: "Strong",
        keywords: ["rate limiting", "brute force", "login abuse", "throttling", "express-rate-limit", "api abuse"],
        whatItIs:
          "Restricting how many requests a client can make within a defined time window.",
        whatItMeans:
          "Rate limiting reduces brute-force attempts, abuse, and noisy attack behavior against authentication endpoints.",
        howIUseIt:
          "I applied rate limiting to the API login route and validated that repeated failed attempts were blocked after the threshold.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Security Logging",
        level: "Strong",
        keywords: ["logging", "security logs", "events", "failed login", "missing token", "unauthorized access", "monitoring"],
        whatItIs:
          "Recording important security events so suspicious behavior can be reviewed and investigated.",
        whatItMeans:
          "Security logs support detection, troubleshooting, investigation, and future SIEM integration.",
        howIUseIt:
          "I logged invalid input, failed logins, missing tokens, invalid tokens, and unauthorized admin access attempts in the API security project.",
        projects: ["api-security-assessment-hardening", "logging-strategy"],
      },
      {
        name: "Cloud Security Fundamentals",
        level: "Good",
        keywords: ["cloud", "identity", "networking", "storage", "logging", "configuration", "cloud risk"],
        whatItIs:
          "Understanding cloud identity, networking, storage, logging, and configuration risks.",
        whatItMeans:
          "Cloud environments require secure configuration and continuous monitoring.",
        howIUseIt:
          "I use cloud security concepts when planning architecture, IAM review, API deployment, and misconfiguration projects.",
        projects: ["cloud-misconfiguration", "iam-review", "api-security-assessment-hardening"],
      },
      {
        name: "Cloud Misconfiguration Review",
        level: "Planned",
        keywords: ["cloud", "misconfiguration", "public exposure", "permissions", "logging", "storage", "insecure settings"],
        whatItIs:
          "Finding insecure cloud settings such as public exposure, weak permissions, or missing logging.",
        whatItMeans:
          "Misconfigurations are a common cause of cloud security incidents.",
        howIUseIt:
          "I plan to document cloud findings, risk impact, and secure configuration recommendations.",
        projects: ["cloud-misconfiguration"],
      },
      {
        name: "IAM Review",
        level: "Planned",
        keywords: ["iam", "identity", "access", "roles", "permissions", "least privilege", "accounts"],
        whatItIs:
          "Reviewing users, roles, permissions, and access patterns.",
        whatItMeans:
          "Strong IAM reduces the chance of privilege abuse and unauthorized access.",
        howIUseIt:
          "I plan to review least privilege, excessive permissions, and account access risks.",
        projects: ["iam-review"],
      },
      {
        name: "Least Privilege",
        level: "Strong",
        keywords: ["least privilege", "access", "permissions", "identity", "roles", "authorization", "iam", "rbac"],
        whatItIs:
          "Giving users and systems only the access they need to perform their job.",
        whatItMeans:
          "It limits damage if an account or system is compromised.",
        howIUseIt:
          "I apply least privilege thinking to network architecture, IAM review, and API role-based access control.",
        projects: ["secure-network-architecture", "api-security-assessment-hardening", "iam-review"],
      },
      {
        name: "Logging Strategy",
        level: "Good",
        keywords: ["logging", "logs", "siem", "monitoring", "events", "coverage", "investigation", "application logs"],
        whatItIs:
          "Planning what events should be logged, where they should go, and how they should be reviewed.",
        whatItMeans:
          "Good logging makes detection, investigation, and compliance much stronger.",
        howIUseIt:
          "I added security event logging to the API project and plan to expand this into broader SIEM/logging coverage.",
        projects: ["api-security-assessment-hardening", "logging-strategy"],
      },
    ],
  },

  {
    category: "Tools & Lab Environment",
    items: [
      {
        name: "VirtualBox / VM Labs",
        level: "Strong",
        keywords: ["virtualbox", "vm", "lab", "kali", "windows", "linux", "testing environment"],
        whatItIs:
          "A local virtualization setup for running isolated lab machines.",
        whatItMeans:
          "VM labs let security learners safely simulate attacks, collect evidence, and test defenses.",
        howIUseIt:
          "I use VirtualBox to run Kali, Linux, Windows, and Wazuh lab systems.",
        projects: ["security-lab-architecture", "wazuh-detection-engineering", "brute-force-detection"],
      },
      {
        name: "Kali Linux",
        level: "Good",
        keywords: ["kali", "linux", "security testing", "attack simulation", "tools", "offensive lab"],
        whatItIs:
          "A Linux distribution commonly used for security testing and lab simulations.",
        whatItMeans:
          "It provides tools used for scanning, testing, and controlled attack simulation.",
        howIUseIt:
          "I use Kali in my lab to simulate attacker activity against test systems.",
        projects: ["wazuh-detection-engineering", "brute-force-detection"],
      },
      {
        name: "Hydra",
        level: "Good",
        keywords: ["hydra", "brute force", "password attack", "ssh", "login testing", "authentication"],
        whatItIs:
          "A tool used to test login brute-force scenarios in controlled environments.",
        whatItMeans:
          "It helps defenders understand what brute-force activity looks like in logs.",
        howIUseIt:
          "I used Hydra to generate SSH brute-force activity for Wazuh detection testing.",
        projects: ["wazuh-detection-engineering", "brute-force-detection"],
      },
      {
        name: "Thunder Client",
        level: "Good",
        keywords: ["thunder client", "api testing", "requests", "http", "json", "headers", "bearer token", "testing"],
        whatItIs:
          "A VS Code extension used to test API requests and responses.",
        whatItMeans:
          "It helps validate how APIs behave, including authentication, headers, request bodies, and security responses.",
        howIUseIt:
          "I used Thunder Client to test login, JWT-protected routes, admin access controls, rate limiting, input validation, and security logging evidence.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Node.js / Express",
        level: "Good",
        keywords: ["node.js", "node", "express", "api", "backend", "server", "rest api", "application security"],
        whatItIs:
          "A JavaScript runtime and web framework used to build backend APIs.",
        whatItMeans:
          "Understanding backend API development helps identify where security controls must be implemented.",
        howIUseIt:
          "I built a REST API in Node.js/Express and then hardened it with authentication, authorization, validation, rate limiting, and logging.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Zod",
        level: "Good",
        keywords: ["zod", "schema validation", "input validation", "typescript", "javascript", "api", "request validation"],
        whatItIs:
          "A schema validation library used to verify application input before processing it.",
        whatItMeans:
          "Schema validation helps reduce malformed input and unexpected behavior in APIs.",
        howIUseIt:
          "I used Zod to enforce login request requirements and return validation errors for invalid input.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Express Rate Limit",
        level: "Good",
        keywords: ["express rate limit", "rate limiting", "throttling", "brute force", "api abuse", "login protection"],
        whatItIs:
          "An Express middleware used to limit repeated requests to an endpoint.",
        whatItMeans:
          "It helps reduce brute-force attempts and abusive request patterns.",
        howIUseIt:
          "I used Express Rate Limit to restrict repeated login attempts and validate that abusive behavior was blocked.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Nmap",
        level: "Good",
        keywords: ["nmap", "scan", "ports", "services", "network discovery", "attack surface", "recon"],
        whatItIs:
          "A network scanning tool used to discover hosts, ports, and services.",
        whatItMeans:
          "It helps identify exposed services and possible attack surface.",
        howIUseIt:
          "I use Nmap concepts for discovery, validation, and vulnerability scan planning.",
        projects: ["vulnerability-scan", "linux-hardening"],
      },
      {
        name: "Wireshark",
        level: "Good",
        keywords: ["wireshark", "packet analysis", "network traffic", "traffic analysis", "pcap", "protocols"],
        whatItIs:
          "A packet analysis tool used to inspect network traffic.",
        whatItMeans:
          "It helps analysts understand communication patterns and suspicious network behavior.",
        howIUseIt:
          "I plan to use Wireshark in phishing, web log, and traffic analysis projects.",
        projects: ["web-log-analysis", "phishing-analysis"],
      },
      {
        name: "Sysmon",
        level: "Planned",
        keywords: ["sysmon", "windows logs", "endpoint monitoring", "process events", "powershell", "windows security"],
        whatItIs:
          "A Windows system monitoring tool that records detailed endpoint activity.",
        whatItMeans:
          "It gives defenders deeper visibility into process, network, and file activity.",
        howIUseIt:
          "I plan to use Sysmon logs for Windows hardening and PowerShell threat hunting.",
        projects: ["windows-hardening", "powershell-threat-hunt"],
      },
    ],
  },

  {
    category: "Documentation & Reporting",
    items: [
      {
        name: "Security Documentation",
        level: "Strong",
        keywords: ["documentation", "reports", "writeups", "findings", "screenshots", "lessons learned", "security reports"],
        whatItIs:
          "Writing clear technical and professional security documents.",
        whatItMeans:
          "Good documentation helps others understand risks, evidence, decisions, and next steps.",
        howIUseIt:
          "I document project goals, lab setup, API controls, commands, screenshots, findings, and lessons learned.",
        projects: ["secure-network-architecture", "wazuh-detection-engineering", "brute-force-detection", "api-security-assessment-hardening"],
      },
      {
        name: "Evidence Collection",
        level: "Strong",
        keywords: ["evidence", "screenshots", "logs", "alerts", "commands", "timeline", "proof"],
        whatItIs:
          "Collecting screenshots, logs, alerts, commands, and timelines to prove what happened.",
        whatItMeans:
          "Evidence makes a project credible and reviewable.",
        howIUseIt:
          "I collect Wazuh alerts, terminal output, API responses, configuration files, and troubleshooting notes.",
        projects: ["wazuh-detection-engineering", "brute-force-detection", "api-security-assessment-hardening"],
      },
      {
        name: "Technical Writeups",
        level: "Strong",
        keywords: ["writeups", "case studies", "technical writing", "lab notes", "process", "results", "lessons learned"],
        whatItIs:
          "Clear explanations of technical work, including setup, process, results, and lessons learned.",
        whatItMeans:
          "Writeups show how someone thinks, solves problems, and communicates technical findings.",
        howIUseIt:
          "I write project case studies that explain the problem, lab, detection logic, API controls, and results.",
        projects: ["wazuh-detection-engineering", "brute-force-detection", "secure-network-architecture", "api-security-assessment-hardening"],
      },
      {
        name: "Risk Register Writing",
        level: "Good",
        keywords: ["risk register", "risk", "severity", "likelihood", "impact", "recommendations", "tracking"],
        whatItIs:
          "Documenting risks, severity, likelihood, impact, and recommended actions.",
        whatItMeans:
          "Risk registers help track and prioritize security work.",
        howIUseIt:
          "I use risk registers to support architecture and assessment-style projects.",
        projects: ["secure-network-architecture"],
      },
      {
        name: "Executive Summaries",
        level: "Good",
        keywords: ["executive summary", "plain language", "management", "summary", "findings", "recommendations"],
        whatItIs:
          "Short, clear summaries written for non-technical readers.",
        whatItMeans:
          "Security findings need to be understandable to managers, not just technical teams.",
        howIUseIt:
          "I summarize project goals, findings, risks, controls, and recommendations in plain language.",
        projects: ["secure-network-architecture", "wazuh-detection-engineering", "brute-force-detection", "api-security-assessment-hardening"],
      },
    ],
  },

  {
    category: "Engineering & Development Background",
    items: [
      {
        name: "Next.js",
        level: "Strong",
        keywords: ["next.js", "nextjs", "react framework", "web app", "portfolio", "frontend", "app router"],
        whatItIs:
          "A React framework used to build modern web applications and websites.",
        whatItMeans:
          "For cybersecurity, development knowledge helps with secure design, API security, and technical communication.",
        howIUseIt:
          "I use Next.js to build this cybersecurity portfolio and organize projects, skills, and evidence.",
        projects: ["cybersecurity-portfolio"],
      },
      {
        name: "React",
        level: "Strong",
        keywords: ["react", "components", "ui", "frontend", "interface", "project cards", "skill cards"],
        whatItIs:
          "A JavaScript library for building reusable user interface components.",
        whatItMeans:
          "It helps me build structured, maintainable portfolio pages and security dashboards.",
        howIUseIt:
          "I use React components for project cards, skill cards, navigation, and portfolio layout.",
        projects: ["cybersecurity-portfolio"],
      },
      {
        name: "TypeScript",
        level: "Good",
        keywords: ["typescript", "types", "javascript", "type safety", "data structure", "code quality"],
        whatItIs:
          "A typed version of JavaScript that helps catch errors and improve code quality.",
        whatItMeans:
          "Strong typing supports safer, more maintainable applications.",
        howIUseIt:
          "I use TypeScript to structure project and skill data in my portfolio.",
        projects: ["cybersecurity-portfolio"],
      },
      {
        name: "JavaScript / Backend Development",
        level: "Strong",
        keywords: ["javascript", "backend", "node.js", "express", "api", "server", "application logic"],
        whatItIs:
          "Building backend application logic and APIs using JavaScript-based tools.",
        whatItMeans:
          "Backend development knowledge helps identify where authentication, authorization, validation, and logging controls belong.",
        howIUseIt:
          "I built a Node.js/Express REST API and used that foundation to demonstrate practical API hardening.",
        projects: ["api-security-assessment-hardening"],
      },
      {
        name: "Full-Stack Development",
        level: "Strong",
        keywords: ["full stack", "frontend", "backend", "api", "web development", "secure design", "application security"],
        whatItIs:
          "Building both front-end interfaces and back-end application logic.",
        whatItMeans:
          "It helps me understand how applications are built and where security risks can appear.",
        howIUseIt:
          "I use my development background to understand API security, web risks, architecture, and secure design.",
        projects: ["cybersecurity-portfolio", "api-security-assessment-hardening"],
      },
      {
        name: "Business Intelligence",
        level: "Strong",
        keywords: ["business intelligence", "bi", "reporting", "data", "dashboards", "trends", "analysis"],
        whatItIs:
          "Using data, reporting, and analysis to support better decisions.",
        whatItMeans:
          "In security, BI thinking helps turn logs, alerts, and findings into useful reports.",
        howIUseIt:
          "I use BI skills to organize findings, explain trends, and make security information easier to understand.",
        projects: ["logging-strategy", "secure-network-architecture", "api-security-assessment-hardening"],
      },
    ],
  },
];
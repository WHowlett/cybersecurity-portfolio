export const skills = [
  {
    category: "Incident Response & SOC Analysis",
    items: [
      {
        name: "Incident Response Lifecycle",
        level: "Strong",
        keywords: ["incident response", "containment", "eradication", "recovery", "post incident review", "lessons learned", "playbook"],
        whatItIs:
          "The structured process of identifying, containing, eradicating, recovering from, and learning from security incidents.",
        whatItMeans:
          "A complete response process helps reduce attacker dwell time, preserve evidence, restore operations safely, and improve the security program after the incident.",
        howIUseIt:
          "In the HSS capstone, I documented the full lifecycle from phishing detection through containment, eradication, recovery, post-incident review, and long-term improvement planning.",
        projects: ["incident-response-capstone-hss"],
      },
      {
        name: "Phishing Analysis",
        level: "Strong",
        keywords: ["phishing", "email", "social engineering", "malicious link", "sender", "payroll", "ioc", "initial access"],
        whatItIs:
          "Investigating suspicious email activity, social engineering techniques, malicious links, sender impersonation, and related indicators of compromise.",
        whatItMeans:
          "Phishing is one of the most common initial access paths, so analysts need to connect the email evidence to downstream endpoint and network behavior.",
        howIUseIt:
          "I analyzed a payroll-themed phishing scenario involving HR impersonation, urgency, a malicious secure-download.com link, and follow-on PowerShell execution on Workstation-23.",
        projects: ["incident-response-capstone-hss", "phishing-analysis"],
      },
      {
        name: "PowerShell Investigation",
        level: "Strong",
        keywords: ["powershell", "Invoke-WebRequest", "payload", "script", "windows event logs", "event id 4688", "execution"],
        whatItIs:
          "Reviewing PowerShell activity, command execution, downloaded scripts, and Windows process creation evidence to identify suspicious behavior.",
        whatItMeans:
          "Attackers commonly abuse PowerShell for payload delivery, credential theft, persistence, and command execution, so PowerShell evidence is important during investigations.",
        howIUseIt:
          "In the HSS capstone, I tied Event ID 4688 and an Invoke-WebRequest command to the malicious payload download and used that activity to reconstruct the attack sequence.",
        projects: ["incident-response-capstone-hss", "powershell-threat-hunt"],
      },
      {
        name: "Lateral Movement Analysis",
        level: "Strong",
        keywords: ["lateral movement", "smb", "rdp", "ssh", "psexec", "attack path", "internal movement", "dmz"],
        whatItIs:
          "Analyzing attempts by an attacker to move from an initially compromised system to other internal systems.",
        whatItMeans:
          "Lateral movement can turn a single endpoint compromise into a wider enterprise breach, especially when payroll, domain, or development systems are reachable.",
        howIUseIt:
          "I analyzed SMB, RDP, PsExec, and SSH activity from Workstation-23 toward HR-SQL01 and DevAppServer to document the attack path and business risk.",
        projects: ["incident-response-capstone-hss", "lateral-movement-detection"],
      },
      {
        name: "Indicators of Compromise",
        level: "Strong",
        keywords: ["ioc", "indicators", "domain", "ip address", "payload", "artifact", "command", "account", "protocol"],
        whatItIs:
          "Identifying and organizing suspicious IPs, domains, commands, accounts, files, protocols, and systems connected to attacker activity.",
        whatItMeans:
          "Good IoC documentation helps responders block malicious infrastructure, scope the incident, search for related activity, and communicate findings clearly.",
        howIUseIt:
          "I documented malicious domains, the 45.77.33.88 external IP, payload.ps1, PsExecsvc, Invoke-WebRequest, affected systems, protocols, and targeted accounts in the HSS case study.",
        projects: ["incident-response-capstone-hss", "ioc-threat-intel"],
      },
      {
        name: "MITRE ATT&CK Mapping",
        level: "Strong",
        keywords: ["MITRE", "ATT&CK", "initial access", "execution", "credential access", "lateral movement", "command and control", "tactics"],
        whatItIs:
          "Mapping observed attacker behavior to standardized ATT&CK tactics and techniques.",
        whatItMeans:
          "ATT&CK mapping makes incident findings easier to compare, report, and turn into detection or control improvements.",
        howIUseIt:
          "I mapped the HSS attack chain across Initial Access, Execution, Credential Access, Discovery, Lateral Movement, Command and Control, and attempted privilege escalation.",
        projects: ["incident-response-capstone-hss", "wazuh-detection-engineering", "brute-force-detection"],
      },
      {
        name: "Alert Triage & Severity Assessment",
        level: "Strong",
        keywords: ["alerts", "triage", "severity", "high severity", "scope", "business impact", "investigation", "malware"],
        whatItIs:
          "Reviewing security alerts and evidence to determine severity, scope, business impact, and next response actions.",
        whatItMeans:
          "Triage helps separate isolated alerts from real incidents that require containment, escalation, and leadership awareness.",
        howIUseIt:
          "I classified the HSS event as high severity based on phishing success, malicious PowerShell execution, outbound suspicious traffic, credential harvesting indicators, and lateral movement attempts.",
        projects: ["incident-response-capstone-hss", "wazuh-detection-engineering", "brute-force-detection", "malware-alert-triage"],
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
          "I create custom Wazuh rules, simulate attacks, test alert behavior, tune detection logic, and connect evidence to incident response reporting.",
        projects: ["wazuh-detection-engineering", "brute-force-detection", "api-security-assessment-hardening", "incident-response-capstone-hss"],
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
          "I write and test custom Wazuh rules for attack scenarios such as SSH brute-force attempts and use those detections as evidence in portfolio case studies.",
        projects: ["wazuh-detection-engineering", "brute-force-detection"],
      },
      {
        name: "Log Analysis",
        level: "Strong",
        keywords: ["logs", "auth logs", "events", "timeline", "investigation", "wazuh", "zeek", "windows event logs", "evidence"],
        whatItIs:
          "Reviewing system, application, endpoint, and network logs to understand activity.",
        whatItMeans:
          "Logs are the evidence behind detection, investigation, incident response, and timeline reconstruction.",
        howIUseIt:
          "I review authentication logs, Wazuh alerts, Windows Event Logs, Zeek telemetry, API security logs, command output, and timelines to explain what happened.",
        projects: ["incident-response-capstone-hss", "wazuh-detection-engineering", "brute-force-detection", "api-security-assessment-hardening", "web-log-analysis"],
      },
      {
        name: "Network Telemetry Review",
        level: "Strong",
        keywords: ["zeek", "snort", "network logs", "dns", "http", "smb", "rdp", "ssh", "telemetry"],
        whatItIs:
          "Reviewing network alerts and connection records to understand communication patterns and suspicious traffic.",
        whatItMeans:
          "Network telemetry helps analysts see attacker movement, external communication, and connections between compromised and targeted systems.",
        howIUseIt:
          "In the HSS capstone, I used Snort and Zeek evidence to connect PowerShell execution, outbound HTTP traffic, DNS activity, SMB/RDP attempts, and SSH activity.",
        projects: ["incident-response-capstone-hss", "wazuh-detection-engineering"],
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
    ],
  },

  {
    category: "Security Architecture & Risk",
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
        projects: ["secure-network-architecture", "api-security-assessment-hardening", "incident-response-capstone-hss"],
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
          "I document risks, explain business impact, and recommend practical controls in architecture, API security, and incident response projects.",
        projects: ["incident-response-capstone-hss", "secure-network-architecture", "api-security-assessment-hardening"],
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
          "I use it to think through assets, trust boundaries, attack paths, likely attacker goals, and defensive controls for networks and APIs.",
        projects: ["secure-network-architecture", "api-security-assessment-hardening", "incident-response-capstone-hss"],
      },
      {
        name: "Network Segmentation",
        level: "Strong",
        keywords: ["segmentation", "zones", "network", "blast radius", "isolation", "access control", "servers", "dmz"],
        whatItIs:
          "The practice of separating systems into zones so access can be controlled and limited.",
        whatItMeans:
          "It reduces blast radius if one system is compromised and helps restrict lateral movement toward high-value systems.",
        howIUseIt:
          "I use segmentation concepts when designing secure network layouts and when recommending restrictions between Finance, HR, IT, and Development DMZ systems.",
        projects: ["incident-response-capstone-hss", "secure-network-architecture", "zero-trust-architecture"],
      },
      {
        name: "Security Roadmap Planning",
        level: "Strong",
        keywords: ["roadmap", "recommendations", "maturity", "remediation", "security improvements", "continuous improvement"],
        whatItIs:
          "Prioritizing security improvements over time based on risk, visibility gaps, and business impact.",
        whatItMeans:
          "A roadmap turns an investigation or assessment into practical next steps that improve security maturity.",
        howIUseIt:
          "I used the HSS post-incident review to recommend SIEM deployment, MFA, automated offboarding, PowerShell logging, Linux monitoring, segmentation, phishing training, and tabletop exercises.",
        projects: ["incident-response-capstone-hss", "secure-network-architecture"],
      },
      {
        name: "Zero Trust Architecture",
        level: "Planned",
        keywords: ["zero trust", "identity", "least privilege", "verify", "never trust", "access control", "segmentation"],
        whatItIs:
          "A security model based on never automatically trusting users, devices, or networks.",
        whatItMeans:
          "It requires verification, least privilege, monitoring, segmentation, and strong access control.",
        howIUseIt:
          "I plan to build a dedicated project showing identity-aware access, segmentation, and logging strategy.",
        projects: ["zero-trust-architecture"],
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
        name: "Identity Lifecycle Management",
        level: "Good",
        keywords: ["identity", "offboarding", "deprovisioning", "active directory", "stale accounts", "former employee", "access review"],
        whatItIs:
          "Managing user accounts from creation through role changes, termination, disablement, and periodic access review.",
        whatItMeans:
          "Weak identity lifecycle controls can leave stale accounts active and create opportunities for attackers to reuse credentials.",
        howIUseIt:
          "In the HSS capstone, I identified stale jcampbell credentials and recommended automated offboarding, account audits, MFA, and stronger access governance.",
        projects: ["incident-response-capstone-hss", "iam-review"],
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
          "I apply least privilege thinking to network architecture, API role-based access control, and incident response recommendations involving privileged and stale accounts.",
        projects: ["secure-network-architecture", "api-security-assessment-hardening", "incident-response-capstone-hss", "iam-review"],
      },
      {
        name: "Security Logging",
        level: "Strong",
        keywords: ["logging", "security logs", "events", "failed login", "missing token", "unauthorized access", "monitoring"],
        whatItIs:
          "Recording important security events so suspicious behavior can be reviewed and investigated.",
        whatItMeans:
          "Security logs support detection, troubleshooting, investigation, future SIEM integration, and evidence-based reporting.",
        howIUseIt:
          "I logged API security events in my API project and used log evidence from Windows, Zeek, Snort, and honeypots in the HSS incident response capstone.",
        projects: ["incident-response-capstone-hss", "api-security-assessment-hardening", "logging-strategy"],
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
        name: "IAM Review",
        level: "Planned",
        keywords: ["iam", "identity", "access", "roles", "permissions", "least privilege", "accounts"],
        whatItIs:
          "Reviewing users, roles, permissions, and access patterns.",
        whatItMeans:
          "Strong IAM reduces the chance of privilege abuse and unauthorized access.",
        howIUseIt:
          "I plan to build a dedicated IAM review project focused on least privilege, excessive permissions, and account access risks.",
        projects: ["iam-review"],
      },
    ],
  },

  {
    category: "System Hardening & Infrastructure",
    items: [
      {
        name: "SSH Security",
        level: "Strong",
        keywords: ["ssh", "authentication", "remote access", "brute force", "linux", "wazuh", "logs", "dmz"],
        whatItIs:
          "Protecting SSH access through secure configuration, monitoring, and authentication controls.",
        whatItMeans:
          "SSH is commonly targeted, so it needs strong protection, monitoring, and account hygiene.",
        howIUseIt:
          "I use SSH logs in my Wazuh lab to detect brute-force attempts and analyzed SSH attempts toward DevAppServer in the HSS capstone.",
        projects: ["incident-response-capstone-hss", "wazuh-detection-engineering", "brute-force-detection", "linux-hardening"],
      },
      {
        name: "Linux Monitoring",
        level: "Good",
        keywords: ["linux", "monitoring", "ssh", "edr", "dmz", "logs", "authentication", "endpoint visibility"],
        whatItIs:
          "Collecting and reviewing Linux authentication, process, file integrity, and endpoint telemetry.",
        whatItMeans:
          "Linux systems in DMZ or development environments can be high-value targets and need strong visibility.",
        howIUseIt:
          "The HSS capstone identified limited Linux monitoring around DevAppServer and recommended expanded EDR, SSH auditing, and centralized logging.",
        projects: ["incident-response-capstone-hss", "linux-hardening"],
      },
      {
        name: "Windows Hardening & Logging",
        level: "Good",
        keywords: ["windows", "hardening", "powershell logging", "sysmon", "policies", "baselines", "endpoint", "logging"],
        whatItIs:
          "Securing Windows systems through account controls, logging, policies, baselines, and defensive configuration.",
        whatItMeans:
          "Windows endpoints are common initial compromise points, and logging is critical for detection and investigation.",
        howIUseIt:
          "The HSS capstone identified disabled PowerShell logging as a visibility gap and recommended standardized endpoint telemetry across Windows systems.",
        projects: ["incident-response-capstone-hss", "windows-hardening"],
      },
      {
        name: "Firewall & Access Review",
        level: "Good",
        keywords: ["firewall", "rules", "ports", "traffic", "network boundaries", "exposure", "access", "smb", "rdp", "ssh"],
        whatItIs:
          "Reviewing firewall rules and allowed protocols to ensure only necessary traffic is permitted.",
        whatItMeans:
          "Firewall and access reviews help reduce exposure and restrict lateral movement paths.",
        howIUseIt:
          "In the HSS capstone, I recommended restricting SMB, RDP, and SSH traffic between zones and tightening segmentation around Finance, HR, and DMZ systems.",
        projects: ["incident-response-capstone-hss", "firewall-review", "secure-network-architecture"],
      },
      {
        name: "Vulnerability Scanning",
        level: "Planned",
        keywords: ["vulnerability", "scan", "nmap", "weaknesses", "misconfiguration", "remediation", "patching"],
        whatItIs:
          "Using tools to identify known weaknesses, outdated software, exposed services, and misconfigurations.",
        whatItMeans:
          "It helps prioritize remediation before attackers exploit weaknesses.",
        howIUseIt:
          "I plan to run scans, validate results, rank risk, and document remediation steps.",
        projects: ["vulnerability-scan"],
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
          "I use VirtualBox to run Kali, Linux, Windows, and Wazuh lab systems for detection and security testing projects.",
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
        name: "Nmap",
        level: "Good",
        keywords: ["nmap", "scan", "ports", "services", "network discovery", "attack surface", "recon"],
        whatItIs:
          "A network scanning tool used to discover hosts, ports, and services.",
        whatItMeans:
          "It helps identify exposed services and possible attack surface.",
        howIUseIt:
          "I use Nmap concepts for discovery, validation, and vulnerability scan planning.",
        projects: ["vulnerability-scan", "security-lab-architecture"],
      },
    ],
  },

  {
    category: "Security Communication & Documentation",
    items: [
      {
        name: "Executive Security Reporting",
        level: "Strong",
        keywords: ["executive reporting", "summary", "business risk", "recommendations", "leadership", "communication"],
        whatItIs:
          "Explaining security findings in a way that connects technical evidence to business risk and practical decisions.",
        whatItMeans:
          "Security work becomes more valuable when leaders can understand what happened, why it matters, and what should happen next.",
        howIUseIt:
          "I produced an executive-ready incident response report, a 12-slide presentation, and an expanded project pitch for the HSS capstone.",
        projects: ["incident-response-capstone-hss", "secure-network-architecture", "api-security-assessment-hardening"],
      },
      {
        name: "Technical Documentation",
        level: "Strong",
        keywords: ["documentation", "evidence", "screenshots", "logs", "findings", "report", "case study"],
        whatItIs:
          "Documenting the work performed, evidence reviewed, decisions made, and results produced.",
        whatItMeans:
          "Good documentation helps reviewers understand both the technical result and the reasoning process behind it.",
        howIUseIt:
          "I document each completed project as a case study with objectives, scenario, evidence, findings, troubleshooting, and recommendations.",
        projects: ["incident-response-capstone-hss", "brute-force-detection", "wazuh-detection-engineering", "api-security-assessment-hardening"],
      },
      {
        name: "Business Impact Analysis",
        level: "Strong",
        keywords: ["business impact", "risk", "payroll", "pii", "healthcare", "regulatory", "operational disruption"],
        whatItIs:
          "Connecting technical security findings to operational, financial, regulatory, and reputational impact.",
        whatItMeans:
          "Business impact helps prioritize response actions and communicate why security controls matter.",
        howIUseIt:
          "In the HSS capstone, I connected phishing, credential exposure, payroll systems, PII, healthcare assets, and development systems to organizational risk.",
        projects: ["incident-response-capstone-hss", "secure-network-architecture"],
      },
    ],
  },
];

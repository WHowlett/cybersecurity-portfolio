export const projects = [
  {
    id: "security-lab-architecture",
    title: "Security Lab Architecture and Setup",
    status: "completed",
    category: "Security Lab",
    roleFocus: "Security Operations / Security Engineering",
    description:
      "Built a virtualized security lab using Wazuh, Kali Linux, Linux Server, Windows Endpoint, Sysmon, and an isolated internal network for threat simulation and detection.",
    skills: ["Wazuh", "VirtualBox", "Kali Linux", "Sysmon", "Log Ingestion"],
    href: "/projects/security-lab-architecture",
  },
  {
    id: "secure-network-architecture",
    title: "Secure Network Architecture Design & Risk Assessment",
    status: "completed",
    category: "Security Architecture",
    roleFocus: "Junior Security Engineer / Security Architect Track",
    description:
      "Designed a secure segmented network architecture for Acme AeroTech using VLANs, a DMZ, firewall rules, least privilege, and risk-based decision making.",
    skills: ["Network Segmentation", "Risk Assessment", "DMZ", "Firewall Rules"],
    href: "/projects/secure-network-architecture",
  },
  {
    id: "wazuh-detection-engineering",
    title: "Custom Detection Engineering and Incident Analysis Using Wazuh SIEM",
    status: "completed",
    category: "Detection Engineering",
    roleFocus: "SOC Analyst / Detection Engineering",
    description:
      "Created and validated a custom Wazuh detection rule for SSH brute-force activity using Kali Linux, Hydra, Linux authentication logs, and Level 12 alert validation.",
    skills: ["Wazuh", "Hydra", "SSH Brute Force", "MITRE T1110", "Log Analysis"],
    href: "/projects/wazuh-detection-engineering",
  },
  {
    id: "brute-force-detection",
    title: "SSH Brute Force Detection with Layered Wazuh Rules",
    status: "completed",
    category: "SOC / Security Analyst",
    roleFocus: "SOC Analyst / Detection Engineering",
    description:
      "Implemented layered Wazuh SIEM correlation rules to detect SSH brute-force activity, escalating from early warning to high-severity alerts using Hydra attack simulation.",
    skills: ["Wazuh", "Hydra", "SSH", "MITRE T1110", "Layered Detection"],
    href: "/projects/brute-force-detection",
  },

  // Planned SOC / Security Analyst Projects
  {
    id: "phishing-analysis",
    title: "Phishing Analysis",
    status: "planned",
    category: "SOC / Security Analyst",
    roleFocus: "SOC Analyst",
    description:
      "Analyze simulated phishing artifacts, investigate indicators, document findings, and recommend mitigation steps.",
    skills: ["Phishing", "Email Analysis", "IOCs", "Investigation"],
  },
  {
    id: "powershell-threat-hunt",
    title: "PowerShell Threat Hunt",
    status: "planned",
    category: "SOC / Security Analyst",
    roleFocus: "Threat Hunting",
    description:
      "Hunt for suspicious PowerShell activity using Windows logs, Sysmon telemetry, and SIEM-based investigation.",
    skills: ["PowerShell", "Sysmon", "Windows Logs", "Threat Hunting"],
  },
  {
    id: "web-log-analysis",
    title: "Web Log Analysis",
    status: "planned",
    category: "SOC / Security Analyst",
    roleFocus: "Security Analyst",
    description:
      "Review web server logs for suspicious behavior, identify patterns, and document investigation findings.",
    skills: ["Web Logs", "Nginx", "Log Analysis", "Investigation"],
  },
  {
    id: "malware-alert-triage",
    title: "Malware Alert Triage",
    status: "planned",
    category: "SOC / Security Analyst",
    roleFocus: "SOC Analyst",
    description:
      "Triage malware-related alerts, review evidence, determine severity, and recommend containment steps.",
    skills: ["Alert Triage", "Malware", "Evidence Collection"],
  },
  {
    id: "siem-alert-tuning",
    title: "SIEM Alert Tuning",
    status: "planned",
    category: "SOC / Security Analyst",
    roleFocus: "Detection Support",
    description:
      "Tune noisy alerts, reduce false positives, adjust severity, and improve SIEM detection quality.",
    skills: ["SIEM", "Alert Tuning", "False Positives", "Detection Logic"],
  },
  {
    id: "lateral-movement-detection",
    title: "Lateral Movement Detection",
    status: "planned",
    category: "SOC / Security Analyst",
    roleFocus: "Detection Engineering",
    description:
      "Simulate and detect movement between systems, review logs, and map detection opportunities.",
    skills: ["Lateral Movement", "Windows Logs", "Wazuh", "MITRE ATT&CK"],
  },
  {
    id: "ioc-threat-intel",
    title: "IOC Threat Intel",
    status: "planned",
    category: "SOC / Security Analyst",
    roleFocus: "Threat Intelligence",
    description:
      "Use indicators such as IPs, domains, hashes, and artifacts to enrich investigations and document findings.",
    skills: ["Threat Intel", "IOCs", "Enrichment", "Investigation"],
  },

  // Planned Security Engineering
  {
    id: "linux-hardening",
    title: "Linux Hardening",
    status: "planned",
    category: "Security Engineering",
    roleFocus: "Junior Security Engineer",
    description:
      "Review Linux configurations, SSH security, permissions, firewall settings, updates, and audit checks.",
    skills: ["Linux", "SSH", "Hardening", "Firewall"],
  },
  {
    id: "windows-hardening",
    title: "Windows Hardening",
    status: "planned",
    category: "Security Engineering",
    roleFocus: "Junior Security Engineer",
    description:
      "Review Windows security settings, logging, endpoint visibility, account hygiene, and baseline controls.",
    skills: ["Windows", "Sysmon", "Endpoint Security"],
  },
  {
    id: "vulnerability-scan",
    title: "Vulnerability Scan",
    status: "planned",
    category: "Security Engineering",
    roleFocus: "Vulnerability Management",
    description:
      "Identify weaknesses, validate findings, prioritize risk, and document remediation recommendations.",
    skills: ["Vulnerability Management", "Nmap", "Risk Ranking"],
  },
  {
    id: "firewall-review",
    title: "Firewall Review",
    status: "planned",
    category: "Security Engineering",
    roleFocus: "Security Engineering",
    description:
      "Review firewall rules, exposed ports, allowed services, and network boundary controls.",
    skills: ["Firewall", "Network Security", "Access Control"],
  },
  {
    id: "nginx-security",
    title: "Nginx Security",
    status: "planned",
    category: "Security Engineering",
    roleFocus: "Web Security",
    description:
      "Review Nginx configuration, headers, TLS, logging, access controls, and hardening recommendations.",
    skills: ["Nginx", "TLS", "Web Security", "Logging"],
  },
  {
    id: "iam-review",
    title: "IAM Review",
    status: "planned",
    category: "Security Engineering",
    roleFocus: "Identity Security",
    description:
      "Review users, roles, permissions, access patterns, and least privilege recommendations.",
    skills: ["IAM", "Least Privilege", "Access Review"],
  },
  {
    id: "detection-rule-engineering",
    title: "Detection Rule Engineering",
    status: "planned",
    category: "Security Engineering",
    roleFocus: "Detection Engineering",
    description:
      "Build, test, validate, and document detection rules for realistic attack scenarios.",
    skills: ["Detection Logic", "Wazuh Rules", "Validation"],
  },

  // Planned Cloud / Architecture
  {
    id: "cloud-misconfiguration",
    title: "Cloud Misconfiguration",
    status: "planned",
    category: "Cloud / Architecture",
    roleFocus: "Cloud Security Support",
    description:
      "Review insecure cloud settings, public exposure, weak permissions, logging gaps, and remediation steps.",
    skills: ["Cloud Security", "Misconfiguration", "IAM", "Logging"],
  },
  {
    id: "api-security-testing",
    title: "API Security Testing",
    status: "planned",
    category: "Cloud / Architecture",
    roleFocus: "API Security Support",
    description:
      "Test API authentication, authorization, input validation, logging, and data exposure risks.",
    skills: ["API Security", "Auth", "Input Validation", "OWASP"],
  },
  {
    id: "zero-trust-architecture",
    title: "Zero Trust Architecture",
    status: "planned",
    category: "Cloud / Architecture",
    roleFocus: "Security Architecture",
    description:
      "Design a Zero Trust-style architecture using identity-aware access, segmentation, least privilege, and monitoring.",
    skills: ["Zero Trust", "Identity", "Segmentation", "Least Privilege"],
  },
  {
    id: "logging-strategy",
    title: "Logging Strategy",
    status: "planned",
    category: "Cloud / Architecture",
    roleFocus: "Security Architecture / SOC",
    description:
      "Plan what should be logged, where logs should go, how they support detection, and how coverage can be improved.",
    skills: ["Logging", "SIEM", "Monitoring", "Detection Coverage"],
  },
];
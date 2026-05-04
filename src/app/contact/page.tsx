import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Wayne Howlett for cybersecurity opportunities, collaboration, or professional networking.",
  openGraph: {
    title: "Contact Wayne Howlett | Cybersecurity Portfolio",
    description:
      "Reach out for cybersecurity roles, collaboration, or networking.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Wayne Howlett | Cybersecurity Portfolio",
    description:
      "Get in touch for cybersecurity opportunities or professional connection.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

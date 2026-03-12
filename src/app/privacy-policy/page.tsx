import { Typography } from "@/components/Typography/Typography";
import type { Metadata } from "next";

const pageUrl = "https://atfro.in/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | ATFRO",
  description:
    "Learn how ATFRO handles data, privacy, and security across our website and consulting engagements.",
  alternates: {
    canonical: pageUrl,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container">
        <Typography variant="h1">Privacy Policy</Typography>
        <Typography variant="p">
          This page outlines how ATFRO handles information shared via this
          website and through our consulting engagements. It can be expanded
          with your finalized legal copy at any time without changing the URL
          structure.
        </Typography>
      </div>
    </section>
  );
}


import { Typography } from "@/components/Typography/Typography";
import type { Metadata } from "next";

const pageUrl = "https://atfro.in/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service | ATFRO",
  description:
    "Review the terms that govern how ATFRO provides consulting and implementation services.",
  alternates: {
    canonical: pageUrl,
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="section">
      <div className="container">
        <Typography variant="h1">Terms of Service</Typography>
        <Typography variant="p">
          These terms describe how ATFRO collaborates with clients, the scope of
          responsibility, and usage of deliverables. Replace this placeholder
          text with your finalized legal language while keeping the URL
          structure intact.
        </Typography>
      </div>
    </section>
  );
}


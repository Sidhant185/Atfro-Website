import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Page not found</h1>
      <p style={{ marginBottom: "1.5rem", color: "var(--color-muted, #666)" }}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          background: "var(--color-primary, #111)",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Back to home
      </Link>
    </section>
  );
}

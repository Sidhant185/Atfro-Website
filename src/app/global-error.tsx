'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <title>Something went wrong | ATFRO</title>
        <meta
          name="description"
          content="Something went wrong. Return to ATFRO home or try again."
        />
      </head>
      <body>
        <main
          style={{
            padding: '4rem 1.5rem',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
            maxWidth: '32rem',
            margin: '0 auto',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            We couldn’t load this page. You can try again or go back to the home
            page.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: '0.75rem 1.25rem',
                background: '#111',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.25rem',
                background: '#eee',
                color: '#111',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
              }}
            >
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}

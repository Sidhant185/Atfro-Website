'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      style={{
        padding: '4rem 1.5rem',
        textAlign: 'center',
        maxWidth: '32rem',
        margin: '0 auto',
      }}
    >
      <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
        Something went wrong
      </h2>
      <p style={{ color: 'var(--color-muted, #666)', marginBottom: '1.5rem' }}>
        This section couldn’t be loaded. You can try again or go back to the
        home page.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: '0.75rem 1.25rem',
            background: 'var(--color-primary, #111)',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Try again
        </button>
        <Link
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
        </Link>
      </div>
    </section>
  );
}

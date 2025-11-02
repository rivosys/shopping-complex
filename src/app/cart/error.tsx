'use client';

import ErrorDisplay from '@/components/ui/ErrorDisplay';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorDisplay
      title="Failed to load cart"
      message={error.message}
      retry={reset}
    />
  );
}
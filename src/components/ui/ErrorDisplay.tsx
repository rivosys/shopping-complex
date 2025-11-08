import Button from './Button';

interface ErrorDisplayProps {
  title?: string;
  message?: string;
  retry?: () => void;
}

export default function ErrorDisplay({
  title = 'Something went wrong',
  message = 'An error occurred. Please try again later.',
  retry,
}: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
      <svg
        className="w-16 h-16 text-red-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{message}</p>
      {retry && (
        <Button onClick={retry} variant="primary">
          Try Again
        </Button>
      )}
    </div>
  );
}
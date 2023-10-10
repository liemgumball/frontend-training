import { useErrorBoundary } from 'react-error-boundary'

type ErrorFallbackProps = {
  error: Error
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
}: ErrorFallbackProps) => {
  const { resetBoundary } = useErrorBoundary()

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetBoundary}>Try again</button>
    </div>
  )
}

export default ErrorFallback

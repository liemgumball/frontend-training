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
      <p>Something went wrong</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button style={{ margin: '20px 0' }} onClick={resetBoundary}>
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback

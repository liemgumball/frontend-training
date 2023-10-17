import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { QueryContextProvider } from './contexts/QueryContext'

const HomePage = lazy(() => delayImport(import('./pages/Home')))
const AboutPage = lazy(() => delayImport(import('./pages/About')))
const StudentPage = lazy(() => delayImport(import('./pages/Student')))
const PaymentPage = lazy(() => delayImport(import('./pages/Payment')))

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setCount(0)}
    >
      <QueryContextProvider>
        <QueryClientProvider client={queryClient}>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>

          <div>
            <Suspense fallback={<Loader />}>
              <section>
                <AboutPage />
                <HomePage count={count} />
                <StudentPage />
                <PaymentPage />
              </section>
            </Suspense>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </QueryContextProvider>
    </ErrorBoundary>
  )
}

export default App

export const delayImport = async (promise: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000)
  }).then(() => promise)
}

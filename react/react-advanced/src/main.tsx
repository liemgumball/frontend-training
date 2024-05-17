import './wdyr'
import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const onRender: React.ProfilerOnRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (for the initial render) or "update" (for subsequent renders)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  // console.log('Render ID:', id)
  // console.log('Phase:', phase)
  // console.log('Actual duration:', actualDuration)
  // console.log('Base duration:', baseDuration)
  // console.log('Start time:', startTime)
  // console.log('Commit time:', commitTime)
  // console.log('Interactions:', interactions)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </React.StrictMode>
)

import { useState } from 'react';
import Time from "./components/time";

function App() {
  const [showTime, setShowTime] = useState(true)

  const showHideTime = () => {
    setShowTime(!showTime)
  }

  return (
    <>
      { showTime && <Time />}
      <button onClick={showHideTime}>
        { showTime ? 'Hide Clock' : 'Show Clock' } 
      </button>
    </>
  )
}

export default App
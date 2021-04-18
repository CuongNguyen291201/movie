import { useState } from 'react'

import Result from "./components/result";
import Button from "./components/button";

function App() {
  // khai bao state 
  const [count, setCount] = useState(0)

  // this.state = { count: 0}
  // setCount ~ this.setState

  // const increment = () => {
  //   setCount(count + 1)
  // }

  // const decrement = () => {
  //   setCount(count - 1)
  // }


  return(
    <>
      <Result count={count}/>
      <Button
        type="button"
        click={() => setCount(count+1)}
      > 
        + 
      </Button>
      <Button
        type="button"
        click={() => setCount(count-1)}
      >
        - 
      </Button>
    </>
  )
}

export default App
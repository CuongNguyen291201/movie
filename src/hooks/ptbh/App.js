import { useState } from 'react'

import Input from './components/Input';
import Button from './components/Button';
import Result from './components/Result';

function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [result, setResult] = useState('')

  const getNumberInput = (e) => {
    let val = Number.parseFloat(e.target.value)
    let name = e.target.name
    if (name === 'a') {
      setA(val)
    }
    if (name === 'b') {
      setB(val)
    }
    if (name === 'c') {
      setC(val)
    }
  }

  const exNumber = () => {
    const delta = b*b - 4*a*c
    if (delta < 0) {
      setResult('phuong trinh vo nghiem')
    }
    if (delta === 0) {
      let x = -b/(2*a)
      setResult(`phuong trinh co nghiem kep x1 = x2 = ${x}`)
    }
    if (delta > 0) {
      let x1 = (-b - Math.sqrt(delta))/(2*a)
      let x2 = (-b + Math.sqrt(delta))/(2*a)
      setResult(`phuong trinh co 2 nghiem x1 = ${x1}, x2 = ${x2}`)
    }
  }

  return(
    
      <div style={{ width: '300px', padding: '5px', border: '1px soid #ccc', margin: 'auto'}}>
        <label>he so a: </label>
        <Input type="text" value={a} name="a" change={(e) => getNumberInput(e)}/> 
        <br/>
        <label>he so b: </label>
        <Input type="text" value={b} name="b" change={(e) => getNumberInput(e)}/>
        <br/>
        <label>he so c: </label>
        <Input type="text" value={c} name="c" change={(e) => getNumberInput(e)}/>
        <br/><br/>

        <Button 
          type="button"
          click={() => exNumber()}
        />
        <br/><br/>

        <Result result={result}/>
      </div>
    
  )
}

export default App
import { useEffect } from 'react'
import {useState} from 'react'

const App = () => {
  
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function achange(){
 console.log("A ki value Change ho rhi ha"
 )
  }
   function bchange(){
    console.log("B ki vlaue change ho rhi ha ")
  }
  useEffect(()=>{
    achange()
    console.log("use effect is running......")
  },[a])
  return (
    <div>
      <h1>A : {a}</h1>
      <h1>B : {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }} >Change B</button>
    </div>
  )
}

export default App

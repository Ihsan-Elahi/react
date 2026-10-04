
import React, { useState } from 'react'

const App = () => {
  // const [num, setnum] = useState([78,8,23,32,44])
  // const btnclick = ()=>{
  //   const newNum = [...num]
  //   newNum.push(99)
  //   // setnum.push(99?);
  //   setnum(newNum);
  //   console.log(num)
  //   console.log(newNum)




  // }
//   const [num, setnum] = useState({user:"ihsan",age:3})
//   const btnclick = ()=>{
// //     const newNum = {...num}
// //     newNum.user= "irfan"
// // setnum(newNum);
//   // console.log(newNum.age) 
//   // console.log(newNum.user) 
//   }

// // // // BAtch update

// const [num, setnum] = useState(89)
// const btnclick = ()=>{
//   setnum(prev =>(prev+1))
//   console.log(num)
//   setnum(prev =>(prev+1))
//   console.log(num)
//   setnum(prev =>(prev+1))
//   console.log(num)

// }

const [num,setnum] = useState(1)
const btnclick= ()=>{
  setnum (prev=>(prev*2))
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclick}>click</button>
    </div>
  )
}

export default App

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState(12);
//   // const [username, setusername] =  useState("sarthak")
//   // const [array, setarray] = useState([78,89,99])
//   // function valuechange(){
//   // setnum(300);
//   // setusername("liasad");
//   // setarray([23,43,44]);

//   // }
// function increaseNum(){
//   setnum(num+1);


// }
// function decreaseNum(){
//   setnum(num-1);

// }

//   return (
//     <div>
//       {/* <h1> Value of a is {num} </h1>
//       <h1>  name iss{username} </h1>
//       <h1>  Array is {array} </h1>
//       <button onClick={valuechange}>App</button> */}
//       <h1>{num}</h1>
//       <button onClick={increaseNum}> Increase </button>
//       <button onClick={decreaseNum}> Decrease </button>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import { useState } from "react";

const App = () => {
const [Num, setNum] = useState(0)
function increaseNum(){
setNum(Num+1);

}
function decreaseNum(){
  setNum(Num-1);
}

  return (

    <div>
      <h1>{Num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      
    </div>
  )
}

export default App

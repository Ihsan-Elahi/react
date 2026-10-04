// // Api claing with the help of Fetch('url')

// import React from 'react'

// const App = () => {

// // async  function getData(){
// //  const require = await fetch('https://jsonplaceholder.typicode.com/posts/1')
// // console.log(require)
// // }

//  const getData = async ()=>{
//   const require= await fetch('https://jsonplaceholder.typicode.com/postsa')
//  const data =  await require.json()
//   console.log(data)

// }

//   return (
//     <div>
//       <button onClick={getData}>Submited</button>
//     </div>
//   )
// }

// export default App

//  // Api calling with the help of axios
// // firstly install the axios
// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {

//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const require = await axios.get("https://picsum.photos/v2/list");
//     console.log(require.data)
//     setData(require.data);
//   };
//   return (
//     <div>
//       <button onClick={getData}>Submited</button>
//       <div>
//         {data.map((elem,idx) => {
//           return <h3>Hello {elem.url}</h3>;
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;
// import React from 'react';
import React, { useState } from "react";

import axios from "axios";

const App = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const require = await axios.get("https://picsum.photos/v2/list");
    console.log(require.data);
    setdata(require.data);
  };

  return (
    <div>
      <button onClick={getData}>Submited</button>
      <div>{data.map((elem,idx) => {
        return <h3> Hello {elem.id+1} {idx}</h3> 
      })}</div>
    </div>
  );
};

export default App;

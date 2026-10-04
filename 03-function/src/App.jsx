import React from "react";

const App = () => {
  // function btnClick(){
  //   console.log("btn is clicked")
  // }

  // function btndoubleClick(){
  //   console.log("btn is clicked")
  // }
  // function inputchangr(val) {
  //   console.log(val);
  // }
function scrooling(elem){
  
      if(elem>0){
        console.log("start Farword scrolling ")
      }else{
        console.log("ulta scrolling")
      }

    const [count, setCount] = useState(0);

    

}
  
  return (
    <div onWheel={(elem)=>{
      scrooling(elem.deltaY)
      
      }}>
      {/* <button onClick={btnClick}  > App  </button>
      <button onClick={()=>{
        console.log('ewwwwwk  lkdsl;sfj ')
      }}  > App  </button>
      <button onDoubleClick={btndoubleClick}  > App2  </button>
      <button onMouseEnter={()=>{
        console.log("On Mouse Enter")
      }} > On Mouse Enter</button> */}
      {/*   
<input 
onChange={(elem)=>{
  inputchangr(elem.target.value)
}} type="Text " placeholder='Enter your Name' /> */}

      {/* <div  onMouseMove={(elem)=>
  {
console.log(elem.clientX);
  }
} className='box'>

</div>
 */}
{/* 
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div> */}
         <button onClick={() => setCount(count + 1)}>
          
      {count}
    </button>
    </div>
  );
};
export default App;

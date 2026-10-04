import React from "react";

const App = () => {

  function submithandler(elem){
    elem.preventDefault()
console.log('form submited')
  }

  return (
    <div>
      <form  onSubmit={(elem)=>{
        submithandler(elem)
      }}>
        <input type="text" placeholder="Enter Your Text " />
      <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

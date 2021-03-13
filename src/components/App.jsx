import React, { useState } from "react";

function App() {
  
var [fullName,setfullName]=useState({
  fName:"",
  lName:""
})  
  
  function changed(event)
  {

var {name,value}=event.target

setfullName(prevValue=>
  {
       if(name==="fName")
          {
            return {
                        fName:value,
                        lName:prevValue.lName
            }
          }else if(name==="lName")
               {
                 return {
                   fName:prevValue.fName,
                   lName:value
                 }
               }
  })
  }
  
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" onChange={changed} placeholder="First Name" />
        <input name="lName" onChange={changed} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

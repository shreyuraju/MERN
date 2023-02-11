import React from 'react'

export default function arrow() {

  // function Hello (name, city) {
  //   alert("Hello Function : "+name+", "+city)
  // }
  // let nam="RAMA"
  // Hello(nam, "Mangalore");

  function Click(val) {
    alert("Hello "+val);
  }

  const clickTo = (val) => {
    alert ("This is a clickTo("+val+")");
  }

  let name = "RAMA"

  const Hello = () => {alert();alert();}

  return (
    <div>
      <h1 style={{backgroundColor:'red', color:'white'}}>Arrow Function Start</h1>
      <button onClick={()=>Click(name)}>Click Here</button><br/><br/>
      <button onClick={()=>clickTo(name)}>Click-To</button>
    </div>
  )
}
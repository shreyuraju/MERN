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
    alert ("This is a clickTo('"+val+"')");
  }

  let name = "RAMA"

  const Hello = () => {return alert("Hello Hai"), alert("Hello Bye");}

  // const Hello2 = () => "HELLO WORLD";
  // const Hello3 = val => "HELLO "+val;
  const yourName = val => {return alert('My name is '+val+" Welcome");}

  return (
    <div>
      <h1 style={{backgroundColor:'red', color:'white'}}>Arrow Function Start</h1>
      <button onClick={()=>Click(name)}>Click-Here</button><br/><br/>
      <button onClick={()=>clickTo(name)}>Click-To</button><br/><br/>
      <button onClick={()=>Hello()}>Click-Here</button><br/><br/>

      <button onClick={()=>yourName('Shreyas')}>Click-To-Name</button><br/><br/>
    </div>
  )
}

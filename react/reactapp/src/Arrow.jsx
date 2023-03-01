import React from 'react'
import { Link } from 'react-router-dom'

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

  const Hello = () => {return alert("Hello Hai"), alert("Hello Bye")}

  // const Hello2 = () => "HELLO WORLD";
  // const Hello3 = val => "HELLO "+val;
  const yourName = val => {alert('Hello '+val+', Welcome');}

  let func;
  func = () =>{alert('hello func');}

  return (
    <div>
      <Link to='/'>Home</Link><br/>
      <h1>Arrow Function Start</h1>
      <button onClick={()=>Click(name)}>Click-Here</button><br/>
      <button onClick={()=>clickTo(name)}>Click-To</button><br/>
      <button onClick={()=>Hello()}>Click-Here</button><br/>
      <button onClick={()=>yourName('Shreyas')}>Click-To-Name</button><br/>
      <button onClick={()=>func()}>Click-func</button><br/>
      <Link to='/'>Home</Link><br/>
    </div>
  )
}

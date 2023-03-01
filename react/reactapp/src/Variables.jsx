import React from 'react'
import { Link } from 'react-router-dom'

export default function Variables() {

    var x = "this variable is var keyword"
    let y = "this variable is let keyword"
    const z="this variable is const keyword"

    const Call = () => {
        alert('CALL')
    }

    // let Name = "RAMA";

    function Hello() {
      let A=123;

      return <h4>{A}</h4>
    }
    
  return (
    <div>
      <Link to='/'>Home</Link><br/>
        <h1>Variables Start</h1>
        {x}<br/>
        {y}<br/>
        {z}<br/>
        <a onClick={()=>Call()}>Call</a><br/>
        {/* {Name} */}
        {Hello()}
        <Link to='/'>Home</Link><br/>
    </div>
  )
}

import React from 'react'

export default function Variables() {

    var x = "this variable is var keyword"
    let y = "this variable is let keyword"
    const z="this variable is const keyword"

    const Call = () => {
        alert('CALL')
    }

  return (
    <div>
        <h1>Variables Start</h1>
        {x}<br/>
        {y}<br/>
        {z}<br/>
        {/* <Call/> */}
    </div>
  )
}

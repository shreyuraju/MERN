import React from 'react'
import { Link } from 'react-router-dom'

import defuncn, { name, age, Hello, address, phone } from './Exp'
//import course from './Exp';

export default function Imp() {
    
  return (
    <>
    <Link to='/'>Home</Link><br/>
        <div>
            <h1>Import Start</h1>
        </div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        {/* <a href='#'><h2 onClick={()=>Hello()}>Hello</h2></a> */}

        <h2>{address}</h2>
        <h2>{phone}</h2>
        {/* <h2>{course}</h2> */}

        <button onClick={()=>defuncn('shreyas','Mite')}>click- me</button>
        
        <Link to='/arrow'>Home</Link><br/>

    </>
  )
}

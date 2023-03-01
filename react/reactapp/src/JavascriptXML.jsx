import React from 'react'
import { Link } from 'react-router-dom'

export default function JavascriptXML() {

    const myElement =<h3> i love JSX</h3>

    

  return (
    <>
    <Link to='/'>Home</Link><br/>
        <div>
            <h1>JavascriptXML</h1>
            {myElement}
            {MyElement}
        </div>
        <Link to='/'>Home</Link><br/>
    </>
  )
}
const MyElement = <h3>Hello World</h3>

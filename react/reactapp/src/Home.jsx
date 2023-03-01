import React from 'react'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div>
            <Link to='/'>Home</Link><br/>
            <Link to='/arrow'>Arrow</Link><br/>
            <Link to='/classes'>Classes</Link><br/>
            <Link to='/test'>Test</Link><br/>
            <Link to='/variables'>Variables</Link><br/>
            <Link to='/arraymethods'>ArrayMethods</Link><br/>
            <Link to='/destructuring'>Destructuring</Link><br/>
            <Link to='/spreadoperator'>SpreadOperator</Link><br/>
            <Link to='/ternaryoperator'>TernaryOperator</Link><br/>
            <Link to='/conditional'>Conditional</Link><br/>
            <Link to='/imp'>Imp</Link><br/>
            <Link to='/javascriptxml'>JavascriptXML</Link><br/>
            <Link to='/props'>Props</Link><br/>
            <Link to='/events'>Events</Link><br/> 
            <Link to='/usestate'>UseState</Link><br/> 
            <Link to='/useeffect'>UseEffect</Link><br/> 
        </div>
    </>
  )
}

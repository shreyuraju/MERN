import React from 'react'
import { Link } from 'react-router-dom'

export default function TernaryOperator() {

    let a = true
    // a==true?alert('true'):alert('false')

    let b =7

    let myStyle = {
        color:'blue'
    }
///////////////////////////
    function Admitted() {
        return <h3 style={{color:'green'}}>Admitted</h3>
    }

    function NotAdmitted() {
        return <h3 style={{color:'red'}}>Not Admitted</h3>
    }

    let course="bcs"
    

  return (
    <>
    <Link to='/'>Home</Link><br/>
        <div>
            <h1>TernaryOperator Start</h1>

            {
                a?
                <h2 style={{color:'green'}}>a is true</h2>
                :
                <h2 style={{color:'red'}}>a is false</h2>
            }

        </div>

        {
            b<10 ?
                <h2>b={b} is less then 10</h2>
            :
                <h2>b={b} is greater than 10</h2>
        }
        {course=="bca"?<Admitted/>:<NotAdmitted/>}
        <Link to='/'>Home</Link><br/>
    </>
  )
}
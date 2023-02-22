import React from 'react'

export default function Props() {

    function Hello(props) {
        alert('This is the hello function, '+props.greet+' '+props.name);
    }

    const call = <Hello greet="Welcome" name="Rama"/>

    function Car(props) {
        return <h2>I have {props.brand}, {props.year}</h2>
    }

    const value = "BMW M3"
    const date = 2005
    const myElement = <Car brand={value} year={date} />

    /////
    function Hero(props) {
        return <h2>I'm {props.brand}!</h2>
    }

    function Demo(props) {
        return (
            <>
                <h2>Who is in my team?</h2>
                <Hero brand={props.id} />
            </>
        );
    }
///////
    function College (props) {
        return <h3>I am {props.brand.name}, school is {props.brand.school} </h3>;
    }

    function Students() {
        const Details ={name:"Jack", school:"Aloy"}
        return (
            <>
                <h3>who is admitted?</h3>
                <College brand={Details} />
            </>
        );
    }
    //////
    const fruits = ["apple", "banana","orange","mango"];

    const DisplayFruits = (props) => {
        return (
            <li>{props.item}</li>
        );
    }

    // function lenFruits(props) {
    //     return <h3>i have {props.len} fruits</h3>
    // }
    
    // const dispFruit = (props) => {
    //     return (

    //     )
    // }



  return (
    <div>
        <h1>Props</h1>
        {/* {call} */}
        {myElement}
        <Demo id="Rama"/>
        <Students/>
        <hr/>
        {fruits.map((val)=>
            <DisplayFruits item={val}/>
        )}
        <hr/>
        {/* {fruits.map(
            (val,index) => {
                return (
                    
                )
            }
        )} */}

    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

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
        return <h3>I'm {props.brand}!</h3>
    }

    function Demo(props) {
        return (
            <>
                <h3>Who is in my team?</h3>
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
    const fruitsArray = ["Apple", "Banana","Orange","Mango"];

    const DisplayFruits = (props) => {
        return (
            <li>{props.item}</li>
        );
    }

/////

    function Vehicle(props) {
        return <h3>I'm a {props.brand}!</h3>
    }

    function Showroom() {
        const carName= "BMW";
        return (
            <>
                <h3>Who lives in my Garage?</h3>
                <Vehicle brand={fruitsArray} />
            </>
        );
    }


/////house work
    
    const LenFruits = (props) => {
        return (
            <>
            <p>i have {props.len} fruits</p>
            <p>They are</p>
            </>
        );
    }

    const DispFruit = (props) => {
        return (
            <>
            <td>{props.index}.</td>
            <td>{props.val}</td>
            </> 
        );
    }

    const DispFruitArray = () => {
        return (
            <>
                <LenFruits len={fruitsArray.length}/>
                <table border={1}>
                    <tr>
                        <th>sl no.</th>
                        <th>Fruits</th>
                    </tr>
                    {fruitsArray.map(
                        (item,index) => <tr key={index}><DispFruit index={index+1} val={item}/></tr>
                    )}
                </table>
            </>
        )
    }



  return (
    <div>
        <Link to='/'>Home</Link><br/>
        <h1>Props</h1>
        {/* {call} */}
        {myElement}
        <Demo id="Rama"/>
        <Hero/>
        <Students/>
        <Showroom/>
        <hr/>
        {fruitsArray.map((val)=>
            <DisplayFruits item={val}/>
        )}

        <hr/>

        {/*House work */}
        <LenFruits len={fruitsArray.length}/>

        <table border={1}>
            <tr>
                <th>sl no.</th>
                <th>Fruits</th>
            </tr>
            {fruitsArray.map(
                (item,index) => <tr><DispFruit index={index+1} val={item}/></tr>
            )}
        </table>
        <hr/>


        
        <DispFruitArray/>


<hr/>
        <Link to='/'>Home</Link><br/>
    </div>
  )
}

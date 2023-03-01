import React from 'react'
import { useState } from 'react'

export default function UseState() {

    const [name, setName] = useState("Rahul");

    function Change () {
      setName("karthik");
    }

  //

    const [color, setColor] = useState("red");

    //

    const [car, setCar] = useState(
      {
        brand:"Merc-Benz",
        model:"SLR",
        year :"2000",
        color : "White"
      }
    );

    const changeColor = () => {
      setCar({...car, color:"red"})
    }

    //

    const [number, setNumber] = useState(0);

    const Add = () => {
      let a=number;
      a+=1
      setNumber(a)
    }

    /////

    const [user, setUser] = useState(
      {
        name:"", age:"", phone:"",email:"",addr:""
      }
    )

    const ChangeUsers = (name, age, phone) => {
      setUser({...user, name, age, phone})
    }

      const ChangeUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value, [e.target.addr]:e.target.value, [e.target.phone]:e.target.value})

        console.log(user)

      }

      const [email, setEmail] = useState("");
      const [addr, setAddr] = useState("");

    ////
console.log(email+  "  "  +addr);
  return (
    <div>
        <h1>UseState</h1>

        <h2>{name}</h2><hr/>

        <button onClick={Change}>change</button><button onClick={()=>setName("Rahul")}>invert</button><br/>
<hr/>
        <h2 style={{color:color}}>My favorite color is :{color}</h2>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("aqua")}>Aqua</button>
<hr/>
        <h3>It is a {car.color} {car.model} from {car.year}</h3>
        <button onClick={changeColor}>Change-Color</button>
<hr/>
        <h3>Count :{number}</h3>
        <button onClick={Add}>Add-1</button> <button onClick={()=>setNumber(number+2)}>Add-2</button>   <button onClick={()=>setNumber(0)}>reset</button>
<hr/>
<h3>My name is {user.name}, i'm  {user.age}, my phone no. is {user.phone} {user.email} {user.addr}</h3>
<button onClick={()=>ChangeUsers("Rahul","Mangaluru","9205135")}>Change</button>

<hr/>
<input onChange={ChangeUser} type="text" name="name" placeholder='Name'/><br/>
<input onChange={ChangeUser} type="text" name="age" placeholder='Age'/><br/>
<input onChange={ChangeUser} type="text" name="phone" placeholder='Phone'/><br/>

<input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder='E-Mail'/><br/>
<input onChange={(e)=>setAddr(e.target.value)} type="text" name="addr" placeholder='Address'/><br/>
<button>Register</button><br/>

    </div>
  )
}

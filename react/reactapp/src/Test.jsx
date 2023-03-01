import React, { useState } from 'react'
import { isValidElement } from 'react';
import { Link } from 'react-router-dom'
export default function() {

  const Cars = ["bmw","swift","benz","volve"];

  
  let myCars = Cars.map(
      (item, index)=>{
        return (
          <p>{index+1}. {item}</p>
        )
      }
    )
//
    const vehicleOne1 = {
      brand:'Ford',
      model:'Mustang',
      color:'red',
      owner : {
        name:'Rama',
        fav_color :'red'
      }
    }
    const updateVehicle ={
      type:'car',
      year:2021,
      color:'yellow',
      owner :{
        name:'karthik',
        color:'green'
      }
    }

    const updatedVehicle = {...vehicleOne1, ...updateVehicle};
    console.log(updatedVehicle);

    const myName = val => {return alert('My Name is '+val)}

    let fruits = [
      {name:'apple', class:2},
      {name: 'orange', class:1},
      {name:'mango', class:1},
      {name:'banana', class:2}
    ]

    class MyName {
      constructor(name) {
        this.name=name
      }
      present() {
        return `My name is "${this.name}" `
      }
    }
    class Stream extends MyName {
      constructor(name, desig) {
        super(name)
        this.desig=desig
      }
      show() {
        return `${this.present()} , and i'm a "${this.desig}"`
      }
    }

    let msg = new Stream('Shreyas','React Developer')


    const studentDetails = [
      {
        name:"Rama",
        rollno:10,
        class:1
      },
      {
        name:"Krishna",
        rollno:11,
        class:3
      },
      {
        name:"Ravi",
        rollno:16,
        class:2
      },
      {
        name:"Jhoseph",
        rollno:17,
        class:7
      },
      {
        name:"Rahaman",
        rollno:19,
        class:5
      },
      {
        name:"Meghanath",
        rollno:1,
        class:1
      },
    ];

    const Display = (item) => {
      return(
        <>
          <td>{item.rollno}</td>
          <td>{item.name}</td>
          <td>{item.class}</td>
        </>
      )
    }

//////
const [user, setUser] = useState(
  [
    {
      name:"Rahul",
      phone:9870123456,
      email:"rahul@mail.com"  
    }
  ]
)

    

  return (
    <div>
      <Link to='/'>Home</Link><br/>
      <h1>Test Start</h1>

      {myCars}
      
      <hr/>

      <button onClick={()=>myName('Shreyas')}>Click</button><br/>

      <hr/>
      
      <table border={1}>
        <tr>
          <th>Sl.no</th>
          <th>Name</th>
          <th>Class</th>
        </tr>
        {fruits.map(
          (item, index)=>{
            return (
              <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.class}</td>
              </tr>
            )
          }
        )}
      </table>

      <hr/>

      {msg.show()}

      <hr/>

      <table border={1}>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Class</th>
        </tr>
        {studentDetails.map((item)=>{
          return(
              <tr>
                <Display rollno={item.rollno} name={item.name} class={item.class}/>
              </tr>
          );
              
            })}
      </table>
      <hr/>

      <input type="text" name="name" value={user[0]?.name}/><br/>
      <input type="tel" name="phone" value={user[0]?.phone}/><br/>
      <input type="email" name="email" value={user[0]?.email}/><br/>
      
      <hr/>
      <Link to='/'>Home</Link><br/>
    </div>
  )
}
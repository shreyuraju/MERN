import React from 'react'
import { isValidElement } from 'react';

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


  return (
    <div>
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

    </div>
  )
}
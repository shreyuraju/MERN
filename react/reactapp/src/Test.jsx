import React from 'react'

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

  return (
    <div>
      <h1>Test Start</h1>

      {myCars}

    </div>
  )
}
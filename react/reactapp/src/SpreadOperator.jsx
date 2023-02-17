import React from 'react'

export default function SpreadOperator() {

  const numOne = [1,2,3,4];
  const numTwo = [5,6,7];
  const numComb = [...numOne, ...numTwo, 8, 9, 10];

  const numbers = [1,2,3,4,5,6];
  const [one, two, ...three] = numbers; // decstructuring

  //object
  const myVehicle = {
    brand:'Ford',
    model:'Mustang',
    color:'red'
  }
  const updateMyVehicle = {
    type:'car',
    year:2021,
    color: 'yellow'
  }

  const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle};
  //console.log(myUpdatedVehicle);

  return (
    <>
        <div>
            <h1>SpreadOperator Start</h1>
        </div>

        {numOne}<br/>
        {numTwo}<br/>
        {numComb}<br/>
        <hr/>
        {one}<br/>
        {two}<br/>
        {three}<br/>
        <hr/>

    </>
  )
}

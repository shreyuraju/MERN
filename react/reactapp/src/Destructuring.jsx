import React from 'react'

export default function Destructuring() {


    // const cars = ['mustang','f-150','expedition'];

    // const car1 = cars[0]; //old method of Destrucuturing
    // const car2 = cars[1]; //old method of Destrucuturing
    // const car3 = cars[2]; //old method of Destrucuturing

    // const [car11, car22, car33,car44] = cars; //new method of Destructuring

    const a = [5+5,10+10,20+20];

    const [p,q,r] = a;

    const vehicle = {
      brand:'Ford',
      model:'Mustang',
      type:'car',
      year:2021,
      color:'red'
    }

    let msg;

    myVehicle(vehicle);

    function myVehicle({brand,model,type,color,year}) {
      msg = 'My '+type+' is a '+color+' '+brand+' '+model+'.';
    }

    const vehicleOne = {
      brand:'Ford',
      model:'Mustang',
      type:'car',
      year:2021,
      color:'red',
      registration :{
        city:'Houston',
        state:'Texas',
        country:'USA'
      },
    }
    var msgOne;
    myVehicleOne(vehicleOne);

    function myVehicleOne( {model, registration:{state} } ) {
      msgOne = 'My '+model+' is registered in '+state+'.';
    }

    

  return (
    <>
        <div>
            <h1>Destructuring Start</h1>
        </div>

        {p}<br/>
        {q}<br/>
        {r}<br/>
        <hr/>
        {msg}<br/>
        {msgOne}<br/>
        <hr/>
    </>
  )
}

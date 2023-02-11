import React from 'react'

export default function Classes() {
    class Car {
        constructor(name) {
            this.brand=name;
        }
    }

    const mycar = new Car("NISSAN");

    class Bike {
        constructor(name) {
            this.name=name;
        }
        Present() {
            return "My Bike is "+ this.name
        }
    }
    const mybike = new Bike();

    //mybike.name="YAMAHA"

    class Cycle {
        constructor(name) {
            this.name = name;
        }
        Present () {
            return `My Cycle is ${this.name}`
        }
    }

    const myCycle = new Cycle();

    class College {
        constructor(name) {
            this.clgname = name;
        }
        present() {
            return `I'm Studying in ${this.clgname}`
        }
    }
    class Model extends College {
        constructor(name, mod) {
            super(name);
            this.mod = mod;
        }
        show() {
            return this.present() + `, i'm Studing in `+this.clgname;
        }
    }

    //const myClg = new College();
    const myClg = new  Model("MITE", "MOODABIDRE");

  return (
    <div>
        <h1 style={{backgroundColor:'red', color:'white'}}>Classes Function Start</h1>
        {mycar.brand}<br/>
        {mybike.name="YAMAHA"}<br/>
        {myCycle.name="ATLAS"}<br/>
        {mybike.Present()}<br/>
        {myCycle.Present()} <br/>
        {myClg.show()+", "+myClg.present()}
    </div>
  )
}

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

    class Vehicle {
        constructor( vehiclename ) {
            this.brand= vehiclename;
        }
        present(){
            return `Vehivle brand is :` +this.brand;
        }
    }

    class TruckCat extends Vehicle {
        constructor( vehicle, trkname ) {
            super(vehicle);
            this.truckname = trkname;
        }
        showtruck() {
            return this.present()+ `, Truck Category is : `+this.truckname;
        }
    }

    class TruckModel extends TruckCat {
        
        constructor ( vehiclename, trkname, modname ) {
            super(vehiclename, trkname)
            this.mod = modname;
        }
        showmodel() {
            return this.showtruck()+`, Truck Model is : `+this.mod;
        }
    }

    const myVehicle = new TruckModel("TATA","Canter","407");


    //vehichle 1
    class Vehicle1 {
        constructor(vehichlename) {
            this.brand = vehichlename;
        }
        present(){
            return `Vehicle 1 brand is : `+this.brand;
        }
    }

    class TruckCat1 extends Vehicle1 {
        constructor(vehicle, trkname){
            super(vehicle);
            this.truckname = trkname;
        }
        showmodel() {
            return this.present()+`, Truck Category is : `+this.truckname;
        }
    }

    class TruckModel1 extends Vehicle1 {
        constructor(vehiclename, modname){
            super(vehiclename);
            this.mod = modname;
        }
        showmodel() {
            return this.present()+`, Truck Model is :`+this.mod;
        }
    }

    const myVehicle1 = new TruckCat1("EICHER","GENERAL");
    const myVehicle2 = new TruckModel1("EICHER", "BUS");




  return (
    <div>
        <h1 style={{backgroundColor:'red', color:'white'}}>Classes Function Start</h1>
        {mycar.brand}<br/>
        {mybike.name="YAMAHA"}<br/>
        {myCycle.name="ATLAS"}<br/>
        {mybike.Present()}<br/>
        {myCycle.Present()} <br/>
        {myClg.show()+", "+myClg.present()}<br/><br/>

        {myVehicle.showmodel()}<br/>
        {myVehicle1.showmodel()}<br/>
        {myVehicle2.showmodel()}<br/>



    </div>
  )
}

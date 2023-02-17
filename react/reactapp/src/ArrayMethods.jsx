import React from 'react'


export default function ArrayMethods() {

    const myArray = ['Apple','Mango','Orange']

    let mapfunc = <ol>{myArray.map((item,index)=><li>{index+1}. {item}</li>)}</ol>

    // const a = [1,2,3,4,5]
    // const Function = (val) => {
    //     return <h2>{val}</h2>
    // }

    // let c=1;
    // let mapfunc1 = myArray.map((item)=>{return <>{c.toString}</>,{item},c++})

    // function arrs(a,b) {
    //   return <>{b}. {a}<br/></>
    // }
    // let mapfunc2 = myArray.map((item,index)=>arrs(item,index+1))

    // let Bikes = ["Yamaha", "Ktm", "Honda","Hero","Bajaj","Kawasawaki",""]

    const Fruits = ["Apple","Banna","Orange", "Mango","Papaya"]
  
    let fruit = <ul>{
      Fruits.map(
        (item,index)=> <li>{index}. {item}</li>
      )
    }</ul>

    let details = [
      {name:"Rama", age:24},
      {name:"Lakshmana", age:22},
      {name:"Hanuma", age:45},
      {name:"Ravana", age:35}
    ]

    
    

  return (
    <>
      <div>
          <h1>ArrayMethods Start</h1>
          {mapfunc}<hr/>

          {/* {mapfunc2}<hr/> */}
          {/* {a.map( (item) => { return Function(item) } ) } */}
      </div>
      {/* {myArray.map((item)=><li>{item}</li>)}<hr/> */}

      {fruit}<hr/>
      {details.map((item)=><p>{item.name}, {item.age} </p>)}<hr/>

      <table border="1px">
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {details.map((item)=> {
          return(
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          )
        })}

      </table>
      <hr/>
      
    </>
  )
}

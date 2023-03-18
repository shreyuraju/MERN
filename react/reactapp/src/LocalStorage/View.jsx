import React, {useState, useEffect} from 'react'

export default function View() {

    const [display, setDisplay] = useState([]);


    useEffect(()=>{
        setDisplay(JSON.parse(localStorage.getItem("Student")));
    },[])
    // console.log(display)
    

  return (
    <>
        <div><h2 style={{textAlign:"center"}}>Student Details</h2>
            <table border={1} style={{margin:"auto"}}>
                <tr>Total :{display.length}</tr>
                <tr>
                    <th>Sl no.</th>
                    <th>Name.</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {display.map((item,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>view</td>
                            <td>edit</td>
                            <td>delete</td>
                        </tr>
                    )
                })}
            </table>
        </div>        
    </>
  )
}

import React, {useEffect, useState} from 'react'
import View from './View';

export default function Insert() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    

    let initValue;

    if(localStorage.getItem("Student")) {
        initValue = JSON.parse( localStorage.getItem("Student"));
    } else {
        initValue=[];
    }

    const [value, setValue] = useState(initValue);

    const InsertValue = (e) => {
        e.preventDefault(); //it will not reload wen you use form tag
        let detail = {
            name:name,
            phone:phone,
            address:address
        }
        setValue([...value, detail]);
        console.log(value);
        // localStorage.setItem("Student", JSON.stringify(value));
        //alert("Successfully Inserted")
    }

    useEffect(
        ()=>{
            localStorage.setItem("Student", JSON.stringify(value));
        },
        [value]
    )

  return (
    <>
        <div>
            <h1>Insert</h1>
        </div>

        <div>
            <form onSubmit={InsertValue}>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' required/><br/>
                <input type="tel" name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Your Contact' required/><br/>
                <input type="text" name="address" onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Your Address' required/><br/>
                <button>Insert</button>
            </form>
        </div>

<br/>
<hr/>
<br/>
        <View />
    </>
  )
}

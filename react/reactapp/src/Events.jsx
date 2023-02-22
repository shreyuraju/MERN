import React from 'react'

export default function Events() {

    const Shoot = (e) => {
        alert("Great Shot!");
        console.log(e);
    }

    const Shoot2 = (e) => {
        alert(e);
    }

    return (
        <div>
            <h1>Events</h1>
            <button onClick={Shoot}>Take-a-Shot</button><br/>
            <button onClick={()=>Shoot2("Nice kick")}>Take-a-Shot-2</button><br/>
        </div>
    )
}

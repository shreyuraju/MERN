import React, { useState } from 'react'

export default function PropsDrill() {

    function Function1 () {
        const [user, setUser] = useState("Rama");
        return (
            <>
                <h3>Function 1 : {user}</h3>
                <Function2 user={user}/>
            </>
        );
    }

    function Function2 (props) {
        return (
            <>
                <h3>Function 2 : {props.user}</h3>
                <Function3 user={props.user}/>
            </>
        );
    }

    function Function3({user}) {
        return(
            <>
                <h3>Function 3</h3>
                <Function4 user={user}/>
            </>
        );
    }

    function Function4({user}) {
        return(
            <>
                <h3>Function 4</h3>
                <Function5 user={user}/>
            </>
        );
    }

    function Function5({user}) {
        return(
            <>
                <h3>Function 5, {'Hello '+user}</h3>
            </>
        );
    }

  return (
    <div>
        <h1>PropsDrill Start</h1>
        <Function1/>
    </div>
  )
}

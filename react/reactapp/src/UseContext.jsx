import React, {useContext, createContext} from 'react'
import { Link } from 'react-router-dom'

export default function UseContext() {

    //
    const Abc= createContext();

    function Function1 () {
        const name = "Rama";
        const age=25;
        return(
            <>
                <h3>Function 1 : {name}, {age}</h3>
                <Abc.Provider value={{name, age}}>
                    <Function2/>
                    <Function6/> 
                     {/* we can't use function outside the Abc wrapper   if you use it'll show blank page */}
                </Abc.Provider>
                
            </>
        );
    }

    function Function2 () {
        return (
            <>
                <h3>Function 2 :</h3>
                <Function3/>
            </>
        );
    }

    function Function3 () {
        return (
            <>
                <h3>Function 3 :</h3>
                <Function4/>
            </>
        );
    }

    function Function4 () {
        return (
            <>
                <h3>Function 4 :</h3>
                <Function5/>
            </>
        );
    }
    
    function Function5 () {

        const user = useContext(Abc);

        return (
            <>
                <h3>Function 5 : {user.name}, {user.age}</h3>
            </>
        );
    }

    function Function6 () {

        const user = useContext(Abc);

        return (
            <>
                <h3>Function 6 : {user.name}, {user.age}</h3>
            </>
        );
    }

  return (
    <div>
        <Link to='/'>Home</Link><br/>
        <h1>UseContext Start</h1>
        <Function1/>
        
    </div>
  )
}

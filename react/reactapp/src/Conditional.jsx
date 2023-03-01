import React from 'react'
import { Link } from 'react-router-dom'

export default function Conditional() {

    function MissedGoal() {
        return <h3>Missed!</h3>
    }

    function MadeGoal() {
        return <h3>Goal!</h3>
    }

    function Goal(props) {
        const abc = props.isGoal;
        if( abc ){
            return <MadeGoal/>
        } 
        else {
            return <MissedGoal/>
        }

        {abc?<MadeGoal/>:<MissedGoal/>}

    }

    
    // const CheckStatus = (props) => {
    //     props.course=='bca'?
    //         <Admitted/>
    //     :
    //         <NotAdmitted/>
    // }

    
  return (
    <div>
        <Link to='/'>Home</Link><br/>
        <h1>Conditional starts</h1>
        <Goal isGoal={true} />
        
        <Link to='/'>Home</Link><br/>
    </div>
  )
}

import React from 'react'

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
        abc?<MadeGoal/>:<MissedGoal/>
    }

  return (
    <div>
        <h1>Conditional starts</h1>
        <Goal isGoal={true} />
    </div>
  )
}

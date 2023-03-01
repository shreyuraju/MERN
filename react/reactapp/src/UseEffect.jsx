import React, {useEffect, useState} from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);

    const [timer, setTimer] = useState(0);

    const [time, setTime] = useState({
        hr:0,
        mm:0,
        ss:0
    });

    // useEffect(
    //     ()=>{
    //         alert("Hello")
    //     },
    //     [count]
    // )
    //alert("HELLO")

    // useEffect(
    //     ()=>{
    //         setTimeout( ()=>{
    //             setCount(count+1)
    //         }, 1000)
    //     }
    // )
    let hrs=0,mms=0,sss=0;

    useEffect(
        ()=>{
            setTimeout( ()=>{
                
            // setCount(count+1);
            setTimer(timer+1);
                hrs=time.hr
                mms=time.mm
                sss=time.ss

                if (timer>=100) {
                    sss+=1
                    setTimer(timer-100);                  
                }
                if(sss>=60){
                    mms+=1;
                    sss=0;
                }
                if(mms>=60){
                    hrs+=1;
                    mms=0;
                }
                setTime({...time,hr:hrs,mm:mms,ss:sss});
            }, 100)
        }
    )

    

  return (
    <div>
        <h1>UseEffect</h1>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Add</button>
<hr/>
    <h3>{time.hr}:{time.mm}:{time.ss}</h3>
    </div>
  )
}

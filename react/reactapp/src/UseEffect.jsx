import React, {useEffect, useState} from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);

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

    const [timer, setTimer] = useState(0);

    const [time, setTime] = useState({
        day:0,
        hr:0,
        mm:0,
        ss:0
    });

    let days=0,hrs=0,mms=0,sss=0;

    useEffect(
        ()=>{
            setTimeout( ()=>{
            // setCount(count+1);
            setTimer(timer+1);
                days=time.day;
                hrs=time.hr;
                mms=time.mm;
                sss=time.ss;

                if (timer>=100) {
                    sss+=1
                    setTimer(timer-100);                  
                }
                if(sss>=60){
                    mms+=1;
                    sss-=60;
                }
                if(mms>=60){
                    hrs+=1;
                    mms-=60;
                }
                if (hrs>=24) {
                    days+=1;
                    hrs-=24;
                }
                setTime({...time,hr:hrs,mm:mms,ss:sss});
            }, 10)
        }
    )

    const [hr, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect( ()=> {
        if(hr == 24){
            setHour(0);
            setMin(0);
            setSec(0);
        }
        if (min == 60) {
            setHour(hr+1);
            setMin(0);
        }
        if (sec==60) {
            setMin(min+1);
            setSec(0);
            setTimeout( ()=> {
                setSec(sec+1);
            },1000)
        }
    } )

  return (
    <div>
        <h1>UseEffect</h1>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Add</button>
<hr/>
    <h3>Day: {time.day}, Hours: {time.hr}, Miniutes: {time.mm}, Seconds: {time.ss}, MiliSeconds: {timer}</h3>

    <hr/>

    <h3>Hours: {hr}, Miniutes: {min}, Seconds: {sec}</h3>
    </div>
  )
}

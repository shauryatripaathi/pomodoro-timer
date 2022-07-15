import { useEffect, useState } from 'react'
import ProgressCircle from '../ProgressCircle'
import './style.css'

export default function Pomodoro(){  
    const arr = ['work','short break','long break']
    const[time,setTime] = useState(180)
    
    useEffect(()=>{
       if(time>0){
        const interval = setInterval(()=>{
            setTime((time)=>time-1)
        },1000)
        return ()=>clearInterval(interval)
    }
    },[])
    const getTime = (time)=>{
        const min =  time/60;
        const sec =  min/60  
        return `${Math.floor(min)} : ${Math.floor(sec)}`
    }

    return(
        <div>
            <h2>Pomodoro Timer</h2>
            {arr.map((item)=>{
                return(
                    <button className="buttonContainer">{getTime()}</button>
                )
            })}
               
            <div className='timer'>
                <div style={{fontSize:'5em'}}>{time}</div>
                <button>Start</button>
             </div>
        </div>
    )
}
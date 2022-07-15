import { useEffect, useState } from 'react'
import ProgressCircle from '../ProgressCircle'
import './style.css'

export default function Pomodoro(){  
    const arr = ['work','short break','long break']
    const[time,setTime] = useState(1500)
    
    useEffect(()=>{
       if(time>0){
        const interval = setInterval(()=>{
            setTime((time)=>time-1)
        },1000)
        return ()=>clearInterval(interval)
    }
    else if(time<0){
        setTime(180)
        alert('times up')
    }
    },[])
    const getTime = ()=>{
        const min =  Math.floor(time/60);
        const sec =  time%60
        console.log(min,sec,time,'this is time')
        return `${min} : ${sec} `
    }

    return(
        <div>
            <h2>Pomodoro Timer</h2>
            {arr.map((item)=>{
                return(
                    <button className="buttonContainer">{item}</button>
                )
            })}
               
            <div className='timer'>
                <div style={{fontSize:'4em'}}>{getTime()}</div>
                <button>Start</button>
             </div>
        </div>
    )
}
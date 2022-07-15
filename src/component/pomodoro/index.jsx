import { useEffect, useState } from 'react'
import './style.css'

export default function Pomodoro() {
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(1500)
    const [isReset,setIsReset] = useState(false)

    useEffect(() => {
        if (!isReset && isActive && time > 0) {
            const interval = setInterval(() => {
                setTime(time - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [time, isActive,isReset])
    const getTime = () => {
        const min = Math.floor(time / 60);
        const sec = time % 60
        console.log(min, sec, time, 'this is time')
        return `${min} : ${sec} `
    }

    const toggleClock = () => {
        setIsActive(!isActive)
    }

    const resetButton = ()=>{
        window.location.reload()
    }

    return (
        <div>
            <h2 style={{display:'flex',justifyContent:'center'}}>Pomodoro Timer</h2>
            <div className='timer'>
                <div style={{ fontSize: '4em' }}>{getTime()}</div>
                <button className='buttonStyle' onClick={toggleClock}>{isActive ? 'Pause' : 'Start'}</button>
                <button onClick={resetButton}>Reset</button>
            </div>
        </div>
    )
}
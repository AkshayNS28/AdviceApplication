import React from 'react'
import { useState, useEffect } from 'react'

const Clock = () => {

  const [currentTime, setcurrentTime] = useState(new Date())

  const updateTime =()=>{
    setcurrentTime(new Date())
  }

  useEffect(() => {
    var timer = setInterval(() => {
      updateTime()
    }, 1000);
  
    return () => {
      clearInterval(timer)
    }
  }, )
  
  // setInterval(() => {
  //   updateTime()
  // }, 1000);
  // updateTime()

  return (
    <div>{currentTime.toLocaleTimeString()} </div>
  )
}

export default Clock
import React, { useState } from 'react'
import { config, useSpring, animated } from 'react-spring'


const Card = ({ option, children, color, precentage, displayPercentage, setdisplayPercentage }) => {
    
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: parseInt(precentage),
        delay: 100,
        config: config.molasses,
    })



  return (
      <div style={{ backgroundColor: color }} className={` w-52 h-48 m-auto rounded-md  flex flex-col items-center justify-center drop-shadow-lg md:w-64 md:h-56 text-white`} onClick={() => setdisplayPercentage(!displayPercentage)}>
          <h2>{option}</h2>
          <div className='text-2xl'>
              {displayPercentage ? <animated.div>{number.to(n => Math.floor(n)+"%")}</animated.div> : ""}
          </div>
       
      </div>
  )
}

export default Card
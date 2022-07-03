import React from 'react'
import { useSpring, animated, config } from 'react-spring'

const Perc = ({ perc }) => {
     const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: perc,
    delay: 100,
    config: config.molasses,
  })

  return (
      <animated.div>{number.to(n => Math.floor(n) + "%")}</animated.div>
  )
}

export default Perc
import React from 'react'

const Card = ({option,children,color}) => {
  return (
      <div className={`bg-${color} w-52 h-48 m-auto rounded-md  flex items-center justify-center drop-shadow-lg md:w-64 md:h-56 text-white`}>
          <p>{option}</p>
      </div>
  )
}

export default Card
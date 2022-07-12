import React from 'react'

const Profile = ({img,href,alt}) => {
  return (
          <a href={href}>
          <img className='rounded-full mx-1 w-14 h-14 bg-white' src={img} alt={alt}/>
          </a>
  )
}

export default Profile
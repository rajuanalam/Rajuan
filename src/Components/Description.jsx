import React from 'react'

const Description = ({text, className}) => {
  return (
    <p className={` ${className} text-primaryColor font-dmSans text-lg  font-light`}>{text}</p>
  )
}

export default Description
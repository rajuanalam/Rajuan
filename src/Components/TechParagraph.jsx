import React from 'react'

const TechParagraph = ({text, className}) => {
  return (
    <p className={`${className} text-primaryColor font-Poppins text-sm font-light inline-block`}>{text}</p>
  )
}

export default TechParagraph
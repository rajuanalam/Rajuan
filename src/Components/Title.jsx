import React from 'react'

const Title = (props) => {
  return (
    <>
    <props.as className={` ${props.className} font-Poppins text-bannerHeading text-xl font-medium leading-[26px]`}>{props.text}</props.as>
    </>
  )
}

export default Title
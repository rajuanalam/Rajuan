import React from 'react'
import { HiChevronLeft } from "react-icons/hi2";

const TourLeftArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} text-5xl inline-block absolute top-1/2 -translate-y-1/2  left-10  z-10 `}
      // style={{ ...style, display: "inline-block", background: "red", }}
      onClick={onClick}><HiChevronLeft className='text-white hover:bg-btnColor hover:text-white hover:border-none rounded-full border border-paraColor p-3'/></div>
    )
}

export default TourLeftArrow
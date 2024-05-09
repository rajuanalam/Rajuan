import React from 'react'
import { HiChevronRight } from "react-icons/hi2";
const RightArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} text-5xl  absolute   right-5 -top-16 xs:top-1/2 xs:-translate-y-1/2 xs:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:right-0 md:top-1/2 md:-translate-y-1/2 md:right-0 z-10 `}
      // style={{ ...style, display: "inline-block", background: "red", }}
      onClick={onClick}><HiChevronRight className="text-primaryColor hover:bg-logoColorOne hover:text-white hover:border-none rounded-full border border-primaryColor p-2 duration-500 xs:text-4xl xs:p-0"/></div>
    )
}

export default RightArrow
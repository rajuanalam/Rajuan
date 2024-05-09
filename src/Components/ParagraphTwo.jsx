import React from 'react'

const ParagraphTwo = (props) => {
    let pattern = /#([^#]+)#/g
    let findtext = props.text.replace(pattern, "<span class='one'>$1</span>")
  return (
    <p className={` ${props.className} text-primaryColor font-dmSans text-lg  font-normal`} dangerouslySetInnerHTML={{ __html: findtext}}></p>
  )
}

export default ParagraphTwo
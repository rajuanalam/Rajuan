const Heading = (props) => {
    let pattern = /#([^#]+)#/g
    let findtext = props.text.replace(pattern, "<span class='one'>$1</span>")
  return (
    <props.as className={` ${props.className} font-Poppins text-bannerHeading text-[48px] font-bold leading-[26px]`} dangerouslySetInnerHTML={{ __html: findtext}}></props.as>
  )
}

export default Heading
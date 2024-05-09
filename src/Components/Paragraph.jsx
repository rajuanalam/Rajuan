
const Paragraph = ({text,className}) => {
  return (
    <p className={`${className} text-primaryColor font-Poppins text-[24px]  font-normal leading-9`}>{text}</p>
  )
}

export default Paragraph
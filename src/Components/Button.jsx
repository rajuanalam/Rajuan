
const Button = ({text,className,onClick}) => {
  return (
    <button onClick={onClick} className={`${className} text-primaryColor font-dmSans text-lg font-normal tracking-tighter rounded-md duration-500 px-5 py-1 border border-primaryColor hover:bg-gradient-to-r from-logoColorOne to-logoColorTwo hover:text-white hover:border-logoColorOne` }>{text}</button>
  )
}

export default Button
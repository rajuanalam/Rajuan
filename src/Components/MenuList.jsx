import { Link } from "react-router-dom"

const MenuList = ({text,className,to}) => {
  return (
    <li><Link className={`${className} text-primaryColor font-dmSans py-2 inline-block text-xl font-medium hover:bg-gradient-to-r from-logoColorOne to-logoColorTwo hover:bg-clip-text hover:text-transparent`} to={to}>{text}</Link></li>
  )
}

export default MenuList
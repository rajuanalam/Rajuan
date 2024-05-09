import { Link } from "react-router-dom"

const List = ({text,className,to}) => {
  return (
    <li><Link className={`${className} text-primaryColor font-dmSans text-lg  font-normal`} to={to}>{text}</Link></li>
  )
}

export default List
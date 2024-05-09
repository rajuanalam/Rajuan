
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Layouts/Home/Nav'
import Footer from '../Components/Layouts/Home/Footer'


const RouteLayout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default RouteLayout
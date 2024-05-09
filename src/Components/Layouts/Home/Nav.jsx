import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";
import MenuList from '../../MenuList'
import Button from '../../Button'
import { IoMenuSharp } from "react-icons/io5";
import ClickFunction from '../../../Hook/ClickFunction';

const Nav = () => {

  const {
    handleClick : handleClick,
    dropRef : dropRef,
    btnRef : btnRef,
  } = ClickFunction();

  return (
    <>
    <nav className='py-12 bg-bgWhiteColor sm:pl-8 xs:px-4 md:pl-8 lg:px-10'>
        <Container className="">
            <Flex className="items-center">
               <div className='w-1/2'>
                    <Link>
                        <h1 className='bg-gradient-to-r from-logoColorOne to-logoColorTwo bg-clip-text text-transparent font-extrabold text-4xl italic inline-block'>RAJUAN</h1>
                        <div>
                           <span className='bg-gradient-to-r from-logoColorOne to-logoColorTwo bg-clip-text text-transparent font-medium text-xl leading-none inline-block'>@TheCoder</span>
                        </div>
                    </Link>
               </div>
               <div className='w-1/2'>
               <div  className='sm:hidden md:hidden xs:hidden' >
               <ul className='flex gap-x-12 justify-end xs:flex-col xs:w-48 xs:p-3 xs:bg-[#BBE2EC] xs:rounded-md xs:absolute xs:right-5 xs:top-[80px]'>
                      <MenuList to="" text="Home" />
                      <MenuList to="/about" text="About" />
                      <MenuList to="" text="Services" />
                      <MenuList to="" text="Projects" />
                      <MenuList to="" text="Contact" />
                  </ul>
               </div>
               <div className='hidden xs:block sm:inline-block md:block -mt-6   xs:absolute  sm:absolute md:absolute right-4' onClick={() => { handleClick(dropRef, btnRef);}} ref={btnRef}>
                  <IoMenuSharp className='text-primaryColor xs:text-right  text-4xl cursor-pointer '/>
                  </div>
               <div ref={dropRef} className='hidden' >
               <ul className='flex gap-x-8 justify-end xs:flex-col sm:flex-col md:flex-col w-48 p-3 bg-[#BBE2EC] rounded-md xs:absolute sm:absolute md:absolute right-5 top-[80px] z-10'>
                      <MenuList to="" text="Home" />
                      <MenuList to="/about" text="About" />
                      <MenuList to="" text="Services" />
                      <MenuList to="" text="Projects" />
                      <MenuList to="" text="Contact" />
                  </ul>
               </div>
               </div>
               
            </Flex>
        </Container>
    </nav>
    </>
  )
}

export default Nav
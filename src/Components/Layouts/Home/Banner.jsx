import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Image from '../../Image'
import RajuanImg from '../../../assets/Rajuan.png'
import Button from '../../Button'
import { Link } from 'react-router-dom'
import Paragraph from '../../Paragraph'
import { GoDotFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <>
    <section className='bg-bgWhiteColor py-32 px-8 md:pt-10 sm:pt-0 xs:pt-20 xs:px-5 lg:py-12'>
        <Container>
                <Flex>
                    <div className=''>
                        <div className="mt-5">
                             <h1 className='font-dmSans text-bannerHeading text-[58px] font-bold leading-[70px] xs:text-4xl sm:text-[48px]'>Front-End React <br/> Developer 👋</h1> 
                        </div>
                        <Paragraph text="Hi, I'm Md Rajuan Alam. A passionate Front-end Web Developer with a focus on React. Proficient in HTML, CSS, Tailwind CSS, JavaScript and React JS." className='pt-8 xs:text-xl md:pr-36 lg:pr-48'/>
                        <Flex className="items-center gap-x-3 pt-10">
                            <IoLocationOutline className='text-xl'/>
                            <Paragraph text='Sherpur, Mymensingh, Bangladesh.' className='xs:text-xl'/>
                        </Flex>
                        <Flex className="items-center gap-x-3 pt-4">
                            <GoDotFill className='text-xl text-green-500'/>
                            <Paragraph text='Available for new projects.' className='xs:text-xl'/>
                        </Flex>
                        <Flex className="items-center gap-x-5 pt-10 pl-1 text-3xl text-bannerHeading">
                            <Link to="https://github.com/rajuanalam" target='_blank'><FaGithub/></Link>
                            <Link to="https://www.linkedin.com/in/rajuan-the-coder" target='_blank'><FaLinkedin /></Link>
                            <Link to="https://www.facebook.com/rajuan.alam.3/" target='_blank'><FaFacebookSquare /></Link>
                        </Flex>
                        <Link to="/resume"><Button text="Download Resume" className="mt-8"/></Link>
                    </div>
                    <div className='xs:-mt-5 mr-5 xs:absolute xs:top-32 -left-4 xs:w-1/4 '>
                        <Image src={RajuanImg} alt={RajuanImg} className='sm:absolute sm:top-36 sm:right-6 sm:w-1/4 md:absolute md:top-48 md:right-8 md:w-1/4 ring-4 ring-offset-zinc-500 rounded-full w-[649px] ml-12 mt-8 lg:absolute lg:top-48 lg:w-1/4 lg:right-10'/>
                    </div>
                </Flex>
        </Container>
    </section>
    </>
  )
}

export default Banner
import React from 'react'
import Image from './Image'
import Title from './Title'
import Description from './Description'
import TechParagraph from './TechParagraph'
import Flex from './Flex'
import { FaLink } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

const ProjectsCard = ({img,title,text,techStack,preview,github}) => {
  return (
       <>
       <div className='w-full  bg-blue-100 rounded-xl  xs:pt-2 xs:pb-3 sm:py-3 '>
           
          <Flex className='xs:flex-none'>
          <div className='w-3/5 xs:block'>
            <Image src={img} alt="image.png" className="rounded-l-xl "/>
            </div>
            <div className='w-2/5'>
            <Title as='h4' text={title} className='pt-16 px-8 xs:text-lg xs:px-2 xs:pt-0 xs:leading-snug sm:text-xl sm:px-2 sm:pt-0 md:px-4 md:pt-5'/>
            <Description text={text} className='pt-8 px-8 xs:hidden sm:px-2 sm:pt-0 sm:leading-5 md:leading-5 sm:text-sm md:pt-3 md:px-4 ' />
            <Flex className="items-center px-8 pt-6 xs:px-2 xs:pt-1 xs:hidden sm:p-2 sm:pt-1 sm:flex-col sm:items-start md:px-4 md:pt-5 md:flex-col md:items-start ">
              <p className='text-bannerHeading font-Poppins text-base font-normal '>Tech stack :</p>
              <TechParagraph text={techStack} className='px-1 xs:text-sm sm:text-sm md:text-sm sm:leading-5 md:leading-5 '/>
            </Flex>
            <Flex className='px-8 pt-10 gap-x-10  xs:px-2 xs:pt-4 xs:flex-col xs:gap-y-4 sm:pt-1 sm:px-1 sm:gap-x-2 md:pt-5 md:px-4 md:gap-x-6'>
                <Link to={preview} target='_blank'>
                    <Flex className='items-center gap-x-1'>
                        <FaLink />
                        <p className='text-black font-Poppins text-base font-normal leading-none border-b border-b-primaryColor xs:text-sm sm:text-sm'>Live Preview</p>
                    </Flex>
                </Link>
                <Link to={github} target='_blank'>
                    <Flex className='items-center gap-x-1'>
                        <FaGithub />
                        <p className='text-black font-Poppins text-base font-normal leading-none border-b border-b-primaryColor xs:text-sm sm:text-sm'>View Code</p>
                    </Flex>
                </Link>
            </Flex>
            </div>
          </Flex>
          
        </div>
        </>
  )
}

export default ProjectsCard
import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import ParagraphTwo from '../../ParagraphTwo';
import List from '../../List';

const Footer = () => {
  return (
    <section className='bg-bgWhiteColor py-12 lg:px-6'>
        <Container>
            {/* Footer Top part start */}
            <Flex className='items-center justify-between border-b border-b-secondaryColor pb-10 xs:pb-3 xs:flex-col xs:text-left'>
            <div className='w-1/2 xs:w-1/3 xs:text-center'>
                  <Link>
                    <div>
                        <span className='bg-gradient-to-r from-logoColorOne to-logoColorTwo bg-clip-text text-transparent font-medium text-xl leading-none inline-block'>@TheCoder</span>
                    </div>
                  </Link>
                </div>
                <Flex className='justify-between w-1/2 xs:w-2/3 xs:flex-col xs:text-center gap-x-2 items-center'>
                <div>
                    <ParagraphTwo text='+8801996575923' />
                </div>
                <div>
                    <ParagraphTwo text='rajuanthecoder@gmail.com'/>
                </div>
                <div>
                <Flex className="items-center gap-x-5 text-2xl text-bannerHeading xs:text-center xs:justify-center xs:mt-2">
                            <Link to="https://github.com/rajuanalam" target='_blank'><FaGithub/></Link>
                            <Link to="https://www.linkedin.com/in/rajuan-the-coder" target='_blank'><FaLinkedin /></Link>
                            <Link to="https://www.facebook.com/rajuan.alam.3/" target='_blank'><FaFacebookSquare /></Link>
                        </Flex>
                </div>
                </Flex>
               
            </Flex>
            {/* Footer Top part end */}

            {/* Footer bottom part start */}
            <Flex className='pt-10 justify-between xs:flex-col xs:pt-5'>
                <div>
                    <ul className='flex gap-x-10 xs:gap-x-2 justify-center'>
                        <List to='' text='Home'/>
                        <List to='' text='About'/>
                        <List to='' text='Services'/>
                        <List to='' text='Projects'/>
                        <List to='' text='Contact'/>
                    </ul>
                </div>
                <div>
                    <ParagraphTwo text="Designed and built by #Md Rajuan Alam#" className="text-center"/>
                </div>
            </Flex>
            {/* Footer bottom part end */}
        </Container>
    </section>
  )
}

export default Footer
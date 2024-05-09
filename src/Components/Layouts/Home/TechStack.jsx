import React from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph  from '../../Paragraph'
import Flex from '../../Flex'
import Html from '../../../Icons/Html'
import CSS from '../../../Icons/CSS'
import JavaScript from '../../../Icons/JavaScript'
import ReactJS from '../../../Icons/ReactJS'
import NextJs from '../../../Icons/NextJs'
import REDUX from '../../../Icons/REDUX'
import BootStrap from '../../../Icons/BootStrap'
import TailwindCSS from '../../../Icons/TailwindCSS'
import VsCode from '../../../Icons/VsCode'
import Github from '../../../Icons/Github'


const TechStack = () => {
  return (
    <>
    <section className='bg-bgWhiteColor pt-5 pb-44 sm:pb-28 md:pb-28 xs:-mt-32 xs:px-5 sm:-mt-32 sm:px-8 md:-mt-32 md:px-8 lg:px-10 '>
        <Container>
            <Heading as='h3' text='My Tech Stack' className="text-center xs:text-3xl sm:text-4xl md:text-4xl" />
            <Paragraph text='Technologies I’ve been working with recently' className='text-center pt-9 xs:text-lg xs:pt-2 sm:pt-4 md:pt-4 lg:pt-6'/>

            <Flex className='justify-between gap-x-6 pt-32 xs:pt-3 sm:pt-16 md:pt-16  items-center lg:pt-20'>
                <Html/>
                <CSS />
                <JavaScript />
                <ReactJS />
                <NextJs />
            </Flex>
            <Flex className='justify-between gap-x-6 xs:-mt-28 pt-20 sm:-mt-10 md:-mt-10 items-center'>
                <REDUX />
                <BootStrap />
                <TailwindCSS />
                <VsCode />
                <Github />
            </Flex>
           
        </Container>
    </section>
    </>
  )
}

export default TechStack
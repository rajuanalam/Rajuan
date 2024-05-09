import React from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'

const AboutInfo = () => {
  return (
    <section className='bg-bgWhiteColor py-24'>
        <Container>
            <Heading as='h3' text="About Me"/>
            <Paragraph text="The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS." className="pt-12" />
        </Container>
    </section>
  )
}

export default AboutInfo
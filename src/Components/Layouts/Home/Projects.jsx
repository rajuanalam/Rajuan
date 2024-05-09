import React, { useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph  from '../../Paragraph'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ProjectsCard from '../../ProjectsCard';
import ProjectsData from '../../../Data/ProjectsData';
import Flex from '../../Flex';
import RightArrow from '../../RightArrow';
import LeftArrow from '../../LeftArrow';

const Projects = () => {
  const settings = 
  {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<RightArrow />,
    prevArrow:<LeftArrow />,
  };

  const [product, setProduct] = useState(ProjectsData());

  return (
    <section className='bg-bgWhiteColor pb-44 xs:-mt-28 xs:px-1 sm:px-2 md:px-2 lg:px-5'>
        <Container>
            <Heading as='h3' text='Projects' className="text-center xs:text-3xl" />
            <Paragraph text='Things I’ve built so far' className='text-center pt-9 xs:text-xl xs:pt-2'/>


            <div className='slider-container pt-28 mx-2'>  
            <Slider {...settings}>
            {product.map((el, index) => (
            <div className="" key={index}>
              <ProjectsCard
                img={el.img}
                title={el.title}
                text={el.text}
                techStack={el.techStack}
                preview={el.preview}
                github={el.github}
                className="xs:w-full mx-10"
              />
            </div>
          ))}
            </Slider>
      
            </div>
        </Container>
    </section>
  )
}

export default Projects
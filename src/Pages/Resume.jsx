import React from "react";
import { Link } from "react-router-dom";
import Image from "../Components/Image";
import RESUME from '../assets/resume.png'
import FrontendDeveloper from '../assets/FrontendDeveloper.pdf'
import Button from "../Components/Button";
import Container from "../Components/Container";
import Flex from "../Components/Flex";

function Resume() {
  return (
   <section className="bg-bgWhiteColor">
      <Container>
      <div className="resume-body flex font-bold ">

      <Flex className="resume-content h-full w-full justify-center items-center gap-10 xs:flex-col xs:gap-5">
        <Image src={RESUME} alt={RESUME} />
        <a
          href={FrontendDeveloper}
          download
          className=""
          title="Download Resume"
          
        >
          <Button text="Download Resume .pdf"/>
        </a>
        <Link to="/" className="hidden xs:block">
        <div className="g-btn" title="Home">
          <Link to='/'><Button text='Back'/></Link>
        </div>
      </Link>
      </Flex>
    </div>
      </Container>
   </section>
  );
}

export default Resume;
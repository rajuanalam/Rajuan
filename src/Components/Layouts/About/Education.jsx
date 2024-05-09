import React, { useState } from 'react'
import Container from '../../Container';
import Heading from '../../Heading';
import EducationCard from '../../EducationCard';


const AboutMe = () => {
    const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <section className='bg-bgWhiteColor pb-24'>
            <Container>
              <Heading as='h3' text="Education" className="pb-16"/>
              <div className=" flex flex-col    w-full relative bg-cover bg-no-repeat bg-fixed text-black">
        <div className="flex ">
        {/* Sidebar */}
        <div className="w-1/7">
          <ul className="p-4">
          
          <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-blue-500 hover:bg-logoColorTwo/80 ${
                selectedOption === 1 ? "text-amber-300" : ""
              }`}
              onClick={() => handleOptionClick(1)}
            >
              Web Dev.
            </li>
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded  bg-blue-500  hover:bg-logoColorTwo/80 ${
                selectedOption === 2 ? "text-amber-300" : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              H.S.C
            </li>
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded  bg-blue-500  hover:bg-logoColorTwo/80  ${
                selectedOption === 3 ? "text-amber-300 " : ""
              }`}
              onClick={() => handleOptionClick(3)}
            >
              S.S.C
            </li>
            
          </ul>
        </div>
        {/* Content Box */}
        <div className="flex-1 p-4 w-auto">

        {selectedOption === 1 && (
            <EducationCard 
            title="Frontend Development With React"
            institute="Creative IT Institute"
            adress="Dhaka,Bangladesh"
            major="Web & Software"
            month="8 months"
            year="2023-2024"
            grade=""
            />
          )}
          {selectedOption === 2 && (
            <EducationCard 
            title="Higher Secondary School Certificate"
            institute="Sherpur Government College"
            adress="Sherpur,Mymensingh,Bangladesh"
            major="Science"
            month="2 years"
            year="2016-2018"
            grade="3.58/5.00"
            />
          )}
          {selectedOption === 3 && (
            <EducationCard 
            title="Frontend Development With React"
            institute="Creative IT Institute"
            adress="Dhaka,Bangladesh"
            major="Web development"
            month="8 months"
            year="2023-2024"
            grade=""
            />
          )}
        </div>
      </div>
              </div>
            </Container>
    </section>
  )
}

export default AboutMe
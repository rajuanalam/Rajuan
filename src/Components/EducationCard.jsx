import React from 'react'

const EducationCard = ({title,institute,adress,major,month,year,grade}) => {
  return (
    <div>
        <div className="h-full w-full backdrop-blur-sm bg-blue-100 rounded-lg  py-5 px-10 flex flex-col">
              <div className=" flex flex-col gap-2  rounded-lg pt-2">
                <div className=" text-3xl font-semibold  text-black">
                  {title}
                </div>
                <div className="text-lg">
                  {institute}, <br /> {adress}
                </div>
              </div>
              <div className=" flex justify-between">
                <div className=" flex flex-col gap-2 items-start rounded-lg pt-4">
                  <div className=" text-3xl font-medium  ">
                    Major:
                  </div>
                  <div className="text-lg">
                    {major}
                  </div>
                  <div className=" text-blue-400">
                    <a
                      href="https://www.creativeitinstitute.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2  rounded-lg pt-4 pb-4 text-left">
                  <div className="text-3xl font-medium ">
                    Tenure:
                  </div>
                  <div className="text-lg">{month}</div>
                  <div className="text-base">{year}</div>
                </div>
                <div className="d-grades flex flex-col gap-2  rounded-lg p-4 text-left">
                  <div className="text-3xl font-medium ">
                    Grade:
                  </div>
                  <div className="text-lg">{grade}</div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default EducationCard
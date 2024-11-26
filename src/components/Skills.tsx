import React from 'react'
import { AiOutlineCheckSquare } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {
  return (
    <div id="Skills">
      <section className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-4xl text-pink-500 font-medium title-font font-serif mb-4 ">
              Skills
            </h1>
            <p className='text-xl text-white my-4'>I am proficient in the following technologies:</p>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full border-4 border-gray-500 bg-white p-8 flex-col transform hover:rotate-[5deg]">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-pink-500">
                    <FaHtml5 className='text-4xl' />
                  </div>
                  <h2 className="text-pink-500 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-3 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-pink-500 h-3 rounded-xl w-[95%]'>
                    </div>
                  </div>
                  <p className='font-bold text-pink-500 text-right'>95%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white border-4 border-gray-500 p-8 flex-col transform hover:rotate-[5deg]">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-pink-500">
                    <FaCss3Alt className='text-4xl' />
                  </div>
                  <h2 className="text-pink-500 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-3 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-pink-500 h-3 rounded-xl w-[85%]'>
                    </div>
                  </div>
                  <p className='font-bold text-pink-500 text-right'>85%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white border-4 border-gray-500 p-8 flex-col transform hover:rotate-[5deg]">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-pink-500">
                    <BiLogoTypescript className='text-4xl' />
                  </div>
                  <h2 className="text-pink-500 text-lg title-font font-medium">
                    TYPESCRIPT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-3 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-pink-500 h-3 rounded-xl w-[80%]'>
                    </div>
                  </div>
                  <p className='font-bold text-pink-500 text-right'>80%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white border-4 border-gray-500 p-8 flex-col transform hover:rotate-[5deg]">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-pink-500">
                    <FaReact className='text-4xl' />
                  </div>
                  <h2 className="text-pink-500 text-lg title-font font-medium">
                    REACT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-3 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-pink-500 h-3 rounded-xl w-[60%]'>
                    </div>
                  </div>
                  <p className='font-bold text-pink-500 text-right'>60%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white border-4 border-gray-500 p-8 flex-col transform hover:rotate-[5deg]">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-pink-500">
                    <RiNextjsFill className='text-4xl' />
                  </div>
                  <h2 className="text-pink-500 text-lg title-font font-medium">
                    NEXTJS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-3 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-pink-500 h-3 rounded-xl w-[70%]'>
                    </div>
                  </div>
                  <p className='font-bold text-pink-500 text-right'>70%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-white border-4 border-gray-500 p-8 flex-col transform hover:rotate-[5deg]">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-pink-500">
                    <RiTailwindCssFill className='text-4xl' />
                  </div>
                  <h2 className="text-pink-500 text-lg title-font font-medium">
                    TAILWIND CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-3 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-pink-500 h-3 rounded-xl w-[70%]'>
                    </div>
                  </div>
                  <p className='font-bold text-pink-500 text-right'>70%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

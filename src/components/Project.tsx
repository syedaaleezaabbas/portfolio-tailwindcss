import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-4xl font-medium title-font font-serif mb-4 text-pink-500">
              My Projects
            </h1>
            <p className='text-xl text-white my-4'>My creations so far:</p>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer md:mb-6" data-aos="zoom-in">
              <div className="flex relative">
                <Image
                  alt="Furniture Website"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-lg shadow-white/30"
                  src={require('/public/assets/project1pic.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-500 bg-white opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-xl title-font font-medium text-pink-500 mb-2">
                    Furniture Website
                  </h1>
                  <p className='leading-relaxed text-lg line-clamp-2 text-black mb-2'>
                    Built a responsive Multi-Pages Furniture Site with Next.js and Tailwind CSS.
                  </p>
                  <Link target="_blank" href={"https://furniture-next-js-project.vercel.app/"}>
                    <p className='leading-relaxed text-lg text-pink-500 flex items-center'>
                      Explore my Project
                      <FaExternalLinkAlt className='ml-2' />
                    </p>
                  </Link>
                </div>
              </div>
            </div>


            {/* Project2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer" data-aos="zoom-in">
              <div className="flex relative">
                <Image
                  alt="Flower Shop"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-lg shadow-white/30"
                  src={require('/public/assets/project2.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-500 bg-white opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-xl title-font font-medium text-pink-500 mb-2">
                    Flower Shop Website
                  </h1>
                  <p className='leading-relaxed text-lg text-black line-clamp-2 mb-2'>
                    Developed a responsive One-Page Flower Shop website with Next.js and Tailwind CSS.
                  </p>
                  <Link target="_blank"
                    href={"https://flower-shop-nextjs.vercel.app/"}>
                    <p className='leading-relaxed text-lg text-pink-500 flex items-center'>
                      Explore my Project
                      <FaExternalLinkAlt className='ml-2' />
                    </p>
                  </Link>
                </div>
              </div>
            </div>


            {/* project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer" data-aos="zoom-in">
              <div className="flex relative">
                <Image
                  alt="coffee shop"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-lg shadow-white/30"
                  src={require('/public/assets/project3pic.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-500 bg-white opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-xl title-font font-medium text-pink-500 mb-2">
                    Coffee Shop
                  </h1>
                  <p className='leading-relaxed text-black text-lg line-clamp-2 mb-2'>
                    Created a sleek, responsive coffee shop site using Next.js and Custom CSS.
                  </p>
                  <Link target="_blank" href={"https://coffee-shop-orpin-nine.vercel.app/"}>
                    <p className='leading-relaxed text-lg text-pink-500 flex items-center'>
                      Explore my Project
                      <FaExternalLinkAlt className='ml-2' />
                    </p>
                  </Link>
                </div>
              </div>
            </div>


            {/* project4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer" data-aos="zoom-in">
              <div className="flex relative">
                <Image
                  alt="Furniture Website"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-lg shadow-white/30"
                  src={require('/public/assets/project4.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-500 bg-white opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-xl title-font font-medium text-pink-500 mb-2">
                    Static Resume Builder
                  </h1>
                  <p className='leading-relaxed text-lg line-clamp-2 text-black mb-2'>
                    Developed a Static Resume Builder using HTML, CSS and Typescript.
                  </p>
                  <Link target="_blank" href={"https://milestone1-2-mu.vercel.app/"}>
                    <p className='leading-relaxed text-lg text-pink-500 flex items-center'>
                      Explore my Project
                      <FaExternalLinkAlt className='ml-2' />
                    </p>
                  </Link>
                </div>
              </div>
            </div>


            {/* project5 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer" data-aos="zoom-in">
              <div className="flex relative">
                <Image
                  alt="Furniture Website"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-lg shadow-white/30"
                  src={require('/public/assets/project5.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-500 bg-white opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-xl title-font font-medium text-pink-500 mb-2">
                    Dynamic Resume Builder
                  </h1>
                  <p className='leading-relaxed text-lg line-clamp-2 text-black mb-2'>
                    Created a Dynamic Resume Builder using HTML, CSS and Typescript.
                  </p>
                  <Link target="_blank" href={"https://milestone3-mu.vercel.app/"}>
                    <p className='leading-relaxed text-lg text-pink-500 flex items-center'>
                      Explore my Project
                      <FaExternalLinkAlt className='ml-2' />
                    </p>
                  </Link>
                </div>
              </div>
            </div>


            {/* project6 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer" data-aos="zoom-in">
              <div className="flex relative">
                <Image
                  alt="Furniture Website"
                  className="absolute inset-0 w-full h-full object-cover object-center shadow-lg shadow-white/30"
                  src={require('/public/assets/project6.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-500 bg-white opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-xl title-font font-medium text-pink-500 mb-2">
                    Editable Resume Builder
                  </h1>
                  <p className='leading-relaxed text-lg line-clamp-2 text-black mb-2'>
                    Developed an Editable Resume Builder using HTML, CSS and Typescript.
                  </p>
                  <Link target="_blank" href={"https://milestone4-rose.vercel.app/"}>
                    <p className='leading-relaxed text-lg text-pink-500 flex items-center'>
                      Explore my Project
                      <FaExternalLinkAlt className='ml-2' />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project


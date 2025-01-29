"use client";
import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="bg-black body-font">
      <div className="bg-black container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded-full border-4 border-pink-500 mx-auto w-[16rem] md:w-[20rem]"
            alt="hero"
            width={400}
            height={400}
            src={require('/public/assets/aleeza.jpeg')}
            data-aos="fade-up" />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-serif md:text-5xl text-3xl mb-4 font-medium text-white">
            Hello!
            <br />
            {"I'm"} <span className='text-pink-500'>Syeda Aleeza Abbas</span>
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['A Frontend Developer.'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className='w-[140px] h-[3px] bg-pink-500 mt-0 mb-4'></div>
          <p className="mb-4 md:text-xl text-lg leading-relaxed text-white" data-aos="fade-up">
            As a passionate frontend developer, I create visually appealing and user-friendly websites with a focus on responsive design and seamless user experience. I strive to deliver exceptional digital experiences that bring ideas to life.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded md:text-2xl text-xl font-serif" data-aos="fade-up">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

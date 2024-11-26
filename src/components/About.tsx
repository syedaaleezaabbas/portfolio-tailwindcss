import React from 'react'
import Image from "next/image"
import { PiX } from 'react-icons/pi'

const About = () => {
  return (
    <div id="about">
      <section className="bg-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-10 font-medium font-serif text-pink-500" data-aos="fade-up">
              About Me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-5 leading-relaxed md:text-xl text-lg text-start text-white" data-aos="fade-up">
              Hello! {"I'm"} Aleeza, a passionate Frontend Web Developer dedicated to building clean, user-friendly websites. Though {"I'm"} at the beginning of my web development journey, {"I'm"} committed to learning, growing, and mastering the art of crafting seamless digital experiences. My goal is to combine creativity with technical skills to create responsive and visually appealing websites that provide exceptional user experiences.
              <br />
              <br />
              {"I'm"} constantly exploring new technologies and techniques to improve my craft, and {"I'm"} excited to continue evolving as a developer. Whether building from scratch or improving an existing design, {"I'm"} driven to bring fresh ideas to life through clean code and thoughtful design.
            </p>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="rounded mx-auto border-4 border-pink-500 w-[22rem] h-[26rem]"
              alt="hero"
              src="/assets/about.jpeg"
              width={400}
              height={400}
              objectFit='contain'
              data-aos="fade-up" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
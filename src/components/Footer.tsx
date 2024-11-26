import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black body-font realative">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-pink-500">
            <span className="ml-3 md:text-5xl text-4xl font-bold font-serif mb-2 md:mb-8">S<sub className='text-2xl'><i>yeda</i></sub> A<sub className='text-2xl'><i>leeza</i></sub></span>
          </a>
          
          <p className="text-lg text-pink-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-2">
            © 2024 Aleeza. All rights reserved
          </p>
          <div className='flex flex-col items-center sm:ml-auto sm:mt-0'>
            <p className='text-white md:text-2xl text-xl sm:ml-auto sm:mt-0 mb-4 mt-4'>Connect With Me</p>
            <span className="inline-flex gap-3">
              <Link
                target="_blank"
                href={"https://www.facebook.com/syeda.aleeza.abbas?mibextid=ZbWKwL"} className="text-white">
                <FaFacebook className='text-3xl transform transition-transform hover:text-pink-500 hover:rotate-[360deg]' />
              </Link>

              <Link
                target="_blank"
                href={"https://Wa.me/+923313398057"} className="text-white">
                <FaWhatsapp className='text-3xl transform transition-transform hover:text-pink-500 hover:rotate-[360deg]' />
              </Link>

              <Link
                target="_blank"
                href={"https://github.com/syedaaleezaabbas"} className="text-white">
                <FaGithub className='text-3xl transform transition-transform hover:text-pink-500 hover:rotate-[360deg]' />
              </Link>

              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/syeda-aleeza-abbas-a391812ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="text-white">
                <FaLinkedin className='text-3xl transform transition-transform hover:text-pink-500 hover:rotate-[360deg]' />
              </Link>

              <Link
                target="_blank"
                href={"mailto:syedaaleezaabbas@gmail.com"} className="text-white">
                <GoMail className='text-3xl transform transition-transform hover:text-pink-500 hover:rotate-[360deg]' />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

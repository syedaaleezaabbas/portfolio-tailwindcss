"use client"

import React from 'react'
import Link from "next/link"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AlignRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      once: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }), [];
  return (
    <div className='bg-black z-50 sticky top-0'>
      <header className="bg-black body-font text-pink-500 shadow-lg shadow-white/10">
        <div className="container mx-auto flex justify-between item-center p-3">

          <span className="md:text-6xl text-4xl font-bold font-serif">S<sub className='md:text-3xl text-2xl'><i>yeda</i></sub> A<sub className='md:text-3xl text-2xl'><i>leeza</i></sub></span>

          <nav className="hidden md:flex items-center space-x-6 text-xl text-white font-serif">

            <Link href="/" className="mr-5 pb-1 border-b-4 border-transparent hover:text-pink-500 hover:border-pink-500">Home</Link>
            <Link href="#about" className="mr-5 pb-1 border-b-4 border-transparent hover:text-pink-500 hover:border-pink-500">About</Link>
            <Link href="#Skills" className="mr-5 pb-1 border-b-4 text-pink-500 border-pink-500">Skills</Link>
            <Link href="#project" className="mr-5 pb-1 border-b-4 border-transparent hover:text-pink-500 hover:border-pink-500">Projects</Link>
            <Link href="#Contact" className="mr-5 pb-1 border-b-4 border-transparent hover:text-pink-500 hover:border-pink-500">Contact</Link>

          </nav>


          <Sheet>
            <SheetTrigger className='md:hidden'>
              <AlignRight className='h-8 w-8' /></SheetTrigger>
            <SheetContent className='bg-black text-white border-l-2 border-white'>
              <nav className='flex flex-col text-center text-xl pt-20 space-y-4'>

                <Link href="/" className="inline-block mx-auto pb-1 border-b-4 border-transparent hover:text-pink-500 hover:border-pink-500">Home</Link>
                <Link href="#about" className="inline-block mx-auto pb-1 border-b-4 border-transparent hover:text-pink-500 hover:border-pink-500">About</Link>
                <Link href="#Skills" className="inline-block mx-auto pb-1 border-b-4 text-pink-500 border-pink-500">Skills</Link>
                <Link href="#project" className="inline-block mx-auto pb-1 border-b-4 border-transparent hover:text-pink-500 hover:border-pink-500">Projects</Link>
                <Link href="#Contact" className="inline-block mx-auto pb-1 border-b-4 border-transparent hover:text-pink-500 hover:border-pink-500">Contact</Link>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}

export default Navbar




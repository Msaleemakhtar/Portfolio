
"use client"
import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
 
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center md:flex-row md:justify-between">
      
         <a href="/" className="hover:underline font-bold text-lg "> © 2023 Muhammad Saleem Akhtar</a>
     
        <div className="flex flex-row items-center justify-center space-x-2 mb-1 ">
          <a href="https://github.com/Msaleemakhtar" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointe"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/Akhtar-80"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer "
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/saleem-akhtar"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
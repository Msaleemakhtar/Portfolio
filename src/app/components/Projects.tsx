
"use client"

import React from 'react'

import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"




const Data = [
   
    {
      name: "Pricing UI",
      description: "Chakra UI library utilized to transform a design created in Figma into a Chakra UI-based user interface in conjunction with Next.js.",
      
      url :"/chakra.jpeg",
      github: "https://github.com/Msaleemakhtar/PricingUi",
      link: "https://pricing-ui-mocha-two.vercel.app/",
      imgAlt: "pricing ui image"
    },
    {
      name: "Todo App",
      description:
        "The development of a todo application involved utilizing the Chakra UI library and the Next.js framework, with the addition of TypeScript.",
    
       url: "/todo.jpeg ",
      github: "https://github.com/Msaleemakhtar/TodoApp",
      link: "https://todo-app-six-beta.vercel.app/",
      imgAlt: "todo image"
    },
    {
      name: "Panverse Dao Syllabus Website",
      description:
        " Panverse Dao Syllabus Website was developed using a combination of Chakra UI, Next.js, and TypeScript. .",
    url: "/web3.jpeg",
      github: "https://github.com/Msaleemakhtar/PanaverseDao1",
      link: "https://panaverse-dao1.vercel.app/",
      imgAlt: "panaverse imaage"
    },
  ]




const Projects = () => {
  return (
    <section id = "projects">
      
        <h1 className="my-10 text-center font-bold text-4xl font-serif">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded">

        </hr>
    


        </h1>
        <div className="flex flex-col space-y-28 ">
        {Data.map((project, idx) => {
          return (
            <div key={idx}>
              
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.url}
                        alt={project.imgAlt}
                        width={400}
                        height={400}
                        className=" rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-6 font-serif">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              
            </div>
          )
        })}
        
      </div>





    </section>
  )
}

export default Projects
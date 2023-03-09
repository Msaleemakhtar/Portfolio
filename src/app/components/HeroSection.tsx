"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import Profile from "./images/saleem.jpg";

const HeroSection = () => {
  return (
    <section id="home">
      <div
        className="flex flex-col text-center items-center justify-center 
      animate-fadeIn animation-delay-2 my-10 py-16 
      sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left"
      >
        <div className="  md:mt-2 md:w-1/2">
          <Image
            src={Profile}
            alt="profile image"
            className=" w-80 h-80 
             rounded-full shadow-2xl "
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-5xl font-serif">
            Hi, I&#39;m Saleem!
          </h1>
          <p className=" mt-4 mb-6 text-xl">
            I&#39;m a {"  "}
            <span className="font-semibold text-teal-600">
              Software Developer & Technical Writer. {"   "}
            </span>
            As a technical writer and software developer with strong technical
            and communication skills. I create accurate and clear documentation
            that meets high standards and collaborate with stakeholders to
            contribute to project success.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3
             bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

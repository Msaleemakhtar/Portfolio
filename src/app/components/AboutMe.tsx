import React from "react";
import Image from "next/image";
import About from "./images/image1.png";

const HardSkills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
  { skill: "Git" },

  { skill: "ChakraUi" },
];

const SoftSkills = [
  { skill: "Effective Communication" },

  { skill: "Active Listening" },
  { skill: "Creative Problem Solving" },

  { skill: "Collaboration" },
  { skill: "Time management" },
  { skill: "Teamwork" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl font-serif">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:flex-1 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left font-serif">
              A Bit About Me!
            </h1>
            <p className="text-lg">
              Hi, my name is Saleem and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span>
              <span className="font-bold text-teal-600">
                {" Software Developer & Technical Writer"}
              </span>{" "}
              based in Islamabad, Pakistan.
            </p>
            <br />
            <p className="text-lg">
              I obtained a Diploma of Associate Engineering (DAE) in Electronics
              & Radar Technology from the prestigious School of Electronics
              (SOE) at Pakistan Air Force in 2001. Thereafter, I embarked on a
              dedicated military career and was mobilized for active duty until
              my honorable retirement from service in 2021.
            </p>
            <br />
            <p className="text-lg">
              I obtained my undergraduate degree from Punjab University in 2004,
              majoring in English Literature. In 2017, I completed my Masters
              degree in the same field from Federal Urdu University.
              Subsequently, in 2018, I pursued a Postgraduate Diploma in
              Teaching English as a Foreign Language (TEFL) from Numal
              University. Currently, I am enrolled in a Web3.O and Metaverse
              course offered by PIAIC to enhance my knowledge and skills in the
              emerging fields of web technologies and virtual environments.
            </p>
            <br />
            <p className="text-lg">
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p className="text-lg">
              As an individual with a{" "}
              <span className="font-bold text-teal-500">
                passion for technology,
              </span>{" "}
              I firmly believe in the importance of continuous growth and
              innovation. I am excited to explore new opportunities and
              challenge myself to push the boundaries of what is possible in my
              career. 
            </p>
          </div>
          <div className="text-center md:flex-1 md:text-left">
            <h1 className="text-2xl font-bold mb-6 font-serif">Hard Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {HardSkills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-teal-600 px-4 py-2 mr-2 mt-2  rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div className="text-center md:flex-1 md:text-left mt-10">
              <h1 className="text-2xl font-bold mb-6 font-serif">Soft Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {SoftSkills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-teal-600 px-4 py-2 mr-2 mt-2 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>

              <Image
                src={About}
                alt=" skill image"
                className=" mt-8 w-96 h-96 md:block  z-10 rounded-xl shadow-xl hover:opacity-70 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

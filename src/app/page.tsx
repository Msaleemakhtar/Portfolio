import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";





export default function Home() {
  return (
<main className=" mx-auto max-w-3xl md:max-w-5xl px-4 sm:px-6">

<HeroSection/>
<AboutMe/>
 < Projects />

</main>

  
  )
}

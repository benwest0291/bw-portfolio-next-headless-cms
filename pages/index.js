import Masthead from "@/components/Masthead/Masthead";
import About from "../components/About/About"
import Service from "../components/Services/Service"
import Contact from "../components/Contact/Contact"
import FeaturedProject from "@/components/Projects/FeaturedProject";

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <About />
        <Service />
        <FeaturedProject />
        <Contact />
      </main>
    </>
  )
}
